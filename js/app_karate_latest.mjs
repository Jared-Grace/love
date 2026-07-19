import { firebase_deploy_function_destination_latest } from "./firebase_deploy_function_destination_latest.mjs";
import { app_shared_main } from "./app_shared_main.mjs";
export async function app_karate_latest() {
  await app_shared_main(
    "app_karate_main",
    "karate-code",
    firebase_deploy_function_destination_latest,
  );
}
