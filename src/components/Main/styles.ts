import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-rows: repeat(min-content, 4);

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
    display: inline-block;
    width: 216px;
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
`
