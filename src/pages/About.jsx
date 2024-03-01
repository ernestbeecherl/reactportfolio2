import profile from '../assets/profile.jpg';

// About component displaying information about the author
export default function About() {
  return (
    <div className="container">
      {/* Section for the main content */}
      <section className="row justify-content-center">
        {/* Column for the header */}
        <div className="col-md-10 col-lg-8">
          <h1 className="text-center">About Me</h1>
        </div>
      </section>
      
      {/* Section for the author's details */}
      <section className="row">
        {/* Column for the author's profile image */}
        <div className="col-md-4">
          <img src={profile} alt="a photo of me" className="img-fluid rounded" />
        </div>
        
        {/* Column for the author's bio */}
        <div className="col-md-8">
          <div className="p-4">
            {/* Heading for the author's bio */}
            <h3>A little bit about me:</h3>
            
            {/* Paragraphs containing the author's bio */}
            <p>
              Hello, My name is Ernest and I'm working towards being a coder. I engjoy the outdoors and playing video games. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};