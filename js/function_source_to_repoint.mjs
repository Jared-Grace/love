import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { folder_js } from "./folder_js.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_source_to_repoint(path_fn_name) {
  "$plain path_fn_name";
  arguments_assert(arguments, 1);
  ("Where the file of the function that spells a file's address sits, and what is written in it, refused by name when no function answers to the name given.");
  ("Both commands that move a file and repoint the one function naming it opened this same way and neither said it by name. What each of them does next differs - one looks for the whole address written out, the other will also take the folder asked for and joined - but getting hold of the text to look in is the same work, and the refusal when there is nothing to look in has to read the same either way.");
  ("The path comes back beside the text because the caller writes the repointed text back to it. Handing back only the text would leave each caller to build the same path a second time, which is the copy this exists to remove, and a second building is free to disagree with the first.");
  ("The name is taken as it is rather than followed through the aliases, so the file written to is the file of the function named. A mover that quietly repointed something one name along would edit a function nobody asked about, and the caller has no way to see that it did.");
  let repo = folder_repo_love();
  let code = folder_js();
  let leaf = text_combine(path_fn_name, ".mjs");
  let fn_path = path_join([repo, code, leaf]);
  let text = await file_read_try(fn_path);
  assert_json(text, {
    hint: "no function of this name to repoint",
    path_fn_name,
  });
  let r = {
    fn_path,
    text,
  };
  return r;
}
