import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { reply_proposal_after_source } from "./reply_proposal_after_source.mjs";
import { property_get } from "./property_get.mjs";
import { reply_proposal_trial_code_hash } from "./reply_proposal_trial_code_hash.mjs";
import { invoke_cache_file } from "./invoke_cache_file.mjs";
import { reply_proposal_trial_wrong } from "./reply_proposal_trial_wrong.mjs";
export async function reply_proposal_cases_wrong(title) {
  arguments_assert(arguments, 1);
  ("The worked messages of one waiting change to the reply rules whose claimed answer is not what the rules would answer once the change went in, each with the answer it would really get.");
  ("The gate and the review screen both ask this, so a change the screen marks wrong is the change the gate fails, and the other way about.");
  ("★ THE ANSWER IS KEPT UNDER THE WORD FOR ALL THE CODE THE TRIAL READS, AND HANDED BACK WHILE THAT WORD STAYS THE SAME. Each trial starts a fresh process, and the review screen asked for one per change on every visit: 3.3 seconds of a 4.1 second load with nothing changed, measured 2026-11-11.");
  let waiting = await reply_proposals_waiting();
  let proposal = list_find_property(waiting, "title", title);
  let source = await reply_proposal_after_source(proposal);
  let f_name = property_get(proposal, "fn");
  let cases = property_get(proposal, "cases");
  let whole = property_get(proposal, "whole");
  let code_hash = await reply_proposal_trial_code_hash(source, whole);
  let wrong = await invoke_cache_file(reply_proposal_trial_wrong, [
    code_hash,
    f_name,
    source,
    cases,
  ]);
  return wrong;
}
