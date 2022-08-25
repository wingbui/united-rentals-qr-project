import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";
import { MouseEvent } from "react";

type Color = "primary" | "secondary";

type Props = {
  children: string;
  color?: Color;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const getColors = (color?: Color): SerializedStyles => {
  switch (color) {
    case "primary":
      return css`
        background: #0262a7;
        color: #fff;
      `;
    case "secondary":
      return css`
        color: #5e5c64e6;
      `;
    default:
      return css``;
  }
};

export const AppButton = styled.button<Props>`
  ${({ color }) => getColors(color)};
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
`;

AppButton.defaultProps = {
  color: "primary",
};
