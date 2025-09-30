"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Database,
  Image,
  Code,
  BookOpen,
  Settings,
  Rocket,
  Package,
  GitBranch,
  Menu,
  X,
} from "lucide-react";

export default function Navigations() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-8 sm:my-10">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mx-4 sm:mx-6 lg:mx-10 border border-gray-100">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">Quick Jump</h2>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-800">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 gap-3 ${
            isOpen ? "" : "hidden lg:grid"
          }`}
        >
          <Link
            href="/mongoatlas"
            className={
              pathname === "/mongoatlas"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <Database
                className={
                  pathname === "/mongoatlas"
                    ? "w-5 h-5"
                    : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>MongoDB Setup</span>
          </Link>

          <Link
            href="/cloudinarysetup"
            className={
              pathname === "/cloudinarysetup"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <Image
                className={
                  pathname === "/cloudinarysetup"
                    ? "w-5 h-5"
                    : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>Cloudinary Setup</span>
          </Link>

          <Link
            href="/nodejssetup"
            className={
              pathname === "/nodejssetup"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <Code
                className={
                  pathname === "/nodejssetup"
                    ? "w-5 h-5"
                    : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>Node.js Setup</span>
          </Link>

          <Link
            href="/vscodesetup"
            className={
              pathname === "/vscodesetup"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <Settings
                className={
                  pathname === "/vscodesetup"
                    ? "w-5 h-5"
                    : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>VsCode Setup</span>
          </Link>
          <Link
            href="/deploymentsetup"
            className={
              pathname === "/deploymentsetup"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <Rocket
                className={
                  pathname === "/deploymentsetup"
                    ? "w-5 h-5"
                    : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>Deployment Setup</span>
          </Link>
          <Link
            href="/npmyarnsetup"
            className={
              pathname === "/npmyarnsetup"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <Package
                className={
                  pathname === "/npmyarnsetup"
                    ? "w-5 h-5"
                    : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>NPM/Yarn Setup</span>
          </Link>
          <Link
            href="/gitsetup"
            className={
              pathname === "/gitsetup"
                ? "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
                : "group flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:-translate-y-0.5"
            }
          >
            <div className="w-5 h-5 flex-shrink-0">
              <GitBranch
                className={
                  pathname === "/gitsetup" ? "w-5 h-5" : "w-5 h-5 text-gray-500"
                }
              />
            </div>
            <span>Git Setup</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
