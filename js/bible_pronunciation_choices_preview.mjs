import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { bible_pronunciation_choices } from "./bible_pronunciation_choices.mjs";
import { api_read } from "./api_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_color_gray_light } from "./app_shared_color_gray_light.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { html_button } from "./html_button.mjs";
export async function bible_pronunciation_choices_preview() {
  ("The screen for deciding by ear how each name still in question is said, on the sandbox app at hash ",
    fn_name("bible_pronunciation_choices"),
    ": the same verse is played with each saying of the name, and tapping Choose keeps that answer on this machine at once.");
  ("A is the saying the recordings already use and B is the one the reading holds now; which side is which is said out loud, because the answer decides whether recordings are made again, and that cannot be weighed without knowing which side they are already on.");
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_style_assign(root, {
    maxWidth: "760px",
    margin: "0 auto",
    padding: "12px 16px 48px",
    fontFamily: "system-ui, sans-serif",
  });
  html_p_text(
    root,
    "Play each saying, then choose the one that sounds right. Each choice saves by itself.",
  );
  let choices = bible_pronunciation_choices();
  let picks = await api_read(fn_name("bible_pronunciation_picks"), []);
  for (let choice of choices) {
    let word = choice.word;
    let section = html_div(root);
    html_style_assign(section, {
      borderTop: "1px solid " + app_shared_color_gray_light(),
      padding: "12px 0",
    });
    let heading = html_element(section, "h2");
    html_text_set(heading, word);
    html_p_text(
      section,
      "Spoken " + choice.times + " times. “" + choice.sentence + "”",
    );
    let status = html_p_text(section, "");
    function status_set() {
      let pick = picks[word];
      let text = pick ? "Chosen: " + pick : "Not chosen yet";
      html_text_set(status, text);
    }
    status_set();
    let sides = [
      {
        tag: "A",
        heard: choice.was_heard,
        what: "what the recordings say",
        file: "was",
      },
      {
        tag: "B",
        heard: choice.now_heard,
        what: "what the reading says now",
        file: "now",
      },
    ];
    for (let side of sides) {
      let row = html_div(section);
      html_style_assign(row, {
        display: "flex",
        gap: "8px",
        alignItems: "center",
        flexWrap: "wrap",
        margin: "6px 0",
      });
      html_p_text(row, side.tag + ": " + side.heard + " (" + side.what + ")");
      async function play() {
        await html_sound_url_play(
          "sound_test/" + word + "_" + side.file + ".mp3",
        );
      }
      async function choose() {
        html_text_set(status, "saving…");
        picks = await api_read(fn_name("bible_pronunciation_pick_set"), [
          word,
          side.tag,
        ]);
        status_set();
      }
      html_button(row, "Play", play);
      html_button(row, "Choose " + side.tag, choose);
    }
  }
}
