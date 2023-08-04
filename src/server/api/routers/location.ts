import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { getAddress, getCoords } from "~/utils/geoHelpers";
import { LocationType } from "@prisma/client";

export const locationRouter = createTRPCRouter({
  addLocation: protectedProcedure
    .input(z.object({
      address: z.string(),
      locationName: z.string(),
      additionalInfo: z.string().optional(),
      locationType: z.nativeEnum(LocationType),
      accessibility: z.boolean(),
      changingTable: z.boolean(),
      purchaseRequired: z.boolean(),
      cleanliness: z.number().min(1).max(5).int(),
      comment: z.string().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const coords = await getCoords(input.address);

      const location = await ctx.prisma.bathroom.create({
        data: {
          address: input.address,
          locationName: input.locationName,
          additionalInfo: input.additionalInfo,
          locationType: input.locationType,
          accessibility: input.accessibility,
          changingTable: input.changingTable,
          purchaseRequired: input.purchaseRequired,
          latitude: coords.lat,
          longitude: coords.lon,
          cleanlinessRatings: {
            create: {
              rating: input.cleanliness,
              userId: ctx.auth.userId,
              comment: input.comment,
            },
          }
        },

      });

    }),
  getAddress: publicProcedure
    .input(z.object({ lat: z.number(), lng: z.number() }))
    .query(async ({ input }) => {
      console.log(input)
      const address = await getAddress({ lat: input.lat, lon: input.lng });
      return address;
    }),
  getCoords: publicProcedure
    .input(z.object({ address: z.string() }))
    .query(async ({ input }) => {
      const coords = await getCoords(input.address);
      return coords;
    }),
});

