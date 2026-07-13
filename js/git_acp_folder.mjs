import { git_ac_folder } from "./git_ac_folder.mjs";
import { git_push_folder } from "./git_push_folder.mjs";
import { promise_later } from "./promise_later.mjs";
export async function git_acp_folder(folder, message) {
  await git_ac_folder(folder, message);
  function push_later() {
    return git_push_folder(folder);
  }
  promise_later(push_later);
}
