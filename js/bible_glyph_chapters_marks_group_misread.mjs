import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_groups_vocabulary } from "./bible_glyph_groups_vocabulary.mjs";
import { bible_glyph_group_names } from "./bible_glyph_group_names.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_chapters_marks_adjacent } from "./bible_glyph_chapters_marks_adjacent.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
export function bible_glyph_chapters_marks_group_misread() {
  "Every place in the written picture Bible where the two pictures either side of a word gap spell a group that the tables have already given a meaning to.";
  "IT IS THE WORST MISREADING THIS SCHEME CAN PRODUCE and it is the reason the count of touching words was not enough. Two words touching ambiguously is only a nuisance while the wrong reading means nothing - a reader who joins them gets a shape that is not a word and backs out. When the joined shape IS a word, nothing tells the reader to back out, and the verse says something the text does not say.";
  "IT LOOKS AT EVERY ENDING OF ONE WORD AGAINST EVERY BEGINNING OF THE NEXT. While every group was two pictures long the innermost two marks were the whole of the risk; once a group of three was seated, a word ending in two of its pictures could spell it across a gap without the next word's first mark being anything but its last. So each run of pictures that ends at the gap is joined to each run that starts there, and every one of those joins is asked about - a reading that kept to two marks would narrow itself, keep running, and go on reporting nought.";
  "A BEGINNING NEVER TAKES A NAME MARK THAT HAS ITS NAME WRITTEN AFTER IT. The mark belongs to the letters glued to it, so a join closing on it would have to leave those letters hanging, and a reader does not read it that way - heard Leah was being reported as Simon followed by Leah.";
  "A HALF MISS IS NOW A RUN, NOT A MARK: an ending of the word before that a group begins with, or a beginning of the word after that a group ends with. That is the same question the single marks asked, asked of the runs that can actually stand at the gap.";
  "A GROUP IS ASKED FOR RATHER THAN NAMED HERE, so seating a word on a new pair of pictures brings this reading up to date with no edit. That matters more than it looks: the newest group is two walking figures, and a walking figure is common enough at the end and the start of a word that the pair could arrive by accident.";
  "IT REUSES THE PAIR WALK RATHER THAN REPEATING IT, so a chapter that is skipped there is skipped here for the same reason and the two counts can be read against each other.";
  "IT COUNTS THE HALF MISSES BESIDE THE MISREADINGS, and it does that so a clean answer can be told apart from a blind one. Nought misreadings is the answer everybody hopes for and it is also exactly what a walk that found no pictures at all would say - that mistake has already been made once here, on the reading this one is built out of. A half miss is a gap with a mark that opens a group on one side of it, or one that closes a group on the other; both halves being common while no pair ever lines up is the difference between a measured nought and an empty one.";
  arguments_assert(arguments, 0);
  let vocabulary = bible_glyph_groups_vocabulary();
  let opens = [];
  let closes = [];
  for (let group of vocabulary) {
    let parts = bible_glyph_group_names(group);
    for (let cut = 1; less_than(cut, parts.length); cut++) {
      let item = parts.slice(0, cut).join("+");
      list_add(opens, item);
      let item2 = parts.slice(cut).join("+");
      list_add(closes, item2);
    }
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
    let tails = [];
    for (let start = 0; less_than(start, before.length); start++) {
      let item3 = before.slice(start).join("+");
      list_add(tails, item3);
    }
    let heads = [];
    let after_named = property_get(pair, "after_named");
    let head_ends = after_named ? subtract(after.length, 1) : after.length;
    for (let end = 1; less_than_equal(end, head_ends); end++) {
      let item4 = after.slice(0, end).join("+");
      list_add(heads, item4);
    }
    function lambda(tail) {
      let includes = list_includes(opens, tail);
      return includes;
    }
    let half_opened = tails.some(lambda);
    if (half_opened) {
      opened = opened + 1;
    }
    function lambda2(head) {
      let includes2 = list_includes(closes, head);
      return includes2;
    }
    let half_closed = heads.some(lambda2);
    if (half_closed) {
      closed = closed + 1;
    }
    for (let tail of tails) {
      for (let head of heads) {
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
