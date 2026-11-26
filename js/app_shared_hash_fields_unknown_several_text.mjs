import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_hash_fields_unknown_several_text() {
  "What the line at the top of a broken link's screen says when more than one kind of thing in the link is wrong, in the language the reader of this app reads.";
  "It names no kind, because two kinds wrong at once have no honest short name between them. The rows underneath name one each anyway, so nothing is lost by the heading staying general.";
  let texts = {
    eng: "This link asks for things we do not have",
    urd: "یہ لنک ایسی چیزیں مانگتا ہے جو ہمارے پاس نہیں ہیں",
    tgl: "Humihingi ang link na ito ng mga bagay na wala sa amin",
    spa: "Este enlace pide cosas que no tenemos",
    por: "Este link pede coisas que não temos",
    ind: "Tautan ini meminta hal-hal yang tidak kami miliki",
    fra: "Ce lien demande des choses que nous n'avons pas",
    translated_from: {
      urd: "This link asks for things we do not have",
      tgl: "This link asks for things we do not have",
      spa: "This link asks for things we do not have",
      por: "This link asks for things we do not have",
      ind: "This link asks for things we do not have",
      fra: "This link asks for things we do not have",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
