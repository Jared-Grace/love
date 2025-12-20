import { marker } from "../../../love/public/src/marker.mjs";
import { app_api_cache_clear } from "../../../love/public/src/app_api_cache_clear.mjs";
import { file_read } from "../../../love/public/src/file_read.mjs";
export async function sandbox() {
  marker("1");
  let fn = file_read;
  const args = ["../love/public/src/app_g_main.mjs"];
  app_api_cache_clear(fn, args);
}
