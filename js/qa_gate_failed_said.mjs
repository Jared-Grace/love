import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function qa_gate_failed_said(failed) {
  "$plain failed";
  "What to say a run went red about - the names of the gates that complained, or, when a red named nobody, a sentence saying so instead of an empty space.";
  "An empty list is not the same as a quiet run, and the sentence in its place says which of the two happened. A share that dies before it can print leaves nothing to read a name out of, so what is wrong is not that a gate failed but that a whole share of them was never answered, and the reader needs sending to what the share printed rather than to a gate.";
  arguments_assert(arguments, 1);
  let nameless = list_empty_is(failed);
  if (nameless) {
    let sentence =
      "a share of the run came back unhappy without naming a gate, so the gates in that share were never answered - read what it printed above";
    return sentence;
  }
  let joined = list_join_comma(failed);
  return joined;
}
