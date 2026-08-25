import { list_join_comma } from "./list_join_comma.mjs";
import { list_adder } from "./list_adder.mjs";
import { each_object } from "./each_object.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function hash_pairs_text(hash) {
  "What a set of named values reads as after the hash mark, without the mark itself - a comma-separated run of name-equals-value.";
  "It is the mark that is left off, and that is the whole reason this is its own function. A hash holds ONE piece of text and there are two ways of writing that text: a bare word naming a screen, and a run of pairs naming values. Only the second is built from an object, so only the second belongs here - and a caller holding the first has nothing to call at all, it already has its text.";
  "Written together with the mark, those two ways could never meet: anything wanting to accept either kind had to know which it was holding and reach for a different function, which is a branch in every caller rather than a shape in one place. Apart from the mark they are both simply the text after it, and a caller can hold one string and stop caring.";
  function lambda3(la) {
    function lambda(value, property) {
      let part = text_combine_multiple([property, "=", value]);
      la(part);
    }
    each_object(hash, lambda);
  }
  let parts = list_adder(lambda3);
  let text = list_join_comma(parts);
  return text;
}
