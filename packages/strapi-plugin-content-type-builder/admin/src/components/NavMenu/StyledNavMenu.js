/**
 *
 * StyledNavMenu
 *
 */

import styled from 'styled-components';

const sizes = {
  header: {
    height: '6rem',
  },
  nav: {
    background: '#f2f3f4',
  },
};

const StyledNavMenu = styled.div`
  width: 100%;
  min-height: calc(100vh - ${sizes.header.height});
  background-color: #f2f3f4;
  padding-top: 0.4rem;
  h3 {
    margin: 0;
    padding-left: 1.5rem;
    line-height: 1.3rem;
    color: #919bae;
    letter-spacing: 0.1rem;
    font-family: Lato;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .documentation,
  section {
    margin-top: 3.3rem;
  }
  section {
    ul {
      margin-top: 1rem;
      padding: 0;
      font-size: 1.3rem;
      list-style-type: none;
    }
    li {
      a {
        display: block;
        //height: 3.4rem;
        padding: 0 1rem 0 1.5rem;
      }
    }
  }
`;

export default StyledNavMenu;
