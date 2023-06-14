import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;

  .project-container {
    margin: 25px;
    padding: 25px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--primary-bg);
  }
`;

export default Wrapper;
