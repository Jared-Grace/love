import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { command_line_generic } from "./command_line_generic.mjs";
export async function firebase_deploy() {
  let combined = await user_repo_path_combine(".");
  let stdout = await command_line_generic("npx firebase-tools deploy", {
    cwd: combined,
  });
  return stdout;
}
