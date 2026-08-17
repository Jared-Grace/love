import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_generic } from "./html_scroll_generic.mjs";
import { not } from "./not.mjs";
export async function app_g_verify_home_on_visible(
  render,
  chapter,
  status,
  chapter_state,
  view,
  poll,
  refresh,
) {
  arguments_assert(arguments, 7);
  render(chapter, status, chapter_state);
  ("on page load/refresh scroll the passage to the top of the viewport, past the chapter-grid, title and hint — the reviewer wants to read the passage immediately. Only here (the one-time initial render), NOT on the 4s poll re-renders, which would yank the page mid-read");
  await html_scroll_generic(view, "auto", "start");
  poll();
  function on_visible() {
    if (not(document.hidden)) {
      refresh();
    }
  }
  return on_visible;
}
