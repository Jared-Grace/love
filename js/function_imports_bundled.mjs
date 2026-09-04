import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse } from "./function_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports } from "./js_imports.mjs";
import { js_imports_dynamic_names } from "./js_imports_dynamic_names.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
export async function function_imports_bundled(f_name) {
  "The names of every function one function brings in, counting both the ones it says at the top and the ones it fetches while running - what a builder would put into this function's share of an app, whether in the one file or in a piece set aside beside it.";
  "IT IS DELIBERATELY NOT THE SAME QUESTION AS THE PLAIN READER BESIDE IT. That one answers what a file CARRIES, and a fetch-while-running import is the very thing a writer reaches for to stop something being carried - so the two must not be merged. Anything asking what a page WEIGHS wants the plain one; anything asking what a build EMITS, or what an edit could put out of date, wants this one.";
  "THE HOLE IT WAS WRITTEN TO CLOSE WAS MEASURED. Asked which functions the picture Bible was built from, the plain reader named about five hundred and not one of them was a picture band - the whole half of that app arrives through a fetch-while-running import per chapter. Every band was rewritten, the staleness check was asked, and it answered that nothing was out of date while the built piece still held the old writing.";
  arguments_assert(arguments, 1);
  let v = await function_parse(f_name);
  let ast = property_get(v, "ast");
  let said = js_imports(ast);
  let fetched = js_imports_dynamic_names(ast);
  let both = list_concat_unique(said, fetched);
  return both;
}
