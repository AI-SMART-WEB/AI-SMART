import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import ApplicationForm from './pages/ApplicationForm';
import InternationalStudents from './pages/InternationalStudents';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import StudentPortal from './pages/StudentPortal';
import BAIDProgram from './pages/BAIDProgram';
import AISMARTProgram from './pages/AISMARTProgram';
import TuitionPathway from './pages/TuitionPathway';
import AISMARTMSc from './pages/AISMARTMSc';
import TourismHospitalityProgram from './pages/TourismHospitalityProgram';
import StrategicManagementProgram from './pages/StrategicManagementProgram';
import StrategicManagementMSc from './pages/StrategicManagementMSc';
import MastersPrograms from './pages/MastersPrograms';
import UndergraduateProgramsComparison from './pages/UndergraduateProgramsComparison';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/application" element={<ApplicationForm />} />
            <Route path="/international" element={<InternationalStudents />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/student-portal" element={<StudentPortal />} />
            <Route path="/baid-program" element={<BAIDProgram />} />
            <Route path="/aismart-program" element={<AISMARTProgram />} />
            <Route path="/tuition-pathway" element={<TuitionPathway />} />
            <Route path="/aismart-msc" element={<AISMARTMSc />} />
            <Route path="/tourism-hospitality-program" element={<TourismHospitalityProgram />} />
            <Route path="/strategic-management-program" element={<StrategicManagementProgram />} />
            <Route path="/strategic-management-msc" element={<StrategicManagementMSc />} />
            <Route path="/masters-programs" element={<MastersPrograms />} />
            <Route path="/undergraduate-comparison" element={<UndergraduateProgramsComparison />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
