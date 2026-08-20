export function app_shared_money_section_purpose_love() {
  "The part of what this app does with money that names what the work is for, rather than what the money is for.";
  let texts = {
    en: {
      title: "Our purpose is love, not profit",
      lines: [
        "Our purpose is sharing the word of God.",
        "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
      ],
    },
    ur: {
      title: "ہمارا مقصد محبت ہے، نفع نہیں",
      lines: [
        "ہمارا مقصد خدا کا کلام بانٹنا ہے۔",
        "خدا کا کلام ہمیں مفت دیا گیا ہے۔ اِس لیے ہم آپ کو مفت دیتے ہیں (متی 10:8)۔",
      ],
    },
    translated_from: {
      ur: {
        title: "Our purpose is love, not profit",
        lines: [
          "Our purpose is sharing the word of God.",
          "The word of God has been freely given to us. So we freely give to you (Matthew 10:8).",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
