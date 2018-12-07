import React from "react";

export const GiphyItem = ({ title, images }) => (
  <div>
    <img src={images} alt={title} />
  </div>
);
