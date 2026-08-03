import { function_transform_auto } from "./function_transform_auto.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { js_flo_body_add_after_prose } from "./js_flo_body_add_after_prose.mjs";
export async function function_prose_add(f_name, sentence) {
  "Adds one line to a function's own account of itself, at the end of what it already says and above the first thing it does.";
  "Writing that line was a hand edit every time, and the history says how often: of four hundred commits made under no command's name, sixty-three were a block added to one file, and adding a paragraph of explanation is the commonest thing that shape is. The transform to do it has existed all along - what was missing was a way to hand it a real sentence.";
  "The sentence is a whole argument of the command rather than a word inside a joined list. That is the whole reason this exists beside the transform it calls: a joined list is taken apart at every comma, so a sentence with a comma in it arrived as two arguments and the transform refused on the count. An explanation worth writing almost always has a comma in it, which put the one shape most often written by hand on the one path that could not carry it.";
  "It goes after the existing account rather than at the top of it. The first line of a function is its summary, and a paragraph added later is an elaboration of that summary - put first, it would displace the sentence every reader meets first.";
  "The sentence is quoted before it is written, so nothing handed in here can arrive as code. That is what keeps the command approvable once rather than at every use.";
  arguments_assert(arguments, 2);
  function lambda(ast) {
    let statement = js_prose_statement(sentence);
    js_flo_body_add_after_prose(ast, statement);
  }
  let output = await function_transform_auto(f_name, lambda);
  return output;
}
