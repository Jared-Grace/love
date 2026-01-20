import { app_bible_main_generic } from "../../../love/public/src/app_bible_main_generic.mjs";
import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_main(context) {
  marker("1");
  let app_fn = app_bible;
  let screens = app_bible_screens();
  app_bible_main_generic(context, app_fn, screens);
}
