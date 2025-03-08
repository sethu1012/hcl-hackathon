import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { postUserSignin } from "../../../services/api.services";
import { useNavigate } from "@tanstack/react-router";

const SigninSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type Signin = z.infer<typeof SigninSchema>;

const SigninFormComponent = () => {
  const navigate = useNavigate();
  const signinForm = useForm<Signin>({
    resolver: zodResolver(SigninSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = signinForm;

  const onSubmit = async (data: Signin) => {
    console.log(data);
    try {
      const { status, message } = await postUserSignin(data);
      if (status) {
        console.log(message);
        localStorage.setItem("token", message.token);
        const user = JSON.parse(atob(message.token.split(".")[1]));
        localStorage.setItem("user", JSON.stringify(user));

        navigate({ to: `/${user.role}s/dashboard` });
      } else {
        alert("Invalid credentials");
      }
    } catch (e) {
      alert("Invalid credentials");
    }
  };

  return (
    <FormProvider {...signinForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              {...register("password")}
            />
            {errors.password?.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SigninFormComponent;
