import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_money_section_used_for() {
  "The part of what this app does with money that answers where a gift actually goes.";
  let texts = {
    en: {
      title: "What a gift is used for",
      lines: [
        "It goes to the people doing the work - their wages, and providing for their own households. Scripture is firm that a man must provide for his household (1 Timothy 5:8).",
        "If the work grows, it goes to more of the people who contribute to it.",
      ],
    },
    ur: {
      title: "تحفہ کس کام میں لایا جاتا ہے",
      lines: [
        "یہ اُن لوگوں کو جاتا ہے جو کام کر رہے ہیں - اُن کی اجرت، اور اُن کے اپنے گھرانوں کی پرورش۔ کلامِ مُقدّس صاف کہتا ہے کہ آدمی کو اپنے گھرانے کی پرورش کرنی چاہیے (1 تیمتھیس 5:8)۔",
        "اگر کام بڑھتا ہے تو یہ اُن اور لوگوں کو جاتا ہے جو اِس میں حصہ ڈالتے ہیں۔",
      ],
    },
    translated_from: {
      ur: {
        title: "What a gift is used for",
        lines: [
          "It goes to the people doing the work - their wages, and providing for their own households. Scripture is firm that a man must provide for his household (1 Timothy 5:8).",
          "If the work grows, it goes to more of the people who contribute to it.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
