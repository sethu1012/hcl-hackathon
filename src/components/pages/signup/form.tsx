import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { postUserSignup } from "../../../services/api.services";

const SignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
  sex: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender is required" }),
  }),
  role: z.enum(["patient", "doctor"], {
    errorMap: () => ({ message: "Role is required" }),
  }),
});

type Signup = z.infer<typeof SignupSchema>;

const sex = [
  { id: "male", title: "Male", value: "male" },
  { id: "female", title: "Female", value: "female" },
];

const roles = [
  { id: "patient", title: "Patient", value: "patient" },
  { id: "doctor", title: "Doctor", value: "doctor" },
];

const SignupFormComponent = () => {
  const signupForm = useForm<Signup>({
    resolver: zodResolver(SignupSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = signupForm;

  const onSubmit = async (data: Signup) => {
    console.log(data);

    const { status, message } = await postUserSignup(data);
    if (status) {
      console.log(message);
    } else {
      alert(message);
    }
  };

  return (
    <FormProvider {...signupForm}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              type="text"
              placeholder="your name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              {...register("name")}
            />
            {errors.name?.message && (
              <p className="mt-2 text-sm text-red-600">
                {errors.name?.message}
              </p>
            )}
          </div>
        </div>
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
          <label
            htmlFor="Sex"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Gender
          </label>
          <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            {sex.map((s) => (
              <div key={s.id} className="flex items-center">
                <input
                  id={s.id}
                  value={s.value}
                  type="radio"
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  {...register("sex")}
                />
                <label
                  htmlFor={s.id}
                  className="ml-3 block text-sm/6 font-medium text-gray-900"
                >
                  {s.title}
                </label>
              </div>
            ))}
          </div>
          {errors.sex?.message && (
            <p className="mt-2 text-sm text-red-600">{errors.sex?.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="Role"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Role
          </label>
          <div className="mt-6 space-y-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            {roles.map((s) => (
              <div key={s.id} className="flex items-center">
                <input
                  id={s.id}
                  value={s.value}
                  type="radio"
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  {...register("role")}
                />
                <label
                  htmlFor={s.id}
                  className="ml-3 block text-sm/6 font-medium text-gray-900"
                >
                  {s.title}
                </label>
              </div>
            ))}
          </div>

          {errors.role?.message && (
            <p className="mt-2 text-sm text-red-600">{errors.role?.message}</p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignupFormComponent;
