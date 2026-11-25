import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_filled } from "./app_shared_text_reader_language_filled.mjs";
export function app_shared_bible_word_ask_llm_text_get(llm_name) {
  arguments_assert(arguments, 1);
  ("$plain llm_name");
  ("the name is an AI's own name, such as Claude, and is only shown.");
  ("What the button that asks one AI about a Bible word says, in the language the reader of this app reads.");
  ("The AI's name is the gap, because English asks the name and Urdu puts the name before the asking.");
  let texts = {
    eng: "🤖 Ask {name}",
    urd: "🤖 {name} سے پوچھیں",
    tgl: "🤖 Magtanong kay {name}",
    spa: "🤖 Preguntar a {name}",
    por: "🤖 Perguntar ao {name}",
    ind: "🤖 Tanya {name}",
    translated_from: {
      urd: "🤖 Ask {name}",
      tgl: "🤖 Ask {name}",
      spa: "🤖 Ask {name}",
      por: "🤖 Ask {name}",
      ind: "🤖 Ask {name}",
    },
  };
  let v = app_shared_text_reader_language_filled(texts, {
    name: llm_name,
  });
  return v;
}
