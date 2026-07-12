import { git_acp_call_folder } from "./git_acp_call_folder.mjs";
export async function git_acp_call(f_name, args) {
  let folder = ".";
  await git_acp_call_folder(f_name, args, folder);
}
