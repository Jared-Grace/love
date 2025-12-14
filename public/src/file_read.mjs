import { marker } from "../../../love/public/src/marker.mjs";
export async function file_read(file_path) {
  marker("1");
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
}
