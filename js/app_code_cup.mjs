import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_code_cup(parent, inside, name) {
  arguments_assert(arguments, 3);
  ("a cup drawn on the page, with whatever has been put in it and whatever it has been called written on it - the picture the lesson on giving a value a name tells its story with");
  ("Drawn rather than shown as a picture of a cup, because the story needs the same cup three times over with something different about it each time: empty, then called something, then with grapes in it. A picture can only be one of those, and three pictures of three cups would be three cups.");
  ("Shaped as a Lord's Supper cup - a bowl on a stem standing on a foot - because the thing put in it is the fruit of the vine. The lesson never says so and does not need to; a learner who knows the cup will see it, and a learner who does not still sees a cup.");
  ("Left see-through rather than filled, so what is in it can be seen to be IN it. That is the whole of what the picture has to say: a name is something a value is put inside, and taken back out of, and a cup you cannot see into would say the opposite.");
  let dark = app_shared_color_blue_dark();
  let border = text_combine("0.16em solid ", dark);
  ("centered in whatever it is put in - a picture is looked at rather than read, so it does not begin where a line of writing begins. Centred two ways over, because the boxes it is drawn in stand their contents in a column and a plain page would not.");
  let cup = html_div(parent);
  html_style_assign(cup, {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "align-self": "center",
    "margin-left": "auto",
    "margin-right": "auto",
  });
  ("the bowl is open at the top and rounded right round at the bottom, which is the half-circle a cup of this shape is drawn with");
  let bowl = html_div(cup);
  html_style_assign(bowl, {
    width: "3.2em",
    height: "2.8em",
    "border-top": "none",
    "border-left": border,
    "border-right": border,
    "border-bottom": border,
    "border-bottom-left-radius": "1.6em",
    "border-bottom-right-radius": "1.6em",
    "background-color": "transparent",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    gap: "0.05em",
  });
  ("what is in the cup is drawn larger than the writing around it, because it is the thing being looked at rather than something said about it");
  let filled = text_empty_not_is(inside);
  if (filled) {
    let held = html_div_text(bowl, inside);
    html_style_assign(held, {
      "font-size": "1.5em",
      "line-height": "1",
    });
  }
  ("the name is written ON the cup rather than beside it - a label somebody wrote on the side, which is the whole of what a name is here");
  let named = text_empty_not_is(name);
  if (named) {
    let written = html_div_text(bowl, name);
    html_font_color_set(written, dark);
    html_style_assign(written, {
      "font-size": "1em",
      "line-height": "1",
    });
  }
  let stem = html_div(cup);
  html_style_assign(stem, {
    width: "0.42em",
    height: "0.85em",
    "background-color": dark,
  });
  let foot = html_div(cup);
  html_style_assign(foot, {
    width: "2.1em",
    height: "0.26em",
    "background-color": dark,
    "border-radius": "0.13em",
  });
  return cup;
}
