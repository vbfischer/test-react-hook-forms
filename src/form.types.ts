import * as z from "zod";

export const authorSchema = z.object({
  author: z.object({
    authorName: z.string().min(1, "Author Name is required"),
    bookName: z.string().min(1, "Book Name is required"),
    description: z.string(),
  }),
});

export type AuthorSchemaType = z.infer<typeof authorSchema>;

export const schema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Name is required")
      .min(4, "Minimum Name length should be 4"),
    subject: z
      .string({
        required_error: "Subject is required",
      })
      .min(1, "Subject is required")
      .min(4, "Minimum Subject length should be 4"),
    author: z.object({
      authorName: z.string().min(1, "Author Name is required"),
      bookName: z.string().min(1, "Book Name is required"),
      description: z.string(),
    }),
  })
  .extend(authorSchema.shape);

export type SchemaType = z.infer<typeof schema>;
