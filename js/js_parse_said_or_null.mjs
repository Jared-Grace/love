import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
export async function js_parse_said_or_null(code) {
  "$plain code";
  "the code is a file's text to read in as a tree. It is a thing to look at and nothing that runs.";
  "What the parser said about why this code will not read in as a tree, or nothing at all when it reads in fine.";
  "The neighbour that answers the tree keeps nothing about a refusal and says in its own prose why: a caller walking the whole repo has only one thing to do about a torn file, which is to pass it over. This is for the other caller - the one whose whole purpose is to report the torn file - and for that caller what the parser said is most of the answer, because it names the line.";
  "Measured 2026-08-26: a run of the gates met one half-saved file twelve minutes in and died saying return was outside a function, at line twenty-eight. That line number was the whole of what turned a hunt into a reading.";
  arguments_assert(arguments, 1);
  async function reads() {
    let ast = js_parse(code);
    return ast;
  }
  let read = await catch_message_async(reads);
  let ok = property_get(read, "ok");
  if (ok) {
    let fine = null;
    return fine;
  }
  let said = property_get(read, "message");
  return said;
}
