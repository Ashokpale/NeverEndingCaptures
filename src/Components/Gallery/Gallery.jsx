import React from "react";
import "./Gallery.css"; // Ensure this file exists

// Import images correctly
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";


const galleryImages = [
  { id: 1, src: p1, title: "Wedding Shoot" },
  { id: 2, src: p2, title: "Pre-Wedding" },
  { id: 3, src: p3, title: "Baby Shoot" },
  { id: 4, src: p4, title: "Outdoor Photography" },
];

function Gallery() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">📷 Photography Gallery</h2>
      <div className="row">
        {galleryImages.map((image) => (
          <div key={image.id} className="col-md-3 col-sm-6 mb-4">
            <div className="gallery-card">
              <img src={image.src} alt={image.title} className="img-fluid" />
              <div className="overlay">
                <h5>{image.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
