import { npx_run } from "./npx_run.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { retry_standard } from "./retry_standard.mjs";
export async function firebase_deploy_generic(words_after) {
  "What narrows the deploy arrives as a list of words, so a caller asking for one target passes the flag and its value as two words rather than one string that has to be split apart again.";
  let combined = await user_repo_path_combine(".");
  let words = ["firebase-tools", "deploy"].concat(words_after);
  async function lambda() {
    let out = await npx_run(words, {
      cwd: combined,
    });
    return out;
  }
  let printed = await retry_standard(lambda);
  let stdout = {
    stdout: printed,
  };
  return stdout;
}
