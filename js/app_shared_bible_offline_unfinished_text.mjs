import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_unfinished_text(name) {
  "What one language's row says when its download did not get there, in the language the reader of this app reads.";
  "It asks rather than blames. Nothing the reader did stopped it, and the one thing that would help - looking at the connection - is offered as a question so that saying no to it costs nothing.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before:
        "That download did not finish. Would you like to check your connection and try ",
      after: " again?",
    },
    ur: {
      before: "وہ ڈاؤن لوڈ مکمل نہیں ہوا۔ کیا آپ اپنا کنکشن دیکھ کر ",
      after: " دوبارہ آزمانا چاہیں گے؟",
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
