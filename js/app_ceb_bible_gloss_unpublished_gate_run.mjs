import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_chapters_finished_unpublished } from "./gloss_chapters_finished_unpublished.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_ceb_bible_gloss_passages } from "./app_ceb_bible_gloss_passages.mjs";
import { app_ceb_bible_gloss_generate_upload_namespace } from "./app_ceb_bible_gloss_generate_upload_namespace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_ceb_bible_gloss_chapter_upload_stored } from "./app_ceb_bible_gloss_chapter_upload_stored.mjs";
import { gloss_chapters_offenders_assert } from "./gloss_chapters_offenders_assert.mjs";
export async function app_ceb_bible_gloss_unpublished_gate_run() {
  "Gate: no chapter of Cebuano word explanations is finished and left sitting unpublished. Throws so the dispatcher seam exits nonzero.";
  "The explanations are written on one machine and fetched by a page somewhere else, so a chapter finished and never carried up is work that was done and never arrived. Nothing else notices - the page goes on showing what is up there, every reader who arrives is shown something correct, and the only sign is somebody happening to ask.";
  "It stays green for the ordinary state of this material. A chapter is red here only between the moment its last passage is written and the moment it is carried up, and closing that is one command that takes seconds.";
  "The command that closes it is named in the complaint rather than described, because a gate is read by somebody who was doing something else and wants the next thing to type.";
  arguments_assert(arguments, 0);
  let walked = await gloss_chapters_finished_unpublished(
    app_ceb_bible_gloss_generate,
    app_ceb_bible_gloss_passages,
    app_ceb_bible_gloss_generate_upload_namespace,
  );
  let fault = text_combine_multiple([
    "are explained all the way through and still unpublished - carry each one up with ",
    app_ceb_bible_gloss_chapter_upload_stored.name,
  ]);
  let r = gloss_chapters_offenders_assert(walked, "ceb_bible", fault);
  return r;
}
