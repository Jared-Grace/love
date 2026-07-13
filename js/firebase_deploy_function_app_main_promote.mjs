import { app_shared_promote } from "../../love/js/app_shared_promote.mjs";
import { firebase_deploy_function_app_main } from "../../love/js/firebase_deploy_function_app_main.mjs";
export async function firebase_deploy_function_app_main_promote(a) {
  await firebase_deploy_function_app_main(a);
  await app_shared_promote(a);
}
