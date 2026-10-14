import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_insert } from "./html_insert.mjs";
import { property_set } from "./property_set.mjs";
import { property_get_invoke } from "./property_get_invoke.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_reply_jewish_youtube_draw(
  root,
  testament_held,
  languages_show_held,
  update,
) {
  "A button at the very top of the page for replying to a Jewish commenter on YouTube: one press chooses Jewish, leaves the line naming the languages off the end, and picks two passages - which also copies the reply, since picking passages always copies.";
  "The choices it makes are the same ones the rows further down make, so each row's buttons are marked again to show what is now chosen.";
  arguments_assert(arguments, 4);
  let top = app_shared_container_blue(root);
  html_insert(root, top, 0);
  async function on_click() {
    property_set(testament_held, "jewish", true);
    property_get_invoke(testament_held, "mark");
    property_set(languages_show_held, "languages_show", false);
    property_get_invoke(languages_show_held, "mark");
    await update(2);
  }
  app_shared_button(top, "Jewish YouTube reply", on_click);
}
