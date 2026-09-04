import { gloss_affix_kinds_repair_prompt_system } from "./gloss_affix_kinds_repair_prompt_system.mjs";
import { gloss_affix_kinds_repair_prompt_user } from "./gloss_affix_kinds_repair_prompt_user.mjs";
import { openai_responses_cache } from "./openai_responses_cache.mjs";
import { text_trim } from "./text_trim.mjs";
export async function gloss_affix_kinds_repair_explain(
  word,
  root,
  affixes,
  explain,
) {
  "One gloss explanation written again naming only the pieces the dictionary gives, got from the paid service.";
  "$plain word";
  "the Cebuano word spelled as its verse spells it.";
  "$plain root";
  "the root the dictionary gives for that word.";
  "$plain affixes";
  "binisaya.com's construction shorthand for the word.";
  "$plain explain";
  "the explanation standing in the store today, the one carrying the false claim.";
  "The answer is kept by the exact words that were asked, so a run stopped halfway and started again pays only for the words it had not reached, and a word whose standing explanation has not changed is not asked about twice. That is what makes a sweep of a thousand of these safe to interrupt.";
  "What comes back is trimmed and nothing else is done to it. A sentence that came back wrong is a thing for a person to read and delete, and quietly mending one here would hide from that reader exactly the answers worth their attention.";
  let system = gloss_affix_kinds_repair_prompt_system();
  let user = gloss_affix_kinds_repair_prompt_user(word, root, affixes, explain);
  let output = await openai_responses_cache(system, user);
  let r = text_trim(output);
  return r;
}
