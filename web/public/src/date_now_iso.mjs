import {date_now} from "./date_now.mjs";
export function date_now_iso() {
  let v = date_now().toISOString();
  return v;
}
