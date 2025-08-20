import { date_now } from "./date_now.mjs";
export function date_now_iso() {
  const d = date_now();
  let now_iso = date_iso_to(d);
  return now_iso;
}
function date_iso_to(d) {
  return d.toISOString();
}

