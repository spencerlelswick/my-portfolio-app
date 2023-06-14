import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;

  h1 {
    font-size: 2rem;
    color: var(--primary-500);
  }

  .profile-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bio {
    margin: 10px;
  }
`;

export default Wrapper;
