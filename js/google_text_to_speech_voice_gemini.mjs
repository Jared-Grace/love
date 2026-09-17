import { arguments_assert } from "./arguments_assert.mjs";
export function google_text_to_speech_voice_gemini(language_code, voice_name) {
  "$plain language_code";
  "a language tag such as he-IL. It names the language the voice speaks and nothing that runs.";
  "$plain voice_name";
  "a Gemini voice name such as Charon. It picks a voice and nothing that runs.";
  "The voice part of a Google Cloud Text-to-Speech request for one Gemini voice.";
  "★ THE LANGUAGE IS ASKED FOR SEPARATELY, because a Gemini voice is named by a person's name that carries no language, unlike the older voices whose names begin with it.";
  "★ ASKING THROUGH A GEMINI VOICE NEEDS THE AGENT PLATFORM USER ROLE on the service account (the renamed Vertex AI User); the older voices do not, so a request refused here and not there is that role missing.";
  arguments_assert(arguments, 2);
  let voice = {
    languageCode: language_code,
    name: voice_name,
    model_name: "gemini-2.5-flash-tts",
  };
  return voice;
}
