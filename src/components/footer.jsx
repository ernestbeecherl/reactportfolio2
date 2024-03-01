import { BsGithub } from "react-icons/bs";
import { useState } from "react";

// Footer component displaying social media links with hover effects
const Footer = () => {
  // State variables to track hover state for each social media icon
  const [githubHovered, setGithubHovered] = useState(false);
  ;

  return (
    <footer>
      {/* Container for social media links */}
      <div className="container d-flex justify-content-end">
        {/* Text indicating the purpose of the social media links */}
        <p className="text-secondary-emphasis me-2">Find me on my socials</p>
        
        {/* GitHub social media link */}
        <a href="https://github.com/ernestbeecherl" className="mx-2" target="_blank" rel="noopener noreferrer"
          // Event handlers to toggle hover state
          onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)}>
          {/* GitHub icon with conditional size based on hover state */}
          <BsGithub size={githubHovered ? 40 : 30} />
        </a>
    
      </div>
    </footer>
  );
};

export default Footer;