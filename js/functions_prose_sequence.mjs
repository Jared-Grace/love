import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_prose_sequence_sentences } from "./js_prose_sequence_sentences.mjs";
export async function functions_prose_sequence() {
  arguments_assert(arguments, 0);
  ("A census: every function in this repo that explains itself in a sentence with a name standing inside it, each named beside the sentences it holds.");
  ("It was written as an audit, on the reading that these were functions hiding what they say - a bracket and a comma turn the sentence into a pair, a pair is not a string standing on its own, and the reader that gathered explanations by reading lines saw none of it. A hundred and eighty paragraphs were invisible to a search by meaning, eighty-four functions had nothing else, and that is worse than saying nothing, because saying more would not have taken them off the list of functions still owing an account.");
  ("It is not an audit any more, because the shape is not a fault. The auto pass writes it: spell a function's name inside a sentence, which is the one spelling a rename follows, and running the pass over the file puts the brackets and the comma there. So the offence it was reporting was the repo obeying its own instruction, and the fix belonged in the readers rather than in the files. Both readers were fixed - one no longer counts a paragraph as a line of work, and the other now assembles the whole sentence, name and all, into the corpus a search by meaning uses.");
  ("What is left is worth keeping as a list rather than as a complaint. Anybody changing either reader wants to know which files carry the shape, and this answers that in one command without a word of it having to be typed out by hand.");
  ("The judgment itself is next door, asked of one file at a time, so this stays a sweep and can be pointed at any other question of the same shape.");
  let offenders = await functions_ast_offenders_generic(
    js_prose_sequence_sentences,
    "sentences",
  );
  return offenders;
}
