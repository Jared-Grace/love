import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_words_content_echo } from "./text_words_content_echo.mjs";
import { numbers_larger } from "./numbers_larger.mjs";
import { text_words_content_echo_stemmed } from "./text_words_content_echo_stemmed.mjs";
export function song_wording_echo(wording, lines) {
  arguments_assert(arguments, 2);
  ("$plain wording");
  ("$plain lines");
  ("One wording of a passage against the sung lines that rest on it, scored twice - once with the endings of words left on and once with them folded off - and kept at whichever line heard it loudest.");
  ("THE LOUDEST LINE IS THE SCORE AND THE QUIETER ONES ARE NOT AVERAGED IN. Several lines can rest on one passage, and a wording that says one of those lines almost word for word has proved itself on that line; averaging it against the lines it says nothing of would bury exactly the agreement being looked for.");
  ("BOTH READINGS ARE KEPT SIDE BY SIDE AND NEITHER IS COLLAPSED INTO THE OTHER. Leaving the endings on asks whether the line and the verse reach for the same word; folding them off asks whether they say the same thing. The two disagree often enough that one number would hide which reading did the hearing.");
  ("THE NAMES AND THE FOLDERS ARE CARRIED THROUGH UNTOUCHED. Whoever reads a score back has to know which translation was heard, and the counting has nothing to say about that - it sees words and not editions.");
  let text = property_get(wording, "text");
  let run = 0;
  let shared = 0;
  let folded_run = 0;
  let folded_shared = 0;
  for (let line of lines) {
    let plain = text_words_content_echo(line, text);
    let plain_run = property_get(plain, "run");
    let plain_shared = property_get(plain, "shared");
    run = numbers_larger(run, plain_run);
    shared = numbers_larger(shared, plain_shared);
    let folded = text_words_content_echo_stemmed(line, text);
    let folded_run_one = property_get(folded, "run");
    let folded_shared_one = property_get(folded, "shared");
    folded_run = numbers_larger(folded_run, folded_run_one);
    folded_shared = numbers_larger(folded_shared, folded_shared_one);
  }
  let names = property_get(wording, "names");
  let bible_folders = property_get(wording, "bible_folders");
  let wording_scored = {
    folded_run,
    folded_shared,
    run,
    shared,
    names,
    bible_folders,
    text,
  };
  return wording_scored;
}
