import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const slidesData = [
  { backgroundImage: './img/inova.png' },
  { backgroundImage: './img/nisan.jpg' },
  { backgroundImage: './img/agya.jpg' },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    const showSlide = (index) => {
      slidesRef.current.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
      });
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    };

    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    showSlide(currentIndex);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <h1>Fifa Tour & Travel</h1>
      </div>

      {/* Navbar Section */}
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* ... (Other Sections) */}

      <div className="carousel-container">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            ref={(el) => (slidesRef.current[index] = el)}
            className="carousel-slide"
            style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
          ></div>
        ))}
      </div>

      <div id="nextBtn" onClick={handleNextSlide}>
        Next
      </div>
      <div id="prevBtn" onClick={handlePrevSlide}>
        Previous
      </div>

      {/* ... (pricing, contact, footer) */}
    </div>
  );
};

export default App;
