import { git_acp_folder } from "./git_acp_folder.mjs";
export async function git_acp(message) {
  let folder = ".";
  await git_acp_folder(folder, message);
}
