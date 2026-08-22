import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
import { word_pictures_drawn_known } from "./word_pictures_drawn_known.mjs";
import { word_picture_wordings } from "./word_picture_wordings.mjs";
import { words_game_taught_glosses } from "./words_game_taught_glosses.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { property_get } from "./property_get.mjs";
import { word_picture_url } from "./word_picture_url.mjs";
import { html_img } from "./html_img.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function app_g_word_pictures() {
  "The #word_pictures review sheet: every taught word that has a picture, with each attempt ever drawn for it laid out beside the others, and the word's own gloss and explain underneath.";
  "A SHEET RATHER THAN A PICKER. Nothing here is chosen or clicked. The question it exists to answer is which attempt to keep, and that question is only answerable by looking at the attempts side by side - which is exactly what a screen showing one at a time cannot do.";
  "THE WORDS ARE UNDER THE PICTURES ON PURPOSE. The picture is offered to a child who is stuck on the word, so the thing being checked is whether the picture says what the sentence says. A sheet showing pictures alone would be checking whether they are good pictures, which is a different and easier question to pass.";
  "THE ATTEMPT NUMBER IS SHOWN AND IS THE FILE'S OWN NUMBER, not a fresh label. That number is already the name of the file and already what a redraw would be counted from, so lettering them a and b would invent a second name for a thing that has one, and the moment somebody said keep b nobody could tell which file they meant.";
  "THE DRAWING WORDING IS PRINTED UNDER EACH WORD, quietly, because half of what this sheet turns up is not a bad draw but a wording that asked for the wrong thing - and a reader who can only see the picture can say it is wrong without being able to say what to change.";
  "IT IS A DEV SCREEN BY CONSTRUCTION. The pictures are addressed at the local server's copy of the ignored folder, so this screen shows nothing at all against the deployed site; a picture that has been chosen gets moved somewhere the site serves, and that move is what puts it in the game.";
  let column = app_g_dev_overlay("Word pictures");
  let known = word_pictures_drawn_known();
  let wordings = word_picture_wordings();
  let glosses = words_game_taught_glosses();
  let words = object_property_names(known);
  let gap = app_shared_spaced_gap();
  function word_block(word) {
    let block = html_div(column);
    html_style_assign(block, {
      "margin-top": gap,
      "border-top": "1px solid rgba(0,0,0,0.15)",
      "padding-top": gap,
    });
    let heading = html_div_text(block, word);
    html_style_assign(heading, {
      "font-weight": "bold",
      "font-size": "1.25rem",
    });
    let entry = property_get(glosses, word);
    let gloss = property_get(entry, "gloss");
    let explain = property_get(entry, "explain");
    let gloss_line = html_div_text(block, gloss);
    html_style_assign(gloss_line, {
      "margin-top": "0.15rem",
      opacity: "0.75",
    });
    let strip = html_div(block);
    html_style_assign(strip, {
      display: "flex",
      "flex-wrap": "wrap",
      gap: "0.6rem",
      "margin-top": "0.6rem",
    });
    let attempts = property_get(known, word);
    function attempt_block(attempt) {
      "280px is the width below which an attempt drops to its own row, and it is set just under half the overlay column rather than at a round number, because two attempts fitting side by side is the whole reason this screen exists and 320 missed it by the width of the gap. A phone is narrower than two of anything, so there it stacks - which is the right answer on a phone and not a fallback.";
      let cell = html_div(strip);
      html_style_assign(cell, {
        flex: "1 1 280px",
      });
      let src = word_picture_url(word, attempt);
      let picture = html_img(cell, src);
      html_style_assign(picture, {
        width: "100%",
        height: "auto",
        display: "block",
        "border-radius": "0.25rem",
      });
      let text = String(attempt);
      let number = html_div_text(cell, text);
      html_style_assign(number, {
        "font-size": app_shared_font_size_label(),
        "text-align": "center",
        opacity: "0.6",
      });
    }
    each(attempts, attempt_block);
    let explain_line = html_div_text(block, explain);
    html_style_assign(explain_line, {
      "margin-top": "0.6rem",
      "line-height": "1.4",
    });
    let wording = property_get(wordings, word);
    let wording_line = html_div_text(block, wording);
    html_style_assign(wording_line, {
      "margin-top": "0.4rem",
      "font-size": app_shared_font_size_label(),
      "line-height": "1.4",
      opacity: "0.55",
    });
  }
  each(words, word_block);
}
