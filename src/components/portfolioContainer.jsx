import { useState } from 'react';
import NavTabs from "./NavTabs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from '../pages/Resume';
import Footer from "./footer";

// PortfolioContainer component to manage page rendering and navigation
export default function PortfolioContainer() {
  // State to manage the current page
  const [currentPage, setCurrentPage] = useState('About');

  // Function to render the current page
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  // Function to handle page change
  const handlePageChange = (page) => setCurrentPage(page);

  // Return the portfolio container with navigation, main content, and footer
  return (
    <div>
      {/* Navigation component */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {/* Main content */}
      <main className="mx-3">{renderPage()}</main>
      
      {/* Footer */}
      <Footer currentPage={currentPage}></Footer>
    </div>
  );
}