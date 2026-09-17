import { google_text_to_speech_audio } from "./google_text_to_speech_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function google_text_to_speech_file(voice_name, text, file_path) {
  "$plain voice_name";
  "a Google voice name such as he-IL-Wavenet-D. It picks a voice and nothing that runs.";
  "$plain text";
  "the words to say. They are spoken, never run.";
  "Says some text with one Google Cloud Text-to-Speech voice and writes the result as an mp3.";
  "The text goes as plain text, never SSML, because Google bills every character sent and markup is characters too.";
  let input = {
    text,
  };
  let audio = await google_text_to_speech_audio(voice_name, input);
  await file_overwrite_buffer(file_path, audio);
}
