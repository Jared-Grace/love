import {GoogleAuth} from "google-auth-library";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_service_account } from "./firebase_service_account.mjs";
export async function google_text_to_speech_audio(voice_name, input) {
  "$plain voice_name";
  "a Google voice name such as he-IL-Wavenet-D. It picks a voice and nothing that runs.";
  "$plain input";
  "what the voice is to say, in the shape Google asks for it: a holder carrying either plain words or a marked-up reading of them. It is spoken, never run.";
  "The sound of one Google Cloud Text-to-Speech voice saying something, handed back as the bytes of an mp3 rather than written anywhere.";
  "★ IT HANDS BACK THE SOUND INSTEAD OF FILING IT, because a caller that only wants to compare two recordings has no use for two files, and a caller that wants a file can write the bytes itself. Filing was the one thing the old shape insisted on, and it was the one thing a probe could not want.";
  "★ THE MARKED-UP READING IS NOT THE CHEAP ONE. Google bills every character sent and markup is characters too, so plain words stay the right thing to send for an ordinary recording; the markup is for a word whose plain reading is wrong.";
  "The language is the first two parts of the voice name, which is how Google spells both, so the two can never disagree.";
  arguments_assert(arguments, 2);
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
      input,
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
  return audio;
}
