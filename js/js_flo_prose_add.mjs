import { arguments_assert } from "./arguments_assert.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { js_flo_body_add_after_prose } from "./js_flo_body_add_after_prose.mjs";
export function js_flo_prose_add(ast, sentence) {
  "One more line added to what the exported function of a file says about itself, at the end of what it already says and above the first thing it does.";
  "IT IS A NAMED TRANSFORM RATHER THAN A LAMBDA so that the two halves it is made of can be paired with a selector, written into the corpus of worked examples, and shown a before and an after. Written inline in the one command that wanted it, the whole of this - which line is built, and where it is put - could only be checked by running that command on a real file and reading the result.";
  "THE SENTENCE ARRIVES AS WRITING AND IS QUOTED, never read as code. That is what lets a command built on this be approved once instead of at every use.";
  arguments_assert(arguments, 2);
  let statement = js_prose_statement(sentence);
  js_flo_body_add_after_prose(ast, statement);
}
