import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_purpose_love() {
  "The part of what this app does with money that names what the work is for, rather than what the money is for.";
  let texts = {
    eng: {
      title: "Our purpose is love, not profit",
      lines: [
        "Our purpose is sharing the word of God.",
        "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
      ],
    },
    urd: {
      title: "ہمارا مقصد محبت ہے، نفع نہیں",
      lines: [
        "ہمارا مقصد خدا کا کلام بانٹنا ہے۔",
        "خدا کا کلام ہمیں مفت دیا گیا ہے۔ اِس لیے ہم آپ کو مفت دیتے ہیں (متی 10:8)۔",
      ],
    },
    tgl: {
      title: "Ang aming layunin ay pag-ibig, hindi tubo",
      lines: [
        "Ang aming layunin ay ibahagi ang salita ng Diyos.",
        "Ang salita ng Diyos ay ibinigay sa amin nang walang bayad. Kaya ibinibigay namin ito sa iyo nang walang bayad (Mateo 10:8).",
      ],
    },
    spa: {
      title: "Nuestro propósito es el amor, no la ganancia",
      lines: [
        "Nuestro propósito es compartir la palabra de Dios.",
        "La palabra de Dios se nos ha dado gratuitamente. Así que gratuitamente te la damos (Mateo 10:8).",
      ],
    },
    por: {
      title: "Nosso propósito é o amor, não o lucro",
      lines: [
        "Nosso propósito é compartilhar a palavra de Deus.",
        "A palavra de Deus nos foi dada de graça. Por isso, de graça a damos a você (Mateus 10:8).",
      ],
    },
    translated_from: {
      urd: {
        title: "Our purpose is love, not profit",
        lines: [
          "Our purpose is sharing the word of God.",
          "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
        ],
      },
      tgl: {
        title: "Our purpose is love, not profit",
        lines: [
          "Our purpose is sharing the word of God.",
          "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
        ],
      },
      spa: {
        title: "Our purpose is love, not profit",
        lines: [
          "Our purpose is sharing the word of God.",
          "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
        ],
      },
      por: {
        title: "Our purpose is love, not profit",
        lines: [
          "Our purpose is sharing the word of God.",
          "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  property_set(section, "verses", ["Matthew 10:8"]);
  return section;
}
