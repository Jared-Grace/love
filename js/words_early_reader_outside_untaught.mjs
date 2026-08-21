import { words_early_reader_outside } from "./words_early_reader_outside.mjs";
import { words_game_taught } from "./words_game_taught.mjs";
import { word_early_reader_known_is } from "./word_early_reader_known_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function words_early_reader_outside_untaught(text) {
  "$plain text";
  "Every word in some written text that a child of the settled reading age would not have and the game does not mean to teach either, each one named once, in the order the text first says it.";
  "IT IS THE ONE OF THE TWO A WRITER IS ANSWERABLE FOR. Its plainer neighbour names every word outside a child's vocabulary, which is the right question when the asker is a gloss - a player may tap anything, so anything hard needs an answer waiting. It is the wrong question when the asker is a check, because most of what comes back is the game's own subject and faulting that asks a writer to stop saying what the game is for.";
  "SO THE SAME TEXT ANSWERS DIFFERENTLY DEPENDING ON WHO ASKS, and that is not a contradiction between the two. Gloss every hard word; fault only the hard words nobody chose. One list is read by both, and the taught list is what the second subtracts.";
  "IT SUBTRACTS BY THE SAME READER THAT ADDED, so an ending cannot let a taught word through. Sinned is faulted by a plain membership test and forgiven by the one that takes ED off, and a check that used the first would fault the shapes a word actually turns up in while excusing the shape nobody says.";
  let outside = await words_early_reader_outside(text);
  let taught_words = await words_game_taught();
  let untaught = [];
  for (let word of outside) {
    let taught = word_early_reader_known_is(word, taught_words);
    let reached_for = not(taught);
    if (reached_for) {
      list_add(untaught, word);
    }
  }
  return untaught;
}
