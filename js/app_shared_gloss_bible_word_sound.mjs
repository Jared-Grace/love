import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function app_shared_gloss_bible_word_sound(
  div,
  word_span,
  word,
  sound_url_get,
) {
  "$plain word";
  "Puts a speaker beside one explained word, so a reader who cannot tell how the spelling sounds can hear it said instead.";
  "★ THE READER OF THIS PAGE IS LEARNING ENGLISH FROM A LANGUAGE WHOSE LETTERS DO NOT WORK THE WAY ENGLISH LETTERS DO. Written English says almost nothing reliable about how a word is spoken, and the two things that would fix that on paper - a phonetic alphabet, or a respelling in the reader's own letters - are either unreadable to the reader or unable to carry which part of the word is leaned on. A recording carries all of it and asks the reader to know nothing.";
  "The word itself answers a press as well as the speaker does, because on a phone a single glyph is a small thing to hit and the word beside it is already big enough. Nothing is written on the page to say so; a reader who presses the speaker once learns the row is alive, and a reader who never presses anything loses nothing.";
  "A page with no recordings behind it hands in nothing here and no speaker is drawn, so the same row serves a language whose words have been recorded and one whose words have not.";
  arguments_assert(arguments, 4);
  let missing = not(sound_url_get);
  if (missing) {
    return null;
  }
  async function lambda() {
    let url = sound_url_get(word);
    await html_sound_url_play(url);
  }
  html_on_click(word_span, lambda);
  html_span_space(div);
  let span = html_span_text(div, "🔊");
  html_attribute_set(span, "dir", "auto");
  html_on_click(span, lambda);
  return span;
}
