import { app_g_word_unglossed_text } from "./app_g_word_unglossed_text.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { words_game_taught_gloss_or_null } from "./words_game_taught_gloss_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_span_words_on_click } from "./html_span_words_on_click.mjs";
import { equal } from "./equal.mjs";
export function app_g_words_glossed(container, text) {
  "$plain text";
  "A line somebody says, drawn into a bubble with every word of it touchable, and an answer underneath it that fills in with what the tapped word means.";
  "NOTHING IS MARKED, AND THAT IS THE WHOLE POINT OF IT. Twenty-five words carry a meaning and seven hundred are assumed known; the ones worth hearing about are the assumed ones a reader turns out not to know, and a reader only tells us which those are by tapping one. Underlining the twenty-five was tried and it shuts that off - a player taps only what is marked, so the seven hundred are never touched and the words we guessed wrong about stay guessed wrong forever.";
  "SO EVERY TAP ANSWERS, including a tap on a word with nothing written for it. That is what makes an unmarked sentence worth touching at all: a reader who tries three words and gets three silences has learned that tapping does nothing, and stops - taking the signal with them. Saying plainly that nothing is written keeps the tap honest and keeps them tapping.";
  "THE ANSWER SITS UNDER THE WORDS AND NOT OVER THEM. A popup covers the sentence the player was reading, which is the sentence the word they did not know is in - so they get the meaning and lose the place. Two quiet lines below leave both on the screen at once.";
  "IT REPLACES THE ANSWER RATHER THAN ADDING TO IT, so tapping a second word does not push the conversation down the page. The bubble is a fixed shape a player is reading inside of, and text that grows under it moves what they are looking at.";
  let speech = app_shared_game_p_text(container, "");
  html_bold_mild(speech);
  let gloss_line = app_shared_game_p_text(container, "");
  let explain_line = app_shared_game_p_text(container, "");
  function word_tapped(word) {
    let found = words_game_taught_gloss_or_null(word);
    let none = equal(found, null);
    if (none) {
      html_text_set(gloss_line, word);
      let unglossed = app_g_word_unglossed_text();
      html_text_set(explain_line, unglossed);
      return;
    }
    let named = property_get(found, "word");
    let gloss = property_get(found, "gloss");
    let headed = list_join_space([named, "-", gloss]);
    html_text_set(gloss_line, headed);
    let explain = property_get(found, "explain");
    html_text_set(explain_line, explain);
  }
  html_span_words_on_click(speech, text, word_tapped);
  return speech;
}
