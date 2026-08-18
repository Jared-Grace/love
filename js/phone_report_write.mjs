import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_txt } from "./file_name_txt.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_split_space } from "./text_split_space.mjs";
export async function phone_report_write(sender, text) {
  arguments_assert(arguments, 2);
  ("keep what a page has to say, so it can be read here instead of read aloud off a small screen.");
  ("The dev server already runs any function in this repo for a page that asks it to, so a page on the phone can hand its own findings straight back to the machine. Before this, a phone-only fault was diagnosed by asking somebody to look at a panel on a small screen and type out what it said, one round trip per guess.");
  ("The whole report is written each time rather than added to the end, so the file always holds one run and never a run mixed with the one before it. A page that wants a history keeps it itself and sends the whole of it.");
  ("Every page that is watching writes to a file of its own, named after who is sending it. It was one file for everybody, and that lost exactly the report it was built to keep: a page left open on the machine says nothing every three seconds, and the phone's account of the fault - sent once, while it was happening - was gone before anybody came to read it. The idle sender always wins a shared file, because it is the one still writing.");
  ("The name is taken apart into words and each word is stripped down to its letters, so a name arriving over the network cannot spell a folder to climb out of this one or a file to land somewhere else.");
  let words = text_split_space(sender);
  let letters = list_map(words, text_letters_only);
  let joined = list_join_underscore(letters);
  let nameless = text_empty_is(joined);
  if (nameless) {
    ("a sender who says nothing about itself still gets kept, under a name that says so, rather than becoming a file with no name at all");
    joined = "unknown";
  }
  let file_name = file_name_txt(joined);
  let folder = "phone_report";
  let name = path_join([folder, file_name]);
  let file_path = folder_gitignore_join(name);
  await file_overwrite(file_path, text);
  return file_path;
}
