import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_verses_order_prompt_text() {
  "What the card for putting chosen verses in an order asks above them, in the language the reader of this app reads.";
  "The card only appears once two or more verses are chosen, so the question arrives at the moment there is something to answer it with, and it has to say which of the two things on the screen it is asking about.";
  arguments_assert(arguments, 0);
  let texts = {
    eng: "What order do you want the verses in?",
    urd: "آپ آیات کو کس ترتیب میں چاہتے ہیں؟",
    tgl: "Sa anong pagkakasunod-sunod mo gusto ang mga talata?",
    spa: "¿En qué orden quieres los versículos?",
    por: "Em que ordem você quer os versículos?",
    ind: "Dalam urutan apa kamu ingin ayat-ayatnya?",
    fra: "Dans quel ordre voulez-vous les versets ?",
    translated_from: {
      urd: "What order do you want the verses in?",
      tgl: "What order do you want the verses in?",
      spa: "What order do you want the verses in?",
      por: "What order do you want the verses in?",
      ind: "What order do you want the verses in?",
      fra: "What order do you want the verses in?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
