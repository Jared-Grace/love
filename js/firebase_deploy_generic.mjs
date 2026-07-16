import { command_line_generic } from "../../love/js/command_line_generic.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { user_repo_path_combine } from "../../love/js/user_repo_path_combine.mjs";
export async function firebase_deploy_generic(suffix) {
  let combined = await user_repo_path_combine(".");
  let left = "npx firebase-tools deploy";
  let c = text_combine(left, suffix);
  let stdout = await command_line_generic(c, {
    cwd: combined,
  });
  return stdout;
}
