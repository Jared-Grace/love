import { arguments_assert } from "./arguments_assert.mjs";
import { js_text_prose_only_is } from "./js_text_prose_only_is.mjs";
import { not } from "./not.mjs";
export function js_edit_prose_only_is(text_before, text_after) {
  "Whether a hand edit to code touches nothing but the paragraphs written for a reader - both the words going out and the words coming in holding prose and no work at all.";
  "THIS IS THE ONE HAND EDIT A NAMED COMMAND ALREADY COVERS. Two verbs write prose - one adds a sentence to what a function says about itself, one replaces a run of words inside a line of it - and neither leaves the file in a shape a peer's sweep can catch halfway. An edit of this shape done by hand is therefore not a gap in the vocabulary; it is a verb that was there and was not reached for.";
  "IT IS ASKED OF THE TWO PIECES AN EDIT IS MADE OF rather than of a file or a commit. The retrospective reading beside it buckets hand-made commits by shape after the fact, which tells anyone reading it what happened last week. The two pieces are what exist at the moment the edit is proposed, which is the only moment the answer can still change anything.";
  "IT SAYS NO WHENEVER IT CANNOT TELL, because the one thing it must never do is send a reader to a command that will refuse them. A piece that will not read in on its own, a piece with nothing in it, and a piece holding one working line among the paragraphs are all no.";
  "NOTHING IS WRITTEN AND NOTHING IS DECIDED HERE. What to do about a yes belongs to whoever asks.";
  arguments_assert(arguments, 2);
  let out_is = js_text_prose_only_is(text_before);
  if (not(out_is)) {
    return false;
  }
  let in_is = js_text_prose_only_is(text_after);
  return in_is;
}
