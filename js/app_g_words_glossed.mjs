export function app_g_words_glossed(container, text) {
  "$plain text";
  "A line somebody says, drawn into a bubble with every word the game means to teach marked as touchable, and an answer underneath it that fills in with what the tapped word means.";
  "IT MARKS WHAT IS TAPPABLE RATHER THAN LEAVING IT TO BE FOUND. A sentence where any word might answer and almost none do teaches a reader within three taps that tapping is not worth doing; a dotted line under the four words that will answer teaches them the opposite in one. The mark is drawn from the same lookup the tap uses, so a word can never be marked and then answer nothing.";
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
      return;
    }
    let named = property_get(found, "word");
    let gloss = property_get(found, "gloss");
    let headed = list_join_space([named, "-", gloss]);
    html_text_set(gloss_line, headed);
    let explain = property_get(found, "explain");
    html_text_set(explain_line, explain);
  }
  let records = html_span_words_on_click(speech, text, word_tapped);
  for (let record of records) {
    let word = property_get(record, "word");
    let found = words_game_taught_gloss_or_null(word);
    let there = not_equal(found, null);
    if (there) {
      let span = property_get(record, "span");
      html_style_set(span, "text-decoration", "underline dotted");
      html_style_set(span, "cursor", "pointer");
    }
  }
  return speech;
}
