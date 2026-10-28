import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function cloudflare_pages_firebase_hosting() {
  arguments_assert(arguments, 0);
  ("The rules for how pages are served are written once, in firebase.json, and the Cloudflare copy is read off them, so the two places serving the same folder cannot drift apart.");
  let repo = folder_repo_love();
  let file_path = path_join([repo, "firebase.json"]);
  let config = await file_read_json(file_path);
  let hosting = property_get(config, "hosting");
  return hosting;
}
