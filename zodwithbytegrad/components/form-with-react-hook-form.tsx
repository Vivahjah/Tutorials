"use client";


import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export default function FormWithReactHookForm() {
    const { register,
        handleSubmit,
        formState: { errors, isSubmitting, },
        reset,
        getValues,
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        console.log("Form submitted", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">

            <input
               {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded border border-gray-300"
            />
            {errors.email?.message && <p className="text-red-500">{String(errors.email.message)}</p>}
            
            <input
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                    },
                }

                )}
                type="password"
                placeholder="Password"
                className="px-4 py-2 rounded border border-gray-300"
            />
            {errors.password?.message && <p className="text-red-500">{String(errors.password.message)}</p>}

            <input
                {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (v) => v === getValues("password") || "Password must match",
                }

                )}
                type="password"
                placeholder="Confirm password"
                className="px-4 py-2 rounded border border-gray-300"
            />
            {errors.confirmPassword?.message && <p className="text-red-500">{String(errors.confirmPassword.message)}</p>}
            

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 cursor-pointer disabled:bg-gray-500 py-2 rounded"
            >
                Submit
            </button>
        </form>
    );
}