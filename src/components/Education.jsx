export default function Education() {
  return (
    <section id="education" className="min-h-screen py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white">Education</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelor's Degree in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">University Name</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-3">2020 - 2024</p>
            <p className="text-gray-700 dark:text-gray-300">
              Focused on software engineering, algorithms, and data structures. 
              Graduated with honors and gained strong foundation in computer science fundamentals.
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Certifications</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium text-gray-900 dark:text-white">AWS Certified Developer</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">2024</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium text-gray-900 dark:text-white">React Developer Certification</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <span className="font-medium text-gray-900 dark:text-white">JavaScript Advanced Concepts</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
