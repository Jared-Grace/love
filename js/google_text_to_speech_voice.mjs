import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
export function google_text_to_speech_voice(voice_name) {
  "$plain voice_name";
  "a Google voice name such as he-IL-Wavenet-D. It picks a voice and nothing that runs.";
  "The voice part of a Google Cloud Text-to-Speech request for one named voice.";
  "The language is the first two parts of the voice name, which is how Google spells both, so the two can never disagree.";
  "★ A NAME OF JUST THREE PARTS, SUCH AS he-IL-Sadaltager, IS A GEMINI VOICE: the language, then the person's name Google gives it. Google's own names for its older voices always have a kind and a letter after the language, so they never have only three parts, and a Gemini voice has to carry its language here because its own name carries none.";
  arguments_assert(arguments, 1);
  let parts = voice_name.split("-");
  let language_code = parts.slice(0, 2).join("-");
  if (equal(parts.length, 3)) {
    let gemini = google_text_to_speech_voice_gemini(language_code, parts[2]);
    return gemini;
  }
  let voice = {
    languageCode: language_code,
    name: voice_name,
  };
  return voice;
}
