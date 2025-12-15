import { app_api } from "../../../love/public/src/app_api.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_api_fn(f_name, args) {
  marker("1");
  return await app_api(f_name, args);
}
