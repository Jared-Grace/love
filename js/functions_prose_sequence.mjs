import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_prose_sequence_sentences } from "./js_prose_sequence_sentences.mjs";
export async function functions_prose_sequence() {
  arguments_assert(arguments, 0);
  ("Audit: every function in this repo that explains itself in sentences the reader which gathers explanations cannot see, each named beside the sentences it is hiding.");
  ("These are not functions that say nothing. They say a great deal - one of them lays out a whole regression check, the map it runs on and the bug it caught - and a search by meaning finds none of it, because a bracket and a comma turn the sentence into a pair and a pair is not a string standing on its own.");
  ("That makes them invisible in the worst direction. A function with no account of itself shows up on the list of functions wanting one, so somebody eventually writes it. A function like this shows up there too, and writing more will not take it off, because what is already there was never the thing being counted.");
  ("The judgment itself is next door, asked of one file at a time, so this stays a sweep and can be pointed at any other question of the same shape.");
  ("Nothing calls this. It is a report, and the fix it points at is a decision about which of the two shapes each of these was meant to be - which is not a decision a sweep can make.");
  let offenders = await functions_ast_offenders_generic(
    js_prose_sequence_sentences,
    "sentences",
  );
  return offenders;
}
