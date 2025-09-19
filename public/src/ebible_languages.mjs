import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
export function ebible_languages() {
  let languages = [
    {
      name: "English",
      bible_folder: ebible_folder_engbsb(),
      code: "en",
    },
    {
      name: "Urdu",
      bible_folder: ebible_folder_urdu(),
      code: "ur",
    },
    {
      name: "Swhahili",
      bible_folder: "swhonen",
      code: "TODO",
    },
    {
      name: "Luganda",
      bible_folder: "lug",
      code: "TODO",
    },
    {
      name: "Bengali",
      bible_folder: "benirv",
      code: "TODO",
    },
    {
      name: "Telugu",
      bible_folder: "tel2017",
      code: "TODO",
    },
    {
      name: "Yoruba",
      bible_folder: "yor",
      code: "TODO",
    },
    {
      name: "Cebuano",
      bible_folder: "cebulb",
      code: "TODO",
    },
    {
      name: "Tagalog",
      bible_folder: "tglulb",
      code: "TODO",
    },
  ];
  return languages;
}
