export function giveaway_bible_text_renderings() {
  "The shapes a passage's words are given away in, each with the mark that names it in a file name and the ending that file carries.";
  "★ THREE RENDERINGS OF ONE THING, WHICH IS WHY THEY ARE LISTED HERE AND NOT TREATED AS THREE KINDS. A box holds the words of its psalm; words alone, words with their verse numbers, and the same thing again as JSON are three ways of handing those words over, and which way a file is is exactly what a mark is for. The kind beside the mark says text for all three.";
  "★ THE SECOND MARK IS `numbered` AND NOT `verses`, BECAUSE BOTH TEXT FILES HOLD VERSES AND ONLY ONE OF THEM HOLDS NUMBERS. `verses` was the first word tried and it names the thing the two files have in common rather than the thing that tells them apart - a reader comparing `_words.txt` with `_verses.txt` has to guess which difference is meant. `numbered` says the difference out loud, and a mark is read by somebody deciding which of two files to download.";
  "★ THE NUMBERED SHAPE APPEARS TWICE, UNDER ONE MARK AND TWO ENDINGS, AND THAT IS THE POINT RATHER THAN A CLASH. The plain-text one and the JSON one say the same thing to two different readers - eyes and a program - so giving them the same mark says they are the same content and lets the ending say the rest. The host's free zip can be asked for by format, so somebody who wants only the JSON of every psalm can already have it.";
  "The order is the order a reader meets them in on a sorted download page, and it is also the order of increasing machinery: nothing but the words, then the words with their numbers, then the same for a program.";
  let renderings = [
    {
      mark: "words",
      ending: ".txt",
    },
    {
      mark: "numbered",
      ending: ".txt",
    },
    {
      mark: "numbered",
      ending: ".json",
    },
  ];
  return renderings;
}
