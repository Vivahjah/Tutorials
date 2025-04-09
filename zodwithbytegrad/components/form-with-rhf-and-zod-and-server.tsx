"use client";


import { signUpSchema, TSignUpSchema } from "@/types/signUp";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";






export default function FormWithReactHookFormWithZodAndServer() {
    const { register,
        handleSubmit,
        formState: { errors, isSubmitting, },
        reset,
        setError,
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: TSignUpSchema) => {
        const response = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const responseData = await response.json();
        if (!responseData.ok) {
            alert("Submitting form failed!");
            return
        }
        if (responseData.errors) {
            const errors = responseData.errors;
            if (errors.email) {
                setError("email", { type: "server", message: errors.email });
            }
            else if (errors.password) {
                setError("password", { type: "server", message: errors.password });
            }
            else if (errors.confirmPassword) {
                setError("confirmPassword", { type: "server", message: errors.confirmPassword });
            }
            else {
                alert("Something went wrong!");
            }
        }
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