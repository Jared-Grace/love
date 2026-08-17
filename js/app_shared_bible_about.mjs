import { app_shared_bible_about_render } from "./app_shared_bible_about_render.mjs";
import { app_shared_bible_licences } from "./app_shared_bible_licences.mjs";
import { app_shared_bible_money } from "./app_shared_bible_money.mjs";
import { app_shared_bible_screen_open } from "./app_shared_bible_screen_open.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
export function app_shared_bible_about(context) {
  "what this app is standing on, as its own screen reached from settings; back returns to the settings hub";
  async function lambda_back() {
    await app_shared_screen_set(context, app_shared_bible_settings);
  }
  let root = app_shared_bible_screen_open(context, lambda_back);
  let open_licences = app_shared_screen_later(
    context,
    app_shared_bible_licences,
  );
  let open_money = app_shared_screen_later(context, app_shared_bible_money);
  app_shared_bible_about_render(root, open_licences, open_money);
}
