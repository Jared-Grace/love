import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export function app_message_reply_proposals_shown_saved_path() {
  arguments_assert(arguments, 0);
  ("Where the reply rules screen's finished answer is kept between openings.");
  ("★ IN THE PRIVATE FOLDER, NEVER THE REPO OR STORAGE. The answer carries the real messages beside the rewritten ones, with who sent them, and those stay on this machine only.");
  let p = folder_private_path(
    text_combine_multiple([
      fn_name("app_message_reply_proposals_shown"),
      ".json",
    ]),
  );
  return p;
}
