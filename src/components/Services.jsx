
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Services.css"; // Ensure styles are applied
// import "./Style/App.css";
const Services = () => (
    <div id="services" className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {[
                { title: "Ultrasonic Testing", text: "High-frequency sound waves to detect flaws." },
                { title: "Radiographic Testing", text: "X-ray or gamma-ray to inspect materials." },
                { title: "Magnetic Particle Inspection", text: "Detects surface and near-surface defects." },
                { title: "Visual Inspection", text: "Simple yet effective examination method." },
                { title: "Mechanical Failure Analysis", text: "Identifies root causes of material failure." }
            ].map((service, index) => (
                <div className="col" key={index}>
                    <div className="card h-100 bg-transparent border-light shadow-lg">
                        <img src="..." className="card-img-top" alt="Service" />
                        <div className="card-body text-light">
                            <h5 className="card-title">{service.title}</h5>
                            <p className="card-text">{service.text}</p>
                        </div>
                        <div className="card-footer bg-transparent border-top text-light">
                            <small>Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Services;
