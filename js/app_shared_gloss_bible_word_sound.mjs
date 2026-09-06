import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { html_sound_url_play } from "./html_sound_url_play.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_span_space } from "./html_span_space.mjs";
export function app_shared_gloss_bible_word_sound(
  div,
  word,
  sound_url_get,
  slow_url_get,
) {
  "$plain word";
  "Puts a speaker at the front of one explained word's row, and a turtle beside it, so a reader who cannot tell how the spelling sounds can hear it said - and hear it again more slowly if the first saying went past too quickly. Hands back the ordinary saying so that the row can put it on the word itself as well.";
  "★ THE READER OF THIS PAGE IS LEARNING ENGLISH FROM A LANGUAGE WHOSE LETTERS DO NOT WORK THE WAY ENGLISH LETTERS DO. Written English says almost nothing reliable about how a word is spoken, and the two things that would fix that on paper - a phonetic alphabet, or a respelling in the reader's own letters - are either unreadable to the reader or unable to carry which part of the word is leaned on. A recording carries all of it and asks the reader to know nothing.";
  "★ THE TURTLE IS A SECOND PRESS RATHER THAN A SETTING, BECAUSE MISSING A WORD IS A THING THAT HAPPENS TO ONE WORD AND NOT TO A READING. A speed chosen once for the whole screen would slow every word a reader already knows, which is most of them, and turn a reading into a chore to buy back the few that were hard. Pressed per word it costs nothing until the moment it is wanted.";
  "★ IT SAYS THE WORD IN THE VOICE THAT WORD WAS JUST SAID IN, WHICH IS DECIDED BEFORE IT GETS HERE. A reader who missed a word and asked for it again is being asked to recognise one mouth, not two, and a different person saying it slowly hands them a second problem in place of the first.";
  "★ THE SAYING IS HANDED BACK RATHER THAN FASTENED TO THE WORD HERE, BECAUSE THE WORD IS NOT WRITTEN YET WHEN THIS RUNS. The presses are drawn before the word so that they land in the same place on every row, and a thing drawn first cannot be given to something drawn after it. Handing the saying back lets the row fasten it on once it has a word to fasten it to, and keeps the deciding of what a press does in the one place that already knows.";
  "The word itself answers a press as well as the speaker does, because on a phone a single glyph is a small thing to hit and the word beside it is already big enough. Nothing is written on the page to say so; a reader who presses the speaker once learns the row is alive, and a reader who never presses anything loses nothing.";
  "The turtle is not given the word to press as well, because the word already means the ordinary saying and one glyph cannot mean two things. A reader who wants it slower has the turtle, which is right beside it.";
  "A page with no recordings behind it hands in nothing here and no speaker is drawn, so the same row serves a language whose words have been recorded and one whose words have not. A page whose recordings have no slower twin hands in nothing for that and draws the speaker alone, so the turtle arrives for a language exactly when the slow recordings do.";
  "The gap that separates the presses from the word is put in here rather than by the row, because it belongs to the presses: a row that drew none of them would otherwise begin with a space it never asked for.";
  arguments_assert(arguments, 4);
  let missing = not(sound_url_get);
  if (missing) {
    return null;
  }
  async function lambda() {
    let url = sound_url_get(word);
    await html_sound_url_play(url);
  }
  let span = html_span_text(div, "🔊");
  html_attribute_set(span, "dir", "auto");
  html_on_click(span, lambda);
  let slow_missing = not(slow_url_get);
  if (slow_missing) {
    html_span_space(div);
    return lambda;
  }
  async function lambda2() {
    let url = slow_url_get(word);
    await html_sound_url_play(url);
  }
  html_span_space(div);
  let span2 = html_span_text(div, "🐢");
  html_attribute_set(span2, "dir", "auto");
  html_on_click(span2, lambda2);
  html_span_space(div);
  return lambda;
}
