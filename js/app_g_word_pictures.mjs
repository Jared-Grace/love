import { app_g_word_pictures_api } from "./app_g_word_pictures_api.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
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
export async function app_g_word_pictures() {
  "The #word_pictures review bench: every taught word that has a picture, with each attempt ever drawn for it laid out beside the others, the word's own gloss and explain underneath, and the three presses the review is made of - keep this one, change what to ask for, ask for another.";
  "THE ATTEMPTS ARE SIDE BY SIDE BECAUSE THAT IS THE ONLY WAY THE QUESTION IS ANSWERABLE. Which attempt to keep is a comparison, and a screen showing one picture at a time asks a reader to hold the other one in their head. Everything else on this page is arranged around that row.";
  "THE PRESS IS BESIDE THE PICTURE IT IS ABOUT, and it did not start that way. The judgments used to be read off this page and then typed into a terminal by hand, which meant the person looking and the person recording were the same person at two keyboards, with the word and the number carried between them in their head. A wrong number typed there names a real file and so is accepted in silence. Here the number is never typed at all: it is the one already under the picture that was pressed.";
  "IT ASKS THE SERVER FOR ITS TABLES RATHER THAN CARRYING THEM. Drawing a picture writes a new file and rewrites the list of what is on disk, and a list compiled into this page is a copy of how that folder looked when the page was last built - so a page carrying its own copy would take the press, spend the money, and then show the same attempts as before. That reads as the draw having failed. Asked over the seam, every redraw is answered by a reader started after the write.";
  "DRAWING TAKES TWO PRESSES because it is the one press here that spends money, and a hand landing on the wrong word costs something no undo gets back. The second press is the button itself saying what it is about to do, not a box popped over the page: the browser's own confirm box stops everything the page is doing until somebody clears it, which is worse than the mistake it prevents.";
  "THE WORDS ARE UNDER THE PICTURES ON PURPOSE. The picture is offered to a child who is stuck on the word, so the thing being checked is whether the picture says what the sentence says. A sheet showing pictures alone would be checking whether they are good pictures, which is a different and easier question to pass.";
  "THE ATTEMPT NUMBER IS SHOWN AND IS THE FILE'S OWN NUMBER, not a fresh label. That number is already the name of the file and already what a redraw would be counted from, so lettering them a and b would invent a second name for a thing that has one, and the moment somebody said keep b nobody could tell which file they meant.";
  "THE DRAWING WORDING IS PRINTED UNDER EACH ATTEMPT, quietly, because half of what this sheet turns up is not a bad draw but a wording that asked for the wrong thing - and a reader who can only see the picture can say it is wrong without being able to say what to change.";
  "IT IS UNDER THE ATTEMPT AND NOT UNDER THE WORD because two attempts at one word are usually two different askings - the second exists because the first came out wrong and the wording was changed. Printed once at the top it would be the newest wording standing over the oldest picture, which reads as the generator having ignored a wording that in fact nobody ever gave it.";
  "SO THERE ARE TWO KINDS OF WORDING ON THIS PAGE AND THEY MUST NOT BE READ AS ONE. The line under a picture is what was asked for and cannot be changed, because the picture above it was already made from it. The box at the bottom of the word is what will be asked for next, and it is the only writing on this page a press can alter. A reader who edited the line under a picture would be editing history; a reader who expected the box to describe the pictures above it would be wrong for every word whose wording has ever been mended.";
  "IT IS A DEV SCREEN BY CONSTRUCTION. The pictures are addressed at the local server's copy of the ignored folder, so this screen shows nothing at all against the deployed site; a picture that has been chosen gets moved somewhere the site serves, and that move is what puts it in the game.";
  let column = app_g_dev_overlay("Word pictures");
  let glosses = words_game_taught_glosses();
  let gap = app_shared_spaced_gap();
  ("the line that says what just happened sits once at the top rather than beside each button, because a press is answered by the whole sheet being drawn again and anything written next to a button is thrown away by that redraw. it keeps its height while empty so that a message arriving does not push the pictures down");
  let status = html_div_text(column, "");
  html_style_assign(status, {
    "text-align": "center",
    "min-height": "1.2rem",
    opacity: "0.7",
    "font-size": app_shared_font_size_label(),
  });
  let sheet = html_div(column);
  function status_set(text) {
    html_text_set(status, text);
  }
  function status_working(text) {
    "SAYING THE PRESS WAS TAKEN IS PART OF TAKING IT, and this was measured rather than guessed: a press writes a file, then asks the seam three times, and each of those questions is answered by a reader started after the write - six seconds, on this machine, before anything on the page moves. A page that says nothing for six seconds has told the reader the press missed, and the reader's answer to that is to press again, which is exactly what must not happen to the button that spends money.";
    let combined = text_combine_multiple([text, "…"]);
    html_text_set(status, combined);
  }
  async function render() {
    "the three tables are asked for before anything is cleared, so a seam that is down leaves the sheet standing as it was instead of blanking the page.";
    let f_name = fn_name("word_pictures_drawn_known");
    let known = await app_g_word_pictures_api(f_name, []);
    let f_name3 = fn_name("word_picture_chosen");
    let chosen = await app_g_word_pictures_api(f_name3, []);
    let f_name4 = fn_name("word_picture_wordings");
    let wordings = await app_g_word_pictures_api(f_name4, []);
    html_clear(sheet);
    let words = object_property_names(known);
    function word_block(word) {
      let block = html_div(sheet);
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
      let kept = property_get_or(chosen, word, null);
      let strip = html_div(block);
      html_style_assign(strip, {
        display: "flex",
        "flex-wrap": "wrap",
        gap: "0.6rem",
        "margin-top": "0.6rem",
      });
      let attempts = property_get(known, word);
      function attempt_block(drawn) {
        "280px is the width below which an attempt drops to its own row, and it is set just under half the overlay column rather than at a round number, because two attempts fitting side by side is the whole reason this screen exists and 320 missed it by the width of the gap. A phone is narrower than two of anything, so there it stacks - which is the right answer on a phone and not a fallback.";
        let attempt = property_get(drawn, "attempt");
        let wording = property_get(drawn, "wording");
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
        let kept_is = equal(kept, attempt);
        if (kept_is) {
          ("the kept one is marked on the picture itself and not only in writing under it, because the row is read by looking at the pictures; a word underneath is missed by exactly the glance this page is for.");
          html_style_assign(picture, {
            outline: "0.2rem solid black",
            "outline-offset": "0.15rem",
          });
        }
        let text = String(attempt);
        let number = html_div_text(cell, text);
        html_style_assign(number, {
          "font-size": app_shared_font_size_label(),
          "text-align": "center",
          opacity: "0.6",
        });
        let bar = html_div(cell);
        html_style_assign(bar, {
          "text-align": "center",
          "margin-top": "0.2rem",
        });
        async function on_keep() {
          let combined7 = text_combine_multiple(["keeping ", word, " ", text]);
          status_working(combined7);
          try {
            let f_name5 = fn_name("word_picture_chosen_set");
            await app_g_word_pictures_api(f_name5, [word, attempt]);
            let combined = text_combine_multiple(["kept ", word, " ", text]);
            status_set(combined);
            await render();
          } catch (failed) {
            let combined2 = text_combine_multiple([
              "could not keep ",
              word,
              " ",
              text,
            ]);
            status_set(combined2);
          }
        }
        if (kept_is) {
          let mark = html_div_text(bar, "kept");
          html_style_assign(mark, {
            "font-weight": "bold",
          });
        } else {
          app_shared_button(bar, "Keep", on_keep);
        }
        let wording_line = html_div_text(cell, wording);
        html_style_assign(wording_line, {
          "margin-top": "0.2rem",
          "font-size": app_shared_font_size_label(),
          "line-height": "1.4",
          opacity: "0.55",
        });
      }
      each(attempts, attempt_block);
      let explain_line = html_div_text(block, explain);
      html_style_assign(explain_line, {
        "margin-top": "0.6rem",
        "line-height": "1.4",
      });
      let box = html_textarea(block);
      html_style_assign(box, {
        width: "100%",
        "min-height": "8rem",
        "margin-top": "0.6rem",
        "font-size": app_shared_font_size_label(),
        "line-height": "1.4",
        "box-sizing": "border-box",
      });
      let wording_now = property_get_or(wordings, word, "");
      html_value_set(box, wording_now);
      let controls = html_div(block);
      html_style_assign(controls, {
        display: "flex",
        gap: "0.6rem",
        "margin-top": "0.4rem",
      });
      async function on_save() {
        let typed = html_value_get(box);
        let combined8 = text_combine_multiple([
          "saving the wording for ",
          word,
        ]);
        status_working(combined8);
        try {
          let f_name6 = fn_name("word_picture_wording_set");
          await app_g_word_pictures_api(f_name6, [word, typed]);
          let combined3 = text_combine_multiple([
            "saved the wording for ",
            word,
          ]);
          status_set(combined3);
          await render();
        } catch (failed) {
          let combined4 = text_combine_multiple([
            "could not save the wording for ",
            word,
          ]);
          status_set(combined4);
        }
      }
      app_shared_button(controls, "Save wording", on_save);
      let armed = false;
      let draw = null;
      async function on_draw() {
        "the first press only arms the second, and the button says so on its own face. the browser's own confirm box would stop the page dead until it is cleared, which on a phone is a worse thing to be stuck behind than the press is to make twice.";
        let armed_not = not(armed);
        if (armed_not) {
          armed = true;
          html_text_set(draw, "Press again to spend money");
          return;
        }
        armed = false;
        html_text_set(draw, "Drawing");
        let combined9 = text_combine_multiple([
          "drawing another attempt for ",
          word,
        ]);
        status_working(combined9);
        try {
          let f_name7 = fn_name("word_picture_draw");
          await app_g_word_pictures_api(f_name7, [word]);
          let combined5 = text_combine_multiple([
            "drew another attempt for ",
            word,
          ]);
          status_set(combined5);
          await render();
        } catch (failed) {
          let combined6 = text_combine_multiple([
            "the draw for ",
            word,
            " failed",
          ]);
          status_set(combined6);
          html_text_set(draw, "Draw another");
        }
      }
      draw = app_shared_button(controls, "Draw another", on_draw);
    }
    each(words, word_block);
  }
  await render();
}
