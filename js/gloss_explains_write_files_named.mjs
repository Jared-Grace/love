import { each } from "./each.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function gloss_explains_write_files_named(fn) {
  "Every passage of a gloss store that has new wording waiting to be written into it, named by its chapter and by the verses it covers, read off the names of the files the wording was handed over in.";
  "The folder holds the hand-offs of every chapter at once, so a reading that stops at one chapter cannot answer anything about the folder as a whole - and clearing what is spent is a question about the whole of it. Reading them all and naming each with its chapter is the same walk, and the chapter-at-a-time reading is a filter over this rather than a second walk of its own.";
  "Files a whole passage was first authored in share the folder and are passed over, because they open with a different word and carry a different shape inside.";
  "The verses come back separated by commas, which is how a passage names itself everywhere else; the file name spells them with a dash instead, because a comma in a file name is read as the end of an argument on the way in.";
  let folder = gloss_write_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let names = list_map(file_names, file_name_json_name);
  let opening = "explains_";
  let named = [];
  function name_read(name) {
    let mine = text_starts_with(name, opening);
    if (not(mine)) {
      return;
    }
    let rest = name.slice(opening.length);
    let cut = rest.indexOf("_");
    let chapter_code = rest.slice(0, cut);
    let dashed = rest.slice(cut + 1);
    let verse_key = dashed.split("-").join(",");
    list_add(named, {
      chapter_code,
      verse_key,
    });
  }
  each(names, name_read);
  return named;
}
