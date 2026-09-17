import { arguments_assert } from "./arguments_assert.mjs";
export function google_text_to_speech_voice(voice_name) {
  "$plain voice_name";
  "a Google voice name such as he-IL-Wavenet-D. It picks a voice and nothing that runs.";
  "The voice part of a Google Cloud Text-to-Speech request for one named voice.";
  "The language is the first two parts of the voice name, which is how Google spells both, so the two can never disagree.";
  arguments_assert(arguments, 1);
  let language_code = voice_name.split("-").slice(0, 2).join("-");
  let voice = {
    languageCode: language_code,
    name: voice_name,
  };
  return voice;
}
