export function bible_sentence_gaps_sample_count() {
  "How many verses to read from the start of each sampled chapter when measuring how far sentences run past a cut.";
  "Forty is enough to hold the longest sentence anybody has claimed the bible contains several times over, which is what the number has to be: a sample shorter than the thing being measured cannot tell a sentence that runs on from one that ran off the end of what was read. A chapter with fewer verses than this simply ends early, and the reading says so.";
  let c = 40;
  return c;
}
