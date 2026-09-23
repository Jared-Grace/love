import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_purge_case_blind_cases } from "./git_history_purge_case_blind_cases.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function git_history_purge_case_blind_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate for a history purge: the instructions it hands the rewriting tool say to ignore whether a letter is a capital, and doing so does not widen a word into the longer words it sits inside.");
  ("★ THIS GUARDS THE ONE FAULT IN THIS JOB THAT IS SILENT. Everything else around a purge announces itself - a file added, a file dropped, a commit gained, the present come out different, a word still found afterwards. Forgetting the letter announces nothing at all: the rewrite runs to the end, every other proof passes, and the capitalised spelling of somebody's name is left in a public past for ever. It was there once, and it was found by counting rather than by anything going red.");
  ("It ratchets against nothing. There are four things to be true and all four are true, so a shrink-only record would hold nothing and exist only to say so.");
  ("It costs nothing to run. Nothing is cloned, no history is walked and no tool is started - the claims are about what a word is turned into before any of that begins, which is exactly where the fault was.");
  ("How many claims were looked at travels out beside the verdict, because nothing wrong is also what this says on the day the claims stop being built at all.");
  let cases = git_history_purge_case_blind_cases();
  let walked = list_size(cases);
  function git_history_purge_case_blind_gate_run_broken(row) {
    let broken = not(row.ok);
    return broken;
  }
  function git_history_purge_case_blind_gate_run_claim(row) {
    let r = row.claim;
    return r;
  }
  let failed = list_filter(cases, git_history_purge_case_blind_gate_run_broken);
  let offenders = list_map(failed, git_history_purge_case_blind_gate_run_claim);
  let hint = text_combine_multiple([
    "a history purge has stopped reading a capital letter as the same letter, or has started matching a word inside longer ones - the word shape comes from ",
    fn_name("text_word_start_regex"),
    " and each of its three readers is told about the letter in its own words, so one of those has been dropped",
  ]);
  let result = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return result;
}
