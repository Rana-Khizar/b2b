import React from 'react'
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import feature4 from '../assets/feature4.png'
import feature5 from '../assets/feature5.png'


const Card = () => {
    const features = [
        { id: 1, icon: feature1, title: "E-Commerce", description: "Monotonectally solutek in fermentum quis" },
        { id: 5, icon: feature5, title: "Consigment", description: "Monotonectally solutek in fermentum quis" },
        { id: 6, icon: feature5, title: "Exhibition", description: "Monotonectally solutek in fermentum quis" },
        { id: 2, icon: feature2, title: "Brick & Mortar", description: "Monotonectally solutek in fermentum quis" },
        { id: 4, icon: feature4, title: "Import Export", description: "Monotonectally solutek in fermentum quis" },
        { id: 3, icon: feature3, title: "Franhise", description: "Monotonectally solutek in fermentum quis" },
        
    ];

    return (
        <>
          <div className="feature-area">
    <div className="container">
        <div className="row about align-items-center">
            {features
                .filter((feature) => feature.id <= 6)
                .map((feature) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4" key={feature.id}>
                        <div className="feature-sinble-single-box text-center">
                            <div className="feature-icon">
                                <img src={feature.icon} alt={feature.title} className="img-fluid" />
                            </div>
                            <div className="feature-content">
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-text">{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    </div>
</div>


        </>
    )
}

export default Card
