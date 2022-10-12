import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function NavBar() {
  const [perfileOn, setPerfileOn] = useState(true);
  const [burgerOn, setBurgerOn] = useState(true);
  const perfil= localStorage.getItem("user")
  const [render, setRender] =useState(true)

  useEffect(()=>{
  

  }, [render])



  const showPerfile = () => {
    setPerfileOn(!perfileOn);
  };
  const showBurger = () => {
    setBurgerOn(!burgerOn);
  };
  const logOut = ()=>{
    localStorage.clear()
    setRender(!render)
    
  }

  return (
    <>
      <nav class="bg-gray-800">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={showBurger}
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <Link to="/"
                    href="#"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-xl font-medium"
                    aria-current="page"
                  >
                    Inicio
                  </Link>

                  <Link
                    to="/peliculas"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Peliculas
                  </Link>

                  <Link
                  to="/tv"
                   class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Series
                  </Link>
                  <Link
                  to="/usuarios"
                   class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Usuarios
                  </Link>

                  <form>
                    <input
                      type="text"
                      style={{
                        marginRight: "10px",
                        width: "100px",
                        marginTop: "7px",
                        borderRadius:"10px"
                      }}
                      placeholder="Buscar..."
                    />
                    <button>
                      <FontAwesomeIcon color="white" icon={faMagnifyingGlass} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={showPerfile}
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <div class="relative ml-3">
                <div>
                  <button
                    type="button"
                    class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={showPerfile}
                  >
                    <span class="sr-only">Open user menu</span>
                  </button>
                </div>
                {perfileOn ? (
            ""
                ) : (
                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >{perfil? 
                    <Link
                    to="/perfil"
                    class="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  :
                  <Link
                  to="/register"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  Create Account
                </Link>}
                
                    {!perfil ? 
                    <Link
                      to="/singIn"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign in
                    </Link>
                    :
                    <button
                      to="/singIn"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                      onClick={logOut}
                    >
                      log Out
                    </button>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {burgerOn ? (
 ""
        ) : (
          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pt-2 pb-3">
            <Link to="/"
                    href="#"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-xl font-medium"
                    aria-current="page"
                  >
                    Inicio
                  </Link>

              <Link
                    to="/peliculas"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Peliculas
                  </Link>
              <Link
                  to="/tv"
                   class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Series
                  </Link>
              <Link
                  to="/usuarios"
                   class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                  >
                    Usuarios
                  </Link>

              <a
                href="#"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Search
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
