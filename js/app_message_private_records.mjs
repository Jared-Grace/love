import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { folder_private_storage_path } from "./folder_private_storage_path.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { folder_read_recursive_async } from "./folder_read_recursive_async.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_reverse } from "./list_reverse.mjs";
export async function app_message_private_records() {
  "Every message already on this machine's disk, read back as what it says: who wrote it, when, the words themselves, and the address the file sits at. Newest first, because that is the one somebody opening this came to read.";
  "It asks the disk and never the network, which is what makes it the half a screen can lean on. The bringing down is its own command beside this one, so a page can say how many arrived and then say what they are, and a reading with the network unplugged still answers with everything that was ever brought down.";
  "The sender is read off the folder rather than out of the file, because the file does not say. The mirror keeps the bucket's own shape - one folder per person, one file per message - so who wrote it is the step of the address above the file, and it is there for every message without anybody having had to write it into one.";
  "A missing folder answers with nothing rather than throwing. Nothing has been brought down yet is an ordinary state on a machine that has just been set up, and an empty answer is the true one for it; a throw here would read to the page as the reading being broken.";
  arguments_assert(arguments, 0);
  let prefix = messages_firebase_path();
  let root = folder_private_storage_path(prefix);
  let there = await folder_exists(root);
  if (not(there)) {
    let r = [];
    return r;
  }
  let relatives = await folder_read_recursive_async(root);
  async function lambda(relative) {
    let f_path = path_join([root, relative]);
    let record = await file_read_json(f_path);
    let message = property_get(record, "message");
    let when = property_get(record, "when");
    let parts = text_split(relative, "/");
    let who = list_first(parts);
    let v = {
      who: who,
      when: when,
      message: message,
      f_path: f_path,
    };
    return v;
  }
  let read = await list_map_unordered_async(relatives, lambda);
  let sorted = list_sort_text_property(read, "when");
  let newest_first = list_reverse(sorted);
  return newest_first;
}
