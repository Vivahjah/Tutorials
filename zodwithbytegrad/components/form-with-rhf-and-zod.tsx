"use client";


import { signUpSchema, TSignUpSchema } from "@/types/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";






export default function FormWithReactHookFormAndZod() {
    const { register,
        handleSubmit,
        formState: { errors, isSubmitting, },
        reset,
    } = useForm<TSignUpSchema>({
        resolver : zodResolver(signUpSchema),
    });

    const onSubmit = async (data: TSignUpSchema) => {
        console.log("Form submitted", data);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">

            <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="px-4 py-2 rounded border border-gray-300"
            />
            {errors.email?.message && <p className="text-red-500">{String(errors.email.message)}</p>}

            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="px-4 py-2 rounded border border-gray-300"
            />
            {errors.password?.message && <p className="text-red-500">{String(errors.password.message)}</p>}

            <input
                {...register("confirmPassword")}
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