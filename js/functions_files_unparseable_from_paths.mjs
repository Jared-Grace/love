import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { js_parse_said_or_null } from "./js_parse_said_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_files_unparseable_from_paths(f_paths) {
  arguments_assert(arguments, 1);
  ("Every one of these files that will not read in as code right now, each with its path and what the parser said about it.");
  ("The files are handed over rather than found, because the two callers are looking at different trees and only one of them can go looking. The hunt across every repo beside this one reads the folders as they stand this second; the gate reads a frozen copy of one commit, where there are no repos beside it at all. What they share is everything below this line.");
  ("Files are read past the store of contents rather than through it. The whole point is the file as it stands on the disk this second - somebody else may be part way through writing it, which is what a cache is least able to say.");
  let torn = [];
  for (let f_path of f_paths) {
    let code = await file_read_uncached(f_path);
    let said = await js_parse_said_or_null(code);
    let fine = null_is(said);
    let broken = not(fine);
    if (broken) {
      list_add(torn, {
        f_path,
        said,
      });
    }
  }
  return torn;
}
