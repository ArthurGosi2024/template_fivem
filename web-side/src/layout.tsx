/** @format */

import {  useState } from "react";
import { Outlet } from "react-router-dom";
import { useNuiEvent } from "./hooks/useNuiEvent";
import {  motion } from "framer-motion";

export default function Layout() {
     const [open, setOpen] = useState(false);

     useNuiEvent("open", setOpen);

     return open && (

          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, ease: "easeIn" }}
               className=" w-screen  min-h-screen"
          >
               <div className="  min-w-full min-h-full   max-[1623px]:overflow-auto  overflow-auto ">
                    <Outlet />
               </div>
          </motion.div>


     );
}
