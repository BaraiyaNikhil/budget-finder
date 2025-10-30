import GithubLogo from "../assets/imgs/github.png";
import LinkedinLogo from "../assets/imgs/linkedin.png";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="lg:px-10 text-center py-10 dark:bg-slate-100/50 bg-white"
    >
      <div className="lg:flex lg:justify-between">
        <div id="left_part">
          <h2 className="text-6xl font-semibold mb-10">Budget Finder</h2>
          <p className="text-2xl mb-5">
            {" "}
            <sup className="font-mono">66</sup> Lets make life better{" "}
            <sub className="font-mono">99</sub>
          </p>
        </div>
        <div
          id="right_part"
          className="flex justify-center-safe items-center mb-5"
        >
          <div className="mr-5">
            <p className="text-xl font-medium">LinkedIn</p>
            <a href={"https://linkedin.com/in/baraiyanikhil"} target="_blank">
              <img className="ml-5 w-10" src={LinkedinLogo} alt="github logo" />
            </a>
          </div>
          <div>
            <p className="text-xl font-medium">Github</p>
            <a href={"https://github.com/BaraiyaNikhil"} target="_blank">
              <img
                className="ml-3 w-10"
                src={GithubLogo}
                alt="linkedin logo"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-lg ">&copy;{new Date().getFullYear()} Budget Finder</p>
    </footer>
  );
}
