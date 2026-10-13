import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function giveaway_bible_verses_numbered_text(verses) {
  arguments_assert(arguments, 1);
  ("$plain verses");
  ("One psalm as plain lines, each line a verse number and that verse's words - the file somebody looks a verse up in, quotes from, or searches.");
  ("★ THE NUMBER IS WHAT MAKES THE BOX JOINABLE TO ITS OWN SINGING. A box holds a psalm sung in parts - Psalm 147 is sung as verses one to eleven and again as twelve to twenty - and the recordings say so in their names. Without numbers in the text there is no way to read which words a part sings short of counting lines, so the numbered file is the one that turns a box from a pile of audio into something a person can follow.");
  ("★ THE NUMBER IS BARE AT THE START OF THE LINE RATHER THAN BRACKETED, BECAUSE ONE VERSE TO A LINE ALREADY GIVES IT A BOUNDARY. Brackets are earned where verses run together in a paragraph and the only thing parting the citation from the Scripture is a space - there they are the boundary. Here the line break is, so a bracket would be a second boundary doing the same job, and the bare number is how plain-text Scripture is written nearly everywhere, which means it is a shape already recognised rather than one being taught.");
  ("★ THE CHAPTER IS NOT ON THE LINE, BECAUSE THE FILE IS ONE CHAPTER AND ITS NAME SAYS WHICH. Repeating the psalm on every line would be the one place a box says the same thing twice, and the thing being repeated is already frozen in the file name, which cannot be changed once it is uploaded. A file torn out of its box and renamed loses the chapter either way - the name is what a box is, and a name is not something a reader has to reconstruct from the body.");
  ("The verse number is taken as it is written rather than counted, so a translation that opens on verse two, or runs two verses together, says so instead of being silently renumbered.");
  let lines = [];
  for (let verse of verses) {
    let line = list_join_space([verse.verse_number, verse.text]);
    list_add(lines, line);
  }
  let numbered = list_join_newline(lines);
  return numbered;
}
