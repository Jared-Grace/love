import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  let i = function inner() {
    let result = null;
    try {
      log(1);
      result = lambda(...arguments);
      log(3);
    } catch (e) {
      log(2);
      reject(e);
    }
    marker("1");
    return result;
  };
  return i;
}
