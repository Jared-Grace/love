import { marker } from "./marker.mjs";
export function lambda_value(value) {
  marker("1");
  let v = function lambda() {
    return value;
  };
  return v;
}
