import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_glyph_characters_twins_names_walked() {
  arguments_assert(arguments, 0);
  ("Each character the alphabet hands out under more than one name, written as one word a record can hold: the character, then the names sharing it joined by pluses.");
  ("THIS IS THE BLIND SPOT OF EVERY OTHER PICTURE GATE. The collision and misread gates compare sequences by NAME, so two names drawing one character look different to them and identical to a reader. A root seated on a twin of a picture another root already wears passes every gate and still reads as the other word.");
  ("THE NAMES ARE SORTED SO THE RECORD DOES NOT MOVE WHEN THE TABLE DOES. Which twin was written first says nothing, so it is not allowed to say anything.");
  ("The count handed back is how many characters were compared, so a reading that stopped reaching the table shows as a fall in it rather than as a clean answer.");
  let characters = bible_glyph_characters();
  let by = {};
  for (let c of characters) {
    let names = by[c.character] ?? [];
    list_add(names, c.name);
    by[c.character] = names;
  }
  let offenders = [];
  for (let [character, names] of Object.entries(by)) {
    if (greater_than(names.length, 1)) {
      let list = list_sort_text(names);
      let sharers = list_join_plus(list);
      let item = list_join_space([character, sharers]);
      list_add(offenders, item);
    }
  }
  let walked = characters.length;
  let r = {
    walked,
    offenders,
  };
  return r;
}
