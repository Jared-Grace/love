import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty } from "./text_empty.mjs";
export function text_split_comma_outside_brackets(t) {
  arguments_assert(arguments, 1);
  ("A list handed to a command as one word, cut at every comma that stands on its own and at none of the commas a value carries inside brackets of its own.");
  ("Nothing that already worked changes meaning. A word with no bracket in it anywhere is cut at exactly the commas the plain splitter cuts it at, and comes back as the same list. Only a bracket says anything new, and a value with a bracket in it could not be handed to the plain splitter at all - it came back in pieces, each piece a thing the caller never wrote.");
  ("A COLOUR IS THE CASE THIS WAS BUILT FOR. One spelled as rgb holds two commas between its three numbers, so a pair of colours could be collapsed but never written down, and the one gate that wanted to write it down had to say so in its own prose as a thing with no answer.");
  ("The brackets are read out of the writing rather than being given up front, so a caller says nothing new and an existing call is unchanged. What is not read is a bracket standing inside a piece of writing as a character rather than as a bracket - nothing here has ever written one, and guessing which is which needs a mark this repo does not have.");
  ("A bracket left open at the end, or a closing one with nothing open, is refused loudly. The quiet answer is a list one shorter than the caller wrote, which reads exactly like a list they wrote one shorter.");
  let parts = [];
  let held = text_empty();
  let depth = 0;
  for (let character of t) {
    let opens = equal(character, "(");
    if (opens) {
      depth = add(depth, 1);
    }
    let closes = equal(character, ")");
    if (closes) {
      depth = subtract(depth, 1);
      let unopened = less_than(depth, 0);
      assert_json(not(unopened), {
        hint: "this list closes a bracket that was never opened — would you like to check the brackets in it match up?",
        t,
      });
    }
    let cuts = equal(character, ",");
    if (cuts) {
      let outside = equal(depth, 0);
      if (outside) {
        list_add(parts, held);
        held = text_empty();
        continue;
      }
    }
    held = text_combine(held, character);
  }
  let closed = equal(depth, 0);
  assert_json(closed, {
    hint: "this list leaves a bracket open at its end — would you like to check the brackets in it match up?",
    t,
    depth,
  });
  list_add(parts, held);
  return parts;
}
