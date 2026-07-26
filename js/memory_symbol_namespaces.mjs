import { functions_names } from "./functions_names.mjs";
import { text_before_first } from "./text_before_first.mjs";
import { each } from "./each.mjs";
export async function memory_symbol_namespaces() {
  "The first word of every live function name, as a set. A name is built by narrowing - the first word says which family it belongs to - so this is the vocabulary a name has to open with to be making a claim about repo code at all.";
  "Derived rather than listed, so a family that appears or disappears needs no edit here. A list written by hand would be right the day it was written and quietly wrong after that.";
  let names = await functions_names();
  let namespaces = {};
  function record(name) {
    let first = text_before_first(name, "_");
    namespaces[first] = true;
  }
  each(names, record);
  return namespaces;
}
