import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_proposals_shown } from "./app_message_reply_proposals_shown.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function app_message_reply_cases_rewrite_changed() {
  arguments_assert(arguments, 0);
  ("The worked cases whose rewritten message is answered differently from the real message it stands for, told in the public words only.");
  ("★ NOTHING OF THE REAL MESSAGE COMES BACK. The real reply can repeat a real name, so all that is said about it is whether it answered, how many lines it had, and which lines differ - the words shown are the rewritten case's, which are public and made up.");
  let shown = await app_message_reply_proposals_shown();
  let changed = [];
  for (let one of property_get(shown, "cases")) {
    let real = property_get(one, "real");
    if (not(real)) {
      continue;
    }
    let outputs = property_get(one, "outputs");
    let real_outputs = property_get(real, "outputs");
    let answered = property_get(one, "answered");
    let real_answered = property_get(real, "answered");
    if (
      json_equal(answered, real_answered) &&
      json_equal(outputs, real_outputs)
    ) {
      continue;
    }
    let lines_differing = [];
    function each_line(line, index) {
      let b = json_equal(line, real_outputs[index]);
      if (not(b)) {
        list_add(lines_differing, index);
      }
    }
    outputs.forEach(each_line);
    let told = {
      from: property_get(one, "from"),
      message: property_get(one, "message"),
      answered,
      real_answered,
      real_broke: property_get(real, "broke"),
      outputs,
      real_lines: list_size(real_outputs),
      lines_differing,
    };
    list_add(changed, told);
  }
  return changed;
}
