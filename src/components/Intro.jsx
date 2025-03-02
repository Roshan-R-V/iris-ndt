const Intro = () => {
    return (
        <div id="intro"
             className="text-center p-5 d-flex flex-column justify-content-center align-items-center min-vh-100 z-2"
        //      style={
        //     {backgroundColor: "rgba(0, 0, 0, 0.5)", color: "white"}
        // }
            >
            <h1 className="display-4 fw-bold">Welcome to IRIS NDT</h1>
            <p className="lead">Providing advanced non-destructive testing solutions.</p>
            <button className="btn btn-primary mt-3">Learn More</button>
        </div>
    );
};

export default Intro;
