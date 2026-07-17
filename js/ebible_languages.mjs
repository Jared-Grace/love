import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
import { ebible_language_arabic } from "./ebible_language_arabic.mjs";
import { ebible_language_bengali } from "./ebible_language_bengali.mjs";
import { ebible_language_telugu } from "./ebible_language_telugu.mjs";
import { ebible_language_kenya } from "./ebible_language_kenya.mjs";
import { ebible_language_luganda } from "./ebible_language_luganda.mjs";
import { ebible_language_punjabi } from "./ebible_language_punjabi.mjs";
import { ebible_language_urdu } from "./ebible_language_urdu.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { ebible_language_original } from "./ebible_language_original.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_languages() {
  text_combine("to add an entry, run: ", fn_name("ebible_languages_add"));
  let en = ebible_language_english();
  let o = ebible_language_original();
  let ur = ebible_language_urdu();
  let pa = ebible_language_punjabi();
  let lug = ebible_language_luganda();
  let ke = ebible_language_kenya();
  let te = ebible_language_telugu();
  let bn = ebible_language_bengali();
  let ar = ebible_language_arabic();
  let languages = [
    o,
    en,
    ur,
    ke,
    lug,
    bn,
    te,
    {
      name: "Hindi",
      bible_folder: "hin2017",
      language_code: "hin",
    },
    ar,
    {
      name: "Ekegusii",
      bible_folder: "guz",
      language_code: "guz",
    },
    {
      name: "Cebuano",
      bible_folder: ebible_folder_cebuano(),
      language_code: "ceb",
    },
    {
      name: "Tagalog",
      bible_folder: ebible_folder_tagalog(),
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
    pa,
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
    {
      name: "Persian",
      bible_folder: "pesopcb",
      language_code: "fas",
    },
    {
      name: "Turkish",
      bible_folder: "turytc",
      language_code: "tr",
    },
    {
      name: "Oriya",
      bible_folder: "ory",
      language_code: "or",
    },
    {
      name: "Marathi",
      bible_folder: "mar",
      language_code: "mr",
    },
    {
      name: "Kannada",
      bible_folder: "kanirv",
      language_code: "kn",
    },
    {
      name: "Twi",
      bible_folder: "twiasante",
      language_code: "twi",
    },
    {
      name: "eʋegbe",
      bible_folder: "ewe",
      language_code: "ewe",
    },
    {
      name: "Tamil",
      bible_folder: "tamtcv",
      language_code: "tam",
    },
    {
      name: "Meitei",
      bible_folder: "mni",
      language_code: "mni",
    },
    {
      name: "Italian",
      bible_folder: "ita1927",
      language_code: "ita",
    },
    {
      name: "chiShona",
      bible_folder: "sna",
      language_code: "sna",
    },
    {
      name: "Thai",
      bible_folder: "thaKJV",
      language_code: "tha",
    },
    {
      name: "Polish",
      bible_folder: "polubg",
      language_code: "pol",
    },
    {
      name: "Malay",
      bible_folder: "zlmKSZI",
      language_code: "zlm",
    },
  ];
  ("Rather than modifying this list, use: ");
  fn_name("ebible_languages_add");
  ("if you modify the above list, then run:");
  fn_name("ebible_languages_chapters_cache_refresh");
  list_sort_text_property(languages, "name");
  return languages;
}
