import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { reply_proposal_after_source } from "./reply_proposal_after_source.mjs";
import { property_get } from "./property_get.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { function_run_fresh_args } from "./function_run_fresh_args.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function reply_proposal_cases_wrong(title) {
  arguments_assert(arguments, 1);
  ("The worked messages of one waiting change to the reply rules whose claimed answer is not what the rules would answer once the change went in, each with the answer it would really get.");
  ("The gate and the review screen both ask this, so a change the screen marks wrong is the change the gate fails, and the other way about.");
  ("★ THE CHANGE IS WORKED OUT HERE AND HANDED OVER IN A FILE, NOT LOOKED UP AGAIN BY THE PROCESS THAT TRIES IT. Looking it up means loading the list of changes, and that list calls reply functions to build its worked answers, so a change to one of those was loaded before it could be replaced and could never be tried. Measured 2026-11-07 on a change to the blessing prayer.");
  let waiting = await reply_proposals_waiting();
  let proposal = list_find_property(waiting, "title", title);
  let source = await reply_proposal_after_source(proposal);
  let f_name = property_get(proposal, "fn");
  let cases = property_get(proposal, "cases");
  let key = reply_case_key(title);
  let name = text_combine("reply_proposal_trial_", key);
  let path = file_name_json_folder_gitignore(name);
  await file_overwrite_json(path, {
    f_name,
    source,
    cases,
  });
  let results = await function_run_fresh_args(
    fn_name("reply_rules_source_attempts_file"),
    [path],
  );
  function wrong_is(one) {
    let ok = property_get(one, "ok");
    let n = not(ok);
    return n;
  }
  let wrong = list_filter(results, wrong_is);
  return wrong;
}
