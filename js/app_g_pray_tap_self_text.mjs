import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_g_pray_tap_self_text() {
  "How a player who has not prayed yet is told where to press to pray, in the language the reader of the game reads.";
  "IT NAMES THE GLOW BECAUSE THE PLAYER IS NOT THE OBVIOUS THING TO PRESS. Everything else worth pressing on the map is somebody else, so a player told to press on themselves looks for a button and finds none; the white is what they are actually looking for.";
  "THE LEADING SPACE IS GONE. It sat there to hold the line off a picture that is on the line above it, and a browser drops it before anybody sees it - while a reader of a language written from the right would have had it hung on the wrong end.";
  let texts = {
    eng: "To pray, tap or click on yourself (You glow with white)",
    urd: "دعا کرنے کے لیے اپنے آپ پر ٹیپ یا کلک کریں (آپ سفید روشنی سے چمکتے ہیں)",
    tgl: "Para manalangin, i-tap o i-click ang iyong sarili (Ikaw ang may puting liwanag)",
    spa: "Para orar, toca o haz clic en ti mismo (brillas de blanco)",
    por: "Para orar, toque ou clique em você mesmo (você brilha em branco)",
    ind: "Untuk berdoa, ketuk atau klik dirimu sendiri (kamu bercahaya putih)",
    fra: "Pour prier, touchez ou cliquez sur vous-même (vous brillez en blanc)",
    translated_from: {
      urd: "To pray, tap or click on yourself (You glow with white)",
      tgl: "To pray, tap or click on yourself (You glow with white)",
      spa: "To pray, tap or click on yourself (You glow with white)",
      por: "To pray, tap or click on yourself (You glow with white)",
      ind: "To pray, tap or click on yourself (You glow with white)",
      fra: "To pray, tap or click on yourself (You glow with white)",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
