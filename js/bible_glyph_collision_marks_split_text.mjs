import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_colon } from "./list_join_colon.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function bible_glyph_collision_marks_split_text(tally) {
  "$plain tally";
  "How a count of marks divides between the roots sharing one picture, written out for a person to read: each root, a colon, its share, one after another on a line.";
  "There are two tallies with exactly this shape on every row - the marks the interlinear decided by itself and the marks that paired off with the words by position - and a line wanting to show both would otherwise spell the same loop twice. The two are counted apart on purpose, so the thing they share is how they are written and never what they mean.";
  "A tally with nothing in it comes back as an empty line rather than as a word saying so, because the caller is laying these out in columns and a column is already able to be blank.";
  arguments_assert(arguments, 1);
  let split = [];
  for (let root_name of object_property_names(tally)) {
    let count = property_get(tally, root_name);
    let item = list_join_colon([root_name, count]);
    list_add(split, item);
  }
  let text = list_join_comma_space(split);
  return text;
}
