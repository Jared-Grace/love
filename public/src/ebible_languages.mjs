import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
export function ebible_languages() {
  let languages = [
    {
      name: "Urdu",
      bible_folder: ebible_folder_urdu(),
      language_code: "ur",
    },
    {
      name: "Swhahili",
      bible_folder: "swhonen",
      language_code: "TODO",
    },
    {
      name: "Luganda",
      bible_folder: "lug",
      language_code: "TODO",
    },
    {
      name: "Bengali",
      bible_folder: "benirv",
      language_code: "TODO",
    },
    {
      name: "Telugu",
      bible_folder: "tel2017",
      language_code: "TODO",
    },
    {
      name: "Yoruba",
      bible_folder: "yor",
      language_code: "TODO",
    },
    {
      name: "Cebuano",
      bible_folder: "cebulb",
      language_code: "TODO",
    },
    {
      name: "Tagalog",
      bible_folder: "tglulb",
      language_code: "TODO",
    },
  ];
  return languages;
}
