import { arguments_assert } from "./arguments_assert.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_glyph_collision_picture_name(entry) {
  "$plain entry";
  "What one shared picture is called wherever it has to be written down: the picture, then the roots standing on it, sorted and joined.";
  "IT IS SPELLED HERE ONCE SO THAT TWO RECORDS OF THE SAME PICTURE CAN BE LAID BESIDE EACH OTHER. The collisions record already names pictures this way, and a tally or a ratchet naming them any other way would have to be translated before the two could be compared - which is the point at which somebody translates one of them wrongly and nothing says so.";
  "The roots are sorted rather than left in the order they were found, because the order they were found in is an accident of which table was walked first, and a name that changes with the walk is not a name.";
  arguments_assert(arguments, 1);
  let list = list_sort_text(entry.sharers);
  let sharers = list_join_plus(list);
  let name = list_join_space([entry.glyph, sharers]);
  return name;
}
