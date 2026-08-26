import { app_en_learn_bible_gloss_urdu_generate_upload_namespace } from "./app_en_learn_bible_gloss_urdu_generate_upload_namespace.mjs";
import { app_en_learn_bible_gloss_urdu_chapter_upload_stored } from "./app_en_learn_bible_gloss_urdu_chapter_upload_stored.mjs";
import { app_en_learn_bible_gloss_urdu_generate } from "./app_en_learn_bible_gloss_urdu_generate.mjs";
import { app_en_learn_bible_gloss_urdu_passages } from "./app_en_learn_bible_gloss_urdu_passages.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_finished_unpublished } from "./gloss_chapters_finished_unpublished.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_en_learn_bible_gloss_urdu_unpublished_gate_run() {
  "Gate: no chapter of English words explained in Urdu is finished and left sitting unpublished. Throws so the dispatcher seam exits nonzero.";
  "This app offers a reader exactly the chapters it has published, so a chapter finished and not carried up is work that was done and never arrived. Nothing else notices: the pickers go on listing what is up there, the reader is shown nothing wrong, and the only sign is somebody happening to ask.";
  "It stays green for the ordinary state of this material. A chapter is red here only between the moment its last passage is written and the moment it is carried up, and closing that is one command that takes seconds - so this is not a light left red for weeks while a book is written, and it does not hold the rest of the repo behind an authoring chore.";
  "The command that closes it is named in the complaint rather than described, because a gate is read by somebody who was doing something else and wants the next thing to type.";
  arguments_assert(arguments, 0);
  let walked = await gloss_chapters_finished_unpublished(
    app_en_learn_bible_gloss_urdu_generate,
    app_en_learn_bible_gloss_urdu_passages,
    app_en_learn_bible_gloss_urdu_generate_upload_namespace,
  );
  let fault = text_combine_multiple([
    "are explained all the way through and still unpublished - carry each one up with ",
    app_en_learn_bible_gloss_urdu_chapter_upload_stored.name,
  ]);
  let r = gloss_chapters_offenders_assert(walked, "en_learn_bible", fault);
  return r;
}
