import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function lock_ticket_name(arrival_ms, who) {
  "$plain arrival_ms";
  "$plain who";
  arguments_assert(arguments, 2);
  ("What a waiter calls the word it leaves: when it arrived, then who it is.");
  ("The time comes first because the line is read by sorting these names as text, and a count of milliseconds has been thirteen digits since 2001 and stays thirteen until 2286 - so sorting them as text puts them in the order they happened, with no arithmetic and nothing to read out of the files.");
  ("Who it is comes second so that two arriving in the same millisecond still have different names, and so that a line left standing says plainly whose turn it is.");
  let name = text_combine_multiple([arrival_ms, "_", who]);
  return name;
}
