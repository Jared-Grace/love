import { date_iso_to } from "../../../love/public/src/date_iso_to.mjs";
import { date_now } from "../../../love/public/src/date_now.mjs";
export function date_now_iso() {
  const now = date_now();
  let now_iso = date_iso_to(now);
  return now_iso;
}
