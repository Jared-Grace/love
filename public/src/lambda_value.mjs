import { marker } from "./marker.mjs";
export function lambda_value(value) {
  marker("1");
  return function lambda() {
    return value;
  };
}
