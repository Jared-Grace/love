import { property_not } from "./property_not.mjs";
import { gloss_chapters_words_edged } from "./gloss_chapters_words_edged.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_root_judged } from "./gloss_explain_root_judged.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_words_edged_roots() {
  "The faults hiding behind the marks: every Cebuano explanation whose word carries a quotation mark or a comma from its sentence, put to the same root question the ordinary sweep asks, under the word spelled bare.";
  "This counts faults and not lookups. Knowing how many of these words a dictionary could be made to answer about says only what could be asked; what a reader wants to know before paying for the asking is how many of the answers would say something is wrong. So each one is judged by the same reading the ordinary sweep is judged by, and only the ones that come out disagreeing are named.";
  "The bare spelling is what is judged, not the spelling in the store, because the mark is no part of the word - a root that is the word's own spelling has to be recognised as that with the comma taken off, or every one of these would be reported as a disagreement.";
  let offenders = await gloss_chapters_words_edged(
    app_ceb_bible_gloss_generate,
  );
  let known = await binisaya_words_known();
  let judged_count = 0;
  let hidden = [];
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let word = property_get(finding, "word");
      let bare = property_get(finding, "bare");
      let explain = property_get(finding, "explain");
      let held = binisaya_words_known_get(known, bare);
      let never_asked = null_is(held);
      if (never_asked) {
        return;
      }
      let refused = property_not(held, "analysed");
      if (refused) {
        return;
      }
      let root = property_get(held, "root");
      let judged = gloss_explain_root_judged(bare, root, explain);
      let nothing_to_judge = null_is(judged);
      if (nothing_to_judge) {
        return;
      }
      judged_count = add(judged_count, 1);
      let agreed = property_get(judged, "agreed");
      if (agreed) {
        return;
      }
      let kind = property_get(judged, "kind");
      let claimed = property_get(judged, "claimed");
      let fault = {
        word,
        bare,
        root,
        kind,
        claimed,
        chapter_code,
        explain,
      };
      list_add(hidden, fault);
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  function silent_is(fault) {
    let says_nothing = property_equals(fault, "kind", "silent");
    return says_nothing;
  }
  let silent = list_filter(hidden, silent_is);
  let hidden_count = list_size(hidden);
  let silent_count = list_size(silent);
  let r = {
    judged_count,
    hidden_count,
    silent_count,
    hidden,
  };
  return r;
}
