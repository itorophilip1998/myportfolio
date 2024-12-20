import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toast } from "primereact/toast";

const Contact = () => {
  const [status, setStatus] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  const openLinkOutside = (link: string) => {
    if (!link) {
      console.error("Invalid link provided.");
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(true);

    const form = e.currentTarget;

    // Replace these with your EmailJS credentials
    const serviceID = "service_zmw52zc";
    const templateID = "template_20qc655";
    const publicKey = "_J49LBHIQ4HI3uTGV";

    emailjs.sendForm(serviceID, templateID, form, publicKey).then(
      () => {
        toast.current?.show({
          severity: "success",
          summary: "Done",
          detail: "Message sent successfully!, iI will get back to you soon.",
          life: 3000,
        });
        setStatus(false);
        form.reset();
      },
      (error) => {
        console.error("Failed to send email:", error);
        toast.current?.show({
          severity: "success",
          summary: "Done!",
          detail: "Thanks,i will get back to you soon.",
          life: 3000,
        });
        setStatus(false);
      }
    );
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

        <form
          className="flex flex-col gap-7  md:w-[70%] mx-auto "
          onSubmit={handleSendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            className="text-xl bg-transparent border border-gray-800 p-5 rounded-lg text-white placeholder-gray-400 focus:ring shadow focus:outline-none focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            className="text-xl bg-transparent border border-gray-800 p-5 rounded-lg text-white placeholder-gray-400 shadow focus:outline-none focus:ring focus:ring-green-500"
          />

          <textarea
            name="message"
            id=""
            rows={8}
            className="bg-transparent text-xl border border-gray-800 resize-none p-5 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-green-500"
          ></textarea>

          <button
            className={`p-5 rounded-lg text-xl flex items-center justify-center ${
              status ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
            }`}
            disabled={status}
          >
            {status ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
      <Toast ref={toast} />
    </div>
  );
};

export default Contact;
