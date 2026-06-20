import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './store/store';
import { createBrowserRouter } from 'react-router';
import Signin from './pages/signin/Signin';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Signin></Signin>
            },
            {
                path: '/home',
                element: <h2>Dashboard</h2>
            },
            {
                path: '/decisions',
                element: <h2>Decisions</h2>
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
)
