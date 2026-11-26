import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_home_inner } from "./app_shared_bible_home_inner.mjs";
import { app_bible_record_passages_download } from "./app_bible_record_passages_download.mjs";
import { app_bible_record } from "./app_bible_record.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_title_verse_set } from "./app_shared_bible_title_verse_set.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_home_reference } from "./app_bible_record_home_reference.mjs";
import { app_bible_record_home_verses } from "./app_bible_record_home_verses.mjs";
export async function app_bible_record_home(context) {
  "The chapter chooser the sermons app uses, with a recorder under each passage, in place rather than on a screen of its own, and, in the top bar, which project the recordings go into. Nothing is recorded until a project is chosen, so the first button asks for one and then opens the camera.";
  "Recording a passage again inside the same project replaces the earlier take, so the button stays under every passage whether or not it has been recorded.";
  arguments_assert(arguments, 1);
  let r = await app_shared_bible_home_inner(
    context,
    app_bible_record_passages_download,
    app_bible_record,
  );
  let passages = property_get(r, "passages");
  let chapter_code = property_get(r, "chapter_code");
  let screen = property_get(r, "r");
  await app_shared_bible_title_verse_set(screen);
  ("NO SCREEN, NOTHING TO ADD TO: the shared chooser hands back nothing when it has already answered the page another way - a reference in the address shown directly, or the address put right and the page redrawn - and then there is no top bar to put the project button in (human 2026-11-23: the page crashed reading the bar of nothing).");
  if (null_is(screen)) {
    return;
  }
  let r2 = await app_bible_record_home_reference(screen, chapter_code);
  let reference = property_get(r2, "reference");
  let entries = property_get(r2, "entries");
  let entry_for = property_get(r2, "entry_for");
  let project_label = property_get(r2, "project_label");
  app_bible_record_home_verses(
    passages,
    entry_for,
    reference,
    entries,
    chapter_code,
    project_label,
  );
}
