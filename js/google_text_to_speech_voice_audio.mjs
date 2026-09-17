import {GoogleAuth} from "google-auth-library";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_service_account } from "./firebase_service_account.mjs";
export async function google_text_to_speech_voice_audio(voice, input) {
  "$plain voice";
  "the voice part of the request in the shape Google asks for it: a language and a name, and for the Gemini voices the model too. It picks a voice and nothing that runs.";
  "$plain input";
  "what the voice is to say, in the shape Google asks for it: a holder carrying either plain words or a marked-up reading of them, and for the Gemini voices an instruction on how to say them. It is spoken, never run.";
  "The sound of one Google Cloud Text-to-Speech voice saying something, handed back as the bytes of an mp3 rather than written anywhere.";
  "★ THE VOICE IS TAKEN WHOLE RATHER THAN AS A NAME, because the Gemini voices are named by a person's name that carries no language and need a model named beside it, so a name alone cannot say everything a request needs.";
  arguments_assert(arguments, 2);
  let credentials = await firebase_service_account();
  let auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });
  let client = await auth.getClient();
  let response = await client.request({
    url: "https://texttospeech.googleapis.com/v1/text:synthesize",
    method: "POST",
    data: {
      input,
      voice,
      audioConfig: {
        audioEncoding: "MP3",
      },
    },
  });
  let audio = Buffer.from(response.data.audioContent, "base64");
  return audio;
}
