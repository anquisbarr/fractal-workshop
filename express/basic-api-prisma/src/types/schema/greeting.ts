import { FingersOnHand, Intensity } from "@prisma/client";
import { z } from "zod";

export const createGreetingSchema = z.object({
  message: z.string().min(1, "Message is required"),
  email: z.string().email(),
  intensity: z.nativeEnum(Intensity),
  fingersOnHand: z.nativeEnum(FingersOnHand),
});
