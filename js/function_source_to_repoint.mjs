import { function_name_to_path_absolute } from "./function_name_to_path_absolute.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { file_read_try } from "./file_read_try.mjs";
export async function function_source_to_repoint(path_fn_name) {
  "$plain path_fn_name";
  arguments_assert(arguments, 1);
  ("What is written in the file of the function that spells a file's address, refused by name when no function answers to the name given.");
  ("Both commands that move a file and repoint the one function naming it opened this same way and neither said it by name. What each of them does next differs - one looks for the whole address written out, the other will also take the folder asked for and joined - but getting hold of the text to look in is the same work, and the refusal when there is nothing to look in has to read the same either way.");
  ("Only the text comes back. Where the file sits is asked for by name in the one place that answers it, so a caller wanting to write back asks that same question rather than being handed an answer to carry, and there is nowhere for two spellings of one address to disagree.");
  ("The name is taken as it is rather than followed through the aliases, so the file read is the file of the function named. A mover that quietly repointed something one name along would edit a function nobody asked about, and the caller has no way to see that it did.");
  let fn_path = function_name_to_path_absolute(path_fn_name);
  let text = await file_read_try(fn_path);
  assert_json(text, {
    hint: "no function of this name to repoint",
    path_fn_name,
  });
  return text;
}
