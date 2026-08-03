import { arguments_assert } from "./arguments_assert.mjs";
import { storage_key_seams_all } from "./storage_key_seams_all.mjs";
import { storage_key_seams_word_misplaced } from "./storage_key_seams_word_misplaced.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
export async function storage_key_seams_word_misplaced_gate_run() {
  "QA gate: every front door onto browser storage takes the key word as the second thing it is given.";
  "The whole reading of published keys rests on that one number. A call is asked for its second argument because that is where the storing takes the key, and a door is asked the same question, so a door that takes it third has its callers read at whatever stands there instead - and the word somebody typed reaches a real key in a real browser while every gate over it stays green. That had happened, to the word every reader of a chapter is filed under.";
  "Nothing else in the repo says what that number is, which is why it is checked rather than written down. It is not a rule anybody chose; it is what the storing functions happen to do, and a door written tomorrow by somebody who never read them is under no pressure to match.";
  "Every seam is printed even when nothing is wrong, for the reason the operator gate prints its names: a clean answer and a question that asked nothing look the same from outside, and this one is asked of a list short enough that a person will believe either.";
  arguments_assert(arguments, 0);
  let seams = await storage_key_seams_all();
  for (let seam of seams) {
    console.log(seam);
  }
  let misplaced = await storage_key_seams_word_misplaced();
  let f_name = fn_name("function_param_swap");
  list_empty_is_assert_json(misplaced, {
    hint: text_combine_multiple([
      "a front door onto browser storage takes its key word somewhere other than second, so the reading of published keys looks at the wrong argument and never sees the word its callers write - move the key word to second with ",
      f_name,
      ", which moves the call sites with it",
    ]),
    misplaced,
  });
  let r = {
    checked: list_size(seams),
    misplaced,
  };
  return r;
}
