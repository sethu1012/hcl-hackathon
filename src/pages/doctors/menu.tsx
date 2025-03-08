import { Link } from "@tanstack/react-router";

const links = [
  {
    name: "Dashboard",
    path: "/doctors/dashboard",
  },
  {
    name: "Profile",
    path: "/doctors/profile",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MenuComponent = () => {
  return (
    // <>
    //   {links.map((link) => {
    //     return (
    //       <li key={link.name} className="my-2">
    //         <Link to={link.path}>{link.name}</Link>
    //       </li>
    //     );
    //   })}
    // </>
    <div className="h-full flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {links.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={classNames(
                      "text-white group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-400 hover:bg-gray-800 hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuComponent;
