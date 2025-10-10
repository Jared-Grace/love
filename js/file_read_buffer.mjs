import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read_buffer(file_path) {
  marker("1");
  let fs = await import("fs");
  let v = await fs.promises.readFile(file_path);
  return v;
}
