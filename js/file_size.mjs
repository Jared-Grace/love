import { property_get } from "./property_get.mjs";
export async function file_size(file_path) {
  let fs = await import("fs");
  let promises = property_get(fs, "promises");
  let stat = await promises.stat(file_path);
  let size = property_get(stat, "size");
  return size;
}
