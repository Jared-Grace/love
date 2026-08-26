import { folder_public_absolute_join } from "./folder_public_absolute_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { pwa_manifest_json } from "./pwa_manifest_json.mjs";
import { pwa_service_worker_code } from "./pwa_service_worker_code.mjs";
import { text_combine } from "./text_combine.mjs";
export async function pwa_public_write(app_name) {
  let manifest_name = text_combine(app_name, ".webmanifest");
  let manifest_path = folder_public_absolute_join(manifest_name);
  let contents = pwa_manifest_json(app_name);
  await file_overwrite(manifest_path, contents);
  let sw_path = folder_public_absolute_join("service-worker.js");
  let contents2 = pwa_service_worker_code();
  await file_overwrite(sw_path, contents2);
}
