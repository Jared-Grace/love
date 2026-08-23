import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_g_prayer_waiting_text() {
  "What the card says while the player has prayed and the answer has not come yet, in the language the reader of the game reads.";
  "IT NAMES WHO IS BEING WAITED FOR, AND THAT IS NOT DECORATION. A screen that only said waiting would say the game is busy. What is being taught by the wait itself is that the answer is God's to give and not the player's to take, so the sentence has to have Him in it.";
  "THE THREE DOTS CARRY OVER UNCHANGED because they are not writing. They say the same thing to a reader of any language - this has not finished - and a language that would spell that differently spells the words differently too, which is what the words are for.";
  let texts = {
    en: "Waiting on the Lord...",
    ur: "خداوند کا انتظار...",
    translated_from: {
      ur: "Waiting on the Lord...",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
