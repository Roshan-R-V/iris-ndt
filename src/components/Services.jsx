
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Services.css";
import {useEffect, useRef, useState} from "react"; // Ensure styles are applied

const Services = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const services = [
        { title: "Ultrasonic Testing", text: "High-frequency sound waves to detect flaws.", img: "src/assets/Ultrasonic.webp" },
        { title: "Radiographic Testing", text: "X-ray or gamma-ray to inspect materials.", img: "src/assets/radioghraphic.webp" },
        { title: "Magnetic Particle Inspection", text: "Detects surface and near-surface defects.", img: "src/assets/magnetic.webp" },
        { title: "Visual Inspection", text: "Simple yet effective examination method.", img: "src/assets/visual.jpeg" },
        { title: "Mechanical Failure Analysis", text: "Identifies root causes of material failure.", img: "src/assets/failure.png" }
    ];

    // Calculate total number of slides
    const totalSlides = services.length;
    const cardsPerSlide = {
        mobile: 1,
        desktop: 3
    };

    // Calculate total pages based on viewport
    const totalMobilePages = Math.ceil(totalSlides / cardsPerSlide.mobile);
    const totalDesktopPages = Math.ceil(totalSlides / cardsPerSlide.desktop);

    const scrollLeft = () => {
        setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
    };

    const scrollRight = () => {
        setActiveIndex(prev => {
            const isMobile = window.innerWidth < 768;
            const maxIndex = isMobile ? totalMobilePages - 1 : totalDesktopPages - 1;
            return prev < maxIndex ? prev + 1 : prev;
        });
    };

    useEffect(() => {
        if (scrollRef.current) {
            const isMobile = window.innerWidth < 768;
            const cardWidth = isMobile ? scrollRef.current.offsetWidth : scrollRef.current.offsetWidth / 3;
            scrollRef.current.scrollTo({
                left: activeIndex * cardWidth * (isMobile ? 1 : 3),
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

                <div className="position-relative carousel-container">
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
                        {/* Mobile carousel (1 card per view) */}
                        <div className="d-flex d-md-none">
                            {services.map((service, index) => (
                                <div
                                    className="card flex-shrink-0 mx-2 shadow-lg bg-dark text-white border-secondary"
                                    style={{ width: "100%", minWidth: "calc(100% - 16px)" }}
                                    key={index}
                                >
                                    <img src={service.img} className="card-img-top" alt={service.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{service.title}</h5>
                                        <p className="card-text">{service.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop carousel (3 cards per view) */}
                        <div className="d-none d-md-flex">
                            {services.map((service, index) => (
                                <div
                                    className="card flex-shrink-0 mx-2 shadow-lg bg-dark text-white border-secondary"
                                    style={{ width: "calc(33.333% - 16px)" }}
                                    key={index}
                                >
                                    <img src={service.img} className="card-img-top h-50" alt={service.title} />
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
                        disabled={(window.innerWidth < 768 && activeIndex >= totalMobilePages - 1) ||
                            (window.innerWidth >= 768 && activeIndex >= totalDesktopPages - 1)}
                    >
                        &#9655;
                    </button>
                </div>

                {/* Pagination indicators */}
                <div className="d-flex justify-content-center mt-4">
                    {[...Array(window.innerWidth < 768 ? totalMobilePages : totalDesktopPages)].map((_, index) => (
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
    );
};


export default Services;
