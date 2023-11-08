import React from "react";
import styled from "styled-components";
import { dummy } from "../movieDummy.js";
import Movie from "./Movie.jsx";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Movies() {
  return (
    <AppContainer>
      {dummy.results.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </AppContainer>
  );
}
