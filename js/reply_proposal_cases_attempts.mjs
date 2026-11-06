import { arguments_assert } from "./arguments_assert.mjs";
import { reply_proposals_waiting } from "./reply_proposals_waiting.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { reply_proposal_after_source } from "./reply_proposal_after_source.mjs";
import { property_get } from "./property_get.mjs";
import { reply_rules_source_attempts } from "./reply_rules_source_attempts.mjs";
export async function reply_proposal_cases_attempts(title) {
  arguments_assert(arguments, 1);
  ("What the reply rules would really answer to each worked message of one waiting change, if the change went in, set beside the answer the change says each one gets.");
  ("★ A CHANGE'S WORKED MESSAGES ARE WRITTEN BY HAND, AND UNTIL NOW NOTHING ASKED THE RULES WHETHER THEY WERE TRUE. A person says yes to the answers on the screen, so an answer the rules would never give is a yes to something that does not happen. Measured 2026-11-06: three changes in a row said a name on its own got a reply, the rules gave none, and that reached two real people's replies.");
  ("It has to be asked from a process of its own, one per change, because the change is tried by replacing a file as it loads.");
  let waiting = await reply_proposals_waiting();
  let proposal = list_find_property(waiting, "title", title);
  let source = await reply_proposal_after_source(proposal);
  let f_name = property_get(proposal, "fn");
  let cases = property_get(proposal, "cases");
  let results = await reply_rules_source_attempts(f_name, source, cases);
  return results;
}
