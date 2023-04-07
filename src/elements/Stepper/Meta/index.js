import React from "react";

import { Fade } from "react-awesome-reveal";

//{data[current] && data[current].description} : jika ada data yang sekarang maka load data sekarang yang description
//class lead bawaan class bootstrap

export default function Meta({ data, current }) {
  return (
    <Fade delay={300}>
      <div className="text-center" style={{ marginBottom: 30 }}>
        <h1 className="h2">{data[current] && data[current].title}</h1>
        <p className="lead text-gray-500">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
}
