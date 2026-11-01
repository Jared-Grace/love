import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_offline_progress_text(name, done, total) {
  arguments_assert(arguments, 3);
  ("$plain name");
  ("$plain done");
  ("$plain total");
  ("the name is what is being saved, and the two counts say how many chapters of it have arrived out of how many. All are data to show and nothing that runs.");
  ("The line a download counts its chapters off on, so a long save never looks stuck.");
  ("IT IS WRITTEN ONCE BECAUSE TWO APPS SAVE CHAPTERS. The bible reader saves a language and the picture Bible saves itself, and a reader who meets both should see the same words counting.");
  let text = text_combine_multiple([
    "Saving ",
    name,
    ": ",
    done,
    " of ",
    total,
    " chapters",
  ]);
  return text;
}
