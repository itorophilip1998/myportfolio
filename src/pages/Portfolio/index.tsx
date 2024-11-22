const projects = [
  {
    id: 1,
    name: "Clisha",
    description: `Clisha offers you the opportunity to earn money by simply clicking, liking, and sharing content. You have the option to receive tokens, real money, or credits. `,
    url: "https://clisha.me", // Replace with your image URL
    image: "/images/clisha.png", // Replace with your image URL
  },
  {
    id: 2,
    name: "DubballUp",
    description: `DubballUp is a community-centred fitness app that helps people connect with others who share their interest in physical activity, regardless of fitness level or experience`,
    image: "/images/duballup.png",
    url: "https://dubballup.com/", // Replace with your image URL
  },
  {
    id: 3,
    name: "Expectoo",
    description:
      "Expectoo bridge the gap between tech talent and companies seeking to grow. By uniting diverse talents and perspectives, we drive meaningful change and create a positive impact in the tech industry",
    image: "/images/expectoo.png",
    url: "https://www.expectoo.ng/", // Replace with your image URL
  },
  {
    id: 4,
    name: "Pickt",
    description:
      "Pickt is a social platform that allows people from all walks of life to connect, share information and get paid for their time.",
    image: "/images/pickts.png",
    url: "https://pickt.io/", // Replace with your image URL
  },
  {
    id: 5,
    name: "Sabifix",
    description: `Welcome to Sabifix, your premier source for jobs, services, and business insights. Our platform is dedicated to providing you with the best resources for business growth, offering valuable information and services to help you succeed. 
      https://sabifix.biz 
      `,
    image: "/images/sabifix.png",
    url: "https://play.google.com/store/apps/details?id=com.job.ng", // Replace with your image URL
  },
  {
    id: 6,
    name: "Switchive",
    description:
      "Switchive is a crypto platform where you can shop and pay with crypto such as Airtime, data bundle and other buyable items.",
    image: "/images/switchive.png",
    url: "https://switchive.com/", // Replace with your image URL
  },
  {
    id: 6,
    name: "Soccernity",
    description: `Soccernity(soccer community) as the name implies, is a community of football enthusiasts that brokers social networking and banter, live scores, fixtures, and news, and at the same time, creates opportunities for football talents to be discovered and become football professionals.`,
    image: "/images/soccernity.png",
    url: "https://soccernity.com/", // Replace with your image URL
  },
  {
    id: 6,
    name: "Total Care Score",
    description: `Total Health Score is a comprehensive health platform designed to streamline the workflow for nurses, doctors, and patients. We are dedicated to improving healthcare management by offering a reliable space to store and manage medical data, assign responsibilities, and perform essential tasks efficiently.`,
    image: "/images/tcs.png",
    url: "https://test-tcs.anchordigitalgroup.com/", // Replace with your image URL
  },
  {
    id: 6,
    name: "Vendo",
    description: `Vendo.club is more than just an ordinary business club – it's a vibrant platform that supports entrepreneurs worldwide in realising their biggest dreams and taking their success to the next level. At Vendo.club, our focus is on growing your visibility, expanding your reach, and building powerful networks. Our mission is to provide you with the essential tools and connections you need to thrive in today's digital world`,
    image: "/images/vendo.png",
    url: "https://vendo.club/", // Replace with your image URL
  },
]; 

const openLinkOutside = (link: string) => {
  if (!link) {
    console.error("Invalid link provided.");
    return;
  }

  window.open(link, "_blank", "noopener,noreferrer");
};

const Portfolio = () => {
  return (
    <div className=" no-scrollbar overflow-auto pb-[2rem] h-screen md:p-10">
      <h1 className="text-center text-white text-4xl mt-8 mb-4">
        Portfolio
        <span className="block w-16 h-1 bg-green-500 m-auto mt-2"></span>
      </h1>

      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            onClick={() => openLinkOutside(project.url)}
            key={project.id}
            className="relative group overflow-hidden border-[.7rem] border-[#1d1c1c9f] rounded-lg shadow-lg bg-gray-800"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-500 scale-110 group-hover:scale-150"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-semibold text-green-500">
                {project.name}
              </h3>
              <p className="text-sm mt-2 text-center text-gray-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
