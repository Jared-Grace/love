import {GoogleAuth} from "google-auth-library";
import { firebase_service_account } from "./firebase_service_account.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function google_text_to_speech_file(voice_name, text, file_path) {
  "$plain voice_name";
  "a Google voice name such as he-IL-Wavenet-D. It picks a voice and nothing that runs.";
  "$plain text";
  "the words to say. They are spoken, never run.";
  "Says some text with one Google Cloud Text-to-Speech voice and writes the result as an mp3.";
  "The text goes as plain text, never SSML, because Google bills every character sent and markup is characters too.";
  "The language is the first two parts of the voice name, which is how Google spells both, so the two can never disagree.";
  let credentials = await firebase_service_account();
  let auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });
  let client = await auth.getClient();
  let language_code = voice_name.split("-").slice(0, 2).join("-");
  let response = await client.request({
    url: "https://texttospeech.googleapis.com/v1/text:synthesize",
    method: "POST",
    data: {
      input: {
        text,
      },
      voice: {
        languageCode: language_code,
        name: voice_name,
      },
      audioConfig: {
        audioEncoding: "MP3",
      },
    },
  });
  let audio = Buffer.from(response.data.audioContent, "base64");
  await file_overwrite_buffer(file_path, audio);
}
