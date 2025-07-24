import { Download, MapPin, Mail, Phone, Calendar, Award, GraduationCap, Briefcase, Code } from "lucide-react"

export default function ResumePage() {
  // Mock resume data
  const resumeData = {
    personalInfo: {
      name: "Alex Johnson",
      title: "Full-Stack Developer",
      email: "alex@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      website: "https://alexjohnson.dev",
    },
    summary:
      "Passionate full-stack developer with 5+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies. Strong focus on user experience, performance optimization, and clean code architecture.",
    experience: [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Full-Stack Developer",
        location: "San Francisco, CA",
        startDate: "2022-03",
        endDate: "Present",
        description: [
          "Led development of a microservices architecture serving 100K+ daily active users",
          "Implemented CI/CD pipelines reducing deployment time by 60%",
          "Mentored 3 junior developers and conducted code reviews",
          "Built responsive web applications using React, TypeScript, and Next.js",
        ],
      },
      {
        company: "Digital Solutions LLC",
        position: "Full-Stack Developer",
        location: "San Francisco, CA",
        startDate: "2020-06",
        endDate: "2022-02",
        description: [
          "Developed and maintained 5+ client web applications using React and Node.js",
          "Integrated third-party APIs and payment systems (Stripe, PayPal)",
          "Optimized database queries resulting in 40% performance improvement",
          "Collaborated with design team to implement pixel-perfect UI components",
        ],
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        location: "Remote",
        startDate: "2019-01",
        endDate: "2020-05",
        description: [
          "Built responsive single-page applications using React and Redux",
          "Implemented real-time features using WebSocket connections",
          "Created reusable component library reducing development time by 30%",
          "Worked closely with UX designers to improve user engagement by 25%",
        ],
      },
    ],
    education: [
      {
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        location: "Berkeley, CA",
        startDate: "2015-08",
        endDate: "2019-05",
        gpa: "3.8/4.0",
        relevant: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
      },
    ],
    skills: {
      Frontend: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
      Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
      "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel", "Netlify"],
      Tools: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
    },
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023-08",
        credentialId: "AWS-SAA-123456",
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2023-03",
        credentialId: "GCP-PD-789012",
      },
    ],
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
              {resumeData.personalInfo.name}
            </h1>
            <p className="text-xl text-slate-600 mb-4">{resumeData.personalInfo.title}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>{resumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{resumeData.personalInfo.location}</span>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Professional Summary</h2>
        <p className="text-slate-600 leading-relaxed">{resumeData.summary}</p>
      </div>

      {/* Experience Section */}
      <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8 mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <Briefcase className="w-5 h-5 text-blue-500" />
          <h2 className="text-2xl font-bold text-slate-800">Work Experience</h2>
        </div>
        <div className="space-y-8">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="relative">
              {index !== resumeData.experience.length - 1 && (
                <div className="absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-blue-200 to-transparent"></div>
              )}
              <div className="flex">
                <div className="flex-shrink-0 w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 relative z-10"></div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{job.position}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-slate-500 mt-1 md:mt-0">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(job.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} -
                          {job.endDate === "Present"
                            ? " Present"
                            : ` ${new Date(job.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}`}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-600 text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8 mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <GraduationCap className="w-5 h-5 text-green-500" />
          <h2 className="text-2xl font-bold text-slate-800">Education</h2>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="flex">
            <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-2 mr-4"></div>
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{edu.degree}</h3>
                  <p className="text-green-600 font-medium">{edu.institution}</p>
                </div>
                <div className="text-sm text-slate-500 mt-1 md:mt-0">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(edu.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })} -
                      {new Date(edu.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-2">GPA: {edu.gpa}</p>
              <div className="flex flex-wrap gap-2">
                {edu.relevant.map((course) => (
                  <span
                    key={course}
                    className="px-2 py-1 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-xs font-medium text-slate-700"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8 mb-8">
        <div className="flex items-center space-x-2 mb-6">
          <Code className="w-5 h-5 text-purple-500" />
          <h2 className="text-2xl font-bold text-slate-800">Technical Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-slate-700 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-white/40 to-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-medium text-slate-700 hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="backdrop-blur-2xl bg-white/25 rounded-3xl border border-white/40 shadow-2xl shadow-indigo-200/30 p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Award className="w-5 h-5 text-amber-500" />
          <h2 className="text-2xl font-bold text-slate-800">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-2 mr-4"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-800">{cert.name}</h3>
                <p className="text-amber-600 font-medium">{cert.issuer}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-slate-500">
                    Issued: {new Date(cert.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                  <span className="text-xs text-slate-400">ID: {cert.credentialId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
