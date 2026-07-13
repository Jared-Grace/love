import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_generic } from "./command_line_generic.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { each_async } from "./each_async.mjs";
export async function firebase_deploy() {
  let app_names = apps_frozen_names();
  await each_async(app_names, firebase_prod_app_unchanged_assert);
  let combined = await user_repo_path_combine(".");
  let stdout = await command_line_generic("npx firebase-tools deploy", {
    cwd: combined,
  });
  return stdout;
}
