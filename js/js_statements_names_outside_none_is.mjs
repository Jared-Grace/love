import { js_statements_declared_names } from "./js_statements_declared_names.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function js_statements_names_outside_none_is(statements) {
  "Whether a run of statements reads nothing from outside itself - every name it mentions is one it brings into being, and every value in it is written out where it stands.";
  "A run like this is made of constants and nothing else, so it depends on nothing and can be read without knowing anything around it. Where a reading groups code by its shape, that is what makes such a run worthless to group by: the names are what carry the meaning, and a shape has taken away exactly the ones this run has.";
  "The names it declares have to be subtracted, because a name being declared is mentioned where it is declared - so a run of tallies each set to zero mentions every one of them, and asking only what is mentioned would answer that it reads four names when it reads none.";
  let referenced = js_statements_referenced_names(statements);
  let declared = js_statements_declared_names(statements);
  let outside = list_difference(referenced, declared);
  let r = list_empty_is(outside);
  return r;
}
