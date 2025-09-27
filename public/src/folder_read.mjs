import { marker } from "./marker.mjs";
export async function folder_read(path_folder) {
  marker("1");
  let fs = await import("fs");
  const all = await fs.readdir(path_folder);
  return all;
}
