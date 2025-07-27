import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="min-h-screen py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 dark:from-gray-900 dark:via-indigo-900/20 dark:to-gray-900"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-lg tracking-wide uppercase">
              Let's Connect
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss your next project!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - Contact Info */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Let's start a conversation
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">rumeshth20@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-300">+94 (77) 325-0137</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">No.6, 2nd Lane, Katubedda, Moratuwa.</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", gradient: "from-blue-400 to-blue-600" },
                      { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", gradient: "from-blue-600 to-blue-800" },
                      { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", gradient: "from-gray-700 to-gray-900" }
                    ].map((social, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center text-white hover:scale-110 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/20 dark:border-gray-700/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white/50 dark:bg-gray-800/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
