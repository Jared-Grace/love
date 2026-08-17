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
  ("Drawn as it would be seen rather than as a slice through it: the rim is an ellipse and so is the foot, because a circle looked at from a little above is an ellipse. That is what makes the cup have an inside for something to be in - a straight line across the top would be a diagram of a cup rather than a cup.");
  ("Left see-through rather than filled, so what is in it can be seen to be IN it, and so the far side of the rim shows through the near side, which is the whole of why it reads as glass.");
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
  let rim = html_div(cup);
  html_style_assign(rim, {
    "box-sizing": "border-box",
    width: "3.5em",
    height: "0.9em",
    border,
    "border-radius": "50%",
    "background-color": "transparent",
  });
  ("the bowl hangs from the widest line of the rim, which is halfway down the ellipse - so it is pulled up by half the rim's height and its sides carry on from exactly where the rim is widest. It has no top edge of its own, because the rim is its top edge.");
  ("It stands taller than what is in it, so there is glass above the grapes. A cup filled level with its own rim reads as a bowl.");
  ("The wall curves nearly the whole way down rather than dropping straight and then turning. The corner it is rounded by is half the cup wide and almost the whole cup tall, so the two arcs run from just under the rim right down to where they meet in the middle of the base - which is a chalice, widest where you drink from it and narrowing all the way. A round corner as tall as it is wide gives the other thing entirely: a straight-sided tumbler with a half-circle stuck on the bottom.");
  ("A little of the wall is left straight just under the rim, which is what reads as the flare. Curved from the very first pixel, the cup closes in immediately and looks like a bud.");
  let bowl = html_div(cup);
  html_style_assign(bowl, {
    "box-sizing": "border-box",
    width: "3.5em",
    height: "3.6em",
    "margin-top": "-0.45em",
    "border-top": "none",
    "border-left": border,
    "border-right": border,
    "border-bottom": border,
    "border-bottom-left-radius": "1.75em 3.2em",
    "border-bottom-right-radius": "1.75em 3.2em",
    "background-color": "transparent",
    "padding-top": "0.95em",
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    gap: "0.05em",
  });
  ("what is in the cup is drawn larger than the writing around it, because it is the thing being looked at rather than something said about it");
  ("Given a box of its own size and stood in the middle of it, rather than laid out as a line of writing would be. What goes in the cup is an emoji, and every make of phone draws its own: they are not the same width, not the same height, and do not sit the same distance below the top of the line. Left as writing, the picture would come out with a different amount of glass above it on every device, and on some of them the grapes would touch the rim.");
  ("This pins where it SITS, which is what the drawing depends on. It cannot pin what it LOOKS like - that is the maker's drawing and there is no reaching it from here. An image shipped with the app is the only thing that would.");
  let filled = text_empty_not_is(inside);
  if (filled) {
    let held = html_div_text(bowl, inside);
    html_style_assign(held, {
      "font-size": "1.4em",
      "line-height": "1",
      height: "1em",
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
    });
  }
  ("the name is written ON the cup rather than beside it - a label somebody wrote on the side, which is the whole of what a name is here");
  let named = text_empty_not_is(name);
  if (named) {
    let written = html_div_text(bowl, name);
    html_font_color_set(written, dark);
    html_style_assign(written, {
      "font-size": "0.95em",
      "line-height": "1",
    });
  }
  let stem = html_div(cup);
  html_style_assign(stem, {
    width: "0.45em",
    height: "0.7em",
    "background-color": dark,
  });
  ("the stem sinks into the foot rather than standing on its edge - the foot is a circle seen from above, so its middle is lower down the page than its near edge, and a stem stopping at the edge would be standing in front of the foot rather than on it");
  let foot = html_div(cup);
  html_style_assign(foot, {
    width: "2.4em",
    height: "0.6em",
    "margin-top": "-0.28em",
    "background-color": dark,
    "border-radius": "50%",
  });
  return cup;
}
