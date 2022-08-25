import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

type Color = "success" | "error";

type Props = {
  children: string;
  color?: Color;
};

const getColor = (color?: Color): SerializedStyles => {
  switch (color) {
    case "success":
      return css`
        color: green;
      `;
    case "error":
      return css`
        color: red;
      `;
    default:
      return css``;
  }
};

export const InfoMessage = styled.div<Props>`
  ${({ color }) => getColor(color)};
  text-align: center;
`;

InfoMessage.defaultProps = {
  color: "success",
};
