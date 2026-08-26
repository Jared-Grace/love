import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { text_split_last } from "./text_split_last.mjs";
import { folder_js } from "./folder_js.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function folder_repo_love_js_spelled() {
  arguments_assert(arguments, 0);
  ("The way this repo's javascript folder turns up in the middle of a path - the name the repo is checked out under, the javascript folder after it, and a slash on either side.");
  ("There are several repositories side by side here and every one of them has a javascript folder, so the javascript folder's name on its own picks out all of them. The checkout's name in front of it is what narrows it to this one.");
  ("Read off the repo rather than typed. Whoever renames the checkout renames this with it, which is the whole point: everything asking this question is asking it about a spelling that would otherwise go quietly wrong.");
  ("The slashes are what stop a longer word ending in the same letters from answering. Without the one in front, a repo called something-love matches; without the one behind, a folder called js-old does.");
  let folder = folder_repo_love();
  let repo_name = text_split_last(folder, "/");
  let js = folder_js();
  let spelled = text_combine_multiple(["/", repo_name, "/", js, "/"]);
  return spelled;
}
