import { useReducer, useState } from "react";
import QrReader from "react-qr-reader";
import styled from "@emotion/styled";

import { AppButton } from "../../components/appButton/AppButton";
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

const initialState: QRState = {
  dataList: [],
  scanning: false,
  success: false,
  error: null,
};

export const QRReader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentData, setCurrentData] = useState("");

  const handleScan = (data: string | null) => {
    if (!data) {
      dispatch({
        type: SCAN_QR_CODE_FAILURE,
        payload: "No data found, try again",
      });
      return;
    }

    if (currentData === data) {
      return;
    }

    setCurrentData(data);

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
        {state.scanning && (
          <QrReader onError={handleError} onScan={handleScan} />
        )}

        <div>
          <AppButton onClick={() => dispatch({ type: SCAN_QR_CODE })}>
            Scan
          </AppButton>
          <AppButton
            color='secondary'
            onClick={() => dispatch({ type: SCAN_QR_CODE_END })}
          >
            Close
          </AppButton>
        </div>
      </QRContainer>
    </>
  );
};

const QRContainer = styled.div`
  max-width: 600px;
  margin: auto;
`;
