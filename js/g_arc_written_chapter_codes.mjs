import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_written_files_or_null } from "./g_arc_written_files_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function g_arc_written_chapter_codes() {
  "The name of every chapter that has arcs written for it, for a caller that has to offer a reader the choice of which one to open.";
  "THE CODE IS READ OUT OF THE FILE AND NEVER OFF ITS NAME. A file name is where a store put something, and turning one back into a chapter code is a second rule about the naming that would go on answering after the first one changed - answering with codes that name nothing. The code inside the file is the one every other reader of this store is handed.";
  "A STORE NEVER WRITTEN TO ANSWERS NONE RATHER THAN FAILING. A machine that has written no arcs is the ordinary fresh one, and a caller offering a choice of chapters can show an empty choice; it cannot show an error it has no way to be at fault for.";
  arguments_assert(arguments, 0);
  let files = await g_arc_written_files_or_null();
  let none = null_is(files);
  if (none) {
    let empty = [];
    return empty;
  }
  let codes = [];
  for (let file of files) {
    let chapter = await file_read_json(file);
    let chapter_code = property_get(chapter, "chapter_code");
    list_add(codes, chapter_code);
  }
  return codes;
}
