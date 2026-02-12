// Main portfolio website component with theme support
import { Github, Mail, Send, Instagram, MessageCircle, Globe } from "lucide-react";
import { Card } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

function PortfolioContent() {
  // Contact links data
  const contactLinks = [
    {
      icon: <Globe className="size-5" />,
      label: "Website",
      value: "nurassyl.github.io",
      href: "https://nurassyl.github.io",
    },
    {
      icon: <Mail className="size-5" />,
      label: "Email",
      value: "contact@nurassyl.com",
      href: "mailto:contact@nurassyl.com",
    },
    {
      icon: <Send className="size-5" />,
      label: "Telegram",
      value: "@nurassyl_aldanov",
      href: "https://t.me/nurassyl_aldanov",
    },
    {
      icon: <MessageCircle className="size-5" />,
      label: "Threads",
      value: "@nurassyl_aldan",
      href: "https://threads.net/@nurassyl_aldan",
    },
    {
      icon: <Instagram className="size-5" />,
      label: "Instagram",
      value: "@nurassyl_aldan",
      href: "https://instagram.com/nurassyl_aldan",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Theme switcher */}
        <div className="flex justify-end mb-4">
          <ThemeSwitcher />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Nurassyl Aldanov
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Software Developer | CTO & CEO at Baiksoft
          </p>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            About
          </h2>
          <Card className="p-6 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Full-stack developer with experience in iOS and Android development, DevOps,
              backend, and frontend engineering. Working with AI models and their training.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              CTO & CEO at{" "}
              <a
                href="https://github.com/baiksoft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Baiksoft
              </a>
            </p>
          </Card>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "Node.js",
              "C",
              "C++",
              "Python",
              "PHP",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact
          </h2>
          <div className="space-y-3">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-colors"
              >
                <div className="text-gray-700 dark:text-gray-300">{contact.icon}</div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {contact.label}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
            <a
              href="https://github.com/nurassyl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-colors"
            >
              <div className="text-gray-700 dark:text-gray-300">
                <Github className="size-5" />
              </div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">GitHub</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  github.com/nurassyl
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Nurassyl Aldanov</p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
