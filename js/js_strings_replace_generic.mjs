import { js_literals_replace_generic } from "./js_literals_replace_generic.mjs";
import { js_strings_generic } from "./js_strings_generic.mjs";
export async function js_strings_replace_generic(ast, skip, replace_try) {
  "Offers every written-out word in one file to a reader that may put something else in its place, skipping the places named as not to be touched.";
  await js_literals_replace_generic(ast, skip, replace_try, js_strings_generic);
}
