import { app_a_download_paths } from "../../../love/public/src/app_a_download_paths.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let filtered = await app_a_download_paths();
  return filtered;
}
