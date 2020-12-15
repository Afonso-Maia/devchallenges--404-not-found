import styled from 'styled-components'

export const Wrapper = styled.div`
  h1 {
    color: #333;
    font-family: Inconsolata;
    font-size: 24px;
    line-height: 25px;
    text-transform: uppercase;
    letter-spacing: -0.08em;

    /* Change on Desktop */
    margin: 24px 0 64px 24px;
  }

  h2 {
    color: #333;
    font-family: 'Space Mono';
    font-size: 48px;
    line-height: 71px;
    letter-spacing: -0.035em;

    margin: 60px 0 30px 24px;
  }

  p {
    color: #4f4f4f;
    font-family: 'Space Mono';
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.035em;

    margin-bottom: 66px;
    margin-left: 24px;
  }

  button {
    border: none;
    background: #333;
    color: #fff;
    font-family: 'Space Mono';
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.035em;
    text-transform: uppercase;
    padding: 24px 43px;
    font-weight: 700;

    margin-bottom: 96px;
    margin-left: 24px;
  }

  span {
    display: block;
    text-align: center;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 600;
    line-height: 17px;
    color: #333;
    padding-bottom: 24px;
  }
`
