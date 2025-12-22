import { app_api } from "../../../love/public/src/app_api.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_fn(fn, args) {
  marker("1");
  let f_name = fn.name;
  let r = await app_api(f_name, args);
  return r;
}
