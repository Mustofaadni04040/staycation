import React from "react";

import { Fade } from "react-awesome-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <Fade direction="left" delay={500}>
        <div className="container-grid sm">
          {data.map((item, index) => {
            return (
              <div
                key={`FeaturedIamge-${index}`}
                className={`item ${index > 0 ? "column-5" : "column-7"} ${
                  index > 0 ? "row-1" : "row-2"
                }`}
              >
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img src={item.url} alt={item._id} className="img-cover" />
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
