import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  let v = null;
  try {
    v = lambda();
  } catch (e) {
    reject(e);
  }
  marker("1");
  return v;
}
