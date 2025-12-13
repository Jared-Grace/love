import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
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
      name: "Original",
      bible_folder: bible_interlinear_verses_upload_folder(),
      language_code: "original",
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
    {
      name: "Spanish",
      bible_folder: "spablm",
      language_code: "es",
    },
    {
      name: "French",
      bible_folder: "frasbl",
      language_code: "fr",
    },
    {
      name: "Amharic",
      bible_folder: "amh",
      language_code: "am",
    },
    {
      name: "Chinese (Simplified)",
      bible_folder: "cmn-cu89s",
      language_code: "zh",
    },
    {
      name: "Dutch",
      bible_folder: "nldnbg",
      language_code: "nl",
    },
    {
      name: "Igbo",
      bible_folder: "ibo",
      language_code: "ig",
    },
    {
      name: "Hausa",
      bible_folder: "hausa",
      language_code: "ha",
    },
    {
      name: "Yoruba",
      bible_folder: "yor",
      language_code: "yor",
    },
    {
      name: "Punjabi",
      bible_folder: "pan",
      language_code: "pa",
    },
    {
      name: "Chichewa",
      bible_folder: "nya",
      language_code: "ny",
    },
    {
      name: "Portuguese",
      bible_folder: "porbrbsl",
      language_code: "pt",
    },
    {
      name: "Wolof",
      bible_folder: "wolmbs",
      language_code: "wo",
    },
    {
      name: "Gujarati",
      bible_folder: "guj2017",
      language_code: "gu",
    },
    {
      name: "Afaan Oromoo",
      bible_folder: "gaz",
      language_code: "om",
    },
  ];
  return languages;
}
