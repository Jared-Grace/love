import { date_now_iso } from "../../../love/public/src/date_now_iso.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function date_now_file() {
  marker("1");
  let now_iso = date_now_iso();
  let now_file = now_iso
    .replace(/:/g, "-")
    .replace(/\./g, "-")
    .replace(/Z$/, "");
  return now_file;
}
