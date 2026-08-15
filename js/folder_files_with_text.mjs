import { folder_read_files } from "./folder_read_files.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
export async function folder_files_with_text(folder, wanted) {
  "Answers the full path of every file sitting directly in a folder whose text spells a given word, and an empty list when the folder is not there at all.";
  "It looks in the one folder rather than down through everything beneath it, because what it is for is asking a known set of places whether any of them still names something. A set of places is a list somebody wrote down, not a tree to be walked, and walking one would wander into the copies of things that are not the question.";
  "A file it cannot read as text is passed over rather than reported. A picture spells no words, and stopping at one would let a single unreadable file hide every answer that came after it.";
  "A folder that is not there answers an empty list rather than failing, so the same question can be asked of a machine that keeps its things somewhere else without the question having to be rewritten first.";
  async function lambda_read() {
    let read = await folder_read_files(folder);
    return read;
  }
  let names = await catch_null_async(lambda_read);
  if (not(names)) {
    let none = [];
    return none;
  }
  let paths = [];
  for (let name of names) {
    let one_path = path_join([folder, name]);
    let one_text = await file_read_try(one_path);
    if (one_text) {
      let spelled = text_includes(one_text, wanted);
      if (spelled) {
        paths.push(one_path);
      }
    }
  }
  return paths;
}
