import React from "react"
import myImage from './assets/hektor.png';

function Sas() {
  return (
    <div className="p-6 max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-700 hover:text-indigo-900 transition duration-300">
        INI TUGAS PRAKTEK SAS
      </h2>

      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
        Tugas nya gampang alhamdullilah ustadz
      </p>
     
      <img src={myImage}
       alt="gambar ana" />
    </div>
  );
}

export default Sas;