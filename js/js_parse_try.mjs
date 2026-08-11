import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { catch_null } from "./catch_null.mjs";
export function js_parse_try(code) {
  arguments_assert(arguments, 1);
  ("This code read in as a tree, or nothing at all when it will not read in.");
  ("Ten of these work in one folder at once, so meeting a file halfway through being written is ordinary rather than exceptional. A reading that walks the whole repo has to carry on past one of those; a reading that stopped would report a repo with nothing in it, which is the answer that looks most like success and is furthest from it.");
  ("Nothing is said about why it would not read in. A caller here has only one thing to do about a torn file either way, which is to pass it over.");
  function parse() {
    let ast = js_parse(code);
    return ast;
  }
  let read = catch_null(parse);
  return read;
}
