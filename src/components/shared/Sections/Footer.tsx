// components/Footer.tsx

import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white lg:px-20 px-10 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Rafioul Hasan Sourob</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A passionate full-stack developer focused on turning ideas into interactive, performant, and accessible web applications. I enjoy working with modern tools like React, Next.js, Tailwind, and MongoDB.
          </p>
          <p className="text-xs mt-3 text-gray-500 italic">
            Code it clean, build it bold.
          </p>
        </div>

        {/* Column 2: Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Lets Connect</h3>
          <p className="text-sm text-gray-400 mb-3">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/rafioul-hasan-58" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-purple-400 transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-purple-400 transition" />
            </a>
            <a href="mailto:your@email.com" aria-label="Email">
              <Mail className="h-5 w-5 hover:text-purple-400 transition" />
            </a>
            <a href="https://yourwebsite.com" target="_blank" aria-label="Portfolio">
              <Globe className="h-5 w-5 hover:text-purple-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-gray-500 text-sm">
        &copy; {year} Sourav. Built with ❤️ using React, Tailwind, and passion.
      </div>
    </footer>
  );
};

export default Footer;
