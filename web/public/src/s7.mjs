import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function s7() {
  marker("1");
  function lambda() {
    log("1");
    log("2");
  }
}
