import { each } from "./each.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function gloss_write_files_named_generic(fn, opening) {
  "Every passage of a gloss store that has one named kind of text waiting to be written into it, named by its chapter and by the verses it covers, read off the names of the files the text was handed over in.";
  "$plain opening";
  "the opening is the word a hand-off file's name begins with, like explains_ or glosses_. It names files to look for and nothing that runs.";
  "The folder holds the hand-offs of every chapter and of every kind at once, so a reading that stops at one chapter cannot answer anything about the folder as a whole - and clearing what is spent is a question about the whole of it. Reading them all and naming each with its chapter is the same walk, and the chapter-at-a-time reading is a filter over this rather than a second walk of its own.";
  "Which kind is being looked for is handed in rather than settled here, because the folder carries three: a whole passage as it was first authored, the prose alone, and the short English alone. Each is applied by its own command and none of them can read another's shape, so a walk that could not be told which to look for would have to be copied once per kind.";
  "The verses come back separated by commas, which is how a passage names itself everywhere else; the file name spells them with a dash instead, because a comma in a file name is read as the end of an argument on the way in.";
  "A name with no second underscore names no passage and is passed over rather than cut anyway, which would hand back a chapter code short of its last letter and verses of nothing.";
  let folder = gloss_write_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let names = list_map(file_names, file_name_json_name);
  let named = [];
  function name_read(name) {
    let mine = text_starts_with(name, opening);
    if (not(mine)) {
      return;
    }
    let rest = name.slice(opening.length);
    let cut = rest.indexOf("_");
    let named_is = greater_than(cut, 0);
    if (not(named_is)) {
      return;
    }
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
