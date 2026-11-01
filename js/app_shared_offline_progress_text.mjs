import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
export function app_shared_offline_progress_text(name, done, total) {
  arguments_assert(arguments, 3);
  ("$plain name");
  ("$plain done");
  ("$plain total");
  ("the name is what is being saved, and the two counts say how many chapters of it have arrived out of how many. All are data to show and nothing that runs.");
  ("The line a download counts its chapters off on, so a long save never looks stuck.");
  ("IT IS WRITTEN ONCE BECAUSE TWO APPS SAVE CHAPTERS. The bible reader saves a language and the picture Bible saves itself, and a reader who meets both should see the same words counting.");
  ("IT IS SAID IN THE READER'S OWN LANGUAGE, each language given the whole line with the name and the counts already in it. Urdu says the count out of the total the other way round, the total first, so a line built from English's pieces would count backwards. The Urdu puts the name before 'ko', which leaves the verb the same whether the name it is given is a masculine or a feminine word; the rejected reading was 'mehfooz ho rahi hai', which is right for a language and wrong for anything else saved.");
  let english = text_combine_multiple([
    "Saving ",
    name,
    ": ",
    done,
    " of ",
    total,
    " chapters",
  ]);
  let urdu = text_combine_multiple([
    name,
    " کو محفوظ کیا جا رہا ہے: ",
    total,
    " میں سے ",
    done,
    " ابواب",
  ]);
  let texts = {
    en: english,
    ur: urdu,
    translated_from: {
      ur: english,
    },
  };
  let text = app_shared_text_reader_language(texts);
  return text;
}
