import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import Layout from './components/Layout/Layout';
import PostLayout from './components/PostLayout/PostLayout';
import './App.css';

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path="about" element={<About />} />

                    <Route path="contact" element={<Contact />} />
                    
                    <Route path="post" element={<PostLayout />}>
                        <Route index element={<Post />} />
                        <Route path=":category" element={<PostDetail />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Route>

                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes> 
        </BrowserRouter>
    )
}

export default App;