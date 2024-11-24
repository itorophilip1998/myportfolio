import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";

const Home = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 7000); // Flip every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const texts = [
    "Snr. Software Engineer",
    "Snr. Back-End Engineer",
    "Snr. Front-End Engineer",
    "Snr. Full-Stack Engineer",
    "Snr. Mern-Stack Engineer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through texts
    }, 3000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const openLinkOutside = (link: string) => {
    if (!link) {
      console.error("Invalid link provided.");
      return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1 className="text-center text-white text-4xl mt-8 mb-4">
          Portfolio
          <span className="block w-16 h-1 bg-green-500 m-auto mt-2"></span>
        </h1> */}
      <div className="p-10 w-full text-white flex justify-evenly items-center h-screen">
        <div className="w-[50%]">
          <p className="text-5xl">PHILIP E. ITORO</p>
          <p className="text-2xl mt-2">
            I am a{" "}
            <Typical
              steps={[texts[index], 2000]} // Display text for 2 seconds
              loop={1}
              wrapper="span"
              className="font-bold text-green-500"
            />
          </p>
          <p className="text-xl mt-7">
            Highly skilled and passionate Senior Fullstack Engineer with over
            Nine(9+) years of hands-on experience building scalable, efficient,
            responsive web applications. Master of front and backend
            technologies, including
            <b>
              {" "}
              TypeScript, JavaScript, PHP, Java, and Blockchain Development.
            </b>
            <br />
            Extensive knowledge in designing complex user interfaces with
            <b>
              React.js, Next.js, and modern frontend frameworks while ensuring
              robust backend infrastructure using Node.js, Spring Boot, Laravel,
              and Nest.js.
            </b>
          </p>
          <p className="text-xl mt-7">
            A proven track record of delivering innovative solutions, driving
            digital transformation, and leading high-performance teams in agile
            environments. Adept at integrating cutting-edge technology stacks to
            optimize application performance, and provide seamless user
            experiences. I am known for problem-solving, leadership, and
            collaboration across diverse teams.
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/contact")}
              className="btn cursor-pointer bg-green-500 text-xl mt-[4rem] rounded-full w-[400px] p-4 transition duration-300 ease-in-out hover:bg-green-700"
            >
              More about me
            </button>
            <button
              onClick={() =>
                openLinkOutside(
                  "https://docs.google.com/document/d/1fyO4snBUtBF4eDk2Hroyo94hLRn818vHh1ACBKG80W4/edit?usp=sharing"
                )
              }
              className="btn cursor-pointer bg-green-500 text-xl mt-[4rem] rounded-full w-[400px] p-4 transition duration-300 ease-in-out hover:bg-green-700"
            >
              Download CV
            </button>
          </div>
        </div>
        <div className="w-50%">
          <motion.div
            className="flex items-center justify-center p-4 relative"
            animate={{ rotateY: flipped ? 360 : 0 }} // Flip animation
            transition={{ duration: 0.7 }} // Animation duration
          >
            <span className="absolute -right-4 -top-4 h-12 w-12 border-r-4 border-t-4 border-green-500 transform rotate-135"></span>
            <img
              src="/myProfile.jpg"
              className="h-[500px] w-[400px] object-cover "
              alt=""
            />
            <span className="absolute -left-4 -bottom-4 h-12 w-12 border-l-4 border-b-4 border-green-500 transform rotate-[40]"></span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
