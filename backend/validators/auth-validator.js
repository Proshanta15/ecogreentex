import z from "zod";


export const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(5, { message: "Email must be at least 5 characters long" })
        .max(50, { message: "Email must be at most 50 characters long" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(6, { message: "Password must be at least 6 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
});

export const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(30, { message: "Username must be at most 30 characters long" }),
    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone number must be at least 10 characters long" })
        .max(11, { message: "Phone number must be at most 11 characters long" }),
});
// Validation schema for contact form submission
export const contactSchema = z.object({
    username: z
        .string({ required_error: "Username is required" })
        .trim()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(255, { message: "Username must be less than 255 characters long" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(5, { message: "Email must be at least 5 characters long" })
        .max(255, { message: "Email must be less than 255 characters long" }),
    message: z
        .string({ required_error: "Message is required" })
        .trim()
        .min(10, { message: "Message must be at least 10 characters long" })
        .max(1000, { message: "Message must be less than 1000 characters long" })
})