import { app_bible } from "../../../love/public/src/app_bible.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_generic_refresh } from "../../../love/public/src/app_generic_refresh.mjs";
export async function app_bible_main(context) {
  marker("1");
  let app_fn = app_bible;
  let screens = app_bible_screens();
  object_merge(context, {
    app_fn,
    screens,
  });
    firebase_name_jg();
  app_generic_refresh(context);
}
