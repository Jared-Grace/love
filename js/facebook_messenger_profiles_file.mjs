import { folder_private_path } from "./folder_private_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function facebook_messenger_profiles_file() {
  "The private file that pairs each messenger conversation number with the facebook profile of the person in it.";
  "★ PRIVATE ONLY: who someone is goes with what they wrote, so it never goes in a repo.";
  let path = text_combine_multiple([
    fn_name("facebook_messenger_profiles_file"),
    ".json",
  ]);
  let file = folder_private_path(path);
  return file;
}
