import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ScrollManager from './components/ScrollManager.jsx';
import PageMeta from './components/PageMeta.jsx';

// Each page loads only when it is visited, so the first page opens faster.
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Work = lazy(() => import('./pages/Work.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

// Shown for the split second while a page loads: same dark background, no flash.
const Loading = () => <div style={{ minHeight: '100vh', backgroundColor: '#05060B' }} aria-busy="true" />;

export default function App() {
  return (
    <>
      <ScrollManager />
      <PageMeta />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unknown addresses go back to the homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
