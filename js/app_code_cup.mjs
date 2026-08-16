import { text_combine } from "./text_combine.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_code_cup(parent, inside, name) {
  arguments_assert(arguments, 3);
  ("a cup drawn on the page, with whatever has been put in it and whatever it has been called written on it - the picture the lesson on giving a value a name tells its story with");
  ("Drawn rather than shown as a picture of a cup, because the story needs the same cup three times over with something different about it each time: empty, then called something, then with a grape in it. A picture can only be one of those, and three pictures of three cups would be three cups.");
  ("Open at the top and rounded at the bottom, so that what is written inside it reads as being IN it. That is the whole of what the picture has to say: a name is something a value is put inside, and taken back out of.");
  let dark = app_shared_color_blue_dark();
  let border = text_combine("0.16em solid ", dark);
  let cup = html_div(parent);
  ("centered in whatever it is put in - a picture is looked at rather than read, so it does not begin where a line of writing begins. Centred two ways over, because the boxes it is drawn in stand their contents in a column and a plain page would not.");
  html_style_assign(cup, {
    width: "3.4em",
    height: "3.4em",
    "align-self": "center",
    "margin-left": "auto",
    "margin-right": "auto",
    "border-top": "none",
    "border-left": border,
    "border-right": border,
    "border-bottom": border,
    "border-bottom-left-radius": "1em",
    "border-bottom-right-radius": "1em",
    "background-color": "white",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    gap: "0.1em",
  });
  ("what is in the cup is drawn larger than the writing around it, because it is the thing being looked at rather than something said about it");
  let filled = text_empty_not_is(inside);
  if (filled) {
    let held = html_div_text(cup, inside);
    html_style_assign(held, {
      "font-size": "1.6em",
      "line-height": "1",
    });
  }
  ("the name is written ON the cup rather than beside it - a label somebody wrote on the side, which is the whole of what a name is here");
  let named = text_empty_not_is(name);
  if (named) {
    let written = html_div_text(cup, name);
    html_font_color_set(written, dark);
    html_style_assign(written, {
      "font-size": "1.1em",
      "line-height": "1",
    });
  }
  return cup;
}
