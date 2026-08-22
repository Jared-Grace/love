import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { ebible_book_testaments } from "./ebible_book_testaments.mjs";
import { list_size } from "./list_size.mjs";
import { bible_glyph_roots_groups_spellable } from "./bible_glyph_roots_groups_spellable.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { multiply } from "./multiply.mjs";
export function bible_glyph_roots_groups_spellable_names_walked() {
  "Every group of pictures that the seated words can already spell by standing two of them side by side, named one to a group and testament, beside how many group-and-testament pairs were looked at to find them.";
  "IT IS THE FULL READING FLATTENED DOWN TO NAMES, because a ratchet compares names and nothing else. The reading underneath answers which words do the spelling and how many ways there are, which is what an author needs and what a record must not hold: the ways move every time an ordinary new word is seated on a picture that already carried one, so a record counting them would go red on work that adds no hazard at all and would teach everybody to rewrite it.";
  "SO THE NAME IS THE GROUP AND THE TESTAMENT AND NOTHING FINER. That is exactly the decision worth refusing - seating a group on a pair of pictures that two ordinary words can already put side by side - and it is coarse enough that the ordinary work of seating more words never disturbs it.";
  "THE TESTAMENT IS PART OF THE NAME because a Strong's number belongs to one of the two, so a group can be a hazard in Greek and no hazard at all in Hebrew. Folding the two together would hide a repair: re-seating a group so that only one testament can spell it is real progress, and a name without the testament would report that as no change.";
  "HOW MANY WERE LOOKED AT IS COUNTED AND NOT DERIVED FROM THE ANSWER. Every number this could work out for itself - the length of the offender list, the size of the record - is the same on the run where the walk has stopped reaching the tables, which is the run that has to be caught. The count is the groups times the testaments, and both of those fall to nothing together if the tables ever stop being read.";
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let testaments = ebible_book_testaments();
  let groups = list_size(vocabulary);
  let sides = list_size(testaments);
  let walked = multiply(groups, sides);
  let rows = bible_glyph_roots_groups_spellable();
  let offenders = [];
  for (let row of rows) {
    let group = property_get(row, "group");
    let testament_name = property_get(row, "testament_name");
    let name = group + " " + testament_name;
    list_add(offenders, name);
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
