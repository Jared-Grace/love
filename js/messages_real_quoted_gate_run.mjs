import { arguments_assert } from "./arguments_assert.mjs";
import { messages_real_quoted } from "./messages_real_quoted.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function messages_real_quoted_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no message somebody really sent is written down in this repo word for word, apart from the trivial ones and the repo's own. Throws so the dispatcher seam exits nonzero.");
  ("★ WHAT THIS GUARDS IS SOMEBODY ELSE'S WRITING BECOMING PUBLIC BECAUSE IT WAS CONVENIENT. This repo is public, and the easiest way to write a worked case for a rule is to paste the message the rule was built for - it is right there, it matches by construction, and nothing about the file it lands in says who wrote it. Four word lists in the reply rules turned out to be one correspondent's own details each, and the examples sitting beside them were quotations too; none of that was noticed by anybody reading the code, because a quotation looks exactly like an invention.");
  ("Made-up cases lose nothing. The rules are a grammar and match a shape rather than a message, so a made-up message of the same shape exercises the same rules - and where it does not, that is itself worth knowing, because a rule that only matches the one message it was built from is fitted to that message rather than to what people write.");
  let r = await messages_real_quoted();
  let quoted = property_get(r, "quoted");
  list_empty_is_assert_json(quoted, {
    quoted,
    hint: "a message somebody sent is written down in this repo word for word - replace it with a made-up message of the same shape, run the reply cases gate to see what the rules then say to it, and record that",
  });
  return r;
}
