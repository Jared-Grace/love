import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  try {
    return lambda;
  } catch (e) {
    reject(e);
  }
  marker("1");
}
