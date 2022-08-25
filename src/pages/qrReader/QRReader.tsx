import QrReader from "react-qr-reader";

import { PageHeading } from "../../components/pageHeading/PageHeading";
import { reducer } from "./reducer";
import { QRState } from "./types/qrState";
import { SCAN_QR_CODE_FAILURE, SCAN_QR_CODE_SUCCESS } from "./actions";
import { isValidHex } from "./utils";
import { useReducer } from "react";
import styled from '@emotion/styled';

const initialState: QRState = {
  dataList: [],
  scanning: false,
  success: false,
  error: null,
};

export const QRReader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleScan = (data: string | null) => {
    if (!data) {
      dispatch({ type: SCAN_QR_CODE_FAILURE, payload: "No data found" });
      return;
    }

    if (!!data && !isValidHex(data)) {
      dispatch({
        type: SCAN_QR_CODE_FAILURE,
        payload: `${data} is not a hexadecimal value.`,
      });
      return;
    }

    if (!!data && isValidHex(data)) {
      dispatch({ type: SCAN_QR_CODE_SUCCESS, payload: data });
    }
  };

  const handleError = (err: any) => {
    dispatch({ type: SCAN_QR_CODE_FAILURE, payload: JSON.stringify(err) });
  };

  return (
    <>
      <PageHeading>QR Scanner</PageHeading>
      <QRContainer>
        <QrReader onError={handleError} onScan={handleScan} />
      </QRContainer>
      {JSON.stringify(state)}
    </>
  );
};

const QRContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;
