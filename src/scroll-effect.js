import React, { useEffect, useRef } from "react";


const ScrollE = () => {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    })
  );

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.current.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);

  return (
    <div className="services hidden">
      <section className="section-service"  >
        <ul className="ul-list hidden">
          <h3>Polishing</h3>
          <br />
          <li>-Polish to remove light imperfections</li>
          <li>-Polishing compound to remove deeper scratches</li>
          <li>-Orbital or rotary and polishing</li>
          <li>-Carnauba wax for protection and shine.</li>
        </ul>
      </section>

      <section className="section-service" >
        <ul className="ul-list hidden">
          <h3>Air Suspension</h3>
          <br />
          <li>-General Inspection</li>
          <li>-Compressor and Valves Testing</li>
          <li>-Replacing Air Bags</li>
          <li>-Compressor Replacement</li>
          <li>-Shock Absorber Replacement</li>
          <li>-Suspension Alignment</li>
        </ul>
      </section>

      <section className="section-service" >
        <ul className="ul-list hidden">
          <h3>Rims/Tires</h3>
          <br />
          <li>-Rims Sale</li>
          <li>-Assembly and Balancing</li>
          <li>-Wheel Alignment</li>
          <li>-Repair of Damaged rims</li>
          <li>-Tires and Related Services</li>
          <li>-Rims Painting</li>
        </ul>
      </section>
    </div>
  );
};

// Adicione a diretiva "use client"
// @ts-ignore


export default ScrollE;
