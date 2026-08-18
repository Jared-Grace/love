export function bless_rungs() {
  "The prayer ladder, lowest first - every prayer the player can reach, and what each one";
  "costs. A rung is named by what it covers, not by a level number, because the player";
  "reads it aloud rather than reading a score.";
  "Two kinds of rung, and each carries exactly one of the two: a COUNT rung is earned by";
  "having that many people in sight, and a PLACE rung is earned by having that whole place";
  "in sight. The count rungs double, because each one is the summary of praying the rung";
  "below it twice - the ladder is the player's own past prayers folded up, never a reward";
  "tier handed out for playing.";
  "The place rungs are where sight and scale collide on purpose: nobody can see a whole";
  "continent, so the top of this ladder is the top of what a game can honestly show, and";
  "the prayer that crosses that line is the transfer prayer said once a session rather";
  "than a rung here.";
  "The block rung is the one that is NOT earned by summarising: it needs four streets";
  "prayed in a row that close a square, which is the player walking the block rather than";
  "standing still and counting.";
  let rungs = [
    { name: "one", count: 1, place: null, earned: "start" },
    { name: "two", count: 2, place: null, earned: "summary" },
    { name: "four", count: 4, place: null, earned: "summary" },
    { name: "eight", count: 8, place: null, earned: "summary" },
    { name: "sixteen", count: 16, place: null, earned: "summary" },
    { name: "thirty two", count: 32, place: null, earned: "summary" },
    { name: "sixty four", count: 64, place: null, earned: "summary" },
    { name: "street", count: null, place: "street", earned: "summary" },
    { name: "block", count: null, place: "block", earned: "square" },
    { name: "city", count: null, place: "city", earned: "summary" },
    { name: "continent", count: null, place: "continent", earned: "summary" },
  ];
  return rungs;
}
