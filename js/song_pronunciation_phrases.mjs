export function song_pronunciation_phrases() {
  "Runs of words a song generator says wrongly, each beside a spelling it says rightly, keyed by the run in lower case with one space between words.";
  "For a word said two ways, where swapping it everywhere would break the other sound - the bow of an archer and bow down - so only the words around it can tell which one is meant.";
  "Write a key in plain letters and single spaces only, since each word of it is matched as it stands.";
  let phrases = {
    "flee the bow": "flee the boe",
    "draw the bow": "draw the boe",
  };
  return phrases;
}
