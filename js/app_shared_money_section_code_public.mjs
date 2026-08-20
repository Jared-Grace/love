import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_money_section_code_public() {
  "The part of what this app does with money that answers whether somebody else may take this and build it too.";
  "It belongs among the money answers rather than off on its own, because the one thing that would make the code worth keeping back is a wish to be paid for it.";
  let texts = {
    en: {
      title: "The code is public",
      lines: [
        "Anyone may take it and use it, including to build the same thing somewhere else. That is on purpose.",
        "Paul told the church not to drag one another before secular judges (1 Corinthians 6:1-8). We are not going to use a government's copyright to sue a brother for sharing the bible. If there is something to settle, it is settled before the church.",
      ],
    },
    ur: {
      title: "کوڈ سب کے لیے کھلا ہے",
      lines: [
        "کوئی بھی اِسے لے کر استعمال کر سکتا ہے، یہاں تک کہ کہیں اور یہی چیز بنانے کے لیے بھی۔ یہ جان بوجھ کر ایسا ہے۔",
        "پولوس نے کلیسیا سے کہا کہ ایک دوسرے کو دنیاوی عدالتوں میں نہ گھسیٹیں (1 کرنتھیوں 6:1-8)۔ ہم کسی حکومت کے حقِ اشاعت کو لے کر کسی بھائی پر اِس لیے دعویٰ نہیں کریں گے کہ اُس نے بائبل بانٹی۔ اگر کچھ طے کرنا ہو تو وہ کلیسیا کے سامنے طے ہوتا ہے۔",
      ],
    },
    translated_from: {
      ur: {
        title: "The code is public",
        lines: [
          "Anyone may take it and use it, including to build the same thing somewhere else. That is on purpose.",
          "Paul told the church not to drag one another before secular judges (1 Corinthians 6:1-8). We are not going to use a government's copyright to sue a brother for sharing the bible. If there is something to settle, it is settled before the church.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  return section;
}
