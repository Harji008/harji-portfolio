import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-white to-pink-100 p-6 sm:p-10 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
        <div className="flex items-start gap-4">
          <Image
            src="/profile-pic.jpeg"
            alt="Harji Harpreet Kaur"
            width={100}
            height={100}
            className="rounded-md shadow-md"
          />
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-1">Harji Harpreet Kaur</h1>
            <p className="text-gray-700 text-lg">
              No Sponsorship Required · Based in California · Open to Relocate
            </p>
            <p className="text-sm text-gray-600">
              Email: <a href="mailto:harjikaur008@gmail.com" className="text-blue-600 hover:underline">harjikaur008@gmail.com</a> | Phone: (916) 248-3769
            </p>
            <a
              href="https://www.linkedin.com/in/harji-harpreet-kaur-631734b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline mt-1 inline-block"
            >
              View my LinkedIn →
            </a>
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/90 p-4 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Education</h2>
          <ul className="text-sm text-gray-800 space-y-2">
            <li>
              <strong>University of Maryland, Baltimore County</strong><br />
              MPS in Software Engineering · GPA 3.744 · Aug 2023 – May 2025
            </li>
            <li>
              <strong>Chitkara University, Punjab</strong><br />
              Masters in Computer Applications · GPA 3.84 · Aug 2015 – May 2017
            </li>
            <li>
              <strong>Guru Nanak Dev University, Punjab</strong><br />
              Bachelors in Computer Applications · GPA 3.59 · Aug 2012 – May 2015
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Skills & Tools</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Languages: Java, Python, TypeScript, JavaScript, C, C++, SQL</li>
            <li>Frontend: React, Next.js, Angular, HTML5, CSS3, Tailwind CSS, ShadCN UI</li>
            <li>Backend: Node.js, RESTful APIs, GraphQL, Microservices</li>
            <li>Mobile: React Native, Android Studio</li>
            <li>Databases: MySQL, MongoDB, Redis, InfluxDB, NoSQL</li>
            <li>Cloud/Deployment: Docker, Azure, Firebase, Supabase, Vercel</li>
            <li>DevOps/Testing: Git, GitHub, GitLab CI/CD, Postman, Selenium, JUnit, Espresso, Jest, Enzyme</li>
            <li>NLP/ML: Python, Jupyter, Hugging Face (T5), Sumy</li>
            <li>Monitoring: Grafana</li>
            <li>IDEs: VS Code, IntelliJ, Eclipse, PhpStorm, Maven, Bitbucket, Jira</li>
            <li>Methodologies: Agile, Scrum</li>
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Professional Experience</h2>
          <div className="space-y-4 text-gray-800 text-sm">
            <div><strong>Frontend Web Developer Intern – SphereHub (UMBC)</strong><br/>Jan 2025 – May 2025<br/>Built an AI-driven roommate matching platform with Next.js, Tailwind, ShadCN UI, and Supabase. Created 11+ mobile-first pages with chat, profiles, booking, and maps.</div>
            <div><strong>Research Assistant – Ethical Software Lab, UMBC</strong><br/>Feb 2024 – Dec 2024<br/>Built NLP pipelines using Sumy and Hugging Face T5. Improved legal document accessibility by 30% and supported ethical AI research projects.</div>
            <div><strong>Software Developer – VMM Education, India</strong><br/>Dec 2022 – Jul 2023<br/>Built Android ERP apps using Java. Developed backend automation with Autosys, Reladomo. Automated business workflows with BPMN.</div>
            <div><strong>Software Engineer – Unifane Solutions</strong><br/>Dec 2020 – Dec 2021<br/>Developed Java backend with GraphQL and Dropwizard. Used Kubernetes + Terraform for deployment. Supported full SDLC and monitoring.</div>
            <div><strong>Full-Stack Web Developer – Ritz Travelz</strong><br/>May 2018 – May 2019<br/>Built responsive Angular web apps. Wrote SQL, stored procedures, and performed unit testing with Jest, Enzyme, JUnit.</div>
            <div><strong>Software Engineer – Geeks Technical Solutions</strong><br/>Nov 2017 – May 2018<br/>Worked on e-commerce Android apps. Automated purging with Reladomo. Used BPMN for business workflows.</div>
            <div><strong>Android Developer Intern – EXOUSIA TECH</strong><br/>Dec 2016 – May 2017<br/>Built Android apps with performance focus. Worked in Agile teams using Git and Jira. Tested with JUnit and Espresso.</div>
          </div>
        </section>
      </div>

      {/* Academic Roles */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Teaching & Academic Roles</h2>
        <p className="text-gray-800 text-sm">
          <strong>Grader – Structured Systems Analysis and Design</strong><br/>Feb 2024 – Dec 2024<br/>
          Evaluated assignments focusing on ER diagrams, DFDs, UML models, and system specifications. Provided detailed feedback to students and collaborated with faculty to maintain academic standards.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Projects</h2>
        <ul className="space-y-6 text-gray-800 text-sm">
          <li>
            <strong>YOGIO – Virtual Yoga Scheduling Platform</strong><br/>
            Tech Stack: Next.js, Tailwind CSS, Supabase, Firebase Auth, Node.js, Zoom<br/>
            Online platform for yoga class scheduling with secure login, instructor dashboards, Zoom integration.<br/>
            <a href="https://yogio-088.vercel.app" target="_blank" className="text-blue-600 hover:underline">Live App</a> | <a href="https://github.com/Harji008/YOGIO-008" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
          </li>
          <li>
            <strong>B2B Marketplace App</strong><br/>
            Tech Stack: React, Node.js, MongoDB, GraphQL, Docker<br/>
            Scalable platform for connecting wholesalers and retailers with AI-powered product suggestions.
          </li>
          <li>
            <strong>Smart Car Parking App</strong><br/>
            Tech Stack: React Native, Node.js, Firebase, Google Maps API<br/>
            Mobile app for parking reservation with AI prediction and Google Maps integration.
          </li>
          <li>
            <strong>Hookah Lounge Social App</strong><br/>
            Tech Stack: Flutter, Node.js, PostgreSQL, Firebase<br/>
            Social media app for hookah lounge reviews and live content sharing.
          </li>
          <li>
            <strong>College Research & Peer Networking Portal</strong><br/>
            Tech Stack: Angular, Django, MySQL, Redis<br/>
            Portal to connect students and faculty based on research interests.
          </li>
          <li>
            <strong>LLM Sensor Forecasting Portal</strong><br/>
            Tech Stack: Python, Jupyter, LLM, NLP<br/>
            Forecasting app using large language models to predict sensor data (humidity/pressure).
          </li>
        </ul>
      </section>
    </div>
  );
}
