import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_gifts_welcome() {
  "The part of what this app does with money that answers whether a reader is pressed to give.";
  "It names no schedule of asking, only the footing a gift stands on: given as the giver decided, never pressed out of them.";
  let texts = {
    eng: {
      title: "Gifts are welcome and there is never pressure to give",
      lines: [
        "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
      ],
    },
    urd: {
      title: "تحفے خوش آمدید ہیں اور دینے کا کبھی دباؤ نہیں",
      lines: [
        "جیسا آپ نے اپنے دل میں ٹھہرایا ہو ویسا دیجیے، نہ ناخوشی سے اور نہ اِس لیے کہ آپ پر زور ڈالا گیا (2 کرنتھیوں 9:7)۔",
      ],
    },
    tgl: {
      title:
        "Malugod na tinatanggap ang mga kaloob, at hindi ka kailanman pinipilit na magbigay",
      lines: [
        "Magbigay ayon sa ipinasya mo sa iyong sariling puso, hindi nang may pag-aatubili at hindi dahil pinilit ka (2 Corinto 9:7).",
      ],
    },
    spa: {
      title: "Las ofrendas son bienvenidas y nunca hay presión para dar",
      lines: [
        "Da como lo hayas decidido en tu corazón, no de mala gana ni porque te presionaron (2 Corintios 9:7).",
      ],
    },
    translated_from: {
      urd: {
        title: "Gifts are welcome and there is never pressure to give",
        lines: [
          "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
        ],
      },
      tgl: {
        title: "Gifts are welcome and there is never pressure to give",
        lines: [
          "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
        ],
      },
      spa: {
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
