import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const locationRouter = createTRPCRouter({
  getAddress: publicProcedure
    .input(z.object({ lat: z.number(), lng: z.number() }))
    .query(() => {
      return {
        address: "123 Main St",
      };
    })
});
