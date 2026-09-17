import { ssml_phoneme_speak } from "./ssml_phoneme_speak.mjs";
export function bible_word_voice_trial_phoneme_tried() {
  "The ways one Hebrew word is handed to a voice to hear whether spelling out its sounds changes what is said: each with a key naming its recording, the voice, what is sent, what a listener reads beside it, and what it tests.";
  "★ THE SAME PLAIN READING IS ASKED FOR TWICE, because two identical requests have come back with different bytes, and a listener needs to hear what no change at all sounds like before a difference can mean anything.";
  "★ WRONG SOUNDS ARE TRIED BESIDE THE RIGHT ONES, because a voice that ignores the sounds says the right word either way; only a word it was told to say as banana can show whether it listens.";
  "★ AN ENGLISH VOICE IS TOLD THE SAME BANANA, because when the Hebrew voice said shalom anyway the question was whether the request was built wrong. The English voice gets the identical markup from the identical code, so if it says banana the code is right and the Hebrew voice is what ignores it.";
  "★ THE OTHER HEBREW VOICE IS HEARD RATHER THAN WEIGHED, because it does not say the same word the same length twice, so a recording a little longer after being told banana proves nothing until someone listens.";
  "★ A PAUSE IS PUT IN THE HEBREW MARKUP, because ignoring the sounds could mean ignoring all markup or only this one tag. A two-second silence the voice keeps shows it reads the markup and passes over the sounds alone.";
  let word = "שָׁלוֹם";
  let hebrew = "he-IL-Wavenet-D";
  let english = "en-US-Wavenet-D";
  let chirp = "he-IL-Chirp3-HD-Achird";
  let tried = [
    [
      "plain",
      hebrew,
      {
        text: word,
      },
      word,
      "plain Hebrew letters, as the app sends today",
    ],
    [
      "plain_again",
      hebrew,
      {
        text: word,
      },
      word,
      "the identical request again",
    ],
    [
      "ssml_bare",
      hebrew,
      {
        ssml: "<speak>" + word + "</speak>",
      },
      word,
      "markup with no sounds in it",
    ],
    [
      "no_marks",
      hebrew,
      {
        text: "שלום",
      },
      "שלום",
      "the letters without the vowel marks",
    ],
    [
      "sounds_right",
      hebrew,
      {
        ssml: ssml_phoneme_speak(word, "ʃaˈlom"),
      },
      "ʃaˈlom",
      "told the right sounds",
    ],
    [
      "banana",
      hebrew,
      {
        ssml: ssml_phoneme_speak(word, "bəˈnana"),
      },
      "bəˈnana",
      "told to say banana",
    ],
    [
      "banana_thrice",
      hebrew,
      {
        ssml: ssml_phoneme_speak(word, "bənanabənanabənana"),
      },
      "bənanabənanabənana",
      "told to say banana three times",
    ],
    [
      "pause",
      hebrew,
      {
        ssml: "<speak>" + word + '<break time="2s"/>' + word + "</speak>",
      },
      word + " … " + word,
      "the word twice with a two-second pause in the markup - is any markup read?",
    ],
    [
      "english_banana",
      english,
      {
        ssml: ssml_phoneme_speak("tomato", "bənanabənanabənana"),
      },
      "tomato → bənanabənanabənana",
      "an English voice given the same markup - is the code right?",
    ],
    [
      "chirp_plain",
      chirp,
      {
        text: word,
      },
      word,
      "the Chirp Hebrew voice, plain letters",
    ],
    [
      "chirp_sounds_right",
      chirp,
      {
        ssml: ssml_phoneme_speak(word, "ʃaˈlom"),
      },
      "ʃaˈlom",
      "the Chirp voice told the right sounds",
    ],
    [
      "chirp_banana_thrice",
      chirp,
      {
        ssml: ssml_phoneme_speak(word, "bənanabənanabənana"),
      },
      "bənanabənanabənana",
      "the Chirp voice told to say banana three times",
    ],
  ];
  return tried;
}
