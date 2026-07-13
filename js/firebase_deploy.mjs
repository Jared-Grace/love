import { app_g } from "../../love/js/app_g.mjs";
import { user_repo_path_combine } from "../../love/js/user_repo_path_combine.mjs";
import { command_line_generic } from "../../love/js/command_line_generic.mjs";
import { firebase_prod_app_unchanged_assert } from "../../love/js/firebase_prod_app_unchanged_assert.mjs";
import { app_prefix_without_fn } from "../../love/js/app_prefix_without_fn.mjs";
import { app_replace } from "../../love/js/app_replace.mjs";
export async function firebase_deploy() {
  let app_name = app_prefix_without_fn([app_g, app_replace]);
  await firebase_prod_app_unchanged_assert(app_name);
  let combined = await user_repo_path_combine(".");
  let stdout = await command_line_generic("npx firebase-tools deploy", {
    cwd: combined,
  });
  return stdout;
}
