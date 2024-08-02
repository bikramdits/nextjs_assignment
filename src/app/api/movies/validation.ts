import zod from 'zod'
export const movieSchema = zod.object({
    title: zod.string(),
    publishingYear:zod.number(),
  });