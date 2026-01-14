import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_verses_get_upload() {
  marker("1");
  let list = await app_supper_verses_get();
}
