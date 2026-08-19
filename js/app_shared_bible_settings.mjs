import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_screen_set_home } from "./app_shared_screen_set_home.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_shared_bible_languages } from "./app_shared_bible_languages.mjs";
import { app_shared_bible_languages_choosable_is } from "./app_shared_bible_languages_choosable_is.mjs";
import { app_shared_bible_offline } from "./app_shared_bible_offline.mjs";
import { app_shared_bible_settings_render } from "./app_shared_bible_settings_render.mjs";
import { app_shared_bible_about } from "./app_shared_bible_about.mjs";
export function app_shared_bible_settings(context) {
  "one gear on the reading bar opens this; language choice and keeping a bible on the device both live here so the bar stays about reading";
  async function lambda_back() {
    await app_shared_screen_set_home(context);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  ("each entry opens its own registered screen");
  ("an app with one language to offer has no choice to put in front of anyone, so the way in is left out rather than opening a list of one");
  let open_languages = null;
  let choosable = app_shared_bible_languages_choosable_is(context);
  if (choosable) {
    open_languages = app_shared_screen_later(
      context,
      app_shared_bible_languages,
    );
  }
  let open_offline = app_shared_screen_later(context, app_shared_bible_offline);
  let open_about = app_shared_screen_later(context, app_shared_bible_about);
  app_shared_bible_settings_render(
    root,
    open_languages,
    open_offline,
    open_about,
    context,
  );
}
