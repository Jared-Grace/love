export function word_root_endings() {
  "Every plain English ending this repo cuts off a word, each one paired with how much of the word it takes, what it puts back, and the least that may be left standing.";
  "Written longest ending first, because that is what makes ONE of them the answer: witnesses ends in sses and in ss and in s, and only the longest of those three is the ending it actually has. A reader picks the first that matches and stops, so the order here is the rule, not a tidy way of listing them.";
  "Keep is the number that makes an ending safe, and it is different for every ending because the words are. Ness may be cut where four letters remain, so boldness reaches bold and witness keeps its ness rather than reaching wit. Ship needs four for the same reason: hardship reaches hard while worship stays whole. Less needs only three, because aimless and endless are the words it exists for.";
  "An ending is spelled as the word still reads at the moment it is asked, which is why able and ance are written whole. The trailing e is dropped from what is LEFT, after the cut, so at the moment of asking the word is still acceptable rather than acceptabl - and an ending written the short way matched nothing at all.";
  "An ending that fails its keep is not the end of the matter - the word simply falls through to a shorter ending. Lies is not cut by ies, which would leave one letter, so it reaches lie by the plain s; unless is not cut by less, so it is held whole by the doubled ss below.";
  "Two of them cut nothing. An English word ending doubled s, or ending us, keeps every letter it has - they are here so that the plain s below never reaches cross or Jesus, which is a thing an ending list can only say by naming the words the ending does not belong to.";
  "The endings this list refuses are as much a decision as the ones it holds. Er and or are the commonest misses in the whole New Testament and are still not here, because father, water, other and over all lose their tails to them and no length alone tells those from believer and builder. Est goes the same way on earnest and forest, and ous on callous and jealous. Where an ending is right far more often than it is wrong, the one or two words it would ruin are frozen in the irregular list instead, which is read first: that is what holds passion apart from pass, and authority apart from author.";
  "This is data rather than a run of branches on purpose. A chain of else-if was fed to the canonicalizing pass and came back four branches shorter, silently, with every gate still green; a list cannot be folded, because there is nothing in it to fold.";
  let endings = [
    { end: "sses", drop: 2, add: "", keep: 3 },
    { end: "ches", drop: 2, add: "", keep: 3 },
    { end: "shes", drop: 2, add: "", keep: 3 },
    { end: "ness", drop: 4, add: "", keep: 4 },
    { end: "ment", drop: 4, add: "", keep: 4 },
    { end: "ship", drop: 4, add: "", keep: 4 },
    { end: "less", drop: 4, add: "", keep: 3 },
    { end: "able", drop: 4, add: "", keep: 4 },
    { end: "ance", drop: 4, add: "", keep: 4 },
    { end: "xes", drop: 2, add: "", keep: 3 },
    { end: "ies", drop: 3, add: "y", keep: 3 },
    { end: "ing", drop: 3, add: "", keep: 3 },
    { end: "ful", drop: 3, add: "", keep: 3 },
    { end: "ion", drop: 3, add: "", keep: 3 },
    { end: "ity", drop: 3, add: "", keep: 4 },
    { end: "al", drop: 2, add: "", keep: 4 },
    { end: "ss", drop: 0, add: "", keep: 1 },
    { end: "us", drop: 0, add: "", keep: 1 },
    { end: "ed", drop: 2, add: "", keep: 3 },
    { end: "ly", drop: 2, add: "", keep: 3 },
    { end: "s", drop: 1, add: "", keep: 3 },
  ];
  return endings;
}
