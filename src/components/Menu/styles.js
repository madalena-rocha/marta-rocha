import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;

  margin-top: 10.8rem;
  padding: 3.2rem 2.8rem;
  background-color: var(--secondary-color);

  visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  transition: opacity 0.7s ease-out, visibility 0.7s ease-out;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    a {
      color: var(--primary-color);
    }
  }
`;