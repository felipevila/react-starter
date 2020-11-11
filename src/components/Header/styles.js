import styled, { css } from 'styled-components';

export const HeaderEl = styled.header`
  background-color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 14px 0;
  ul {
    display: flex;
    margin-left: 40px;
    padding-inline-start: 12px;
    li {
      list-style: none;
      a {
        padding: 20px;
        color: ${({ theme }) => theme.palette.primary.light};
        font-weight: 700;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.values.md - 1}px) {
      position: fixed;
      flex-direction: column;
      top: 93px;
      background: rgba(58, 70, 71, 0.95);
      left: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
      li {
        a {
          display: block;
          color: white;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  ${(props) =>
    props.primary &&
    css`
      max-width: 60px;
    `};
`;
