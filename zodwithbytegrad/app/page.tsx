// import FormWithReactHookForm from "@/components/form-with-react-hook-form";
// import FormWithoutReactHookForm from "@/components/form-without-react-hook-form";

// import FormWithReactHookFormAndZod from "@/components/form-with-rhf-and-zod";
import FormWithReactHookFormWithZodAndServer from "@/components/form-with-rhf-and-zod-and-server";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-amber-50 text-gray-800 flex-col items-center justify-between p-24">
      {/* <FormWithoutReactHookForm />       */}
      {/* <FormWithReactHookForm /> */}
      {/* <FormWithReactHookFormAndZod /> */}
      <FormWithReactHookFormWithZodAndServer />
    </main>
  );
}