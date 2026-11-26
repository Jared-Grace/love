import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_search_by_name_text() {
  "What the box above a long list of names invites the reader to do, in the language the reader of this app reads.";
  "No little picture in it. It stands inside a box a reader types into rather than on a button, and a picture there would be read as something already typed.";
  let texts = {
    eng: "Search by name",
    urd: "نام سے تلاش کریں",
    tgl: "Maghanap ayon sa pangalan",
    spa: "Buscar por nombre",
    por: "Pesquisar por nome",
    ind: "Cari menurut nama",
    fra: "Rechercher par nom",
    translated_from: {
      urd: "Search by name",
      tgl: "Search by name",
      spa: "Search by name",
      por: "Search by name",
      ind: "Search by name",
      fra: "Search by name",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
