import styled from "styled-components";

export const StyledSearchResult = styled.section`
  margin-top: ${(props) => props.theme.space.headerMargin};
  h2 {
    grid-area: a;
  }
  >div {
    grid-column: 1 / -1;
  }
`;