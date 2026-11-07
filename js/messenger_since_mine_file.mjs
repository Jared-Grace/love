import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
export function messenger_since_mine_file(id) {
  "$plain id";
  "The private file that holds what conversation number id said since your last message, its drafted reply, and the reply you finalized.";
  let file = folder_private_path(
    text_combine_multiple([fn_name("messenger_since_mine"), "/"]) +
      id +
      ".json",
  );
  return file;
}
