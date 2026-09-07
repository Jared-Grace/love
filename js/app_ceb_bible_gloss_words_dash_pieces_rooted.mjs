import { app_ceb_bible_gloss_words_dash_pieces_absent } from "./app_ceb_bible_gloss_words_dash_pieces_absent.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_chapters_roots_claimed_distinct } from "./gloss_chapters_roots_claimed_distinct.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_dash_pieces_rooted() {
  "The pieces of dashed Cebuano words that the store explains nowhere on its own and that an authored explanation nonetheless names as a root.";
  "★ THIS IS THE QUESTION THAT SEPARATES A WASTED LOOKUP FROM A FALSE STATEMENT A READER IS SHOWN. A dictionary invented an analysis of a piece nobody wrote, and that cost a fetch. If the same piece is standing in an explanation as somebody's root, it has stopped being a cost and become a claim about Cebuano that the page makes to whoever reads it.";
  "No piece can be explained under its own name, and that needs no measuring: a piece counts as absent exactly because no word the store explains is spelled that way. The root claims are the one road left open, because a root is named inside prose and does not have to be a word the store explains at all.";
  "An empty answer here is worth as much as a full one and should be reported rather than passed over. It bounds the damage: the fabrications stayed in the dictionary and never reached the page.";
  "Roots are compared in one case. A root is written in small letters and a piece cut from the head of a sentence wears a capital, so comparing them as written would miss exactly the pieces most likely to have been believed.";
  let measured = await app_ceb_bible_gloss_words_dash_pieces_absent();
  let absent = property_get(measured, "words_absent");
  let phantom = {};
  function phantom_hold(word) {
    let lowered = text_lower_to(word);
    property_set(phantom, lowered, true);
  }
  each(absent, phantom_hold);
  let claimed = await gloss_chapters_roots_claimed_distinct(
    app_ceb_bible_gloss_generate,
  );
  let lowered = list_map_unique(claimed, text_lower_to);
  function phantom_is(root) {
    let held = property_get_or_null(phantom, root);
    let b = null_is(held);
    let there = not(b);
    return there;
  }
  let rooted = list_filter(lowered, phantom_is);
  let r = {
    phantoms: list_size(absent),
    roots_claimed: list_size(lowered),
    rooted: list_size(rooted),
    words: rooted,
  };
  return r;
}
