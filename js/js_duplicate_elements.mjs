import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_add } from "./list_add.mjs";
export function js_duplicate_elements(ast, size) {
  "Every name an ordered register in this file holds twice.";
  "The sibling of the check next door over sets of settings, and the fault is the quieter of the two. A record given one name twice throws the first entry away; a register given one name twice keeps both, and whatever reads it does the thing twice and says nothing about having done so.";
  "It is the way work goes wrong here rather than a way somebody writes badly. Somebody writes a unit and somebody else notices it is not registered, and the two of them register it seconds apart. Both edits are right, both land, and what is left is a register longer than the set of things it stands for.";
  "Only names are compared, never written words or numbers - a register of names stands for things that get run or read, so holding one twice is always a mistake, while a list of words or numbers may perfectly well say the same thing twice and mean it.";
  let duplicates = [];
  let vs = js_list_type(ast, "ArrayExpression");
  for (let v of vs) {
    let node = property_get(v, "node");
    let elements = property_get(node, "elements");
    ("A short list is passed over, and that is what tells a register apart from a handful of things written side by side. A run of the same name twice is ordinary in the small: a padding written either side of a word, a cycle stepping through nothing and then something and then nothing again, the same reading handed to both halves of a pair. None of those is a register and none of them is wrong.");
    let short = less_than(elements.length, size);
    if (short) {
      continue;
    }
    let seen = [];
    for (let element of elements) {
      let named = js_identifier_is(element);
      if (named) {
        let name = property_get(element, "name");
        let twice = list_includes(seen, name);
        if (twice) {
          list_add_if_not_includes(duplicates, name);
        }
        list_add(seen, name);
      }
    }
  }
  return duplicates;
}
