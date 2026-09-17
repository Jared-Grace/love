import { arguments_assert } from "./arguments_assert.mjs";
import { google_text_to_speech_voice } from "./google_text_to_speech_voice.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
export async function google_text_to_speech_audio(voice_name, input) {
  "$plain voice_name";
  "a Google voice name such as he-IL-Wavenet-D. It picks a voice and nothing that runs.";
  "$plain input";
  "what the voice is to say, in the shape Google asks for it: a holder carrying either plain words or a marked-up reading of them. It is spoken, never run.";
  "The sound of one Google Cloud Text-to-Speech voice saying something, handed back as the bytes of an mp3 rather than written anywhere.";
  "★ IT HANDS BACK THE SOUND INSTEAD OF FILING IT, because a caller that only wants to compare two recordings has no use for two files, and a caller that wants a file can write the bytes itself. Filing was the one thing the old shape insisted on, and it was the one thing a probe could not want.";
  "★ THE MARKED-UP READING IS NOT THE CHEAP ONE. Google bills every character sent and markup is characters too, so plain words stay the right thing to send for an ordinary recording; the markup is for a word whose plain reading is wrong.";
  arguments_assert(arguments, 2);
  let voice = google_text_to_speech_voice(voice_name);
  let audio = await google_text_to_speech_voice_audio(voice, input);
  return audio;
}
