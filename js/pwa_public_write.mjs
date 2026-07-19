import { file_overwrite } from "./file_overwrite.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { pwa_manifest_json } from "./pwa_manifest_json.mjs";
import { pwa_service_worker_code } from "./pwa_service_worker_code.mjs";
import { text_combine } from "./text_combine.mjs";
export async function pwa_public_write(app_name) {
  let manifest_name = text_combine(app_name, ".webmanifest");
  let manifest_joined = folder_public_join(manifest_name);
  let manifest_path = await user_repo_path_combine(manifest_joined);
  await file_overwrite(manifest_path, pwa_manifest_json(app_name));
  let sw_joined = folder_public_join("service-worker.js");
  let sw_path = await user_repo_path_combine(sw_joined);
  await file_overwrite(sw_path, pwa_service_worker_code());
}
