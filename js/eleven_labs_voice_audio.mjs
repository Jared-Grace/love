import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { eleven_labs_key } from "./eleven_labs_key.mjs";
import { error } from "./error.mjs";
export async function eleven_labs_voice_audio(voice_id, model_id, text) {
  "$plain voice_id";
  "$plain model_id";
  "The sound of one piece of text spoken by one named ElevenLabs voice, handed back as the bytes of an mp3 rather than written anywhere, so that whoever asked decides where it belongs.";
  "★ THE ANSWER IS AUDIO AND NOT JSON, so a failure arrives as a body that cannot be played rather than as a thrown error. The status is read first and the body's own words are raised, because a key that is wrong and a voice that does not exist otherwise both land on disk as a silent file.";
  "★ THE MODEL IS ASKED FOR BY NAME BY THE CALLER, because the multilingual model and the newest one differ in what they do with Hebrew, and which one is right here is exactly the thing being listened for.";
  arguments_assert(arguments, 3);
  let key = await eleven_labs_key();
  let url = "https://api.elevenlabs.io/v1/text-to-speech/" + voice_id;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "xi-api-key": key,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: json_to({
      text,
      model_id,
    }),
  });
  if (not(response.ok)) {
    let said = await response.text();
    error("eleven labs refused: " + response.status + " " + said);
  }
  let bytes = await response.arrayBuffer();
  let audio = Buffer.from(bytes);
  return audio;
}
