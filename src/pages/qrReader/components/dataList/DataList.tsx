import styled from "@emotion/styled";
import { FC } from "react";

interface DataListProps {
  dataList: string[];
}

export const DataList: FC<DataListProps> = ({ dataList }) => {
  return (
    <DataListContainer>
      {dataList.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </DataListContainer>
  );
};

const DataListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;
