export function app_shared_money_section_free() {
  "The part of what this app does with money that answers whether anything here has to be paid for.";
  "It stands first because it is the only part a reader who gives nothing needs, and they are most of the people this was built for.";
  let texts = {
    en: {
      title: "Everything is free, and everything always will be",
      lines: [
        "Nothing requires payment.",
        "You will never be forced to pay to use anything.",
        "If you have no money to give, you still have access to everything.",
        "We expect that most people will give nothing, and this was built for them first.",
      ],
    },
    ur: {
      title: "سب کچھ مفت ہے، اور ہمیشہ مفت ہی رہے گا",
      lines: [
        "کسی چیز کے لیے ادائیگی ضروری نہیں۔",
        "آپ کو کچھ بھی استعمال کرنے کے لیے کبھی ادائیگی پر مجبور نہیں کیا جائے گا۔",
        "اگر آپ کے پاس دینے کے لیے پیسے نہیں ہیں، تب بھی ہر چیز آپ کے لیے کھلی ہے۔",
        "ہمیں توقع ہے کہ زیادہ تر لوگ کچھ نہیں دیں گے، اور یہ سب سے پہلے اُنہی کے لیے بنایا گیا ہے۔",
      ],
    },
    translated_from: {
      ur: {
        title: "Everything is free, and everything always will be",
        lines: [
          "Nothing requires payment.",
          "You will never be forced to pay to use anything.",
          "If you have no money to give, you still have access to everything.",
          "We expect that most people will give nothing, and this was built for them first.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
