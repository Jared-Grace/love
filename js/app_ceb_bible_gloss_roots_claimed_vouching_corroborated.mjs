import { app_ceb_bible_gloss_roots_claimed_vouching_corroborated_root_read } from "./app_ceb_bible_gloss_roots_claimed_vouching_corroborated_root_read.mjs";
import { app_ceb_bible_gloss_roots_claimed_vouching_corroborated_witness_count } from "./app_ceb_bible_gloss_roots_claimed_vouching_corroborated_witness_count.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
import { gloss_chapters_roots_claimed_rows_generic } from "./gloss_chapters_roots_claimed_rows_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_row_sightings } from "./gloss_row_sightings.mjs";
export async function app_ceb_bible_gloss_roots_claimed_vouching_corroborated() {
  "Every root the Cebuano gloss store names, sorted by how many different dictionary words vouch for it, so that a vouching resting on one word alone is told apart from a vouching many words agree on.";
  "Vouching was read until now as a single yes. A word the dictionary names as some other word's root was taken as proved, because nothing the app asks for can put a word in that position and only the site could have written it. That much is still true and it is why the reading exists.";
  "What it misses is that the site does not look a word up before answering. It strips affixes off whatever it is handed and reports the residue, so it answered moises with the root isi and the affixes mo- and -s, and it answered aaron with the root aron and the prefix a-. Neither residue was ever a word anybody used. Both are now sitting in the vouched set, indistinguishable from sulti and buhat, because the store cannot tell a lexicon hit from a guess.";
  "Counting the witnesses tells them apart without anybody judging Cebuano. A root reached from forty-five different words is a place forty-five independent strippings converged on, and stripping noise does not converge. A root reached from exactly one word is that one stripping and nothing else, which is what isi is.";
  "The claims are split three ways on that count and each part is tallied twice over, once inside Psalms, Proverbs and Song and once through the other twenty-seven books, because the finding this was built to check is a clean bill of health for those twenty-seven and a permissive test would hand out exactly that.";
  "★ THIS RE-ASKS A QUESTION THAT WAS ALREADY ANSWERED YES. The earlier reading found every root claim outside the three poetic books vouched for, with no exceptions at all, and a perfect score is the shape a test too easy to fail also makes. Whatever comes back here is about the test and not about the store: if the clean books stay clean under the harder test the first answer stands, and if they do not then the first answer was measuring the dictionary's willingness to guess.";
  "★ ONE WITNESS IS NOT A FAULT. Most real roots are named by one word or by none, because most words were never taken apart. What is separated here is how much a vouching rests on, not whether a root is good, and the single-witness rows are listed with the word that vouched for them so that a reader can see the difference between kaon reached once and isi reached once.";
  arguments_assert(arguments, 0);
  let r =
    await app_ceb_bible_gloss_roots_claimed_vouching_corroborated_witness_count();
  let witness_count = property_get(r, "witness_count");
  let named_more = property_get(r, "named_more");
  let named_once = property_get(r, "named_once");
  let named_roots = property_get(r, "named_roots");
  let witnesses = property_get(r, "witnesses");
  function witness_tally(key) {
    let size = witness_count(key);
    let many = greater_than(size, 1);
    if (many) {
      named_more = add(named_more, 1);
      return;
    }
    named_once = add(named_once, 1);
  }
  each(named_roots, witness_tally);
  let poetic = ["PSA", "PRO", "SNG"];
  let roots_by_class = {};
  let claims_poetry = {};
  let claims_rest = {};
  let once_books = {};
  let once_listed = [];
  let root_read =
    app_ceb_bible_gloss_roots_claimed_vouching_corroborated_root_read(
      poetic,
      claims_rest,
      claims_poetry,
      witness_count,
      roots_by_class,
      witnesses,
      once_books,
      once_listed,
    );
  let gathered = await gloss_chapters_roots_claimed_rows_generic(
    app_ceb_bible_gloss_generate,
    root_read,
  );
  list_sort_number_mapper_reverse(once_listed, gloss_row_sightings);
  let dictionary_named = list_size(named_roots);
  let answer = {};
  let value = property_get(gathered, "chapters");
  property_set(answer, "chapters", value);
  property_set(answer, "dictionary_roots_named", dictionary_named);
  property_set(answer, "dictionary_roots_named_once", named_once);
  property_set(answer, "dictionary_roots_named_more", named_more);
  let value2 = property_get(gathered, "roots_distinct");
  property_set(answer, "roots_claimed", value2);
  property_set(answer, "roots_by_class", roots_by_class);
  property_set(answer, "claims_poetry", claims_poetry);
  property_set(answer, "claims_rest", claims_rest);
  property_set(answer, "vouched_once_books", once_books);
  property_set(answer, "vouched_once_listed", once_listed);
  return answer;
}
