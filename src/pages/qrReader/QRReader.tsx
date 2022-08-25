import { useReducer, useState } from "react";
import QrReader from "react-qr-reader";
import styled from "@emotion/styled";
import useSound from "use-sound";

import { AppButton } from "../../components/appButton/AppButton";
import { DataList } from "./components/dataList/DataList";
import { isValidHex } from "./utils";
import { PageHeading } from "../../components/pageHeading/PageHeading";
import { QRState } from "./types/qrState";
import { reducer } from "./reducer";
import {
  SCAN_QR_CODE_FAILURE,
  SCAN_QR_CODE_SUCCESS,
  SCAN_QR_CODE,
  SCAN_QR_CODE_END,
} from "./actions";
import { InfoMessage } from "../../components/infoMessage/InfoMessage";
import { SectionHeading } from "../../components/sectionHeading/SectionHeading";
import errSound from "./../../assets/sounds/err.wav";
import successSound from "./../../assets/sounds/beep.wav";

const initialState: QRState = {
  dataList: [],
  scanning: false,
  success: false,
  error: null,
};

export const QRReader = () => {
  const [playSuccess] = useSound(successSound);
  const [playErr] = useSound(errSound);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentData, setCurrentData] = useState("");

  const handleScan = (data: string | null) => {
    if (!!data && currentData !== data) {
      setCurrentData(data);
    }

    if (!!data && currentData === data) {
      return;
    }

    if (!!data && !isValidHex(data)) {
      dispatch({
        type: SCAN_QR_CODE_FAILURE,
        payload: `${data} is not a hexadecimal value.`,
      });
      playErr();
      return;
    }

    if (!!data && isValidHex(data)) {
      dispatch({ type: SCAN_QR_CODE_SUCCESS, payload: data });
      playSuccess();
    }
  };

  const handleError = (err: any) => {
    dispatch({ type: SCAN_QR_CODE_FAILURE, payload: JSON.stringify(err) });
  };

  return (
    <>
      <PageHeading>QR Scanner</PageHeading>
      <QRContainer>
        <QRWrapper>
          {state.scanning && (
            <QrReader onError={handleError} onScan={handleScan} />
          )}

          {state.error && (
            <InfoMessage color='error'>{state.error}</InfoMessage>
          )}
          {state.success && (
            <InfoMessage>{`${currentData} is added.`}</InfoMessage>
          )}

          <ButtonsWrapper>
            <AppButton onClick={() => dispatch({ type: SCAN_QR_CODE })}>
              Scan
            </AppButton>
            <AppButton
              color='secondary'
              onClick={() => dispatch({ type: SCAN_QR_CODE_END })}
            >
              Close
            </AppButton>
          </ButtonsWrapper>
        </QRWrapper>

        <DataListContainer>
          <SectionHeadingWrapper>
            <SectionHeading>Scanned Items</SectionHeading>
          </SectionHeadingWrapper>
          <DataListWrapper>
            <DataList dataList={state.dataList} />
          </DataListWrapper>
        </DataListContainer>
      </QRContainer>
    </>
  );
};

const QRContainer = styled.div`
  max-width: 768px;
  margin: auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  border: 2px solid green;
  padding: 0.5rem;
  height: 83vh;
`;

const QRWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const DataListWrapper = styled.div`
  height: 75%;
  overflow-y: auto;
  @media (min-width: 567px) {
    height: 90%;
  } ;
`;

const DataListContainer = styled.div`
  min-height: 100%;
`;

const SectionHeadingWrapper = styled.div`
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2);
`;
