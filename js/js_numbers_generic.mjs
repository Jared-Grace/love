import { js_literals_generic } from "./js_literals_generic.mjs";
import { number_is } from "./number_is.mjs";
export function js_numbers_generic(ast) {
  "Every written-out number in one file, each kept beside the place in the file it stands.";
  "A number sitting in a body says nothing about why it is that number, and it is the sort of value that turns out to want to be two numbers far more often than whoever wrote it expected. So the same routing that exists for a written-out word is wanted here, and this is the half that was missing: the walk that finds them.";
  let results = js_literals_generic(ast, number_is);
  return results;
}
