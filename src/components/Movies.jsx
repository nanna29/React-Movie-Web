import React from "react";
import styled from "styled-components";
import { dummy } from "../movieDummy.js";
import Movie from "./Movie.jsx";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

// body {
//   background-color: #22254b;
// }

// .movie-container:hover .movieDetail {
//   display: block;
//   top: 16px;
// }

// .components {
//   position: relative;
// }

export default function Movies() {
  return (
    <AppContainer>
      {dummy.results.map((item) => (
        //<div className="components">
        <Movie
          className="movie-container"
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
        //</div>
      ))}
    </AppContainer>
  );
}
