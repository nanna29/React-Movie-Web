import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const HeaderContainer = styled.div`
  margin-left: 50px;
  display: flex;
`;

const Navigator = styled.li`
  list-style-type: none;
  margin-left: 20px;
  color: white;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>

      <Link to="/Movies" style={{ textDecoration: "none" }}>
        <Navigator>영화</Navigator>
      </Link>
      <Link to="/TV" style={{ textDecoration: "none" }}>
        <Navigator>TV 프로그램</Navigator>
      </Link>
      <Link to="/Celebrity" style={{ textDecoration: "none" }}>
        <Navigator>인물</Navigator>
      </Link>
    </HeaderContainer>
  );
}
