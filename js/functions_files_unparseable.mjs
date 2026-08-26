import { arguments_assert } from "./arguments_assert.mjs";
import { functions_paths } from "./functions_paths.mjs";
import { file_read_uncached } from "./file_read_uncached.mjs";
import { js_parse_said_or_null } from "./js_parse_said_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_files_unparseable() {
  "Every function file in these repos that will not read in as code right now, each with its path and what the parser said about it.";
  "One half-saved file makes the whole index of functions unbuildable, and nearly everything here is built on that index. So the failure is never local: a search, a gate, a sweep, a judging of a commit - all of them die, all of them with the same error, and none of them names the file.";
  "It is the shape of the failure that costs, not the fixing. The fixing is a minute. Twice in two days a run of the gates went twelve minutes and then died on this, and both times the reading that followed was a hunt with no starting point - the error names a line number in a file it does not name.";
  "So this answers the one question that hunt is asking, and answers it in seconds, because it reads files and parses them and does nothing else. Nothing here builds the index, which is the very thing that cannot be built while a file is torn.";
  "Files are read past the store of contents rather than through it. The whole point is the file as it stands on the disk this second - somebody else is part way through writing it, which is what a cache is least able to say.";
  "It reports rather than repairs, and there is no repair to offer. A torn file is either a peer mid-save, in which case the answer is to wait and ask again, or a half-finished edit that got committed, in which case what to put there is a judgement about what its author meant.";
  arguments_assert(arguments, 0);
  let paths = await functions_paths();
  let torn = [];
  for (let f_path of paths) {
    let code = await file_read_uncached(f_path);
    let said = await js_parse_said_or_null(code);
    let fine = null_is(said);
    if (fine) {
      continue;
    }
    list_add(torn, {
      f_path,
      said,
    });
  }
  return torn;
}
