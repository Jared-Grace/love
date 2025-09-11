import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  try {
  } catch (e) {
    lambda;
  }
  marker("1");
}
