import { app_bible_main_generic } from "../../../love/public/src/app_bible_main_generic.mjs";
import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_bible_home_generic } from "../../../love/public/src/app_bible_home_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_g_bible_main(context) {
  marker("1");
  let app_fn = app_bible;
  let screens = app_bible_screens();
  app_bible_main_generic(context, app_fn, screens);
  async function lambda(a) {
    let p = object_property_get(a, "p");
    let chapter_code = object_property_get(a, "chapter_code");
    let p2 = html_p_text(p, chapter_code);
  }
  await app_bible_home_generic(context, lambda);
}
