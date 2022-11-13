import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';

function App() {
  return (
    <div className='font-lato'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
