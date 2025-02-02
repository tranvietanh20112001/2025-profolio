import { Routes, Route } from "react-router";
import Home from "@pages/homepage/homepage";
import Projects from "@pages/projects/projects";
const Index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
}

export default Index;