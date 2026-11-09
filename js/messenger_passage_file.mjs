import { folder_private_path } from "./folder_private_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function messenger_passage_file(id) {
  "$plain id";
  "The private file that holds the passage drafted for conversation number id - its link and the words to send - and when it was sent.";
  let file = folder_private_path(
    text_combine_multiple([fn_name("messenger_passage"), "/"]) + id + ".json",
  );
  return file;
}
