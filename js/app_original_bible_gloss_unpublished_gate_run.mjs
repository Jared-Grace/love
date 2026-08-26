export async function app_original_bible_gloss_unpublished_gate_run() {
  "Gate: no chapter of original-language word explanations is finished and left sitting unpublished. Throws so the dispatcher seam exits nonzero.";
  "The explanations are written on one machine and fetched by a page somewhere else, so a chapter finished and never carried up is work that was done and never arrived. Nothing else notices - the page goes on showing what is up there, every reader who arrives is shown something correct, and the only sign is somebody happening to ask.";
  "It stays green for the ordinary state of this material. A chapter is red here only between the moment its last passage is written and the moment it is carried up, and closing that is one command that takes seconds.";
  "The command that closes it is named in the complaint rather than described, because a gate is read by somebody who was doing something else and wants the next thing to type.";
  arguments_assert(arguments, 0);
  let walked = await gloss_chapters_finished_unpublished(
    app_original_bible_gloss_generate,
    app_original_bible_gloss_passages,
    app_original_bible_gloss_generate_upload_namespace,
  );
  let fault = text_combine_multiple([
    "are explained all the way through and still unpublished - carry each one up with ",
    app_original_bible_gloss_chapter_upload_stored.name,
  ]);
  let r = gloss_chapters_offenders_assert(walked, "original_bible", fault);
  return r;
}
