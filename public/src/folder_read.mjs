import { marker } from "./marker.mjs";
export function folder_read(path_folder) {
  marker("1");
  const all = fs.readdirSync(path_folder);
  return all;
}
