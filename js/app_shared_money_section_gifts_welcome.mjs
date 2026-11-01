import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_gifts_welcome() {
  "The part of what this app does with money that answers whether a reader is pressed to give.";
  "It names no schedule of asking, only the footing a gift stands on: given as the giver decided, never pressed out of them.";
  let texts = {
    en: {
      title: "Gifts are welcome and there is never pressure to give",
      lines: [
        "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
      ],
    },
    ur: {
      title: "تحفے خوش آمدید ہیں اور دینے کا کبھی دباؤ نہیں",
      lines: [
        "جیسا آپ نے اپنے دل میں ٹھہرایا ہو ویسا دیجیے، نہ ناخوشی سے اور نہ اِس لیے کہ آپ پر زور ڈالا گیا (2 کرنتھیوں 9:7)۔",
      ],
    },
    translated_from: {
      ur: {
        title: "Gifts are welcome and there is never pressure to give",
        lines: [
          "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  property_set(section, "verses", ["2 Corinthians 9:7"]);
  return section;
}
