import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <ToastContainer autoClase={false} />
  <App tab="home" />
  </>
);

