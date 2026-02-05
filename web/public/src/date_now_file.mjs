import { date_now_iso } from "../../../love/public/src/date_now_iso.mjs";
export function date_now_file() {
  let now_iso = date_now_iso();
  let now_file = now_iso
    .replace(/:/g, "-")
    .replace(/\./g, "-")
    .replace(/Z$/, "");
  return now_file;
}
