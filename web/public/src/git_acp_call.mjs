import { git_acp } from "./git_acp.mjs";
export async function git_acp_call(f_name, args) {
  let message = [f_name].concat(args).join(" ");
  await git_acp(message);
}
