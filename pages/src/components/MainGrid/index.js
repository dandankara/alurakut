import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  display: grid;
  grid-gap: 0.5rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  .Profile {
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }

  @media(min-width: 860px){
    max-width: 1100px;
    display: grid;
    grid-template-areas: "Profile Bem-vindo Comunidade";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default MainGrid;