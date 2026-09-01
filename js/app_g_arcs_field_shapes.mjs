import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
export function app_g_arcs_field_shapes(voice_color) {
  "$plain voice_color";
  "Every shape a written field of an arc can be drawn in, kept in one place because two drawers now use them: the one that writes a line as plain words, and the one that writes it as runs saying which stretches of it moved.";
  "THE PREVIOUS WORDING HAS NO SHAPE OF ITS OWN HERE, and losing it was the point rather than a tidy-up. It used to be drawn in an amber box of its own, so the line above and the line below a change looked like two different kinds of thing, and a reader comparing them was comparing two typefaces before comparing any words. Drawn in the shape of the field it is a previous version of, the two lines are identical everywhere they agree, and every difference the eye finds is a real one.";
  "THE COLOUR IS HANDED IN BECAUSE A SHAPE DOES NOT KNOW WHOSE LINE IT IS. Whose voice is speaking is settled once, at the person, and travels down to every line of theirs; worked out here it would have to be worked out again on every row of the page.";
  arguments_assert(arguments, 1);
  let label_size = app_shared_font_size_label();
  let shapes = {
    fact: {
      flex: "0 1 auto",
      "font-weight": "bold",
      "background-color": "rgba(0,0,0,0.07)",
      padding: "0.1rem 0.4rem",
      "border-radius": "0.25rem",
      "line-height": "1.4",
    },
    spoken: {
      flex: "1 1 11rem",
      color: voice_color,
      "line-height": "1.45",
    },
    prose: {
      flex: "1 1 11rem",
      "line-height": "1.5",
      "background-color": "rgba(0,0,0,0.04)",
      padding: "0.35rem 0.5rem",
      "border-radius": "0.3rem",
    },
    verdict: {
      flex: "0 1 auto",
      "font-weight": "bold",
      "letter-spacing": "0.08em",
      "background-color": "rgba(0,0,0,0.78)",
      color: "rgba(255,255,255,0.95)",
      padding: "0.1rem 0.5rem",
      "border-radius": "0.25rem",
    },
    aside: {
      flex: "1 1 11rem",
      "font-size": label_size,
      opacity: "0.45",
      "line-height": "1.35",
    },
    scripture: {
      flex: "1 1 11rem",
      "line-height": "1.45",
      "border-left": "3px solid rgba(0,0,0,0.3)",
      "padding-left": "0.5rem",
    },
  };
  return shapes;
}
