import { date_now_iso } from "./date_now_iso.mjs";
import { marker } from "./marker.mjs";
export function date_now_file() {
  marker("1");
  return date_now_iso();
}
