import {
  SCAN_QR_CODE,
  SCAN_QR_CODE_END,
  SCAN_QR_CODE_FAILURE,
  SCAN_QR_CODE_SUCCESS,
} from "./actions";
import { QRAction } from "./types/qrAction";
import { QRState } from "./types/qrState";

export const reducer = (state: QRState, action: QRAction) => {
  if (action.type === SCAN_QR_CODE) {
    return {
      ...state,
      scanning: true,
      error: null,
    };
  }
  if (action.type === SCAN_QR_CODE_SUCCESS) {
    return {
      ...state,
      error: null,
      success: true,
      dataList: Array.from(new Set([...state.dataList, action.payload])),
    };
  }
  if (action.type === SCAN_QR_CODE_FAILURE) {
    return {
      ...state,
      error: action.payload,
      success: false,
    };
  }
  if (action.type === SCAN_QR_CODE_END) {
    return {
      ...state,
      scanning: false,
      error: null,
      success: false,
    };
  }

  return state;
};
