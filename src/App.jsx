import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Slidebar";
import AddStudent from "./pages/AddStudent";
import { Loader } from "lucide-react"; // Import Loader icon from lucide-react
import { useState } from "react";

const App = () => {
  // Define isLoading state (You can change this based on real loading scenarios)
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay or loading state for demonstration
  setTimeout(() => {
    setIsLoading(false); // Simulate loading completion after 3 seconds
  }, 3000);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <Loader className="animate-spin text-blue-600" size={32} /> {/* Render Loader icon with animation */}
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="add-student" element={<AddStudent />} />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
