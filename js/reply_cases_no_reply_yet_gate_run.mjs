import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_cases_no_reply_yet_shown } from "./reply_cases_no_reply_yet_shown.mjs";
import { list_filter_property_path } from "./list_filter_property_path.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function reply_cases_no_reply_yet_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no rule answers a message listed as having no reply yet. Throws so the dispatcher seam exits nonzero.");
  ("★ NOBODY APPROVES THESE TESTS, SO THIS IS WHAT STILL WATCHES THEM. A list message such as a cry for help must not start getting a reply nobody chose; a rule that took one as a town once sent only a sentence about where we are, and nobody read the message. When a reply is wanted, its message leaves the list and becomes a test somebody reviews.");
  let shown = await reply_cases_no_reply_yet_shown();
  let answered = list_filter_property_path(shown, ["answered"], true);
  list_empty_is_assert_json(answered, {
    answered,
    hint: text_combine_multiple([
      "a rule now answers these listed messages - if that reply is wanted, take the message off ",
      fn_name("reply_cases_no_reply_yet"),
      " and put it on a card to review; if not, the rule reaches too far",
    ]),
  });
  let r = {
    messages: list_size(shown),
    answered: 0,
  };
  return r;
}
