import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'
import AccountPage from './components/AccountPage';
import Gallery from './components/Gallery';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about/',
                element: <AboutPage />,
            },
            {
                path: 'account/',
                element: <AccountPage/>,   
            },
            {
                path: 'gallery/',
                element: <Gallery/>,
            }
            
        ],
    },
]);

export default router;
