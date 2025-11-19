import AddVideo from "../assets/vids/add_vid.mp4";
import EditVideo from "../assets/vids/edit_vid.mp4";
import AnalysisVideo from "../assets/vids/analysis_vid.mp4";

export default function Features() {
  return (
    <section
      id="features"
      className="dark:bg-slate-100/50 px-10 pt-10 pb-10 md:pb-20"
    >
      <h1 className="text-6xl font-semibold mb-10">Features</h1>
      <div className="w-full flex flex-col md:flex-row">
        <div id="left_part" className="mb-10 md:w-1/3 md:mr-5 w-full rounded-xl p-1.5">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-80 object-cover mb-5 shadow-xl rounded-2xl"
            title="Add Expense Video"
          >
            <source src={AddVideo} type="video/mp4" />
          </video>
          <h3 className="text-2xl font-semibold mb-2.5">Add an expense</h3>
          <p className="text-lg text-black/70 font-normal">
            Just add an expense like name and cost and mark as important.
          </p>
        </div>
        <div id="right_part" className="w-full rounded-xl mb-10 md:w-2/3 p-1.5">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-80 object-cover mb-5 shadow-xl rounded-2xl"
            title="Edit Expense Video"
          >
            <source src={EditVideo} type="video/mp4" />
          </video>
          <h3 className="text-2xl font-semibold mb-2.5">
            Categorize, edit and arrange expense
          </h3>
          <p className="text-lg text-black/70 font-normal">
            Categorize the expense and arrange it according to need and edit if
            needed.
          </p>
        </div>
      </div>
      <div className="w-full rounded-xl mb-10 p-1.5">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-80 object-cover mb-5 shadow-xl rounded-2xl"
          title="Analysis Video"
        >
          <source src={AnalysisVideo} type="video/mp4" />
        </video>
        <h3 className="text-2xl font-semibold mb-2.5">
          Analyze the budget, change, manage and track
        </h3>
        <p className="text-lg text-black/70 font-normal">
          After it all you can see the budget info, most cost consumption,
          analyze check out the graph and re arrange the budget and keep it in
          track.
        </p>
      </div>
    </section>
  );
}
