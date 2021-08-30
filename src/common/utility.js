const ratingGenerator = (rating) => {
  let ratingClass = ["far", "far", "far", "far", "far"];
  for (let i = 0; i < 5; i++) {
    if (i < rating) ratingClass[i] = "fas";
  }
  return ratingClass;
};

export { ratingGenerator };
