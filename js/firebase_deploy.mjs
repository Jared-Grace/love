import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_generic } from "./command_line_generic.mjs";
import { firebase_prod_app_unchanged_assert } from "./firebase_prod_app_unchanged_assert.mjs";
export async function firebase_deploy() {
  await firebase_prod_app_unchanged_assert("replace");
  let combined = await user_repo_path_combine(".");
  let stdout = await command_line_generic("npx firebase-tools deploy", {
    cwd: combined,
  });
  return stdout;
}
