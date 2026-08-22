import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_adjacent } from "./bible_glyph_chapters_marks_adjacent.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapters_marks_group_misread() {
  "Every place in the written picture Bible where the two pictures either side of a word gap spell a group that the tables have already given a meaning to.";
  "IT IS THE WORST MISREADING THIS SCHEME CAN PRODUCE and it is the reason the count of touching words was not enough. Two words touching ambiguously is only a nuisance while the wrong reading means nothing - a reader who joins them gets a shape that is not a word and backs out. When the joined shape IS a word, nothing tells the reader to back out, and the verse says something the text does not say.";
  "IT LOOKS AT THE INNERMOST TWO MARKS ONLY, which is the whole of the risk while every group in the tables is two pictures long. The last picture of one word and the first of the next are what stand either side of the gap; anything further out is separated from the join by a picture. A group of three would need this widened, and the vocabulary is the place that would say so.";
  "A GROUP IS ASKED FOR RATHER THAN NAMED HERE, so seating a word on a new pair of pictures brings this reading up to date with no edit. That matters more than it looks: the newest group is two walking figures, and a walking figure is common enough at the end and the start of a word that the pair could arrive by accident.";
  "IT REUSES THE PAIR WALK RATHER THAN REPEATING IT, so a chapter that is skipped there is skipped here for the same reason and the two counts can be read against each other.";
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let adjacent = bible_glyph_chapters_marks_adjacent();
  let touching = property_get(adjacent, "touching");
  let misread = [];
  for (let pair of touching) {
    let before = bible_glyph_group_names(property_get(pair, "before"));
    let after = bible_glyph_group_names(property_get(pair, "after"));
    let joined = list_last(before) + "+" + list_first(after);
    let spelled = vocabulary.includes(joined);
    if (spelled) {
      list_add(misread, {
        chapter_code: property_get(pair, "chapter_code"),
        verse_number: property_get(pair, "verse_number"),
        before: property_get(pair, "before"),
        after: property_get(pair, "after"),
        group: joined,
      });
    }
  }
  let r = {
    groups: list_size(vocabulary),
    vocabulary,
    touching_count: list_size(touching),
    misread_count: list_size(misread),
    misread,
  };
  return r;
}
