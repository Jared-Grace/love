import { folder_private_path } from "./folder_private_path.mjs";
export function messenger_reply_proposed_file(id) {
  "$plain id";
  "The private text file that holds the reply proposed to messenger conversation number id, waiting for a yes on the sandbox screen before it can be sent. The words are kept exactly, line breaks and all, because each answer is its own paragraph.";
  let file = folder_private_path("messenger_reply_proposed/" + id + ".txt");
  return file;
}
