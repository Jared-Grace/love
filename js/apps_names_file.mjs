import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
export async function apps_names_file(f_path) {
  arguments_assert(arguments, 1);
  ("The name of every app one repo says it holds, read from the file that repo writes them down in.");
  ("A repo with no such file holds no apps, rather than the reading stopping there. Not every repo here builds pages at all, and one that does not is a fact about that repo rather than a fault to throw about - the folder reading this replaced said the same thing about a missing folder.");
  ("The names are read from something committed rather than off the folder the working builds are written into, and that is the whole of why it exists. That folder is deliberately never committed, so a copy of the repo frozen at a commit holds no such folder at all - and the reading that used it then answered that there were no apps anywhere, which stopped every app from being named, built or sent out of a frozen copy.");
  let exists = await file_exists(f_path);
  if (exists) {
    let data = await file_read_json(f_path);
    let names = property_get(data, "names");
    return names;
  }
  let r = [];
  return r;
}
