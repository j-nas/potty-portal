import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { getAddress, getCoords } from "~/utils/geoHelpers";

export const locationRouter = createTRPCRouter({
  getAddress: publicProcedure
    .input(z.object({ lat: z.number(), lng: z.number() }))
    .query(async () => {
      const address = await getAddress({ lat: 0, lon: 0 });
      return address.results[0]
    }),
  getCoords: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ input }) => {
      const coords = await getCoords(input.address);
      if (coords.features.length === 0) {
        throw new Error("No results found");
      }
      return coords.features[0]?.geometry.coordinates;
    }),
});

