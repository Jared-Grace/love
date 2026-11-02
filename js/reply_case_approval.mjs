import { arguments_assert } from "./arguments_assert.mjs";
import { reply_case_key } from "./reply_case_key.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_map } from "./list_map.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function reply_case_approval(message, answered, outputs) {
  arguments_assert(arguments, 3);
  ("One unit test of the reply rules in the shape a file has on the review bench: a name to keep its verdict under, and the lines a person passes.");
  ("★ A TEST IS APPROVED AS WORDS AND NOT AS A MARK, EXACTLY AS CODE IS. What is stored is the message and the answer as they were read, so changing either one withdraws the verdict by itself. Sharing the shape is what lets the same store, the same button and the same refusal to apply serve tests with nothing added to any of them.");
  ("★ IT IS NAMED AFTER THE MESSAGE AND NOT AFTER THE REAL MESSAGE IT WAS DRAWN FROM. Several rewrites are drawn from one real message, measured 2026-11-02 at 22 cases over 6 words, so that word would have them overwrite each other's verdicts. A message that changes its wanted answer keeps its name, so a change's new answer lands on the verdict for the old one and the old one reads as no longer approved, which is what it now is.");
  ("Every line says what it is, so an answer that happens to read like the words for no answer cannot pass for one.");
  let key = reply_case_key(message);
  let name = text_combine("reply_case_", key);
  let combined = text_combine("message: ", message);
  let lines = [combined];
  if (answered) {
    function each_output(output) {
      let line = text_combine("reply: ", output);
      return line;
    }
    let replies = list_map(outputs, each_output);
    list_add_multiple(lines, replies);
  }
  if (not(answered)) {
    list_add(lines, "no reply");
  }
  let approval = {
    name,
    lines,
  };
  return approval;
}
