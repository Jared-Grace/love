import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_read(path_folder) {
  marker("1");
  let fs = await import("fs");
  const all = await fs.promises.readdir(path_folder);
  return all;
}
