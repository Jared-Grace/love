import { app_promote } from "../../../love/public/src/app_promote.mjs";
import { firebase_deploy_function_app_main } from "../../../love/public/src/firebase_deploy_function_app_main.mjs";
export async function firebase_deploy_function_app_main_promote(a) {
  await firebase_deploy_function_app_main(a);
  await app_promote(a);
}
