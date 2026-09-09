import { app_ceb_bible_gloss_roots_disagreeing_offenders } from "./app_ceb_bible_gloss_roots_disagreeing_offenders.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_roots_disagreeing_classes_claimed_total } from "./gloss_roots_disagreeing_classes_claimed_total.mjs";
import { gloss_classes_word_claims_apart } from "./gloss_classes_word_claims_apart.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export async function app_ceb_bible_gloss_words_explained_apart_names() {
  "Every Cebuano word the app explains one way in one chapter and another way in another, spelled once each and sorted, so a record can be kept of which ones are already known about.";
  "★ THE SAMPLED READING IS STEPPED AROUND HERE ON PURPOSE. The reading a person asks for takes how many classes to draw from and hands back that many, which is right for somebody reading a screenful worst-first and wrong for a record, because a record built from a sample records the sample. The layer beneath it holds every class it ever gathered, so this asks that layer and no ceiling is written down anywhere.";
  "★ THE DICTIONARY IS NEVER ASKED, AND THAT IS WHAT MAKES THE LIST HOLD STILL. The reading a person asks for marks each class with whether binisaya.com knows the root, and a gather run moves that mark about without a single explanation having been touched. Nothing here reads the mark: whether one word carries two claims is settled by the store alone, so the same store answers the same way tonight and next month.";
  "★ THE WORD IS ITS OWN NAME HERE. A row is one word with two or more roots claimed for it, and the word is what a person opens the passages under, so nothing else is put beside it. The count of sightings the reading ranks by is deliberately left out: it moves whenever a chapter is glossed again, and a record that changes on its own is a record that goes red for nothing.";
  arguments_assert(arguments, 0);
  let offenders = await app_ceb_bible_gloss_roots_disagreeing_offenders();
  let findings = [];
  let counted = gloss_roots_disagreeing_classes_claimed_total(
    findings,
    offenders,
  );
  let r = property_get(counted, "r4");
  let classes = property_get(r, "classes");
  let apart = gloss_classes_word_claims_apart(classes);
  let spelled_all = list_map_property(apart, "word");
  let sorted = list_unique_sorted(spelled_all);
  return sorted;
}
