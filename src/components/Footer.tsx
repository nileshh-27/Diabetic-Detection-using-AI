import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 py-8 bg-medical-navy">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-medical-lightblue text-lg">
          Diabetes Prediction | © 2024 nileshreddyk{" "}
          <a
            href="https://github.com/nileshh-27"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-medical-green hover:text-medical-green/80 transition-colors duration-200 hover:underline"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;