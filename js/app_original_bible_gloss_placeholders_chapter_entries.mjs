import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { gloss_chapter_passages_asked_generic } from "./gloss_chapter_passages_asked_generic.mjs";
import { gloss_entries_placeholder_marked } from "./gloss_entries_placeholder_marked.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function app_original_bible_gloss_placeholders_chapter_entries(
  chapter_code,
) {
  "Everything an author needs to give one chapter of the original-language gloss the meanings it is missing: every passage holding a word whose short English is a marker, and within it every such word, where it stands, and the prose already written beside it.";
  "$plain chapter_code";
  "the code is a chapter's name, like JHN01, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The reading that counts these says how much work a chapter holds and which passages hold it; this one is what the work is done from, and it is a separate question because the counting is asked of six chapters at once and this is asked of one at a time.";
  "Passages with nothing marked are left out, so the answer is the worksheet and not the chapter - a chapter of fifty passages holding nine marked words comes back as nine, and an author reading it never opens the other forty-one.";
  let fn = app_original_bible_gloss_generate;
  function passage_read(entries, verses) {
    let marked = gloss_entries_placeholder_marked(entries);
    let none = list_empty_is(marked);
    if (none) {
      let nothing = null;
      return nothing;
    }
    let saying = {
      verses,
      marked,
    };
    return saying;
  }
  let r = await gloss_chapter_passages_asked_generic(
    chapter_code,
    fn,
    passage_read,
  );
  return r;
}
