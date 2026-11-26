import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_black_dim } from "./app_shared_color_black_dim.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_button_wide_shape } from "./app_shared_button_wide_shape.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_confirm_choices } from "./app_shared_confirm_choices.mjs";
export function app_shared_confirm_over_red(
  question,
  text_confirm,
  text_back,
  on_confirm,
) {
  "asks before something that cannot be taken back, in a box drawn over the page, for a page that has no screens to step between (human, 2026-11-24: \"cancel meeting button should confirm dialog\"); the yes is red because it takes something away, and the way out only closes the box";
  arguments_assert(arguments, 4);
  ("the same question, yes and way out as the asking screen draws (",
    fn_name("app_shared_confirm_choices"),
    "), so the two look alike; the page under the dim stays where it was, so closing the box leaves the reader exactly where they pressed");
  ('The box is the page\'s own light colour, not the green of a card, and both buttons fill the line, the way out green as the safe answer (human, 2026-11-24: "should not be green bg" and "it should be just as big as delete - maybe green?").');
  let cover = html_body_div();
  html_style_assign(cover, {
    position: "fixed",
    inset: "0",
    background: app_shared_color_black_dim(),
    "z-index": "1000",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    padding: "16px",
  });
  let box = app_shared_container_base(cover);
  html_style_assign(box, {
    width: "100%",
    "max-width": "480px",
    "background-color": app_shared_color_page_background(),
  });
  function close() {
    html_remove(cover);
  }
  async function yes() {
    close();
    await on_confirm();
  }
  function wide(button) {
    function wide_inner(parent, text, lambda) {
      let b = button(parent, text, lambda);
      app_shared_button_wide_shape(b);
      return b;
    }
    return wide_inner;
  }
  let red_wide = wide(app_shared_button_red);
  function button_confirm(parent, text, lambda) {
    'The yes stands apart, a wide gap above and below it, so a thumb aiming at the way out cannot land on it by mistake (human, 2026-11-24: "adding vertical spacing above and below red button - make sure they don\'t choose accidentally?").';
    let b = red_wide(parent, text, lambda);
    html_style_assign(b, {
      "margin-top": "32px",
      "margin-bottom": "32px",
    });
    return b;
  }
  let button_back = wide(app_shared_button_green);
  app_shared_confirm_choices({
    parent: box,
    question,
    button_confirm,
    text_confirm,
    on_confirm: yes,
    button_back,
    text_back,
    on_back: close,
  });
}
