export function app_shared_money_section_large_download() {
  "The part of what this app does with money that answers the one case where a reader could cost anything worth mentioning.";
  "It stands last because it is about a program rather than a person, and almost nobody reading will ever be the one it describes.";
  let texts = {
    en: {
      title: "If a program downloads a great deal",
      lines: [
        "An automated download large enough to run up a real bill is the one case where cost becomes a question at all.",
        "Even then the answer is not to charge you. It is to hand you a way to fetch it on your own account, so the cost sits with whoever chose to make it.",
      ],
    },
    ur: {
      title: "اگر کوئی پروگرام بہت کچھ اُتارے",
      lines: [
        "خودکار طور پر اِتنا کچھ اُتارنا کہ سچ مچ کا بل بن جائے، یہی اکلوتا موقع ہے جہاں خرچ کوئی سوال بنتا ہے۔",
        "تب بھی جواب یہ نہیں کہ آپ سے پیسے لیے جائیں۔ جواب یہ ہے کہ آپ کو اپنے کھاتے پر اُتارنے کا راستہ دیا جائے، تاکہ خرچ اُسی پر پڑے جس نے یہ کرنے کا فیصلہ کیا۔",
      ],
    },
    translated_from: {
      ur: {
        title: "If a program downloads a great deal",
        lines: [
          "An automated download large enough to run up a real bill is the one case where cost becomes a question at all.",
          "Even then the answer is not to charge you. It is to hand you a way to fetch it on your own account, so the cost sits with whoever chose to make it.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
