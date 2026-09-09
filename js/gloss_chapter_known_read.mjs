import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function gloss_chapter_known_read(chapter_code, fn) {
  arguments_assert(arguments, 2);
  ("One authored gloss chapter as it stands on disk, asked for by a caller that already knows it is there.");
  ("$plain chapter_code");
  ("the code is a chapter's name, like LUK05, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.");
  ("There is a guarded twin beside this one and it is the one to reach for by default: it looks first and hands back nothing for a chapter nobody has authored. This one does not look. Handed a code the store has never held it throws, and that is the whole of the difference between the two names.");
  ("Six readings were spelling this pair of lines out for themselves, and every one of them had already chosen the code from a listing of what the store holds. For those the guard is a second question with a known answer, and the null it can hand back is a branch no caller wrote - so the throw is the honest behaviour rather than a missing check. A seventh reading, handed a code from anywhere else, wants the twin.");
  let path = local_function_path_json(chapter_code, fn);
  let chapter = await file_read_json(path);
  return chapter;
}
