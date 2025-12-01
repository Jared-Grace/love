import { newline_windows } from "../../../love/public/src/newline_windows.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function newline_windows_code() {
  marker("1");
  let n = newline_windows();
  let v = `\\r\\n`;
  return v;
}
