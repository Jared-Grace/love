import { fn_name } from "./fn_name.mjs";
export function bible_event_kind_revelation_mechanic() {
  "The first draft of what a player DOES in a scene where God discloses something: the player is the angel sent with the message, and the message is delivered as a dream the player draws.";
  ("It answers to the reading in ",
    fn_name("bible_event_kind_revelation_shared"),
    " and to nothing else. If a claim here disagrees with that file, that file is right and this one is wrong, because it was read out of the passages and this was designed.");
  ("★ THE PLAYER MAY NOT INVENT A SHAPE. Every stroke of the dream is laid out before the scene begins, already drawn, taken from what the passage says was seen - the cows, the reeds, the river, the ears on one stalk, the east wind. The player traces them. That is the whole answer to the danger of a game letting somebody rewrite Scripture: there is no move that adds a symbol the text did not give.");
  ("★ AND THE FREEDOM IS REAL ANYWAY, because Scripture leaves the messenger the form and says so. The angel of the LORD at NUM22:35 - go with the men, but you are to speak only what I tell you. What is fixed is WHAT is said. Order, placement, how much and how often are not said, and those are the moves.");
  ("★ THE ANSWER KEY IS IN THE TEXT, so the game never has to judge a meaning. GEN41:25-32 says outright what Pharaoh's dream meant, GEN40:12-19 says what both prisoners' dreams meant, GEN37:8 and GEN37:10 have the hearers saying the meaning back out loud. The target reading of every dream is Scripture's own sentence about it, and a scoring rule that had to decide for itself what a dream means would be the thing to refuse.");
  let mechanic = {
    kind: "revelation",
    palette: "dream",
    player_is: "the angel sent with the message",
    given: [
      "the meaning, stated, in the words the passage uses of it",
      "every stroke of the dream at once, already drawn, faint, waiting to be traced",
      "the sleeper, and what they already fear or hope",
    ],
    moves: [
      {
        name: "trace",
        description:
          "Press and drag along a stroke that is already there. An outline says WHAT a thing is; the strokes inside it say WHICH one - sleek or gaunt, plump or scorched. The dragging is the pace of the dream.",
      },
      {
        name: "order",
        description:
          "Everything is laid out at once, so which stroke goes first is a choice. A thing seen first is what the sleeper believes the dream is about until something later corrects it. Seven fat cows and then seven thin ones is plenty and then famine; the same strokes the other way round say the opposite.",
      },
      {
        name: "place",
        description:
          "Where a traced shape lands beside what is already drawn is how the passage's VERBS get said. Sheaves bowing to a sheaf, thin cows devouring fat ones, thin heads swallowing plump ones, birds eating out of a basket carried on a man's own head. The nouns are given; the relation between them is drawn.",
      },
      {
        name: "double",
        description:
          "Say the same meaning a second time in a second set of shapes. GEN41:32 - because the dream was given to Pharaoh in two versions, the matter has been decreed by God, and He will carry it out shortly. Cows, then ears of grain. Doubling costs a whole second drawing and buys the reading THIS IS SETTLED, and the text says so rather than a designer deciding it.",
      },
      {
        name: "stop_short",
        description:
          "Leave strokes untraced. NUM12:6-8 ranks the media by how clear they are - a vision and a dream to a prophet, but face to face, clearly and NOT IN RIDDLES, to Moses - so a riddle is a real and lesser thing to have sent. How few strokes make a riddle is a judgment this draft makes and the text does not.",
      },
    ],
    satisfied_when:
      "The sleeper wakes and says the meaning back. Not when they are pleased by it - GEN37:10 has Jacob read the sun, moon and eleven stars exactly right and rebuke his son for it, and the message was still delivered.",
    scored_on: [
      "whether the meaning landed at all",
      "whether it landed without an interpreter - GEN41:8 has Pharaoh wake troubled with no one able to read it, which is force without meaning",
      "what it cost in strokes",
    ],
  };
  ("★ WHAT THE HEARER DOES WITH IT IS NOT THE PLAYER'S SCORE. Pharaoh refuses, the people at NUM14 refuse, Balak sends the prophet away - and in none of those is the messenger at fault. The angel is graded on the delivering. That is not a softening of the game; it is the only grading the passages support.");
  ("★ THE TEST THIS DRAFT WAS BUILT TO PASS IS GEN40, and it is the sharpest test in the corpus. Two dreams, dreamt the same night, with almost the same shapes: three branches and three baskets, both meaning three days. One man is restored and one is hanged. The difference is entirely in the placing - the cupbearer's own hand squeezes the grapes and puts the cup into Pharaoh's hand, and the baker carries the bread on his head while birds eat it off him. Active and passive, drawn. A palette that could not tell those two apart would be the wrong palette, and this one can.");
  ("WHAT IT DOES NOT REACH: the roughly forty-four disclosures that are spoken or done in the world rather than seen in a sleep. A voice from between the cherubim is not a drawing. Those need their own palette under the same rule - meaning fixed, form free - and until one exists the claim that revelation is ONE mechanic is unproven rather than false.");
  return mechanic;
}
