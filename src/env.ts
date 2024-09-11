import z from "zod";

/*
 * Verifies if the env file contains the data bellow
 * @return env
 */
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
