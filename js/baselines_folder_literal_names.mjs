import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { list_add } from "./list_add.mjs";
import { path_leaf_without_extension } from "./path_leaf_without_extension.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
export async function baselines_folder_literal_names() {
  "Every function that writes the baselines room out as part of an address rather than asking the one function that says where the room is.";
  "Found by reading the files rather than by asking the ratchets who they are. The sweep that gathers the ratchets goes by the word baseline in a function's name, which is right for finding ratchets and wrong for finding this: what is wanted here is anybody at all who spells the room, and the two that were furthest out of step were exactly the two that no naming rule would have gathered - a list of places a folder rename must not write into, and the mover that puts a loose record into the room.";
  "The room is asked for rather than written out, so this cannot be the fifty-first spelling of the thing it exists to find.";
  arguments_assert(arguments, 0);
  let folder = data_given_baselines_folder();
  let inside = text_combine(folder, "/");
  let records = await js_files_texts();
  let f_names = [];
  for (let record of records) {
    let text = property_get(record, "text");
    let spells = text_includes(text, inside);
    if (spells) {
      let file = property_get(record, "file");
      let f_name = path_leaf_without_extension(file);
      list_add(f_names, f_name);
    }
  }
  return f_names;
}
