export function list_starts_with_cases() {
  "Pairs of a list and a would-be beginning of it, beside whether the first really does begin with the whole of the second, one case for each way the answer can be got wrong.";
  "What rests on this reading is a quiz where a line is put back together a piece at a time: what a learner has laid down so far is asked against every right ordering still standing, and each one that still begins that way stays as a piece they may press next. Answer yes where the answer is no and every piece stays pressable after the line is already finished, so the next press falls off the end of a line that has no more of it - which is what happened, and it took the whole screen down rather than marking an answer wrong.";
  "The over-long case is the one that was silently wrong, and it is silent because every comparison such a walk does make comes out true - the disagreement is in the pieces that were never reached at all.";
  let cases = [
    {
      list: ["3", "+", "6"],
      list_prefix: ["3", "+"],
      starts: true,
      why: "the ordinary yes: a beginning shorter than the whole, matching piece for piece as far as it goes",
    },
    {
      list: ["3", "+", "6"],
      list_prefix: ["3", "+", "6", "6"],
      starts: false,
      why: "the case that was wrong. A beginning LONGER than the list is not a beginning of it, however well its first pieces match - and here they match perfectly, so a walk that stops at the shorter of the two sees nothing but agreement and says yes",
    },
    {
      list: ["3", "+", "6"],
      list_prefix: ["3", "+", "6"],
      starts: true,
      why: "the whole of a list begins with the whole of itself, which is what says a line is finished rather than that it has gone wrong",
    },
    {
      list: ["3", "+", "6"],
      list_prefix: ["3", "*"],
      starts: false,
      why: "the ordinary no: same length as far as it goes and a piece that disagrees",
    },
    {
      list: ["3", "+", "6"],
      list_prefix: [],
      starts: true,
      why: "every list begins with nothing, which is what lets a learner who has laid down no pieces yet be offered all of them",
    },
    {
      list: [],
      list_prefix: ["3"],
      starts: false,
      why: "nothing begins with something, and this is the over-long case at its smallest, where there is not one comparison to be made",
    },
  ];
  return cases;
}
