import { git_acp_call_repos } from "../../love/js/git_acp_call_repos.mjs";
Error.stackTraceLimit = Infinity;
export async function ai_git() {
  let f_name = "ai";
  let args = [];
  await git_acp_call_repos(f_name, args);
}
