import { folder_public } from "./folder_public.mjs";
import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export async function apps_get() {
  let fop = folder_public();
  let fr = folder_read(fop);
  marker("1");
}
