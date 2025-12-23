import { git_ac } from "../../../love/public/src/git_ac.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { git_push_folder } from "../../../love/public/src/git_push_folder.mjs";
export async function git_acp_folder(folder, message) {
  marker("1");
  await git_ac(folder, message);
  await git_push_folder(folder);
}
