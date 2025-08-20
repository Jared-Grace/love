import { date_iso_to } from "./date_iso_to.mjs";
import { date_now } from "./date_now.mjs";
export function date_now_iso() {
  const now = date_now();
  let now_iso = date_iso_to(now);
  return now_iso;
}
