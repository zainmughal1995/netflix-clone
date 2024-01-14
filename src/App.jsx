import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Testing from "./Components/Testing";
import Gradient from "./Components/Gradient";
import Movies from "./Components/Movies";

const App = () => {
  return (
    <div className="w-full bg-gray-800">
      <Header />
      <Hero />
      <Gradient />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/movie/now_playing?"}
        sectionTitle={"Now Playing"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/movie/top_rated?"}
        sectionTitle={"Top Rated Movies"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/tv/popular?"}
        sectionTitle={"Popular TV Shows"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/movie/upcoming?"}
        sectionTitle={"Upcoming Movies"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/trending/tv/day?"}
        sectionTitle={"Trending TV Shows Today"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/trending/movie/day?"}
        sectionTitle={"Trending Movies Shows"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/tv/airing_today?"}
        sectionTitle={"Airing Today"}
      />
      <Movies
        baseUrl={"https://api.themoviedb.org/3/tv/on_the_air?"}
        sectionTitle={"On The Air"}
      />
      <Footer />
    </div>
  );
};

export default App;
