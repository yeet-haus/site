import './App.css';
import { useLocation } from 'react-router-dom';
import { answers, sections } from './data';
import Layout from './components/Layout';

function App() {
  const location = useLocation();

  const element =
    location.pathname === '/faq' ? <Layout data={answers} /> : <Layout data={sections} />;

  return (
    <div className="w-full flex overflow-auto min-h-screen items-center flex-col p-5">
      {element}
    </div>
  );
}

export default App;
