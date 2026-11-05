import { app_learn_original_screens } from "./app_learn_original_screens.mjs";
import { app_learn_original_home } from "./app_learn_original_home.mjs";
import { app_learn_original_gloss_chapters_uploaded } from "./app_learn_original_gloss_chapters_uploaded.mjs";
import { app_shared_bible_chapters_offered_key } from "./app_shared_bible_chapters_offered_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { json_to } from "./json_to.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
export async function app_learn_original(context) {
  try {
    let app_fn = app_learn_original;
    let screens = app_learn_original_screens();
    let screen_home = app_learn_original_home;
    let chapters_ask = app_learn_original_gloss_chapters_uploaded;
    let key_chapters = app_shared_bible_chapters_offered_key();
    property_set(context, key_chapters, chapters_ask);
    await app_shared_bible_initialize(context, app_fn, screens, screen_home);
  } catch (e) {
    alert(e);
    let body = html_document_body();
    let json = json_to(e);
    html_pre_text(body, json);
  }
}
