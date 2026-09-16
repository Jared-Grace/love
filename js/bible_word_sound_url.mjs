import { fn_name } from "./fn_name.mjs";
import { bible_word_voice_name } from "./bible_word_voice_name.mjs";
import { bible_word_voice_url } from "./bible_word_voice_url.mjs";
export function bible_word_sound_url(text) {
  "$plain text";
  "Where to fetch the saying of one Bible word, given nothing but the word as it is printed on the screen.";
  "IT TAKES ONE WORD AND NOTHING ELSE, because that is the whole of what the reader's tap hands over; the voice is worked out from the letters and the file is named after the word, so the page needs to remember nothing.";
  ("★ A WORD NOBODY RECORDED GIVES A GOOD-LOOKING ADDRESS THAT FETCHES NOTHING, and the playing swallows that quietly, so a tap on such a word does nothing at all with no error to say why. ",
    fn_name("bible_word_voice_chapter_missing"),
    " is the check that finds those before a reader does.");
  let voice_name = bible_word_voice_name(text);
  let url = bible_word_voice_url(voice_name, text);
  return url;
}
