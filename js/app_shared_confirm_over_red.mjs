import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_confirm_choices } from "./app_shared_confirm_choices.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export function app_shared_confirm_over_red(
  question,
  text_confirm,
  on_confirm,
) {
  "asks before something that cannot be taken back, in a box drawn over the page, for a page that has no screens to step between (human, 2026-11-24: \"cancel meeting button should confirm dialog\"); the yes is red because it takes something away, and the way out only closes the box";
  arguments_assert(arguments, 3);
  ("the same question, yes and way out as the asking screen draws (",
    fn_name("app_shared_confirm_choices"),
    "), so the two look alike; the page under the dim stays where it was, so closing the box leaves the reader exactly where they pressed");
  let cover = html_body_div();
  html_style_assign(cover, {
    position: "fixed",
    inset: "0",
    background: "rgba(0, 0, 0, 0.5)",
    "z-index": "1000",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    padding: "16px",
  });
  let box = app_shared_container(cover);
  html_style_assign(box, {
    width: "100%",
    "max-width": "480px",
  });
  function close() {
    html_remove(cover);
  }
  async function yes() {
    close();
    await on_confirm();
  }
  app_shared_confirm_choices(
    box,
    question,
    app_shared_button_red,
    text_confirm,
    yes,
    close,
  );
}
