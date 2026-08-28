import { property_set } from "./property_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_chapter_buttons(
  chooser,
  codes,
  chosen,
  status_working,
  render,
) {
  "The row of chapter presses, the chosen one shown as chosen.";
  "THE PERSON IS FORGOTTEN WHEN THE CHAPTER CHANGES, because a nickname belongs to one chapter's pool of people and a name carried across would name nobody there. A chapter opens on its first person, which is where a reader who has just chosen the chapter is starting anyway.";
  "WHAT WAS CHOSEN IS A RECORD RATHER THAN A NAME OF ITS OWN, because a press writes to it long after this has returned. A name handed in would be a copy, and the write would land on the copy while the page went on reading the old one.";
  function chapter_button(code) {
    async function on_chapter() {
      property_set(chosen, "chapter_code", code);
      property_set(chosen, "nickname", null);
      status_working(code);
      await render();
    }
    let component = app_shared_button(chooser, code, on_chapter);
    let chapter_code = property_get(chosen, "chapter_code");
    let here = equal(code, chapter_code);
    app_shared_button_toggle_style(here, component);
  }
  each(codes, chapter_button);
}
