import { marker } from "../../../love/public/src/marker.mjs";
import { html_margin_0 } from "../../../love/public/src/html_margin_0.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_bible_main_generic_before(
  context,
  app_fn,
  screens,
  screen_home,
) {
  marker("1");
  object_merge(context, {
    app_fn,
    screens,
    screen_home,
  });
  firebase_name_jg();
  let root = html_mobile_default(context);
  html_margin_0(root);
}
