import { git_push_folder } from "./git_push_folder.mjs";
import { git_ac_call_folder } from "./git_ac_call_folder.mjs";
export async function git_acp_call_folder(f_name, args, folder) {
  "Hands back the same record the commit underneath it made, so a folder committed";
  "and pushed here is as visible in the answer as one merely committed.";
  "The push is made whether or not this call found anything to commit, which is on";
  "purpose: it also carries out anything an earlier call committed and could not";
  "send, so making it conditional would strand those.";
  let result = await git_ac_call_folder(f_name, args, folder);
  await git_push_folder(folder);
  return result;
}
