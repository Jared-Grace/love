import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_hash_fields_unknown_several_text() {
  "What the line at the top of a broken link's screen says when more than one kind of thing in the link is wrong, in the language the reader of this app reads.";
  "It names no kind, because two kinds wrong at once have no honest short name between them. The rows underneath name one each anyway, so nothing is lost by the heading staying general.";
  let texts = {
    en: "This link asks for things we do not have",
    ur: "یہ لنک ایسی چیزیں مانگتا ہے جو ہمارے پاس نہیں ہیں",
    translated_from: {
      ur: "This link asks for things we do not have",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
