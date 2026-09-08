import { arguments_assert } from "./arguments_assert.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { app_ceb_bible_gloss_passages_respell_refused_each } from "./app_ceb_bible_gloss_passages_respell_refused_each.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_names() {
  "Every Cebuano passage the respell walks past without correcting anything, named once each by the chapter it stands in and the verses it covers.";
  "The reading beside this one answers with how many and by how much, which is what a person weighing the size of the problem wants. A record cannot be kept in those: it holds no name, so nothing in it could refuse the arrival of a fourteenth passage that the respell has quietly stopped touching.";
  "★ THE REFUSAL IS SILENT, WHICH IS THE WHOLE REASON A RECORD OF IT IS WORTH KEEPING. A passage the respell declines and a passage that needed no correction answer identically from outside - both hand back nothing changed. So a chapter authored today whose explanations do not line up with its words joins the untouched set without any reading going red, and stays there.";
  "The two counts are left out of the name on purpose. They are what the disagreement measures, not what it is, and a half-repair that moves them would read as one offender leaving and another arriving where nothing of the sort happened. The passage is the thing somebody sits down to mend, so the passage is what is named.";
  "The verses stand in for the passage because that is the one part of it that survives being re-authored. A key made of its text would change on every correction to the text, which is exactly when the record most needs to say that this is still the same passage.";
  "The test is the respell's own and is not repeated here. It is asked for from the walk that does it, so this list and the counts beside it can never come to be about different sets of passages.";
  arguments_assert(arguments, 0);
  let names = [];
  function refused_read(chapter_code, explained, written, passage) {
    let verses = g_sermon_passage_verses_key(passage);
    let named = text_combine_multiple([chapter_code, " ", verses]);
    list_add(names, named);
  }
  await app_ceb_bible_gloss_passages_respell_refused_each(refused_read);
  let unique = list_unique(names);
  let sorted = list_sort_text(unique);
  return sorted;
}
