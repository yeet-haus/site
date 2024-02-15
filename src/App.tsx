import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import { sections } from './data';

function App() {
  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col p-5">
      <Header />
      <div className="yeeter-container my-12">
        {sections.map(section => <Section {...section} />)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
