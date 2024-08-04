function Home() {
  return (
    <section>
      <section className="w-full md:w-[90%] lg:w-[80%] max-w-[1279px] m-auto">
        <div className="flex flex-col items-center space-y-6 my-6">
          <h1 className="text-6xl text-center w-96">
            Placeholder for a main title header
          </h1>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolor
            non necessitatibus
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg my-4 py-2 px-6 rounded-full shadow-sm">
            Get Started
          </button>
        </div>
      </section>
      <section className="w-full">
        <img
          src="src/assets/placeholder-1038x576.png"
          alt=""
          className="w-full"
        />
      </section>
    </section>
  );
}

export default Home;
