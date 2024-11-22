const Contact = () => {
  const openLinkOutside = (link: string) => {
    if (!link) {
      console.error("Invalid link provided.");
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className=" no-scrollbar overflow-auto pb-[2rem]  text-white h-screen md:p-10">
      <h1 className="text-center text-white text-4xl my-8">
        Contact Me
        <span className="block w-16 h-1 bg-green-500 m-auto mt-2"></span>
      </h1>

      {/* Contact Info Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
        <div
          className="border link p-4 rounded-lg border-gray-800 transform transition duration-300 ease-in-out hover:scale-110 hover:translate-y-2"
          onClick={() => openLinkOutside("tel:+2349024195493")}
        >
          <div className="text-green-500 mb-2">
            <i className="pi pi-phone text-2xl"></i>
          </div>
          <h3 className="font-bold text-slate-300">Phone</h3>
          <p className="text-green-600">+234 9024195493</p>
        </div>

        <div
          className="border link p-4 rounded-lg border-gray-800 transform transition duration-300 ease-in-out hover:scale-110 hover:translate-y-2"
          onClick={() => openLinkOutside("mailto:itorophilip1998@gmail.com")}
        >
          <div className="text-green-500 mb-2">
            <i className="pi pi-envelope text-2xl"></i>
          </div>
          <h3 className="font-bold text-slate-300">EMail</h3>
          <p className="text-green-600">itorophilip1998@gmail.com</p>
        </div>
        <div
          className="border link p-4 rounded-lg border-gray-800 transform transition duration-300 ease-in-out hover:scale-110 hover:translate-y-2"
          onClick={() => openLinkOutside("https://github.com/itorophilip1998 ")}
        >
          <div className="text-green-500 mb-2">
            <i className="pi pi-github text-2xl"></i>
          </div>
          <h3 className="font-bold text-slate-300">Github</h3>
          <p className="text-green-600">github.com/itorophilip1998</p>
        </div>
        <div
          className="border link p-4 rounded-lg border-gray-800 transform transition duration-300 ease-in-out hover:scale-110 hover:translate-y-2"
          onClick={() =>
            openLinkOutside(
              "https://www.linkedin.com/in/itoro-philip-1b2182225/   "
            )
          }
        >
          <div className="text-green-500 mb-2">
            <i className="pi pi-linkedin text-2xl"></i>
          </div>
          <h3 className="font-bold text-slate-300">LinkedIn</h3>
          <p className="text-green-600">
            linkedin.com/in/itoro-philip-1b2182225/
          </p>
        </div>
      </div>

      {/* Email Form Section */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold text-green-500 mb-2">
          SEND ME AN EMAIL
        </h2>
        <p className="text-lg mb-6">I'M VERY RESPONSIVE TO MESSAGES</p>

        <form className="flex flex-col gap-7  md:w-[70%] mx-auto ">
          <input
            type="text"
            placeholder="Name"
            className="text-xl bg-transparent border border-gray-800 p-5 rounded-lg text-white placeholder-gray-400 focus:ring shadow focus:outline-none focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-xl bg-transparent border border-gray-800 p-5 rounded-lg text-white placeholder-gray-400 shadow focus:outline-none focus:ring focus:ring-green-500"
          />

          <textarea
            name=""
            id=""
            rows={8}
            className="bg-transparent text-xl border border-gray-800 resize-none p-5 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          ></textarea>
          <button className="p-5  bg-green-500 rounded-lg text-xl">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
