import './App.css';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Header from './components/Header';
import FAQHeader from './components/FAQHeader';
import Section from './components/Section';
import { useLocation } from 'react-router-dom';
import { answers, sections } from './data';

function App() {
  const location = useLocation();

  const homeContent = (
    <>
      <Header />
      <Buttons />
      <div className="yeeter-container my-12">
        {sections.map(section => (
          <Section {...section} />
        ))}
      </div>
      <Buttons />
      <Footer />
    </>
  );

  const faqContent = (
    <>
      <FAQHeader />
      <div className="yeeter-container my-12">
        {answers.map(section => (
          <Section {...section} />
        ))}
      </div>
      <Buttons />
      <Footer />
    </>
  );

  const contentToRender =
    location.pathname === '/faq' ? faqContent : homeContent;

  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col p-5">
      {contentToRender}
    </div>
  );
}

export default App;
