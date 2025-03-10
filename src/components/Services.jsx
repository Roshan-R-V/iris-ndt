import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Services.css";
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const services = [
        { title: "Ultrasonic Testing", text: "High-frequency sound waves to detect flaws.", img: "src/assets/Ultrasonic.webp" },
        { title: "Radiographic Testing", text: "X-ray or gamma-ray to inspect materials.", img: "src/assets/radioghraphic.webp" },
        { title: "Magnetic Particle Inspection", text: "Detects surface and near-surface defects.", img: "src/assets/magnetic.webp" },
        // { title: "Visual Inspection", text: "Simple yet effective examination method.", img: "src/assets/visual.jpeg" },
        { title: "Mechanical Failure Analysis", text: "Identifies root causes of material failure.", img: "src/assets/failure.png" },
        { title: "Eddy Current Tube Inspection", text: "Rapid detection of damages like wall loss and pitting.", img: "src/assets/eddyCurrent.jpg" },
        { title: "Phased Array UT", text: "Advanced ultrasonic testing for weld discontinuities.", img: "src/assets/phaseArray_2.jpg" },
        { title: "Time-of-Flight Diffraction (TOFD)", text: "Efficient weld testing method.", img: "src/assets/TOFD.jpg"  },
        { title: "Magnetic Flux Leakage", text: "Detects corrosion and pitting in steel structures.", img: "src/assets/fluxLeakage.webp"  },
        { title: "Remote Field Electromagnetic Testing (RFET)", text: "Inspects ferromagnetic tubing.", img: "src/assets/RFET.jpg"  },
        { title: "Internal Rotary Inspection System (IRIS)", text: "Ultrasonic technique for pipes and tubes inspection.", img: "src/assets/IRIS.jpeg"  },
        { title: "Condenser Leak Testing", text: "Addresses efficiency concerns in power plants.", img: "src/assets/CondenserLeak.webp"  },
        { title: "Fugitive Emission Testing", text: "Tests valves and fittings for emissions.", img: "src/assets/fugitiveTesting.jpg"  },
        { title: "Cryogenic and Low-Temperature Testing", text: "Tests valves at controlled temperatures down to -196°C.", img: "src/assets/CryoLeak.jpg"  },
        { title: "Helium Leak Testing", text: "Leak testing services across India and the Middle East.", img: "src/assets/healiumLeak2.jpg"  }
    ];

    // Calculate total number of slides for desktop
    const totalSlides = services.length;
    const desktopCardsPerSlide = 3;
    const totalDesktopPages = Math.ceil(totalSlides / desktopCardsPerSlide);

    const scrollLeft = () => {
        setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
    };

    const scrollRight = () => {
        setActiveIndex(prev => (prev < totalDesktopPages - 1 ? prev + 1 : prev));
    };

    useEffect(() => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.offsetWidth / 3;
            scrollRef.current.scrollTo({
                left: activeIndex * cardWidth * 3,
                behavior: 'smooth'
            });
        }
    }, [activeIndex]);

    // Handler for window resize events
    useEffect(() => {
        const handleResize = () => {
            // Reset active index when switching between mobile and desktop
            setActiveIndex(0);
            // Trigger scroll to beginning
            if (scrollRef.current) {
                scrollRef.current.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="services" className="min-vh-100 container-fluid py-5 bg-black text-white">
            <div className="container">
                <h2 className="mb-5 text-center text-white">Our Services</h2>

                {/* Mobile and iPad View (stacked cards) - visible on screens up to 991px */}
                <div className="d-block d-lg-none">
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-12 col-md-6" key={index}>
                                <div className="card h-100 shadow-lg bg-dark text-white border-secondary">
                                    <img src={service.img} className="card-img-top" alt={service.title} style={{ height: "200px", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop View (carousel) - visible on screens 992px and up */}
                <div className="d-none d-lg-block position-relative carousel-container">
                    {/* Navigation buttons */}
                    <button
                        className="btn btn-outline-light rounded-circle position-absolute start-0 top-50 translate-middle-y z-3"
                        onClick={scrollLeft}
                        disabled={activeIndex === 0}
                    >
                        &#9665;
                    </button>

                    {/* Carousel */}
                    <div
                        className="overflow-hidden mx-5"
                        ref={scrollRef}
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="d-flex">
                            {services.map((service, index) => (
                                <div
                                    className="card flex-shrink-0 mx-2 shadow-lg bg-dark text-white border-secondary"
                                    style={{ width: "calc(32% )" }}
                                    key={index}
                                >
                                    <img
                                        src={service.img}
                                        className="card-img-top"
                                        alt={service.title}
                                        style={{ height: "400px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="btn btn-outline-light rounded-circle position-absolute end-0 top-50 translate-middle-y z-3"
                        onClick={scrollRight}
                        disabled={activeIndex >= totalDesktopPages - 1}
                    >
                        &#9655;
                    </button>

                    {/* Pagination indicators */}
                    <div className="d-flex justify-content-center mt-4">
                        {[...Array(totalDesktopPages)].map((_, index) => (
                            <button
                                key={index}
                                className={`btn btn-sm mx-1 ${activeIndex === index ? 'btn-light' : 'btn-outline-light'}`}
                                style={{ width: '30px', height: '10px', padding: '0', borderRadius: '5px' }}
                                onClick={() => setActiveIndex(index)}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
