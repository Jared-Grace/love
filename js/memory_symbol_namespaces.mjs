import { property_greater_than } from "./property_greater_than.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { functions_names } from "./functions_names.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { each } from "./each.mjs";
export async function memory_symbol_namespaces() {
  "The first word of every live function name, as a set. A name is built by narrowing - the first word says which family it belongs to - so this is the vocabulary a name has to open with to be making a claim about repo code at all.";
  "Derived rather than listed, so a family that appears or disappears needs no edit here. A list written by hand would be right the day it was written and quietly wrong after that.";
  "A family of exactly one is not a family. One function opening a word is a coincidence, not a vocabulary, and admitting it hands the whole shape to anything that shares that word - a note quoting its own click handler writes a name starting the way one lone repo function does, and gets held to a claim it never made. So a word has to be shared before it counts as one.";
  let names = await functions_names();
  let counts = {};
  function record(name) {
    let first = text_split_first(name, "_");
    let so_far = property_get_or(counts, first, 0);
    counts[first] = so_far + 1;
  }
  each(names, record);
  let namespaces = {};
  function admit(name) {
    let first = text_split_first(name, "_");
    let family = property_greater_than(counts, first, 1);
    if (family) {
      namespaces[first] = true;
    }
  }
  each(names, admit);
  return namespaces;
}
