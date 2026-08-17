import { text_frozen } from "./text_frozen.mjs";
export function app_en_learn_bible_gloss_urdu_generate_upload_namespace() {
  "The word the English words explained in Urdu are uploaded under.";
  "It spells the function that writes them, because that is what a reader of the address will be looking for, and it is frozen so that a rename of the function leaves the uploaded files exactly where they are. The app asks for them by building this same address, so a word that followed a rename would move where the app looks and leave every file already up there unreachable.";
  "The language is in the word rather than only in the app's name, because one app serves a reader in whichever language they read, and the explanations are different files for each of those languages.";
  let v = text_frozen("app_en_learn_bible_gloss_urdu_generate_upload");
  return v;
}
