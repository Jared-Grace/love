import { arguments_assert } from "./arguments_assert.mjs";
import { html_bar_foot } from "./html_bar_foot.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_p } from "./html_p.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
export function app_shared_bible_read_count_foot(shell) {
  arguments_assert(arguments, 1);
  ("the count sits UNDER the chapter rather than over it. It is empty until a verse is picked, so it arrives while the reader is looking at the text - and arriving in the top bar it would take its height off the top of the reading, sliding the verse just tapped down the screen away from the thumb that tapped it. Under the body the same height comes off the bottom and nothing already on the screen moves.");
  let foot = html_bar_foot(shell);
  html_centered(foot);
  let count_status = html_p(foot);
  app_shared_text_deemphasized(count_status);
  ("a paragraph carries a blank line's worth of margin whether or not it says anything - so with no margin an empty count costs no height at all, and the chapter fills the screen until there is something to say");
  html_margin_0(count_status);
  return count_status;
}
