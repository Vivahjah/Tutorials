import {z} from 'zod';




const mySchema = z.object({
  name: z.string(),
})

//parsing schema
mySchema.parse("Dave Gray") // => "Dave Gray"
mySchema.parse(42) // => throw ZodError


//"Safe" parsing (does not throw errors if Validation fails)
mySchema.safeParse("Dave Gray") // => { success: true, data: "Dave Gray" }
mySchema.safeParse(42) // => { success: false, error: ZodError }