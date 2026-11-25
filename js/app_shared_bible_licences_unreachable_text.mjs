import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_bible_licences_unreachable_text() {
  "What the credits screen says when it could not get to them, in the language the reader of this app reads.";
  "It promises they will be here rather than asking the reader to do anything, because nothing they can do from this screen would help and the connection coming back is the whole of what is needed.";
  let texts = {
    eng: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
    urd: "دینے والوں کی فہرست ابھی نہیں لائی جا سکی۔ اس کے لیے انٹرنیٹ چاہیے، اور جب انٹرنیٹ واپس آئے گا تو یہ یہاں ہوگی",
    tgl: "Hindi makuha ang mga pagkilala sa ngayon. Kailangan nila ang internet, at narito sila kapag bumalik na ito",
    spa: "No se pudieron obtener los créditos ahora. Necesitan internet, y estarán aquí cuando vuelva",
    por: "Não foi possível buscar os créditos agora. Eles precisam de internet, e estarão aqui quando ela voltar",
    ind: "Daftar pemberi tidak dapat diambil sekarang. Daftar ini membutuhkan internet, dan akan muncul di sini saat internet kembali",
    translated_from: {
      urd: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
      tgl: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
      spa: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
      por: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
      ind: "The credits could not be fetched just now. They need the internet, and they will be here when it is back",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
