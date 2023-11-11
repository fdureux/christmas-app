import { z } from "zod";

export const createGiftListValidator =  z.object({
    family_id: z.number(),
    user_id: z.number(),
    username: z.string().min(1)
  });



export type CreateGiftListRequest = z.infer<typeof createGiftListValidator>;