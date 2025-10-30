export default function About() {
  return (
    <section className="w-full bg-[#71BC20]/5 px-10 py-10 lg:px-30 lg:py-20">
      <h2 className="text-6xl font-semibold mb-10">About Me</h2>
      <div className="md:flex md:justify-between md:items-center">
        <img
          className="bg-slate-400 w-86 h-52 md:h-80 rounded-xl mb-3 md:w-2.5/5 lg:w-2/5"
          src="#"
          alt="Web owner img"
        />
        <div className="md:w-2/5">
          <h3 className="text-2xl font-semibold mb-2.5">Introduction</h3>
          <p className="text-lg text-black/70 font-normal">
            Hi, i am Baraiya Nikhil R. Web and MERN Based developer with the
            enthusiasm of web and technology and foodie and gamer with bit
            interest in traveling and lot of creativeness and hard + smart work
            and expert ai tool master .
          </p>
        </div>
      </div>
    </section>
  );
}
