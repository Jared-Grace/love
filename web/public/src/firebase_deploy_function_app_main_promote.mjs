import { app_promote } from "../../../love/public/src/app_promote.mjs";
import { firebase_deploy_function_app_main } from "../../../love/public/src/firebase_deploy_function_app_main.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy_function_app_main_promote(a) {
  marker("1");
  let v2 = await app_promote(a);
  let v = await firebase_deploy_function_app_main(a);
  return v;
}
