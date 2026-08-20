import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_money_section_tithe() {
  "The part of what this app does with money that answers whether a gift here counts as a reader's tithe.";
  "It says what is done with the tithe once it arrives as well as whether it may be given, because a reader handing over a tenth is entitled to know it is treated the way a tenth is meant to be.";
  let texts = {
    en: {
      title: "A gift here can be your tithe",
      lines: [
        "If you tithe, you are welcome to give it here. This is work of the word, and it is provided for the same way.",
        "What is received here is tithed from in turn. The Levites lived on the tithe and were commanded to give a tenth of what they received (Numbers 18:26).",
      ],
    },
    ur: {
      title: "یہاں دیا ہوا تحفہ آپ کا دسواں حصہ ہو سکتا ہے",
      lines: [
        "اگر آپ دسواں حصہ دیتے ہیں تو آپ اُسے یہاں دے سکتے ہیں۔ یہ کلام کا کام ہے، اور اِس کی پرورش اُسی طرح ہوتی ہے۔",
        "جو کچھ یہاں ملتا ہے اُس میں سے بھی دسواں حصہ دیا جاتا ہے۔ لاوی دسویں حصے پر گزارہ کرتے تھے اور اُنہیں حکم تھا کہ جو ملے اُس کا دسواں حصہ دیں (گنتی 18:26)۔",
      ],
    },
    translated_from: {
      ur: {
        title: "A gift here can be your tithe",
        lines: [
          "If you tithe, you are welcome to give it here. This is work of the word, and it is provided for the same way.",
          "What is received here is tithed from in turn. The Levites lived on the tithe and were commanded to give a tenth of what they received (Numbers 18:26).",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
