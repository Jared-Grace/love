import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_bible_screens } from "../../../love/public/src/app_bible_screens.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_bible_main(context) {
  marker("1");
  let app_fn = app_bible_main;
  let screens = app_bible_screens();
  object_merge(context, {
    app_fn,
    screens,
  });
}
