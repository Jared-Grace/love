import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_claimed_shapes_priced } from "./app_ceb_bible_gloss_roots_claimed_shapes_priced.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_chapters_roots_claimed_gathered } from "./gloss_chapters_roots_claimed_gathered.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { text_accent_marks_removed } from "./text_accent_marks_removed.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { text_includes } from "./text_includes.mjs";
import { add } from "./add.mjs";
import { gloss_root_shapes_reaching } from "./gloss_root_shapes_reaching.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { object_values } from "./object_values.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function app_ceb_bible_gloss_roots_claimed_shapes_unreached_witnessed() {
  "Every word and root pair that no named shape of Cebuano word building reaches, asked of the rest of the store: how many other words are taken back to that same root, how many of them spell it inside themselves, and how many of them a named shape reaches.";
  "The pricing beside this one leaves a residue no shape accounts for, and that residue is the honest fault list of the store. It is short enough to read and it has stayed unread, because every row in it is a question about Cebuano and nobody here can answer one. This asks a different question, which the store can answer about itself: does this root do ordinary work anywhere else?";
  "★ THE MEASURE IS THE STORE'S OWN USE OF THE ROOT AND IT NEEDS NO CEBUANO. A root the store hands to thirty words and spells inside twenty nine of them is a root the language really has, and the row here is then a real claim about one hard word. A root the store hands to one word, never spells inside it, and reaches by no shape, is a root nothing in the store has ever shown doing anything. That second kind is where a fault would be, and saying so is arithmetic rather than judgement.";
  "★ NEITHER BAND IS A VERDICT. A root well used elsewhere can still be the wrong root here, so the worked band is not forgiven. A root used nowhere else can still be right, because a bound root that only ever appears under a shape nobody has accepted yet would look exactly like this - which is the same unanswered question the pricing was built to put numbers on. The bands order the reading, and ordering is all they do.";
  "Both the shape and the spelling are asked of the other words, not just the spelling, because those are the two ways the store could be showing the root at work and either one on its own would accuse the wrong rows. A root reached in every other word by a nasal exchange holds nothing inside anything and is doing perfectly ordinary work.";
  "The pair is counted once however many entries write it, and the entries are added up beside it, because a claim repeated forty times is one decision to make and forty sentences to mend.";
  "The store is walked twice, once by the pricing and once by the gathering, and they are not folded into one walk. The pricing decides which pairs are asked about at all and the gathering answers about the whole store rather than about those pairs, so a single walk would have to gather everything against the chance that the pricing wanted it. Two named walks that each say what they are cost minutes and explain themselves.";
  "Measured over the whole store on 2026-09-09: of the sixty five pairs and one hundred and ninety seven sightings the pricing leaves unreached, twenty three pairs and sixty two sightings come back unproved and forty two pairs and one hundred and thirty five sightings come back worked, so the two bands account for the residue exactly and neither number is an estimate off a group.";
  "The largest unproved row is gayoy taken back to gayod, thirty three sightings over twenty nine chapters, and the store takes no other word to that root at all. The largest worked row is ayaw taken back to dili at forty sightings - the single fault a head reading of the relation reader was able to offer out of four hundred pairs - and three of the four words the store takes back to dili spell it inside themselves. So the two measures disagree about which row to read first, and this one is the one that had to look at all sixty five.";
  "The three Psalm 144 rows naming an English phrase as the root land in the unproved band, and so do the asterisk root and one of the two bracketed roots that the rare letter reading files under characters the bible never writes. Two readings built for different reasons arrive at the same rows by different roads, which is worth more than either arriving alone.";
  "Nothing is written and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let priced = await app_ceb_bible_gloss_roots_claimed_shapes_priced();
  let rows = property_get(priced, "rows");
  let gathered = await gloss_chapters_roots_claimed_gathered(
    app_ceb_bible_gloss_generate,
  );
  let by_root = property_get(gathered, "by_root");
  let pairs = {};
  function row_read(row) {
    let word = property_get(row, "word");
    let root = property_get(row, "root");
    let word_lowered = text_lower_to(word);
    let root_lowered = text_lower_to(root);
    let key = list_join_space([word_lowered, root_lowered]);
    let held = property_get_or_null(pairs, key);
    let fresh = null_is(held);
    if (fresh) {
      let stored = property_get_or_null(by_root, root_lowered);
      let silent = null_is(stored);
      let words = [];
      let chapters = [];
      if (not(silent)) {
        words = property_get(stored, "words");
        chapters = property_get(stored, "chapters");
      }
      let root_plain = text_accent_marks_removed(root_lowered);
      let root_bare = gloss_word_bare(root_plain);
      let root_folded = gloss_word_folded(root_bare);
      let holding = 0;
      let shaped = 0;
      for (let other of words) {
        let other_plain = text_accent_marks_removed(other);
        let other_bare = gloss_word_bare(other_plain);
        let other_folded = gloss_word_folded(other_bare);
        let inside = text_includes(other_folded, root_folded);
        if (inside) {
          holding = add(holding, 1);
        }
        if (not(inside)) {
          let reaching = gloss_root_shapes_reaching(other_folded, root_bare);
          let reaching_count = list_size(reaching);
          let b = equal(reaching_count, 0);
          let reached = not(b);
          if (reached) {
            shaped = add(shaped, 1);
          }
        }
      }
      let explain = property_get(row, "explain");
      let made = {
        word: word_lowered,
        root: root_lowered,
        sightings: 0,
        claimed_for: list_size(words),
        claimed_for_holding: holding,
        claimed_for_shaped: shaped,
        chapters: chapters,
        explain: explain,
      };
      property_set(pairs, key, made);
      held = made;
    }
    let seen = property_get(held, "sightings");
    let value = add(seen, 1);
    property_set(held, "sightings", value);
  }
  for (let row of rows) {
    row_read(row);
  }
  let listed = object_values(pairs);
  let unproved = [];
  let worked = [];
  for (let pair of listed) {
    let holding = property_get(pair, "claimed_for_holding");
    let shaped = property_get(pair, "claimed_for_shaped");
    let shown = add(holding, shaped);
    let never = equal(shown, 0);
    if (never) {
      list_add(unproved, pair);
    }
    if (not(never)) {
      list_add(worked, pair);
    }
  }
  list_sort_number_mapper_reverse(unproved, gloss_row_sightings);
  list_sort_number_mapper_reverse(worked, gloss_row_sightings);
  let r = {
    chapters: property_get(priced, "chapters"),
    unreached: property_get(priced, "unreached"),
    pairs: list_size(listed),
    unproved_pairs: list_size(unproved),
    unproved_sightings: list_map_sum(unproved, gloss_row_sightings),
    worked_pairs: list_size(worked),
    worked_sightings: list_map_sum(worked, gloss_row_sightings),
    unproved: unproved,
    worked: worked,
  };
  return r;
}
