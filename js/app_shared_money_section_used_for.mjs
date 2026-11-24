import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_used_for() {
  "The part of what this app does with money that answers where a gift actually goes.";
  let texts = {
    eng: {
      title: "What is a gift used for?",
      lines: [
        "Gifts go to the people doing the work - their wages, and providing for their own households. Scripture says a man must provide for his household (1 Timothy 5:8).",
      ],
    },
    urd: {
      title: "تحفہ کس کام میں لایا جاتا ہے؟",
      lines: [
        "تحفے اُن لوگوں کو جاتے ہیں جو کام کر رہے ہیں - اُن کی اجرت، اور اُن کے اپنے گھرانوں کی پرورش۔ کلامِ مُقدّس کہتا ہے کہ آدمی کو اپنے گھرانے کی پرورش کرنی چاہیے (1 تیمتھیس 5:8)۔",
      ],
    },
    tgl: {
      title: "Saan ginagamit ang isang kaloob?",
      lines: [
        "Napupunta ang mga kaloob sa mga taong gumagawa ng gawain - sa kanilang sahod, at sa pagtustos sa kanilang sariling sambahayan. Sinasabi ng Kasulatan na dapat tustusan ng isang tao ang kaniyang sambahayan (1 Timoteo 5:8).",
      ],
    },
    spa: {
      title: "¿Para qué se usa una ofrenda?",
      lines: [
        "Las ofrendas van a las personas que hacen la obra: su salario y el sustento de sus propias familias. La Escritura dice que un hombre debe proveer para su familia (1 Timoteo 5:8).",
      ],
    },
    translated_from: {
      urd: {
        title: "What is a gift used for?",
        lines: [
          "Gifts go to the people doing the work - their wages, and providing for their own households. Scripture says a man must provide for his household (1 Timothy 5:8).",
        ],
      },
      tgl: {
        title: "What is a gift used for?",
        lines: [
          "Gifts go to the people doing the work - their wages, and providing for their own households. Scripture says a man must provide for his household (1 Timothy 5:8).",
        ],
      },
      spa: {
        title: "What is a gift used for?",
        lines: [
          "Gifts go to the people doing the work - their wages, and providing for their own households. Scripture says a man must provide for his household (1 Timothy 5:8).",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  property_set(section, "verses", ["1 Timothy 5:8"]);
  return section;
}
