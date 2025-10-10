import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { ebible_folder_urdu } from "../../../love/public/src/ebible_folder_urdu.mjs";
export function ebible_languages() {
  let languages = [
    {
      name: "English",
      bible_folder: ebible_folder_english(),
      language_code: "en",
    },
    {
      name: "Urdu",
      bible_folder: ebible_folder_urdu(),
      language_code: "ur",
    },
    {
      name: "Swahili",
      bible_folder: "swhonen",
      language_code: "swh",
    },
    {
      name: "Luganda",
      bible_folder: "lug",
      language_code: "lug",
    },
    {
      name: "Bengali",
      bible_folder: "benirv",
      language_code: "ben",
    },
    {
      name: "Telugu",
      bible_folder: "tel2017",
      language_code: "tel",
    },
    {
      name: "Yoruba",
      bible_folder: "yor",
      language_code: "yor",
    },
    {
      name: "Hindi",
      bible_folder: "hin2017",
      language_code: "hin",
    },
    {
      name: "Arabic",
      bible_folder: "arbnav",
      language_code: "arb",
    },
    {
      name: "Ekegusii",
      bible_folder: "guz",
      language_code: "guz",
    },
    {
      name: "Cebuano",
      bible_folder: "cebulb",
      language_code: "ceb",
    },
    {
      name: "Tagalog",
      bible_folder: "tglulb",
      language_code: "tgl",
    },
  ];
  return languages;
}
