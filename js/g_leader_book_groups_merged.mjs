export function g_leader_book_groups_merged() {
  "The books too small to carry a leader arc on their own, each named with the neighbour it shares a group with, in canonical order.";
  "A LEADER GETS 216 TURNS whatever it is written against, so the only thing a group's size decides is how often the same passage comes back. Measured across the three fully grouped books - Romans 1.93 passages to a preaching day, James 2.17, 1 John 3.09 - an eighteen day plant spans 35 to 56 passages, so a leader over an ordinary plant answers with each passage four to six times. That band is the target, and only the top of it is a constraint: a group larger than the band just gives more variety than a plant would.";
  "JUDE IS THE CASE THIS EXISTS FOR. Nineteen passages against 216 turns is 11.4 uses each, more than twice what a plant asks. Second and Third John are smaller still at 11 and 13. The three together come to 43, which is 5.0 uses - inside the band, and they are already adjacent in the canon.";
  "PHILEMON goes to Titus rather than to Second Timothy because Titus is the smaller of the two neighbours by half, 35 passages against 67, and is adjacent. Together they are 54, or 4.0 uses.";
  "SECOND THESSALONIANS was the near miss and is deliberately left alone: 37 passages is 5.8 uses, the top of the band but inside it.";
  "HARD-CODED rather than derived from a threshold. The rule fires on five books out of sixty-six, and a threshold would generalise a decision that has no general case - it would also move on its own every time the passage division changed, silently regrouping books nobody had looked at. Naming them is the honest form.";
  "THE OLD TESTAMENT IS NOT COVERED HERE. Obadiah at 20 passages and Haggai at 28 are the only two below the band, and no merge is named for them because nothing is written there yet and the choice was not made.";
  let merged = [
    ["TIT", "PHM"],
    ["2JN", "3JN", "JUD"],
  ];
  return merged;
}
