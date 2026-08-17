import { app_shared_bible_about_render } from "./app_shared_bible_about_render.mjs";
import { app_shared_bible_licences_panel } from "./app_shared_bible_licences_panel.mjs";
import { app_shared_bible_money_panel } from "./app_shared_bible_money_panel.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_bible_about_panel(content, back) {
  "what this app is standing on, opened in place by the chapter reader; back is supplied by the caller and returns to the settings hub";
  "the way out is unnamed, because the only place this is opened from is the settings hub, and a hub is a menu rather than a passage - there is nothing to call it but Back";
  arguments_assert(arguments, 2);
  let unnamed = "";
  app_shared_bible_panel_open(content, unnamed, back);
  let container = html_div(content);
  async function on_licences() {
    async function back_here() {
      app_shared_bible_about_panel(content, back);
    }
    await app_shared_bible_licences_panel(content, back_here);
  }
  function on_money() {
    function back_here() {
      app_shared_bible_about_panel(content, back);
    }
    app_shared_bible_money_panel(content, back_here);
  }
  app_shared_bible_about_render(container, on_licences, on_money);
}
