import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  API_PORT: z.coerce.number(),
})

const getEnv = envSchema.safeParse(process.env)

if (!getEnv.success) {
  console.log(getEnv.error.format())
  throw new Error('load enviroment failed')
}

export const env = getEnv.data
