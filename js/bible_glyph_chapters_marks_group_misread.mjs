import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
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
  "IT LOOKS AT THE INNERMOST TWO MARKS ONLY, which is the whole of the risk while every group in the tables is two pictures long. The last picture of one word and the first of the next are what stand either side of the gap; anything further out is separated from the join by a picture.";
  "SO IT REFUSES A LONGER GROUP RATHER THAN QUIETLY MISSING IT. A group of three could be spelled across a gap by a word ending in two of its pictures, and neither of the two marks this compares would have to belong to it - so the reading would narrow itself, keep running, and go on reporting nought. That is the same fault this whole reading exists to catch, one level up, and an assumption written only in prose is not one anybody has to keep.";
  "A GROUP IS ASKED FOR RATHER THAN NAMED HERE, so seating a word on a new pair of pictures brings this reading up to date with no edit. That matters more than it looks: the newest group is two walking figures, and a walking figure is common enough at the end and the start of a word that the pair could arrive by accident.";
  "IT REUSES THE PAIR WALK RATHER THAN REPEATING IT, so a chapter that is skipped there is skipped here for the same reason and the two counts can be read against each other.";
  "IT COUNTS THE HALF MISSES BESIDE THE MISREADINGS, and it does that so a clean answer can be told apart from a blind one. Nought misreadings is the answer everybody hopes for and it is also exactly what a walk that found no pictures at all would say - that mistake has already been made once here, on the reading this one is built out of. A half miss is a gap with a mark that opens a group on one side of it, or one that closes a group on the other; both halves being common while no pair ever lines up is the difference between a measured nought and an empty one.";
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let opens = [];
  let closes = [];
  for (let group of vocabulary) {
    let parts = bible_glyph_group_names(group);
    let left = list_size(parts);
    let pair = equal(left, 2);
    assert_json(pair, {
      group,
      parts,
      hint: "this reading compares the last picture of one word against the first of the next, which is the whole of the risk only while a group is two pictures long - a longer group can be spelled across a gap without either of those two marks belonging to it, so this reading has to be widened to every ending and every beginning before a group like this is seated",
    });
    let item = list_first(parts);
    list_add(opens, item);
    let item2 = list_last(parts);
    list_add(closes, item2);
  }
  let adjacent = bible_glyph_chapters_marks_adjacent();
  let touching = property_get(adjacent, "touching");
  let misread = [];
  let opened = 0;
  let closed = 0;
  for (let pair of touching) {
    let glyph = property_get(pair, "before");
    let before = bible_glyph_group_names(glyph);
    let glyph2 = property_get(pair, "after");
    let after = bible_glyph_group_names(glyph2);
    let tail = list_last(before);
    let head = list_first(after);
    let half_opened = list_includes(opens, tail);
    if (half_opened) {
      opened = opened + 1;
    }
    let half_closed = list_includes(closes, head);
    if (half_closed) {
      closed = closed + 1;
    }
    let joined = tail + "+" + head;
    let spelled = list_includes(vocabulary, joined);
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
    opened_count: opened,
    closed_count: closed,
    misread_count: list_size(misread),
    misread,
  };
  return r;
}
