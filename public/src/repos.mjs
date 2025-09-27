import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export function repos() {
  marker("1");
  let files = folder_read("..");
}
