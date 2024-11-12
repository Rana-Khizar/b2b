import React from 'react';
import '../../index.css';

function TeamP() {
  const teamMembers = [
    { image: 'link_to_image_1.jpg', name: 'John Doe', title: 'Developer' },
    { image: 'link_to_image_2.jpg', name: 'Jane Smith', title: 'Designer' },
    { image: 'link_to_image_3.jpg', name: 'Sam Johnson', title: 'Manager' },
  ];

  return (
    <div className="container">
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 team-card">
            <div className="card h-100 shadow-sm animate-slide-fade">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamP;
