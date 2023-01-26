const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b1f12dfadb5706f98ef372265da2c6d9",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
