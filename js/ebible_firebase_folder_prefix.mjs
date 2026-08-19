import { ebible_firebase_folder_path } from "./ebible_firebase_folder_path.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_firebase_folder_prefix(bible_folder) {
  "$plain bible_folder";
  "The opening every one of a bible's file names carries in storage, ending at the step that closes its folder off from the next one.";
  "IT ENDS IN A SEPARATOR AND THAT IS THE WHOLE POINT OF IT. Storage has no folders, only names that happen to share an opening, so a listing asked for an opening without the closing step matches every longer folder name that starts the same way. Asking about a bible whose folder is a short word would then answer for several bibles at once and read as that one bible holding everything.";
  "The path without it is a different thing and still wanted, because naming a file under a folder joins the step on itself.";
  let joined = ebible_firebase_folder_path(bible_folder);
  let slash = text_slash_forward();
  let prefix = text_combine(joined, slash);
  return prefix;
}
