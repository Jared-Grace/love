import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_last } from "./list_last.mjs";
import { js_tokens_run_together } from "./js_tokens_run_together.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_quiz_token_run_together_parts(
  chosen,
  token,
  tokens_unique,
) {
  arguments_assert(arguments, 3);
  ("What to say to a learner who has just tapped a piece that cannot go there, when the piece they tapped before it and this one are written side by side in real code as a third piece - nothing, when that is not what happened.");
  ("It exists because that mistake looks like every other wrong tap and is not one. The learner has read a line correctly, seen a sign in it, and gone looking for that sign among pieces that do not hold it; a button going red says only that they were wrong, and leaves them to guess at a fact about how the language is written that no screen of separate pieces will ever show them.");
  ("TWO THINGS ARE SAID, AND WHICH ONE DEPENDS ON THE PIECES IN FRONT OF THEM. When the run-together piece is one of this line's own, the whole answer is that it has a button and they should press it. When it is not, saying that would send them hunting for a button that is not there, so what is said instead is that this line does not use it - which is also the hint they need, because it means something has to stand between the two.");
  ("NOTHING IS SAID WHEN NOTHING RAN TOGETHER, and nothing is said on the first tap of all, when there is no piece before this one. A wrong tap that is simply wrong is left to the red button, which already says it.");
  let none = list_empty_is(chosen);
  if (none) {
    return null;
  }
  let before = list_last(chosen);
  let merged = js_tokens_run_together(before, token);
  let apart = null_is(merged);
  if (apart) {
    return null;
  }
  let opening = text_combine_multiple([
    before,
    " and ",
    token,
    " side by side spell ",
    merged,
    ", which is one piece of its own.",
  ]);
  let available = list_includes(tokens_unique, merged);
  if (available) {
    let here = text_combine_multiple([" Tap the ", merged, " button instead."]);
    let r = text_combine(opening, here);
    return r;
  }
  let elsewhere = text_combine_multiple([
    " This line does not use ",
    merged,
    ", so something has to go between the two.",
  ]);
  let r2 = text_combine(opening, elsewhere);
  return r2;
}
