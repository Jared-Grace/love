import { git_acp } from "./git_acp.mjs";
import { function_run } from "./function_run.mjs";

export async function function_run_git(funcName, args) {
  let result = await function_run(funcName, args);
  console.log("✅ Result:", result);
  await git_acp([funcName].concat(args).join(" "));
  return result;
}
