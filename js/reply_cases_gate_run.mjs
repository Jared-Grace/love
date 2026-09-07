import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cases_checked } from "./reply_cases_checked.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function reply_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the reply rules still say to each worked message what the corpus records them saying. Throws so the dispatcher seam exits nonzero.");
  ("★ WHAT THIS GUARDS IS SOMEBODY ELSE'S WORDS GOING OUT UNDER ONE PERSON'S NAME. Every reply the rules make is sent as if that person wrote it, and the rules are a grammar - a new rule anywhere in it can quietly change what an old message gets back, because the pieces are chosen by what matches rather than by what was aimed at. Written down, an old reply changing is a failure here rather than something a stranger reads first.");
  ("A case recording that nothing matches is checked just as hard as one recording a reply. That half is where the rules are going to grow, and a rule added carelessly shows up first as a message that used to get nothing now getting something odd.");
  let checked = await reply_cases_checked();
  let failures = list_filter_property(checked, "ok", false);
  let count = list_size(checked);
  list_empty_is_assert_json(failures, {
    failures,
    hint: "the reply rules answer one of the worked messages differently than the corpus records - if the new answer is the right one, write the corpus again from what the rules now say; if it is not, the rule you added is matching something it was not aimed at",
  });
  let r = {
    checked: count,
  };
  return r;
}
