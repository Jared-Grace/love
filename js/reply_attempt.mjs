import { arguments_assert } from "./arguments_assert.mjs";
import { reply_messages_inner } from "./reply_messages_inner.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function reply_attempt(message, start) {
  arguments_assert(arguments, 2);
  ("What the reply rules make of one message: whether they reached the end of it, what they would say back if they did, and whether they broke trying.");
  ("★ THE THREE ANSWERS ARE KEPT APART ON PURPOSE, because two of them are good news and the third is a defect. A rule set that does not cover a message has simply not been taught that message yet, and the honest thing is to say so and leave it. A rule set that throws part way through has a bug in it, and folding that into 'no reply' would hide every one of those behind the same blank the untaught messages leave - the rules would then look complete exactly in proportion to how badly they were broken.");
  ("The breaking is told apart from the not-matching by the answer coming back as nothing at all, which the reading can never hand back of its own accord: it answers with a record whether it matched or not. So nothing has to be guessed about which of the two happened.");
  ("The rule set is handed in rather than built here, because building it is the expensive half and it does not depend on the message. Asked for once and handed to every message, it is built once; asked for inside, it would be rebuilt for every message on the disk.");
  async function lambda() {
    let inner = await reply_messages_inner(message, start);
    return inner;
  }
  let result = await catch_null_async(lambda);
  let broke = null_is(result);
  if (broke) {
    let thrown = {
      answered: false,
      broke: true,
      outputs: [],
    };
    return thrown;
  }
  let answered = property_get(result, "matches");
  let outputs = answered ? property_get(result, "outputs") : [];
  let attempt = {
    answered: answered,
    broke: false,
    outputs: outputs,
  };
  return attempt;
}
