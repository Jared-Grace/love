import { not } from "./not.mjs";
import { eleven_labs_key } from "./eleven_labs_key.mjs";
import { error } from "./error.mjs";
export async function eleven_labs_voices() {
  "Every voice this account may speak with, named and identified, so that a voice can be chosen by its name here and asked for by its identifier afterwards.";
  "★ A VOICE IS ADDRESSED BY AN IDENTIFIER AND NOT BY ITS NAME, unlike the Google voices, so the list is the only place the two are joined and nothing else should be guessing either one.";
  let key = await eleven_labs_key();
  let response = await fetch("https://api.elevenlabs.io/v1/voices", {
    headers: {
      "xi-api-key": key,
    },
  });
  if (not(response.ok)) {
    let said = await response.text();
    error("eleven labs refused: " + response.status + " " + said);
  }
  let answer = await response.json();
  function lambda(voice) {
    let r = {
      voice_id: voice.voice_id,
      name: voice.name,
      labels: voice.labels,
    };
    return r;
  }
  let voices = answer.voices.map(lambda);
  return voices;
}
