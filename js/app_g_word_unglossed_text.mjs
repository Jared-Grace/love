export function app_g_word_unglossed_text() {
  "What stands under a tapped word that nothing has been written about yet, in the language the reader of the game reads.";
  "IT SAYS THE TAP WORKED, WHICH IS THE WHOLE OF WHAT IT IS FOR. Nothing in the sentence is marked as worth tapping, so a reader finds out that tapping does anything by trying it - and a reader who tries three words and gets three blank lines has learned that tapping does nothing and stops. What is lost then is not the three answers; it is every later tap, which is how anybody ever learns which words were guessed wrong about.";
  "SO IT IS THE LAST LINE THAT SHOULD STAY IN ENGLISH RATHER THAN THE FIRST. A reader whose language this is not gets it exactly when they are already stuck on a word, and reads a second thing they do not understand where an answer was promised.";
  "YET means yet. It is not written now and might be later, and that is true - the words worth writing about are found by watching which ones get tapped, so a reader tapping this one is the reason it will be written.";
  let texts = {
    en: "There is nothing written for this word yet.",
    ur: "اس لفظ کے بارے میں ابھی تک کچھ نہیں لکھا گیا۔",
    translated_from: {
      ur: "There is nothing written for this word yet.",
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
