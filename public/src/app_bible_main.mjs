import { html_style_padding_x } from "../../../love/public/src/html_style_padding_x.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
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
  let root = html_mobile_default(context);
  html_style_padding_x(root, "1dvw");
  app_generic_refresh(context);
}
