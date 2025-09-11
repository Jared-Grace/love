import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export function catch_call(reject, lambda) {
  let i = function inner() {
    let result = null;
    try {
      log(message);
      result = lambda(...arguments);
    } catch (e) {
      log(message2);
      reject(e);
    }
    marker("1");
    return result;
  };
  return i;
}
