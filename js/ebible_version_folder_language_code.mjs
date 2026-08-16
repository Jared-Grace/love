import { text_slice } from "./text_slice.mjs";
export function ebible_version_folder_language_code(bible_folder) {
  "$plain bible_folder";
  "Which language a translation is in, read off the first three letters of the folder eBible files it under.";
  "eBible names every folder as the three letter code of the language and then whatever tells that translation apart from the others in it - eng-web and engwebp and engbsb are three English bibles, spablm is a Spanish one.";
  "Only worth asking where the translation's own copyright page names no language. The page is the thing that says so on purpose and this is a thing read off a filing name, so the page is believed wherever it speaks.";
  let language_code = text_slice(bible_folder, 0, 3);
  return language_code;
}
