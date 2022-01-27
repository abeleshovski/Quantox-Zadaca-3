import { resetFields } from "../redux/game/status";
import { nullValueArray } from "./Array/nullValueArray";

export const reset = (dispatch) => {
  dispatch(resetFields());
  return nullValueArray;
};
