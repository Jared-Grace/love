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
    },
    {
      name: "Luganda",
      bible_folder: "lug",
    },
    {
      name: "Bengali",
      bible_folder: "benirv",
    },
    {
      name: "Telugu",
      bible_folder: "tel2017",
    },
    {
      name: "Yoruba",
      bible_folder: "yor",
    },
    {
      name: "Cebuano",
      bible_folder: "cebulb",
    },
    {
      name: "Tagalog",
      bible_folder: "tglulb",
    },
  ];
  return languages;
}
