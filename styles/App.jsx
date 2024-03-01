import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/footer';
import './app.css'; // Import CSS file for additional styles
import backgroundImage from './assets/background.png'; // Import background image

function App() {
  return (
    // Container with custom styles, background image, and flexbox layout
    <section className='container-custom' style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh'}}>
      {/* Navigation tabs component */}
      <NavTabs />

      {/* Main content area */}
      <main className="mx-3 main text-secondary-emphasis">
        <Outlet /> {/* Render child routes */}
      </main>

      {/* Footer component */}
      <Footer />
    </section>
  );
}

export default App;