export default function About() {
  return (
    <section id="about" className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating clean, efficient, and user-friendly applications that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My journey in software development started with curiosity and has evolved into a 
              commitment to continuous learning and improvement. I enjoy working with teams to 
              build innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Your Photo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
