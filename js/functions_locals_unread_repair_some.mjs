import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_auto_declined_is } from "./function_auto_declined_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_declarations_unused_clear } from "./function_declarations_unused_clear.mjs";
import { functions_locals_unread } from "./functions_locals_unread.mjs";
import { functions_locals_unread_baseline_write } from "./functions_locals_unread_baseline_write.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_locals_unread_repair_some(how_many) {
  "$plain how_many";
  "Drops a few of the lines that name a value nothing goes on to read, and stops there";
  "The clearing itself was already written and could only ever be aimed at one function by hand, which is why two hundred and thirty nine of these have been sitting in the record rather than being cleared. A loop somebody types is the specification of a command nobody wrote";
  "A few at a time rather than all of them, for the reason its neighbour in the operators family gives: the whole set reaches across most of the repo, and with many hands editing one working directory that is a bet on the next quarter of an hour being quiet. A few is nobody's bet, and a peer editing one of the few is a conflict seen at once rather than one buried in two hundred";
  "The count arrives from a command line as a word, so it is read as a number before it is used - handing a word to the taking would quietly take none";
  "A function that asked in writing to be left out of sweeps is dropped before any are taken, not after, so declining one never costs somebody else their turn. Nothing here canonicalizes, but the request is about sweeps picking files nobody chose and this is one of those";
  "What was repaired is worked out by asking again rather than by writing down what was tried, because a clearing that could do nothing changes no file and would otherwise be reported as a fix. The ones that would not move are worth naming on their own - those are the ones somebody has to read";
  "Each function is committed the moment it is cleared rather than all of them at the end, because somebody else's sweep takes the files otherwise, and what it leaves behind then says nothing about how they were changed";
  "The record the gate measures against is shrunk here rather than left to whoever runs the whole gate next. A name that no longer offends and is still written down fails that gate exactly as loudly as a new offense, so a run that cleared ten and stopped would turn the gate red for every peer";
  function name_of(one) {
    let n = property_get(one, "name");
    return n;
  }
  await ai_git_noted();
  let offenders = await functions_locals_unread();
  let all_names = list_map(offenders, name_of);
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
    await function_call_commit(function_declarations_unused_clear, args);
  }
  let shrink = [];
  await function_call_commit(functions_locals_unread_baseline_write, shrink);
  let left = await functions_locals_unread();
  let names = list_map(left, name_of);
  let repaired = list_without_multiple(attempted, names);
  let refused = list_without_multiple(attempted, repaired);
  let still = list_without_multiple(names, declined);
  let r = {
    repaired,
    refused,
    declined,
    remaining: still,
  };
  return r;
}
