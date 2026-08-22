import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_verse_absent_text() {
  "What stands under a reference when not one of the bibles being read had any words at that reference.";
  "Say what happened, then both of the two things it can mean, then offer the way forward as a question. A reader who is handed a reference with a blank under it cannot tell a bible that stops short of this verse from a fetch that failed, and cannot tell either of those from a page that is broken; all three look the same, which is nothing at all.";
  "The way forward is another bible rather than a button, because every page that draws a verse lets the reader choose which bibles they read, and not every one of them has a way to open the chapter.";
  let texts = {
    en: "The bible you are reading gave no words here. That bible may not carry this verse, or the words may not have arrived. Would another bible have this verse?",
    ur: "جو بائبل آپ پڑھ رہے ہیں اُس نے یہاں کوئی الفاظ نہیں دیے۔ ہو سکتا ہے اُس بائبل میں یہ آیت نہ ہو، یا الفاظ ابھی پہنچے نہ ہوں۔ کیا کسی اور بائبل میں یہ آیت ہو گی؟",
    translated_from: {
      ur: "The bible you are reading gave no words here. That bible may not carry this verse, or the words may not have arrived. Would another bible have this verse?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
