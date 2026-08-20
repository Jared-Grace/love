import { property_text_includes } from "./property_text_includes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { list_add } from "./list_add.mjs";
import { path_without_extension } from "./path_without_extension.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export async function baselines_folder_literal_names() {
  "Every function that writes the baselines room out as part of an address rather than asking the one function that says where the room is.";
  "Found by reading the files rather than by asking the ratchets who they are. The sweep that gathers the ratchets goes by the word baseline in a function's name, which is right for finding ratchets and wrong for finding this: what is wanted here is anybody at all who spells the room. The one that was furthest out of step proves the difference - a list of places a folder rename must not write into, holding a spelling of the room from before the room last moved, and no naming rule would ever have gathered it.";
  "The room is asked for rather than written out, so this cannot be the fifty-first spelling of the thing it exists to find.";
  arguments_assert(arguments, 0);
  let folder = data_given_baselines_folder();
  let inside = text_combine(folder, "/");
  let records = await js_files_texts();
  let f_names = [];
  for (let record of records) {
    let spells = property_text_includes(record, "text", inside);
    if (spells) {
      let file = property_get(record, "file");
      let f_name = path_without_extension(file);
      list_add(f_names, f_name);
    }
  }
  return f_names;
}
