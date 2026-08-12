import { equal_not } from "./equal_not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_interlinear_original_key } from "./bible_interlinear_original_key.mjs";
import { list_first } from "./list_first.mjs";
("The two original-language column names, found on the rows themselves rather than typed.");
("The tables spell the base text twice: once with the editorial sigla stripped, once with");
("them kept. The marked spelling contains brace, chevron and guillemet characters, so a");
("hand-typed copy of it is one invisible character away from matching nothing - which is");
("not an error, it is an empty result that reads exactly like a column full of blanks.");
("So both names are read off the data, by the words the two spellings share. The sigla");
("interrupt the edition names, so only the leading words are common to both.");
("Returns { plain, marked, family }; marked is empty text when no marked column exists.");
export function bible_interlinear_original_keys_find(rows) {
  let plain = bible_interlinear_original_key();
  let first = list_first(rows);
  let names = object_property_names(first);
  let shared = "Nestle Base";
  function family_is(name) {
    let holds = name.includes(shared);
    return holds;
  }
  let family = names.filter(family_is);
  function marked_is(name) {
    let n = equal_not(name, plain);
    return n;
  }
  let others = family.filter(marked_is);
  let marked = others.length ? others[0] : "";
  let r = {
    plain,
    marked,
    family,
  };
  return r;
}
