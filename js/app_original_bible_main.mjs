import { html_pre_text } from "./html_pre_text.mjs";
import { json_to } from "./json_to.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_bible_shared_initialize } from "./app_bible_shared_initialize.mjs";
import { app_original_bible_home } from "./app_original_bible_home.mjs";
import { app_original_bible_screens } from "./app_original_bible_screens.mjs";
import { app_original_bible } from "./app_original_bible.mjs";
export async function app_original_bible_main(context) {
  try {
    let app_fn = app_original_bible;
    let screens = app_original_bible_screens();
    let screen_home = app_original_bible_home;
    await app_bible_shared_initialize(context, app_fn, screens, screen_home);
  } catch (e) {
    alert(e);
    let body = html_document_body();
    let json = json_to(e);
    let p = html_pre_text(body, json);
  }
}
