"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathname = usePathname();
  {
    /* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */
  }
  return (
    <li>
      <Link
        href={path}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md group hover:bg-gradient-to-r hover:text-white hover:from-sky-600 hover:to-cyan-400 transition duration-300
        ${
          path === pathname
            ? "className: text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        }
        `}
      >
        {icon}
        <span className="group-hover:text-white">{title}</span>
      </Link>
    </li>
  );
};
