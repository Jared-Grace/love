import { marker } from "../../../love/public/src/marker.mjs";
export function catch_call(reject, lambda) {
  let i = function inner() {
    let result = null;
    try {
      result = lambda(...arguments);
    } catch (e) {
      reject(e);
    }
    marker("1");
    return result;
  };
  return i;
}
