import { useState } from "react";
import { certificatesData } from "./certificatesData";

function Certificates() {
    const [certificates, setCertificates] = useState(0);
    const { name, image } = certificatesData[certificates];

    const previousSlide = () => {
        setCertificates((certificates => {
            certificates --;
            if (certificates < 0) {
            return certificatesData.length - 1;
          }
          return certificates;
        }))
      }
    
      const nextSlide = () => {
        setCertificates((certificates => {
            certificates ++;
            if (certificates > certificatesData.length - 1) {
                certificates = 0;
          }
          return certificates;
        }))
      }

    return (
        <div className="about">
            <h1>Certificates</h1>
            <div>
            <div className="slide">
                <button onClick={previousSlide} className='btn-slide'>Previous</button>
                <div className="slide-inside">
                    <img src={image} width="250px" height="180px" alt="certificate"/>
                    <p>{name}</p>
                </div>
                <button onClick={nextSlide} className='btn-slide'>Next</button>
            </div>
            </div>
        </div>
    )
}

export default Certificates;