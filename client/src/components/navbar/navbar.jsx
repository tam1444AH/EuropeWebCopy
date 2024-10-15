import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <nav className="bg-black text-white p-3">
      
      <div className="flex justify-between items-center">
        
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search Europe News..."
            className="bg-gray-800 text-white px-10 py-2 rounded-lg focus:outline-none focus:ring focus:ring-primary w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19a7 7 0 100-14 7 7 0 000 14zm8-1l-4.35-4.35"
            />
          </svg>
        </div>

        
        <div>
          <button className="bg-gray-800 text-white px-4 py-2 hover:text-black hover:bg-white rounded-sm">
            Sign In
          </button>
        </div>
      </div>

      
      <hr className="border-t border-white my-4 w-full" />

     
      <NavigationMenu className="max-w-7xl mx-auto">
        <NavigationMenuList className="flex space-x-6">
          
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-base hover:text-secondary">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

         
          <NavigationMenuItem>
            <NavigationMenuLink href="/about" className="text-base hover:text-secondary">
              Technology
            </NavigationMenuLink>
          </NavigationMenuItem>

          
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className="text-base hover:text-secondary">
              Politics
            </NavigationMenuLink>
          </NavigationMenuItem>


          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className="text-base hover:text-secondary">
              Fashion
            </NavigationMenuLink>
          </NavigationMenuItem>


          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className="text-base hover:text-secondary">
              Culture
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className="text-base hover:text-secondary">
              Community
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
