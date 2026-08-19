import { property_get } from "./property_get.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
export function bible_verse_holes_entry_empty_is(entry) {
  "Whether one bible in the hole record answered with nothing for every verse it was asked for.";
  "IT IS A DIFFERENT THING FROM A BIBLE WITH HOLES IN IT, and the difference is the whole reason it is asked separately. A bible that numbers its verses its own way leaves gaps where a page asked for a number it does not use, and that is somebody's editorial decision rather than a fault. A bible that answers for nothing at all is not making a decision about numbering - it is a folder named wrongly, or a book that was never uploaded, and a reader who chose it would get a line of apology in place of every verse.";
  "TWO PLACES ASK IT AND SO IT IS WRITTEN ONCE. The gate refuses these, and the probe that works out what they actually are starts from the same set. Two spellings of the same test would drift the moment one of them learned something the other did not, and the drift would be silent, because both would still return a list of bibles.";
  let asked = property_get(entry, "asked");
  let holes = property_get(entry, "holes");
  let all = list_size_equal(holes, asked);
  return all;
}
