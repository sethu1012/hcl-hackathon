import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ProfileSchema = z.object({
  email: z.string().email(),
});

type Profile = z.infer<typeof ProfileSchema>;

const ProfilePageComponent = () => {
  const [user, setUser] = useState<any>();
  const profileForm = useForm<Profile>({
    resolver: zodResolver(ProfileSchema),
  });

  const { register, handleSubmit, setValue } = profileForm;
  useEffect(() => {
    console.log("Profile Page");
    (() => {
      async function getData() {
        const userData = localStorage.getItem("user");
        if (userData) {
          console.log(userData);
          setUser(JSON.parse(userData));
          setValue("email", (JSON.parse(userData) as any)?.email);
        }
      }
      getData();
    })();
  }, [setValue, user?.email]);

  const onSubmit = (data: Profile) => {
    console.log(data);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="pb-12">
        <h2 className="text-base/7 font-semibold text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        {user && (
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("email")}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePageComponent;
