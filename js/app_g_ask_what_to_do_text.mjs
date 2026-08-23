import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_g_ask_what_to_do_text() {
  "What stands over the buttons when the person in front of the player has finished speaking and it is the player's move, in the language the reader of the game reads.";
  "ONE SAYING COVERS BOTH PLACES IT WAS ASKED. It was typed out twice, a word apart - one screen asked what you would like to do and the other what you want to do - and neither difference was meant by anybody; a reader of another language would have had the two translated by two people and read them as two different questions.";
  "IT ASKS RATHER THAN TELLS, because every button under it is the player's own to press. The game never takes the turn for them, so the line above the turn should not read as an instruction either.";
  let texts = {
    en: "What would you like to do?",
    ur: "آپ کیا کرنا چاہیں گے؟",
    translated_from: {
      ur: "What would you like to do?",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
