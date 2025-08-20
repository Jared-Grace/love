import { date_now } from "./date_now.mjs";
export function date_now_iso() {
  let now_iso = date_now().toISOString();
  return now_iso;
}
