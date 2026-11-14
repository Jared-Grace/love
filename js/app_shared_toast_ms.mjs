import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_toast } from "./app_shared_game_toast.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_toast_ms(text, dismiss_ms) {
  arguments_assert(arguments, 2);
  ("The toast pill, held for dismiss_ms, near the BOTTOM of the screen - where a thumb just pressed, and clear of the title and the top of what is being read. The game keeps its own pill at the top, because there it announces the sky, not a press.");
  let div = app_shared_game_toast(text, dismiss_ms);
  html_style_assign(div, {
    top: "auto",
    bottom: "1.5rem",
  });
  return div;
}
