import { Link } from "react-router-dom";
import BudgetFinderUi from "../assets/imgs/budget_finder_ui.jpg";

export default function Hero() {
  return (
    <section id="hero" className="w-full flex md:flex-row flex-col items-center py-20 bg-[#71BC20]/5">
      <div id="Left_part" className="w-full lg:w-1/2 text-center md:text-start md:flex justify-center md:items-center">
        <div className="md:w-2/3">
          <h2 className="font-bold text-5xl md:text-6xl mb-5">Find Your Budget instantly</h2>
          <p className="text-xl text-black/60 font-semibold mb-5">The one way stop for budget finding and tracking problems.</p>
          <div id="hero_buttons" className="">
            <Link to="/budget_maker"><button className="px-2.5 py-2 md:px-3 md:py-2 rounded-xl font-semibold bg-black/90 text-white mr-5">Build budget now</button></Link>
            <a href="#features"><button className="px-2.5 py-2 mb-5 md:px-3 md:py-2 rounded-xl font-semibold border-2 border-black/10">Learn more</button></a>
          </div>
        </div>
      </div>
      <div id="right_part" className="w-4/5 lg:w-1/2">
        <img
          className="w-full rounded-xl"
          src={BudgetFinderUi}
          alt="budget tracker app ui photo"
        />
      </div>
    </section>
  );
}
