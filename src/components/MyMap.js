import React from "react";


export default function MyMap({ lat, lon }) {


  return (
    // Important! Always set the container height explicitly
    <iframe
      title="This is a unique title"
      style={{border:"0",frameBorder:"0",height:"450",width:"600"}}
      src={`https://www.google.com/maps/embed/v1/view?center=${lat},${lon}&zoom=${'11'}`}
    ></iframe>
  );
}
