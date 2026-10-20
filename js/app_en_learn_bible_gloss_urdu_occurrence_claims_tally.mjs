import { arguments_assert } from "./arguments_assert.mjs";
import { property_not } from "./property_not.mjs";
import { gloss_occurrence_claim_counted_is } from "./gloss_occurrence_claim_counted_is.mjs";
import { not } from "./not.mjs";
import { app_en_learn_bible_gloss_urdu_chapters_claims_generic } from "./app_en_learn_bible_gloss_urdu_chapters_claims_generic.mjs";
import { gloss_passages_occurrence_claims_urdu } from "./gloss_passages_occurrence_claims_urdu.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_en_learn_bible_gloss_urdu_occurrence_claims_tally() {
  "How many sentences of the Urdu store say which time over one of its English words has come, split by how far the reading got with each one: the ones whose number it read, the ones whose number it could not read, and the ones it decided were about some other time than this word's.";
  "★ THIS IS WHAT STOPS THE GATE BESIDE IT GOING QUIET. The reading finds a claim by the words the store happens to spell it with, so a chapter worded any other way is found nowhere and reports nothing wrong - which is the same answer as a chapter with nothing wrong in it. A floor under the number counted turns that silence into a red gate, and the number is here rather than inside the gate so that anybody can ask it without running one.";
  "The three kinds are counted apart rather than together because each one fails differently. The counted ones are the gate's whole reach. The unread ones are a number spelled a way the ordinal table does not hold, so the table is what wants widening. The ones set aside are sentences looking back at an earlier time rather than claiming this one, and they are counted so that a change which quietly turned real claims into set-aside ones shows up as the counted number falling.";
  "Chapters that hold no such sentence at all are not counted, because the sweep this asks drops them before answering and a chapter with nothing to say is not a chapter that went quiet.";
  arguments_assert(arguments, 0);
  function elsewhere_is(claim) {
    let elsewhere = property_not(claim, "about_this");
    return elsewhere;
  }
  function unread_is(claim) {
    let elsewhere = property_not(claim, "about_this");
    if (elsewhere) {
      return false;
    }
    let counted = gloss_occurrence_claim_counted_is(claim);
    let unread = not(counted);
    return unread;
  }
  let chapters = await app_en_learn_bible_gloss_urdu_chapters_claims_generic(
    gloss_passages_occurrence_claims_urdu,
  );
  let claims = [];
  function chapter_read(chapter) {
    let found = property_get(chapter, "found");
    function claim_read(claim) {
      list_add(claims, claim);
    }
    each(found, claim_read);
  }
  each(chapters, chapter_read);
  let list = list_filter(claims, gloss_occurrence_claim_counted_is);
  let list2 = list_filter(claims, unread_is);
  let list3 = list_filter(claims, elsewhere_is);
  let r = {
    chapters: list_size(chapters),
    claims: list_size(claims),
    counted: list_size(list),
    unread: list_size(list2),
    elsewhere: list_size(list3),
  };
  return r;
}
