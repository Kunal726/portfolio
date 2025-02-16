import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white p-8">
      {/* Header Section with Subtle Gradient */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">About Me</h1>
        <p className="text-2xl mb-6">Backend Developer | System Architect</p>
      </header>

      {/* Main Content Section */}
      <section className="prose lg:prose-xl mx-auto mb-16 bg-white text-gray-800 p-12 rounded-lg shadow-xl w-full md:max-w-3xl">
        <p>
          I am <strong>Kunal Kulthe</strong>, a passionate backend developer with a strong foundation in{" "}
          <span className="font-semibold">Java, Spring Boot, Microservices</span>, and{" "}
          <span className="font-semibold">REST APIs</span>. I hold a B.E. in Computer Engineering from{" "}
          <span className="font-semibold">Sinhgad College of Engineering, Pune</span>, where I developed a deep
          interest in backend development, system optimization, and scalable architectures. Throughout my academic
          journey, I secured a <span className="font-semibold">9.20 CGPA</span> and participated in several projects
          such as presenting a paper on <span className="font-semibold">IoT & Big Data Analytics</span> and completing
          the <span className="font-semibold">Google Cloud Ready Facilitator Program</span>.
        </p>

        <p>
          I currently work as a Backend Developer at <span className="font-semibold">Jio Platforms</span>, where I
          specialize in designing secure and scalable payment processing systems. I focus on optimizing response times
          with <span className="font-semibold">Redis caching</span> and ensuring smooth operations by fine-tuning{" "}
          <span className="font-semibold">SQL queries</span> on Oracle and MySQL databases. Additionally, I maintain
          software quality through <span className="font-semibold">JUnit</span> and <span className="font-semibold">Mockito</span>
          unit testing.
        </p>

        <p>
          I’ve also worked on AI-powered projects like a <span className="font-semibold">Yoga Pose Recognition System</span>
          and developed fintech apps like <span className="font-semibold">SRWallet</span>, which helped me enhance my problem-solving
          and technical capabilities. My early experience in Android development has given me a holistic perspective of the
          software development lifecycle.
        </p>

        <p>
          As I move forward in my career, I aim to refine my skills in distributed systems and cloud technologies. I am
          eager to contribute to large-scale backend projects while gaining international exposure in an MNC.
        </p>

        <p>
          I am always open to collaborating with like-minded professionals and exchanging knowledge. <strong>Let's build the
          future of technology together!</strong>
        </p>
      </section>

      {/* Education Section with Interactive Card Layout (Reduced Size) */}
      <section id="education" className="py-16 px-6 bg-gray-800 mt-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Education</h2>
          <div className="flex flex-col gap-8 md:flex-row md:justify-center md:gap-16">

            {/* Bachelor's degree entry */}
            <div className="bg-white shadow-xl p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
              <h3 className="text-2xl font-bold">Bachelor's degree, Computer Engineering</h3>
              <p className="text-gray-600">Sinhgad College of Engineering, Pune</p>
              <p className="text-sm text-gray-500">2020 - 2023</p>
              <p className="mt-4 text-gray-700">Grade: 9.20 CGPA</p>
            </div>

            {/* Diploma entry */}
            <div className="bg-white shadow-xl p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
              <h3 className="text-2xl font-bold">Diploma in Computer Engineering</h3>
              <p className="text-gray-600">Government Polytechnic, Dhule</p>
              <p className="text-sm text-gray-500">2017 - 2020</p>
              <p className="mt-4 text-gray-700">Grade: A+ (93.77% - First Class Distinction)</p>

              {/* Bullet list of activities */}
              <ul className="mt-4 text-gray-600 list-disc list-inside text-left">
                <li>
                  Presented a paper on <strong>IoT and Big Data Analysis</strong> at the National Conference
                  'Technology For Rural and Tribal Development (TTRD-2020)'.
                </li>
                <li>
                  Completed a one-day hands-on workshop on <strong>Robotics</strong> at S.V.K.M Dhule.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Footer with Back Button */}
      <footer className="text-center mt-8">
        <Link href="/" className="text-lg text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </footer>
    </div>
  );
}
