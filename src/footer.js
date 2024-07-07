import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-light text-center text-lg-start" id = "contact">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact Us</h5>
                        <p>Phone: +123-456-7890</p>
                        <p>Email: info@yourcompany.com</p>
                    </div>
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Information</h5>
                        <p>Developed by HPC Lab, SEECS NUST. All rights reserved.</p>
                    </div>
                </div>
                <div className="text-center p-3 bg-light border-top">
                © {new Date().getFullYear()} Presentation maker
            </div>
            </div>
            
        </footer>
    );
};

export default Footer;
