export default function Features() {
  return (
    <section className="px-10 pt-10 pb-10 md:pb-20">
      <h1 className="text-6xl font-semibold mb-10">Features</h1>
      <div className="w-full flex flex-col md:flex-row">
        <div id="left_part" className="mb-10 md:w-1/3 md:mr-5">
          <video
            src="#"
            className="w-full h-80 mb-5 bg-green-200 rounded-xl"
            loading="lazy"
          ></video>
          <h3 className="text-2xl font-semibold mb-2.5">Add an expense</h3>
          <p className="text-lg text-black/70 font-normal">
            Just add an expense like name and cost and mark as important.
          </p>
        </div>
        <div id="right_part" className="mb-10 md:w-2/3">
          <video
            src="#"
            className="w-full h-80 mb-5 bg-purple-300 rounded-xl"
            loading="lazy"
          ></video>
          <h3 className="text-2xl font-semibold mb-2.5">
            Categorize, edit and arrange expense
          </h3>
          <p className="text-lg text-black/70 font-normal">
            Categorize the expense and arrange it according to need and edit if
            needed.
          </p>
        </div>
      </div>
      <div className="mb-10">
        <video
          src="#"
          className="w-full h-80 mb-5 bg-amber-900 rounded-xl"
          loading="lazy"
        ></video>
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
