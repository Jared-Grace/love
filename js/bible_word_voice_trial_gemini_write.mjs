import { file_exists } from "./file_exists.mjs";
import { sleep } from "./sleep.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function bible_word_voice_trial_gemini_write() {
  "Records the first 25 different words of Genesis 1 with a Gemini voice twice each - once given only the word, once also told how to say it from the interlinear's own transliteration - and files each where the voice trial screen plays it from.";
  "★ THE WORD IS SAID TWICE BECAUSE THE TWO ANSWER DIFFERENT QUESTIONS. The plain reading says how often the voice is right unaided; the told reading says whether telling it fixes the words it gets wrong. A word right both ways needs no instruction, and a word wrong both ways needs a different text rather than a better one.";
  "★ THE INSTRUCTION COMES FROM THE TRANSLITERATION AND NEVER FROM A GUESS, because the interlinear already spells every word's sounds, and a pronunciation invented here would be exactly the kind of error this is checking for.";
  "★ A THIRD READING TELLS IT TO SAY THE WORD EXACTLY ONCE, because told the sounds alone, 14 of the first 25 came back at least twice as long as the plain reading and the listener heard the word said twice.";
  "★ A FOURTH READING SENDS ONLY THE TRANSLITERATION, because told once still came back said twice, two different ways, as if the Hebrew letters and the transliteration were each read; with one spelling sent there is nothing to say a second time.";
  "★ A FIFTH READING SENDS THE TRANSLITERATION WITH ITS SYLLABLE DOTS TAKEN OUT, because with the dots in it was never said twice but was said syllable by syllable, evenly and with no stress, not as a word.";
  "★ A SIXTH READING SENDS THE HEBREW LETTERS AND ASKS ONLY FOR BIBLICAL RATHER THAN MODERN PRONUNCIATION, naming no sound, because a transliteration sent either way was misread or said twice, while the plain letters were right apart from modern v for waw - and naming only that one sound would leave any other modern habit unasked.";
  "★ A WORD ALREADY RECORDED IS SKIPPED AND EACH REQUEST WAITS SEVEN SECONDS, because Gemini voices are limited per minute per project: the first run stopped after 14 recordings, refused for exceeding it. Skipping lets a stopped run carry on where it stopped, and the wait keeps under the limit.";
  "It writes under gitignore because these are for one listener to hear on this machine, not for the app.";
  let voice = google_text_to_speech_voice_gemini("he-IL", "Charon");
  let words = await bible_interlinear_chapter_word_forms_first("GEN01", 25);
  let written = [];
  for (let [index, w] of words.entries()) {
    let tried = [
      [
        "gemini_plain",
        {
          text: w.text,
        },
      ],
      [
        "gemini_told",
        {
          prompt:
            "Read this Biblical Hebrew word aloud, pronounced as this transliteration spells it: " +
            w.translit,
          text: w.text,
        },
      ],
      [
        "gemini_once",
        {
          prompt:
            "Say this Biblical Hebrew word exactly once and say nothing else, pronounced as this transliteration spells it: " +
            w.translit,
          text: w.text,
        },
      ],
      [
        "gemini_translit",
        {
          prompt:
            "This is a transliteration of one Biblical Hebrew word. Pronounce the Hebrew word it spells, once. The dots only divide syllables.",
          text: w.translit,
        },
      ],
      [
        "gemini_joined",
        {
          prompt:
            "This is a transliteration of one Biblical Hebrew word. Say it once, naturally, as a single spoken word with its normal stress.",
          text: w.translit.replaceAll("·", ""),
        },
      ],
      [
        "gemini_biblical",
        {
          prompt:
            "Say this word once, pronounced as in Biblical Hebrew rather than Modern Hebrew.",
          text: w.text,
        },
      ],
    ];
    for (let [name, input] of tried) {
      let file_path =
        "gitignore/bible_word_voice_trial/gem/" + index + "_" + name + ".mp3";
      if (await file_exists(file_path)) {
        continue;
      }
      let audio = await google_text_to_speech_voice_audio(voice, input);
      await file_overwrite_buffer(file_path, audio);
      await sleep(7000);
      written.push({
        index,
        name,
        bytes: audio.length,
      });
    }
  }
  return written;
}
