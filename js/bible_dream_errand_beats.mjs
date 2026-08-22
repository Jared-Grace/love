export function bible_dream_errand_beats() {
  "The whole of one errand as a run of named beats: what happens, in order, when an angel is sent to deliver one dream - and at each beat, what the player does, what Scripture has already settled, and what is left for a designer to invent.";
  "★ THE OUTLINE IS THE THING THAT CAN BE HANDED TO SOMEBODY ELSE, AND THE DETAILS ARE NOT. An artist who also knows how people use things can design a whole way of tracing, far better than a tuned corridor width; a developer can build it; the two can work at once - but only if they are told what the beat IS and what it may not change. Without that they design against a moving target, and every question comes back to one person. Naming the beats first is what makes the work divisible.";
  "★ EACH BEAT SAYS WHAT IS SETTLED AND WHAT IS OPEN, AND THAT PAIR IS THE WHOLE OF THE DELEGATION. Settled means Scripture decided it and no designer may move it: seven cows are seven. Open means nobody has decided it yet and whoever takes the beat should. A brief with only the open half invents things that contradict the passage; a brief with only the settled half is a rule sheet nobody can build from.";
  "★ THE BEATS WHERE THE PLAYER ACTS ARE THE ONES THAT DIVIDE, AND THE REST ARE ONE SHELL. Four beats ask something of a player and each is a different problem - drawing a shape is not counting a number and neither is carrying a sentence intact. Those four can go four ways at once. The five that frame them are sending, arriving, waking, not explaining and what came of it, and they are the same in every dream, so they are one person's work and not five.";
  "The count of beats is a measurement and not a preference. It came from reading the twenty surveyed passages and asking what an angel is actually shown doing, so a beat exists here because a passage needed it. Anyone who thinks there are too many should show which passage stops needing one.";
  "★ THE ANGEL NEVER EXPLAINS THE DREAM, AND THAT IS A BEAT RATHER THAN A GAP. GEN40:8 asks whether interpretations do not belong to God, and DAN2:27-28 says no wise man can tell the king what he asks. So a player who has delivered a dream perfectly still cannot say what it means, and the dreamer has to go and find somebody. Left unnamed this reads as a feature nobody got round to, and somebody helpfully adds a meaning to the delivery.";
  "What the dreamer does afterwards is not the player's score. Abimelech rose early and obeyed, the cupbearer forgot Joseph for two years, and neither of those is a verdict on the messenger. The labour is the player's and the fruit is God's.";
  let beats = [
    {
      name: "sent",
      acting: "",
      scripture:
        "HEB1:14 - ministering spirits sent out; GEN31:11 and DAN4:13 have the messenger come down with words already given",
      settled:
        "the message is given to the angel and not composed by the angel, and it is for a named person",
      open: "how an errand is handed over, and whether any of it is chosen",
    },
    {
      name: "arrival",
      acting: "",
      scripture:
        "GEN20:3 - God came to Abimelech in a dream by night; every passage names its sleeper",
      settled: "the dreamer, the place and the night are the passage's",
      open: "whether getting there is played at all, or simply true",
    },
    {
      name: "showing",
      acting: "yes",
      scripture:
        "the twelve surveyed passages that name shapes, from a ladder to a statue of five metals",
      settled:
        "which shapes appear, and that they are the passage's shapes and not the angel's",
      open: "the whole of how a shape gets drawn - this is the artist's beat",
    },
    {
      name: "happening",
      acting: "yes",
      scripture:
        "all twelve that give shapes also move: the gaunt cows eat the sleek, the sheaf stands and the others bow, the stone strikes the feet",
      settled:
        "what moves and in what order, and that the movement is usually the whole message",
      open: "everything - nothing has been built for this beat yet",
    },
    {
      name: "counting",
      acting: "yes",
      scripture:
        "eight passages hang on a number: seven cows, eleven stars, three baskets, three branches, four corners, ten horns, five metals, three beasts torn from four",
      settled:
        "the numbers, exactly - Pharaoh's seven years of plenty are seven because the cows were",
      open: "whether a count is its own beat or a property of showing, and how a wrong count is answered",
    },
    {
      name: "word",
      acting: "yes",
      scripture:
        "twelve of the twenty speak, and seven of those give no picture at all - MAT2:13 is a sentence and nothing else",
      settled: "the words themselves, and that a messenger may not add to them",
      open: "how a sentence is carried and delivered",
    },
    {
      name: "waking",
      acting: "",
      scripture:
        "GEN41:4 and 41:7 - and Pharaoh awoke; 41:8 - in the morning his spirit was troubled",
      settled: "the dreamer wakes and the angel's part ends there",
      open: "whether the player sees the waking",
    },
    {
      name: "unexplained",
      acting: "",
      scripture:
        "GEN40:8 - do not interpretations belong to God; DAN2:27-28 - no wise man can declare it",
      settled: "the angel does not interpret, ever, however well it delivered",
      open: "whether the finding of an interpreter is shown or only reported",
    },
    {
      name: "outcome",
      acting: "",
      scripture:
        "GEN20:8 Abimelech rose early; GEN41:47-49 Pharaoh stored the grain; MAT2:12 the Magi went home another way; GEN40:23 the cupbearer forgot",
      settled: "what the dreamer actually did, per the passage",
      open: "how much is shown, and how a dream that was ignored is told",
    },
  ];
  return beats;
}
