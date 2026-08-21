import { data_given_accepted_folder } from "./data_given_accepted_folder.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function words_game_taught_glosses() {
  "What each word the game means to teach is to be told to a player who taps it - a short gloss to read at a glance, and a longer explain underneath it - kept as accepted data rather than written into any code.";
  "IT IS THE ANSWER THE OTHER TWO LISTS LEAVE OWING. One accepted list says which words a child already has and the other says which ones the game means to teach; together they say a tapped word is fair rather than careless, and neither says a single thing about what the player is then told. A word marked as taught with nothing behind it is a word the game has decided not to rewrite and also not to explain.";
  "IT IS KEYED BY THE SAME BASE FORM THE TAUGHT LIST SPELLS, so the reader that takes endings off reaches the entry from SINNED and from FORGIVEN without either being written here. Keying it by the shapes a word turns up in would grow the file without adding an answer.";
  "AN EXPLANATION IS ANSWERABLE TO THE SAME CHECK IT SERVES, and that is what makes this data rather than prose. An explanation reaching past a child's vocabulary has explained nothing - it has moved the difficulty one line down and left the player tapping a word inside the answer to the word they tapped. Its gate reads every gloss through the same two lists a written line is read through.";
  "SO A GLOSS MAY SAY A TAUGHT WORD and that is not a hole. Sin's explanation says GOD, and the alternative is a sentence that will not say what sin is against. The gate allows the union of the two lists rather than the child's alone, because a taught word inside an explanation is itself tappable and has its own entry waiting.";
  "THE WORDING IS THE HUMAN'S. A machine settles that every word is reachable and that no taught word is left without an answer; whether SIN is well said to a child is not a thing any check here can reach, and this file exists so that the part a person must read is a page of glosses rather than every arc that ever says one.";
  let folder = data_given_accepted_folder();
  let f_name = fn_name("words_game_taught_glosses");
  let combined = text_combine_multiple([f_name, ".json"]);
  let path = path_join([folder, combined]);
  let glosses = await file_read_json(path);
  return glosses;
}
