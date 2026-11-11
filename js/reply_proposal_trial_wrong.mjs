import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { text_hash } from "./text_hash.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { function_run_fresh_args } from "./function_run_fresh_args.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_delete } from "./file_delete.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function reply_proposal_trial_wrong(
  code_hash,
  f_name,
  source,
  cases,
) {
  arguments_assert(arguments, 4);
  ("The worked messages whose claimed answer is not what the reply rules would answer with one function's source swapped in, each with the answer it would really get. The word for the code is taken only so that an answer kept under these arguments is about this code and no other.");
  ("★ THE CHANGE IS HANDED OVER IN A FILE, NOT LOOKED UP AGAIN BY THE PROCESS THAT TRIES IT. Looking it up means loading the list of changes, and that list calls reply functions to build its worked answers, so a change to one of those was loaded before it could be replaced and could never be tried. Measured 2026-11-07 on a change to the blessing prayer.");
  let trial = {
    code_hash,
    f_name,
    source,
    cases,
  };
  let json = json_to(trial);
  let key = text_hash(json);
  let name = text_combine("reply_proposal_trial_", key);
  let path = file_name_json_folder_gitignore(name);
  await file_overwrite_json(path, trial);
  let results = await function_run_fresh_args(
    fn_name("reply_rules_source_attempts_file"),
    [path],
  );
  ("The file is named after what it holds, so two changes tried at once never write one file, and it is taken away after, so a file per version of the code does not pile up.");
  await file_delete(path);
  function wrong_is(one) {
    let ok = property_get(one, "ok");
    let n = not(ok);
    return n;
  }
  let wrong = list_filter(results, wrong_is);
  return wrong;
}
