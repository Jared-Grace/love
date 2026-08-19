import { catch_null } from "./catch_null.mjs";
import { json_from } from "./json_from.mjs";
import { newline } from "./newline.mjs";
import { text_split } from "./text_split.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join } from "./list_join.mjs";
import { object_is } from "./object_is.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export function qa_gate_said_record_or_null(said) {
  "$plain said";
  "The record a gate threw, taken out of everything it printed while it was failing. Nothing parseable is an ordinary answer and comes back as nothing. Read-only, pure.";
  "What a gate said is not only what it threw. A gate is free to print as it goes, and several do - one prints how many files it reached before saying which of them nothing points at. Those printed lines sit in front of the record, so reading the whole as a record fails, and the gate comes back naming nobody. A gate naming nobody cannot be shown to be about somewhere else, so it holds every app in the repo out of a deployment.";
  "The whole is tried first, then the whole from the second line, then from the third, and the first stretch that parses is the answer. A thrown record is the last thing a failing gate says, so a tail is the only place one can be, and asking for a tail rather than hunting for a brace is what keeps this able to read the records laid out over many lines. Its earlier form counted braces from the front and stopped early on the nested record every one of these gates throws.";
  let separator = newline();
  let lines = text_split(said, separator);
  let count = list_size(lines);
  let index = 0;
  while (greater_than(count, index)) {
    let rest = list_skip(lines, index);
    let tail = list_join(rest, separator);
    function tail_parsed() {
      let result = json_from(tail);
      return result;
    }
    let parsed = catch_null(tail_parsed);
    index = index + 1;
    let unparsed = null_is(parsed);
    if (unparsed) {
      continue;
    }
    let record = object_is(parsed);
    if (not(record)) {
      continue;
    }
    return parsed;
  }
  return null;
}
