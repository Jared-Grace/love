import { object_is_assert } from "./object_is_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each_object } from "./each_object.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function hash_pairs_text(hash) {
  "What a set of named values reads as after the hash mark, without the mark itself - a comma-separated run of name-equals-value.";
  "A name holding no value is written bare, as the word alone: an empty value reads back the same from a bare word, so an equals sign would only add a mark the reader has to skip.";
  "It is the mark that is left off, and that is the whole reason this is its own function. A hash holds ONE piece of text and there are two ways of writing that text: a bare word naming a screen, and a run of pairs naming values. Only the second is built from an object, so only the second belongs here - and a caller holding the first has nothing to call at all, it already has its text.";
  "Written together with the mark, those two ways could never meet: anything wanting to accept either kind had to know which it was holding and reach for a different function, which is a branch in every caller rather than a shape in one place. Apart from the mark they are both simply the text after it, and a caller can hold one string and stop caring.";
  "A BARE WORD NAMING A SCREEN IS REFUSED AT THE DOOR RATHER THAN WALKED. The letters of a piece of text answer to being read as properties and hand back their own positions, so a caller holding the other kind of hash used to get an address built out of nothing, complaining about an operator four calls below the line that made the mistake.";
  object_is_assert(hash);
  function lambda3(la) {
    function lambda(value, property) {
      if (text_empty_is(value)) {
        la(property);
        return;
      }
      let part = text_combine_multiple([property, "=", value]);
      la(part);
    }
    each_object(hash, lambda);
  }
  let parts = list_adder(lambda3);
  let text = list_join_comma(parts);
  return text;
}
