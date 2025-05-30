//import "./Footer.css"
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  .ticker-wrap {
    width: 100%;
    height: 80px;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    bottom: 0;
    height: 114px;
    background-color: var(--color-foreground);
  }

  .ticker {
    display: inline-block;
    margin-top: 5px;
    animation: marquee 40s linear infinite;
  }
  .item-collection-1 {
    position: relative;
    left: 0%;
    animation: swap 40s linear infinite;
  }

  .item {
    display: inline-block;
    color: var(--color-white);
    font-family: "Montserrat", sans-serif;
    font-size: 26.038px;
    font-weight: 600;
    padding-top: 41px;
    padding-bottom: 35px;
  }

  /* Transition */
  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes swap {
    0%,
    50% {
      left: 0%;
    }
    50.01%,
    100% {
      left: 100%;
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="ticker-wrap">
        <div className="ticker">
          <span className="item-collection-1">
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
            <span className="item">Kasia Wolkowicz · Frontend Devełoper ·</span>
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
          </span>
          <span className="item-collection-2">
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
            <span className="item">Kasia Wolkowicz · Frontend Developer ·</span>
          </span>
        </div>
      </div>
    </StyledFooter>
  );
};
