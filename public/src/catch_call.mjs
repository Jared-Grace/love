import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  let v = function inner() {
    let result = null;
    try {
      result = lambda();
    } catch (e) {
      reject(e);
    }
    marker("1");
    return result;
  };
  return v;
}
