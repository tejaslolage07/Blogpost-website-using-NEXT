import React from "react";
import styles from "../styles/About.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>About Hunting coder</h1>
      <h2>Introduction</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum fugit
        deserunt minima soluta praesentium eos dolores consequuntur a architecto
        labore distinctio obcaecati necessitatibus illum ea, libero officia
        sequi non. Voluptas, ipsam quam adipisci atque nostrum minima, nihil
        pariatur sint quo est soluta expedita? Voluptatibus officiis quam illo
        ex inventore provident.
      </p>
      <h2>Services offered</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non
        voluptatum eum soluta, ab exercitationem natus ipsam tenetur vero
        repellendus quia optio delectus rerum a fuga aliquid totam recusandae.
        Asperiores corporis laudantium eveniet doloremque.
      </p>
      <h4>We offer the following services:</h4>
      <li>Service 1</li>
      <li>Service 2</li>
      <li>Service 3</li>
      <li>Service 4</li>
      <li>Service 5</li>
      <li>Service 6</li>
      <h2>Contact us</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        recusandae, vitae excepturi tempore voluptatem dicta provident eius
        veritatis quidem modi.
      </p>
    </div>
  );
};

export default about;
