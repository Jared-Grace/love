import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function apps_get() {
  let fop = folder_public();
  let fr = folder_read_files(fop);
  marker("1");
  return fr;
}
