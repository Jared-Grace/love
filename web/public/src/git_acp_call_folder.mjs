import { git_acp_folder } from "./git_acp_folder.mjs";
export async function git_acp_call_folder(f_name, args, folder) {
  let message = [f_name].concat(args).join(" ");
  await git_acp_folder(folder, message);
}
