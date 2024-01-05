/** @format */

import { motion } from "framer-motion";
import React from "react";
import ComponentsExamples from "../../components/example";
export default function Dashboard() {


     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2, ease: "easeIn" }}
               className="p-6 flex flex-col  w-screen  h-full "
          >
               <ComponentsExamples >
                    <h1>
                         Template para FiveM
                    </h1>
               </ComponentsExamples>
          </motion.div>
     );
}
