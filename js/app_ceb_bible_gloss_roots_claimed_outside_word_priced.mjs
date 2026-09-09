import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_edit_distance_inside } from "./text_edit_distance_inside.mjs";
import { list_add } from "./list_add.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_tally } from "./list_tally.mjs";
import { subtract } from "./subtract.mjs";
export async function app_ceb_bible_gloss_roots_claimed_outside_word_priced() {
  "How far each Cebuano root that is not spelled inside its own word stands from being spelled inside it, counted in single-letter edits, so that the one side of the store nobody has a number for is priced by what could be at fault on it rather than by how many rows it holds.";
  ("★ THE ITEM COUNT AND THE FAULT COUNT ARE TWO ORDERS OF MAGNITUDE APART. ",
    fn_name("app_ceb_bible_gloss_roots_claimed_outside_word"),
    " hands back five thousand seven hundred and fifty three sightings, and says in its own prose that the number must not be read as faults, because Cebuano drops the vowel out of a root's last syllable and shifts a consonant when an ending goes on. That is right, and nothing had ever said how much of the five thousand it accounts for.");
  ("Measured, and the parts are made to sum. Thirty of the five thousand seven hundred and fifty three are inside their word once the accent is off, leaving five thousand seven hundred and twenty three. Of those, five thousand three hundred and eight are one letter from being inside, three hundred and sixty are two, and fifty five are three or more. Thirty and five thousand three hundred and eight and three hundred and sixty and fifty five is five thousand seven hundred and fifty three, and inside and outside together are the forty two thousand four hundred and eighty four sentences that plainly say the word root.");
  ("What two edits buys is not a guess. Every pair met at two is a sound change somebody could name - hinungdan from tungod at a hundred and three sightings, ilimnon from inom, kamatuoran from tinuod, pinuy-anan from puyo - and the count at two is led by exactly the shape the other reading gives as its own example. Three is where ordinary word-building stops being able to reach, so a row at three or more is the one a person should read.");
  ("★ NEARNESS IS NOT INNOCENCE AND THIS NUMBER MUST NOT BE READ AS ONE. A root somebody invented can land close by chance: panapton is two edits from hapot, and hapot is a root no dictionary gives. So a small distance says ordinary sound change could have made this, never that it did. The unreachable rows are a floor under the faults, never a ceiling on them.");
  ("The accent marks are taken off before the spellings are folded, because the fold this reading borrows leaves a mark exactly where it finds it while the Cebuano bible writes no accent in any word of its text, so a marked root reads as standing outside a word it is spelled inside. That is the whole of what ",
    fn_name("app_ceb_bible_gloss_roots_claimed_marks_inside_priced"),
    " measured, and stripping here is what keeps thirty rows from being counted as distance where they are really spelling.");
  ("The far rows are handed back whole, sentence and all, because a count of fifty five that nobody can walk back to says a fault exists and refuses to say where.");
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let inside = 0;
  let distances = [];
  let rows = [];
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let claimed = property_get(found, "claimed");
    let claimed_count = list_size(claimed);
    let empty = equal(claimed_count, 0);
    if (empty) {
      return;
    }
    strict_total = add(strict_total, 1);
    let first = list_get(claimed, 0);
    let word = property_get(entry, word_key);
    let word_plain = text_accent_marks_removed(word);
    let word_bare = gloss_word_bare(word_plain);
    let word_lowered = text_lower_to(word_bare);
    let word_folded = gloss_word_folded(word_lowered);
    let root_plain = text_accent_marks_removed(first);
    let root_bare = gloss_word_bare(root_plain);
    let root_lowered = text_lower_to(root_bare);
    let root_folded = gloss_word_folded(root_lowered);
    let edits = text_edit_distance_inside(word_folded, root_folded);
    let held = equal(edits, 0);
    if (held) {
      inside = add(inside, 1);
      return;
    }
    list_add(distances, edits);
    let reachable = less_than(edits, 3);
    if (reachable) {
      return;
    }
    let chapter_code = property_get(found, "chapter_code");
    let explain = property_get(found, "explain");
    let row = {
      chapter: chapter_code,
      word,
      root: first,
      edits,
      explain,
    };
    list_add(rows, row);
  }
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  let outside = list_size(distances);
  let unreachable = list_size(rows);
  let r = {
    chapters: property_get(walked, "chapters"),
    strict_total,
    inside,
    outside,
    spread: list_tally(distances),
    reachable: subtract(outside, unreachable),
    unreachable,
    rows,
  };
  return r;
}
