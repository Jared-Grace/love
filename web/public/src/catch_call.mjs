import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  try {
    let v = null;
    v = lambda();
    return v;
  } catch (e) {
    reject(e);
  }
  marker("1");
}
