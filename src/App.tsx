import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Layout from './Layout'
import Home from './pages/Home';
import Cart from './pages/Cart';
import EventDetails from './pages/EventDetails';
import Events from './pages/Events';
import Notfound from './pages/Not-found';
import Congratulations from './pages/Congratulations';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {ReactQueryProvider} from './lib/QueryClientProvider';
import ProtectedRoute from './components/ProtectedRoutes';
import {store} from './redux/store';

function App() {
  return (
    <HashRouter>
      <ReactQueryProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="event/:id" element={<EventDetails />} />
              <Route path="events" element={<Events />} />
              <Route path="events/:category" element={<Events />} />
              <Route path="*" element={<Notfound />} />
              <Route path="congratulations" element={<Congratulations />} />
            </Route>
            <Route
              path="Admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="/Signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Provider>
      </ReactQueryProvider>
    </HashRouter>
  );
}

export default App;