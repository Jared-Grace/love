import { folder_secret_join } from "./folder_secret_join.mjs";
export function eleven_labs_key_path() {
  "where the ElevenLabs key is kept - a single line of text in the human's own secret folder, which sits outside every repo, so that nothing holding it can be committed by accident";
  let path = folder_secret_join("elevenlabs.txt");
  return path;
}
