import { file_read } from "./file_read.mjs";
import { marker } from "./marker.mjs";
export async function repos() {
  marker("1");
  let contents = await file_read(file_path);
}
