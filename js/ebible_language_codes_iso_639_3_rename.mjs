import { json_to } from "./json_to.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_codes_iso_639_3_rename_sites } from "./ebible_language_codes_iso_639_3_rename_sites.mjs";
import { function_transform } from "./function_transform.mjs";
import { ebible_language_codes_iso_639_3_rename_ast } from "./ebible_language_codes_iso_639_3_rename_ast.mjs";
export async function ebible_language_codes_iso_639_3_rename() {
  "Moves every language spelled by a code since renamed to ISO 639-3 onto its new code, all at once - each language's own entry, the English code, and the keys of every saying - so no reader ever sees the entries in one spelling and the sayings in the other. What it will change is asked first of the sites list, which is the same walk done on throwaway copies.";
  "Refuses to write anything when the walk would refuse even one place, because a half-renamed saying reads the wrong words.";
  arguments_assert(arguments, 0);
  let sites = await ebible_language_codes_iso_639_3_rename_sites();
  function lambda(site) {
    let r = site.refused;
    return r;
  }
  let refused = sites.filter(lambda);
  if (greater_than(refused.length, 0)) {
    throw new Error("refused places, nothing written: " + json_to(refused));
  }
  function lambda2(site) {
    let r2 = site.f_name;
    return r2;
  }
  let v = sites.map(lambda2);
  let f_names = [...new Set(v)];
  for (let f_name of f_names) {
    function lambda3(ast) {
      ebible_language_codes_iso_639_3_rename_ast(ast, f_name);
    }
    await function_transform(f_name, lambda3);
  }
  let r3 = {
    renamed: sites.length,
    functions: f_names.length,
  };
  return r3;
}
