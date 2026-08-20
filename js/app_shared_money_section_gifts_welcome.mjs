export function app_shared_money_section_gifts_welcome() {
  "The part of what this app does with money that answers when a reader is asked for anything, and how hard.";
  "When the asking happens is said as plainly as whether it happens, because a reader deciding whether to start is really asking what this will be like later on.";
  let texts = {
    en: {
      title: "Gifts are welcome and there is never pressure to give",
      lines: [
        "You are asked after the tutorial, once you have had the chance to try this and have chosen to keep using it. You are asked again at the end of a game long enough to have been worth your time.",
        "Reminders after that are infrequent, and they are never nagging.",
        "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
      ],
    },
    ur: {
      title: "تحفے خوش آمدید ہیں اور دینے کا کبھی دباؤ نہیں",
      lines: [
        "آپ سے سبق کے بعد پوچھا جاتا ہے، جب آپ اسے آزما چکے ہوں اور اسے استعمال کرتے رہنے کا فیصلہ کر چکے ہوں۔ اِس کے بعد آپ سے اُس کھیل کے اختتام پر پوچھا جاتا ہے جو آپ کے وقت کے لائق ہونے کے لیے کافی لمبا رہا ہو۔",
        "اُس کے بعد یاد دہانیاں کم کم آتی ہیں، اور وہ کبھی تنگ نہیں کرتیں۔",
        "جیسا آپ نے اپنے دل میں ٹھہرایا ہو ویسا دیجیے، نہ ناخوشی سے اور نہ اِس لیے کہ آپ پر زور ڈالا گیا (2 کرنتھیوں 9:7)۔",
      ],
    },
    translated_from: {
      ur: {
        title: "Gifts are welcome and there is never pressure to give",
        lines: [
          "You are asked after the tutorial, once you have had the chance to try this and have chosen to keep using it. You are asked again at the end of a game long enough to have been worth your time.",
          "Reminders after that are infrequent, and they are never nagging.",
          "Give as you have decided in your own heart, not reluctantly and not because you were pressed (2 Corinthians 9:7).",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
