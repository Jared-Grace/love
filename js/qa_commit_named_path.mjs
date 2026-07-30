import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { data_folder } from "./data_folder.mjs";
import { path_join } from "./path_join.mjs";
export function qa_commit_named_path() {
  "Where the record of which functions each red gate named, commit by commit, is kept";
  "It sits in the repo and is committed, because judging one commit costs a couple of minutes and the answer is the same for everyone who asks - so one of us paying it is all of us knowing.";
  "What is kept is the names and not the hundreds of lines that carried them. The names are what a later question needs, they are bounded where the printed reasons are not, and a fresh asking gives the same reasons again.";
  let folder = data_folder();
  let path = path_join([
    folder,
    text_combine_multiple([fn_name("qa_commit_named"), ".json"]),
  ]);
  return path;
}
