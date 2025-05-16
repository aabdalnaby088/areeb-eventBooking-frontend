import {  HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Notfound from "./pages/Not-found";
import Home from "./pages/Home";
import "./index.css";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Login from "./pages/Login";
import { ReactQueryProvider } from "./lib/QueryClientProvider";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Cart from "./pages/Cart";
import Congratulations from "./components/Congratulations";
import { Toaster } from 'react-hot-toast';
import Admin from "./pages/Admin";

function App() {
  return (
    <HashRouter>
    <ReactQueryProvider>
      <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />

        <Route path="cart" element={<Cart/>} />
        <Route path="event/:id" element={<EventDetails/>} />
        <Route path="events" element={<Events/>} />
        <Route path="events/:category" element={<Events/>} />
        <Route path="*" element={<Notfound/>} />
        <Route path="congratulations" element={<Congratulations/>} />
      </Route>
        <Route path="Admin" element={<Admin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="login" element={ <Login/> } />
    </Routes>
    </Provider>
    </ReactQueryProvider>
    </HashRouter>
  );
}

export default App;