import { ssml_phoneme_speak } from "./ssml_phoneme_speak.mjs";
export function bible_word_voice_trial_phoneme_tried() {
  "The ways one Hebrew word is handed to the Hebrew voice to hear whether spelling out its sounds changes what is said: each with a key naming its recording, what is sent, what a listener reads beside it, and what it tests.";
  "★ THE SAME PLAIN READING IS ASKED FOR TWICE, because two identical requests have come back with different bytes, and a listener needs to hear what no change at all sounds like before a difference can mean anything.";
  "★ WRONG SOUNDS ARE TRIED BESIDE THE RIGHT ONES, because a voice that ignores the sounds says the right word either way; only a word it was told to say as banana can show whether it listens.";
  let word = "שָׁלוֹם";
  let tried = [
    [
      "plain",
      {
        text: word,
      },
      word,
      "plain Hebrew letters, as the app sends today",
    ],
    [
      "plain_again",
      {
        text: word,
      },
      word,
      "the identical request again",
    ],
    [
      "ssml_bare",
      {
        ssml: "<speak>" + word + "</speak>",
      },
      word,
      "markup with no sounds in it",
    ],
    [
      "no_marks",
      {
        text: "שלום",
      },
      "שלום",
      "the letters without the vowel marks",
    ],
    [
      "sounds_right",
      {
        ssml: ssml_phoneme_speak(word, "ʃaˈlom"),
      },
      "ʃaˈlom",
      "told the right sounds",
    ],
    [
      "banana",
      {
        ssml: ssml_phoneme_speak(word, "bəˈnana"),
      },
      "bəˈnana",
      "told to say banana",
    ],
    [
      "banana_thrice",
      {
        ssml: ssml_phoneme_speak(word, "bənanabənanabənana"),
      },
      "bənanabənanabənana",
      "told to say banana three times",
    ],
  ];
  return tried;
}
