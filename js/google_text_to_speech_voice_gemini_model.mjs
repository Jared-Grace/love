import { arguments_assert } from "./arguments_assert.mjs";
export function google_text_to_speech_voice_gemini_model(
  language_code,
  voice_name,
  model_name,
) {
  "$plain language_code";
  "a language tag such as he-IL. It names the language the voice speaks and nothing that runs.";
  "$plain voice_name";
  "a Gemini voice name such as Charon. It picks a voice and nothing that runs.";
  "$plain model_name";
  "a Gemini speech model such as gemini-2.5-pro-tts. It picks which model speaks and nothing that runs.";
  "The voice part of a Google Cloud Text-to-Speech request for one Gemini voice spoken by one Gemini model.";
  "★ THE MODEL IS GIVEN because the same voice names are spoken by more than one model - Flash, cheaper, and Pro, about twice the price per second of sound - and a trial has to be able to hear one voice through both.";
  arguments_assert(arguments, 3);
  let voice = {
    languageCode: language_code,
    name: voice_name,
    model_name,
  };
  return voice;
}
