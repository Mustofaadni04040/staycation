import React from "react";

import { Fade } from "react-awesome-reveal";

import CompletedIlustration from "assets/images/completed.svg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <img
              src={CompletedIlustration}
              alt="completed checkout apartment"
              className="img-fluid" //agar img nya mengisi penuh tanpa melewati lebar col-4 (bawaan bootstrap)
            />
            <p className="text-gray-500 text-center">
              Kami akan menginformasikan melalui email nanti setelah transaksi
              telah diterima
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
