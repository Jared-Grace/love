import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function gloss_explains_write_files_verse_keys(chapter_code, fn) {
  "The verses of every passage of one chapter that has new wording waiting to be written into it, read off the names of the files the wording was handed over in.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names files to look for and nothing that runs.";
  "Which passages have wording waiting is a fact about the folder, so it is read off the folder rather than typed out again beside it. A chapter is mended over many sittings and a list written by hand goes stale between two of them - quietly, because a passage left off a list looks exactly like a passage that needed nothing.";
  "Files of other chapters share the folder and are passed over, as are the files a whole passage was first authored in, which open with a different word and carry a different shape inside.";
  let folder = gloss_write_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let names = list_map(file_names, file_name_json_name);
  let opening = "explains_" + chapter_code + "_";
  let verse_keys = [];
  function name_read(name) {
    let mine = text_starts_with(name, opening);
    if (not(mine)) {
      return;
    }
    let dashed = name.slice(opening.length);
    let verse_key = dashed.split("-").join(",");
    list_add(verse_keys, verse_key);
  }
  each(names, name_read);
  return verse_keys;
}
