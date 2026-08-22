export function ebible_versions_english_web_family() {
  "The folders holding the World English Bible - the plain one, the British one, the Catholic one, the two Protestant ones and the one with the unpronounced name - which are one translation printed several ways rather than several translations.";
  "NAMED ONE BY ONE RATHER THAN CAUGHT BY THEIR FIRST SIX LETTERS. The prefix that used to stand in for this list also caught engwebster, Noah Webster's revision of the King James - a different translation from a different century that happens to share three letters with the World English Bible - and dropped it out of every list of English translations a person could choose from. Nothing said so, because a filter that removes too much removes it quietly.";
  "A World English Bible printed a seventh way would have to be added here by hand. That is the cost, and it is the right way round: adding a name is a line somebody can read and disagree with, where the prefix silently decided about translations nobody had thought of.";
  "The Messianic editions are deliberately absent. They carry the same wording under Hebrew names, and the wording is what a reader choosing between translations is choosing.";
  arguments_assert(arguments, 0);
  let folders = [
    "eng-web",
    "eng-webbe",
    "eng-web-c",
    "engwebp",
    "engwebpb",
    "engwebu",
  ];
  return folders;
}
