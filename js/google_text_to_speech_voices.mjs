import {GoogleAuth} from "google-auth-library";
import { firebase_service_account } from "./firebase_service_account.mjs";
export async function google_text_to_speech_voices(language_code) {
  "$plain language_code";
  "a language tag such as he-IL or el-GR. It names which voices to list and nothing that runs.";
  "The voices Google Cloud Text-to-Speech offers for one language, asked with this repo's own Firebase service account - so asking it also answers whether that account may reach the speech service at all.";
  let credentials = await firebase_service_account();
  let auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });
  let client = await auth.getClient();
  let url =
    "https://texttospeech.googleapis.com/v1/voices?languageCode=" +
    language_code;
  let response = await client.request({
    url,
  });
  let voices = response.data.voices;
  return voices;
}
