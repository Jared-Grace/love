import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lambda_throws_async } from "./lambda_throws_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_take } from "./list_take.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_repair_some_generic(
  offenders_of,
  name_key,
  repair,
  baseline_write,
  how_many,
) {
  arguments_assert(arguments, 5);
  ("$plain name_key");
  ("$plain how_many");
  ("Puts a few of the functions one sweep still complains about through the repair for it, commits each as it lands, shrinks the record the gate measures against, and stops there.");
  ("A few at a time rather than all of them. The whole set of any of these reaches across most of the repo, and with many hands editing one working directory that is a bet on the next quarter of an hour being quiet - somebody's bet to make, not this command's. A few is nobody's bet, and a peer editing one of the few is a conflict seen at once rather than one buried in two hundred. Running it over and over gets to the same place, because each run fixes the ones it took and the next ask no longer returns them.");
  ("Two of these had been written out in full, alike line for line, differing only in which sweep to ask, which word the sweep files a name under, which repair to run and which record to shrink. Everything else was the careful part, and the careful part is what gets subtly wrong in the third copy.");
  ("The count arrives from a command line as a word, so it is read as a number before it is used - handing a word to the taking would quietly take none.");
  ("A function that asked in its own words to be left alone is dropped before any are taken, not after, so declining one never costs somebody else their turn.");
  ("What was repaired is worked out by asking the sweep again rather than by writing down what was tried, because the two are not the same thing. A repair that refuses changes no file, so a name that was tried and a name that was fixed would otherwise come back in one list. The ones that refused are named on their own, because those are the ones somebody has to read.");
  ("Each function is committed the moment it is repaired rather than all of them at the end, because somebody else's sweep takes the files otherwise, and what it leaves behind then says nothing about how they were changed.");
  ("The record is shrunk here rather than left to whoever runs the whole-repo gate next. A name that no longer offends and is still written down fails that gate exactly as loudly as a new offense, so a run that repaired ten and stopped would turn the gate red for every peer.");
  ("A record that will not shrink is reported and the run still answers. The guard refusing means some OTHER function has a new offense standing - a peer mid-edit, most likely - and that is theirs to fix rather than this run's to record. Throwing there would kill the command after its work had already landed and been committed, so the caller would read a stack trace over changes that were fine.");
  await ai_git_noted();
  let offenders = await offenders_of();
  let all_names = list_map_property(offenders, name_key);
  let willing = [];
  let declined = [];
  for (let f_name of all_names) {
    let asked_off = await function_auto_declined_is(f_name);
    if (asked_off) {
      list_add(declined, f_name);
      continue;
    }
    list_add(willing, f_name);
  }
  let size = number_from_text(how_many);
  let attempted = list_take(willing, size);
  for (let name of attempted) {
    let args = [name];
    await function_call_commit(repair, args);
  }
  let shrink = [];
  async function step() {
    await function_call_commit(baseline_write, shrink);
  }
  let verdict = await lambda_throws_async(step);
  let record_refused = property_get(verdict, "throws");
  let left = await offenders_of();
  let names = list_map_property(left, name_key);
  let repaired = list_without_multiple(attempted, names);
  let refused = list_without_multiple(attempted, repaired);
  let still = list_without_multiple(names, declined);
  let r = {
    repaired,
    refused,
    declined,
    record_refused,
    remaining: still,
  };
  return r;
}
