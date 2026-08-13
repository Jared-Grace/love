import { app_shared_bible_hash_unknown_page_shown_is } from "./app_shared_bible_hash_unknown_page_shown_is.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_bible_read } from "./app_shared_bible_read.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
import { app_bible_screens } from "./app_bible_screens.mjs";
import { app_bible_home } from "./app_bible_home.mjs";
import { app_shared_bible_mode_get } from "./app_shared_bible_mode_get.mjs";
import { app_shared_bible_mode_set } from "./app_shared_bible_mode_set.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
import { app_bible_verse_switch_button } from "./app_bible_verse_switch_button.mjs";
import { equal } from "./equal.mjs";
export async function app_bible(context) {
  app_shared_app_fn_set(context, app_bible);
  ("The link is read back to the reader here, before the mode is touched, and not only in the two readers underneath. The next line writes the mode back into the address, so a word naming neither reader was rubbed out before either reader ever saw the link - the guard downstream then found a perfectly good link and said nothing, and the reader silently got the other reader.");
  let hash = html_hash_object_get();
  let unknown_shown = app_shared_bible_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    return;
  }
  let mode = app_shared_bible_mode_get();
  ("write the mode back so the url always names the reader you are in, even on a first visit that arrived without it");
  app_shared_bible_mode_set(mode);
  let right = app_shared_bible_mode_verse();
  let verse = equal(mode, right);
  if (verse) {
    let screens = app_bible_screens();
    await app_shared_bible_initialize(
      context,
      app_bible,
      screens,
      app_bible_home,
    );
    return;
  }
  ("the two readers switch via a contextual button on each verse, not a top-bar toggle");
  await app_shared_bible_read(context, app_bible_verse_switch_button);
}
