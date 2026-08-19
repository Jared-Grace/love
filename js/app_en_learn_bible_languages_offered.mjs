import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
export function app_en_learn_bible_languages_offered() {
  "The languages this app can explain an English word in, and so the only ones it offers a reader.";
  "Urdu is the one store of explanations written so far. Another language here is another store handed to the home screen and nothing else, so this list and the stores grow together and neither can get ahead of the other.";
  "Every other bible reader here offers all of them, because reading a verse needs only that the verse exists. This one has to have been written for you, word by word, so what it can offer is what has been written.";
  let urdu = ebible_language_urdu();
  let r = [urdu];
  return r;
}
