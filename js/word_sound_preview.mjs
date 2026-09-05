import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_input_placeholder_wide } from "./html_input_placeholder_wide.mjs";
import { equal } from "./equal.mjs";
import { app_en_learn_bible_gloss_urdu_words_sound_url } from "./app_en_learn_bible_gloss_urdu_words_sound_url.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_button } from "./html_button.mjs";
import { html_div } from "./html_div.mjs";
import { list_map } from "./list_map.mjs";
export function word_sound_preview() {
  "Plays the shipped recording of any English word the gloss app can say, on the sandbox app at hash word_sound, so a word can be listened to without opening a chapter and hunting for it.";
  "★ IT PLAYS THE RECORDING THAT IS LIVE, NOT ONE MADE HERE FOR THE OCCASION. That is the whole worth of it: every earlier way of judging a word - a loose page of files written into a folder next to the code - answered whether the engine could say the word well, and the question a person actually has is whether the file a reader's phone fetches says it well. Those came apart twice: a recording mended on this machine and not sent up, and a recording sent up behind a stamp no phone would ask for. Both sound perfect in a folder and wrong on a phone.";
  "★ THE ADDRESS IS SHOWN UNDERNEATH, BECAUSE THE PLAYER IS DELIBERATELY SILENT WHEN IT FAILS. A word with no recording and a phone refusing to make noise both come out as nothing happening, and on a page for judging recordings that is the one place where the difference matters. The address can be opened in another tab, which separates them in one move.";
  "The word is typed rather than picked off a list. The list is thousands long and lives on the machine that records, not in the browser, and a person who came here came with a particular word in mind - the one they just heard go wrong.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_p_text(
    root,
    "Type a word and tap Play. It fetches the same recording a reader's phone fetches - so if it sounds wrong here, it is wrong for them.",
  );
  let input = html_input_placeholder_wide(root, "a word, e.g. the");
  let shown = html_p_text(root, "");
  async function play(word) {
    let empty = equal(word, "");
    if (empty) {
      return;
    }
    let url = app_en_learn_bible_gloss_urdu_words_sound_url(word);
    let text = text_combine("playing: ", url);
    html_text_content_set(shown, text);
    await html_sound_url_play(url);
  }
  function on_typed() {
    let word = html_value_get(input);
    play(word);
  }
  html_button(root, "Play", on_typed);
  html_p_text(
    root,
    "The words a person has asked about, so they need no typing:",
  );
  let asked = [
    "the",
    "with",
    "of",
    "to",
    "a",
    "than",
    "isn't",
    "man's",
    "baptized",
    "righteousness",
  ];
  let row = html_div(root);
  function button_each(word) {
    function on_tapped() {
      play(word);
    }
    let r = html_button(row, word, on_tapped);
    return r;
  }
  list_map(asked, button_each);
}
