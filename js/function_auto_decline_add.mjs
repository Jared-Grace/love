import { arguments_assert } from "./arguments_assert.mjs";
import { function_auto_declined_phrase } from "./function_auto_declined_phrase.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_flo_body_add_after_prose } from "./js_flo_body_add_after_prose.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_auto_decline_add(f_name, reason) {
  "$plain f_name";
  "$plain reason";
  arguments_assert(arguments, 2);
  ("Writes into a function the sentence that asks a sweep to leave it out of the canonicalizing pass");
  ("The request was only ever writable by hand, and a request written by hand is written in whatever words came to mind - which is how fourteen functions ended up asking to be left alone in prose that the reader matches nothing of. Written from here it always carries the phrase the reader looks for, so the asking and the being heard cannot come apart");
  ("The reason is asked for rather than assumed because the phrase alone tells the next reader only that somebody said no. Whether that no is still a good one is a judgment, and a judgment nobody can make without the reason standing next to it");
  ("It goes after everything the function already says about itself, never in front. A function's first sentence is what the prose search hands back as its purpose, so a marker put first would answer every later question about what this function is for with a refusal");
  ("The plain transform is the one called, not the import-repairing twin. Nothing here writes a call, so there is no import to add - and the functions this is written for are the ones handed to a browser, where an import added by a well-meaning pass is the exact harm the request exists to prevent");
  let phrase = function_auto_declined_phrase();
  let sentence = text_combine_multiple([reason, " - ", phrase]);
  async function lambda(ast) {
    let statement = js_prose_statement(sentence);
    js_flo_body_add_after_prose(ast, statement);
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
