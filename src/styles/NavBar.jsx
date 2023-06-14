import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0px 1px 1px rgb(79, 107, 230);
  background: var(--primary-bg);

  /* logo */
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    height: var(--nav-height);
  }

  .logo {
    width: 60px;
  }

  /* title */
  .title {
    color: var(--primary-500);
    font-size: 1.4rem;
    padding-right: -100px;
    padding-bottom: 0.3rem;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--primary-300);
  }

  /* links */
  .link-container {
    display: flex;
    margin-right: 10px;
  }

  .link {
    color: var(--primary-500);
    text-decoration: none;
    margin-right: 20px;
    font-weight: bolder;
  }
`;

export default Wrapper;
