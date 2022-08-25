import styled from "@emotion/styled";

type Props = {
  children: string;
};

export const SectionHeading = styled.h3<Props>`
  text-align: center;
  padding: 0.5rem;
`;
