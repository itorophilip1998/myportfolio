import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";

export default function TemplateDemo() {
  const events = [
    {
      status: "FullStack Engineer – Anchor Corp ",
      date: "Jan 2023 – Feb 2024 | Remote, New York, USA",
      description: (
        <div className="text-slate-300 experience">
          <h3 className="text-xl text-bold ">Key Responsibilities</h3>

          <p className="mt-2">
            Spearheaded the development of Total Care Score (TCS), a
            comprehensive management information system for home healthcare
            services, streamlining workflows for patients, nurses, and
            healthcare organizations.
          </p>

          <p className="mt-2">
            Designed and deployed a Skills Performance System (SPS), enhancing
            task assignments, real-time workflow monitoring, and performance
            tracking, leading to a 20% efficiency boost. Engineered robust
            authentication systems using JWT and OAuth, ensuring
            enterprise-grade security.
          </p>
          <p className="mt-2">
            Optimized app performance through lazy loading, code splitting, and
            memoization, improving load times by 30%.
          </p>
          <p className="mt-2">
            Collaborated cross-functionally with backend teams to develop APIs
            and integrate frontend UI components.
          </p>
        </div>
      ),
    },
    {
      status: "Frontend Engineer – Soccernity",
      date: "Jul 2022 – Dec 2023 | Part-time, Remote, London, UK",
      description: (
        <div className="text-slate-300 experience">
          <h3 className="text-xl text-bold">Key Responsibilities</h3>
          <p className="mt-2">
            Developed and maintained an interactive football community platform
            that connected thousands of football enthusiasts, delivering
            real-time scores and live streams.
          </p>
          <p className="mt-2">
            Built highly responsive UI components using React.js, ensuring
            cross-browser compatibility and a seamless user experience on mobile
            and desktop.
          </p>
          <p className="mt-2">
            Managed complex state using Redux Toolkit and React Hooks,
            optimizing performance and minimizing rerender. Integrated with
            RESTful APIs to enable live score updates and fan interactions in
            real time.
          </p>
        </div>
      ),
    },
    {
      status: "Chief Technology Officer (CTO) – Expectoo",
      date: "Apr 2022 – Apr 2023 | Fulltime, Onsite, Port Harcourt, Nigeria",
      description: (
        <div className="text-slate-300 experience">
          <h3 className="text-xl text-bold ">Key Responsibilities</h3>
          <p className="mt-2">
            Led the design and development of innovative digital products,
            creating an ecosystem for distributed home care solutions.
          </p>
          <p className="mt-2">
            Directed end-to-end architecture of web and mobile platforms,
            increasing product adoption by 40%.
          </p>
          <p className="mt-2">
            Mentored and grew a development team, fostering a culture of
            innovation, continuous improvement, and technical excellence.
          </p>
          <p className="mt-2">
            Played a key role in strategic product development, driving the
            company’s technical vision and aligning it with business objectives.
          </p>
        </div>
      ),
    },
    {
      status: " Frontend Engineer – Lavendor Lotis ",
      date: "Sep 2021 – Apr 2022 | Contract, Remote, Washington D.C, USA",
      description: (
        <div className="text-slate-300 experience">
          <h3 className="text-xl text-bold ">Key Responsibilities</h3>
          <p className="mt-2">
            Developed high-performance e-commerce applications for healthcare
            services using ReactJS, ReduxSaga, and MUI, delivering sustainable
            and eco-friendly digital solutions.
          </p>
          <p className="mt-2">
            Integrated backend systems using GraphQL and REST APIs, enabling
            seamless real-time data fetching.
          </p>
          <p className="mt-2">
            Designed and built reusable UI components to accelerate feature
            development and improve code maintainability.
          </p>
          <p className="mt-2">
            Implemented clientside routing and state management for complex
            applications, enhancing user flow and navigation efficiency.
          </p>
          <p className="mt-2">
            Implementing CI/CD pipelines using Jenkins and GitHub Actions,
            reducing deployment time by 40%. Architecting AWS-based solutions
            for fault-tolerant and scalable applications.
          </p>
          <p className="mt-2">
            Leading teams in adopting DevOps practices to enhance software
            delivery and reliability. Designing a microservices architecture
            that optimized application performance and maintainability.
          </p>
        </div>
      ),
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customizedMarker = () => {
    return (
      <span className="flex w-2rem h-2rem align-items-center justify-content-center text-green-500 border-circle z-1 shadow-1">
        <i className={"pi  pi-compass"}></i>
      </span>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customizedContent = (item: any) => {
    return (
      <Card title={item.status} subTitle={item.date} className=" bg-[#282828]">
        {item.description}
      </Card>
    );
  };

  return (
    <div className="card text-white  no-scrollbar overflow-auto py-[2rem] h-screen">
      <h1 className="text-center text-white text-4xl my-8">
        💼 Professional Experience
        <span className="block w-16 h-1 bg-green-500 m-auto mt-2"></span>
      </h1>
      <Timeline
        value={events}
        align="alternate"
        className="customized-timeline"
        marker={customizedMarker}
        content={customizedContent}
      />
    </div>
  );
}
