import { firebase_deploy_function_destination_latest } from "../../../love/public/src/firebase_deploy_function_destination_latest.mjs";
import { app_main } from "../../../love/public/src/app_main.mjs";
export async function app_karate_latest() {
  await app_main(
    "app_karate_main",
    "karate-code",
    firebase_deploy_function_destination_latest,
  );
}
