import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_generic } from "./command_line_generic.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
import { app_prefix_without_fn } from "./app_prefix_without_fn.mjs";
import { app_replace } from "./app_replace.mjs";
export async function firebase_deploy() {
  let app_name = app_prefix_without_fn(app_replace);
  await firebase_prod_app_unchanged_assert(app_name);
  let combined = await user_repo_path_combine(".");
  let stdout = await command_line_generic("npx firebase-tools deploy", {
    cwd: combined,
  });
  return stdout;
}
