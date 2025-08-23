import { folder_public } from "./folder_public.mjs";
import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export async function apps_get() {
  marker("1");
  let fop = folder_public();
  let v2 = folder_read(dirPath);
}
