import { marker } from "../../../love/public/src/marker.mjs";
export function lambda_value(value) {
  let v = function lambda() {
    return value;
  };
  return v;
}
