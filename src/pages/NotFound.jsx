import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import BudegetImg from "../assets/imgs/budget.svg";

function LostInBudget404() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen min-w-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-indigo-900 to-emerald-900 text-white px-4 sm:px-6">
      <motion.div
        id="bgimg"
        animate={{ y: [50, 0, 50] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="z-10"
      >
        <img
          className="w-full min-w-sm md:min-w-2xl lg:min-w-5xl -mt-6 md:mt-0 object-contain"
          src={BudegetImg}
          alt="background budegt image"
        />
      </motion.div>

      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="flex flex-col justify-center items-center text-center">
          <motion.h1
            className="text-6xl sm:text-7xl md:text-9xl lg:text-[11rem] leading-none font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-rose-400 to-indigo-400"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
          >
            404
          </motion.h1>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl md:max-w-md font-semibold text-slate-950/80"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Oops — your budget took a detour. Looks like this page wandered off
            the map. Don't worry, we'll track those coins down.
          </motion.p>

          <div className="mt-6 flex gap-3">
            <motion.button
              className="px-4 py-2 sm:px-5 sm:py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 shadow-lg font-semibold text-sm sm:text-base"
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/")}
              aria-label="Go home"
            >
              Return Home
            </motion.button>
          </div>

          <motion.div
            className="mt-5 text-xs sm:text-sm font-semibold text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            *Tip: Check your transaction list or head back to the dashboard to
            review recent expenses.
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LostInBudget404;
