import './App.css';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import { useLocation } from 'react-router-dom';
import { sections } from './data';

function App() {
  const location = useLocation();

  const homeContent = (
    <>
      <Header />
      <div className="yeeter-container my-12">
        {sections.map(section => (
          <Section {...section} />
        ))}
      </div>
      <Buttons />
      <Footer />
    </>
  );

  // Define content for the FAQ page
  const faqContent = (
    <>
      <Header />
      {/* Add FAQ-specific content here */}
      <div>FAQ</div>
      <Buttons />
      <Footer />
    </>
  );

  // Determine which content to render based on the route
  const contentToRender =
    location.pathname === '/faq' ? faqContent : homeContent;

  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col p-5">
      {contentToRender}
    </div>
  );
}

export default App;
