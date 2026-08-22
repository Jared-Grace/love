import { bible_dream_passages } from "./bible_dream_passages.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_dream_brief_framing() {
  "The whole brief for the five steps that frame an errand and ask nothing of the player - sent, arrival, waking, unexplained and outcome - covering why they are one piece of work, what Scripture has settled in each, and the two of them that carry the theology of the whole game.";
  "★ THESE FIVE ARE ONE BRIEF BECAUSE THEY ARE THE SAME IN EVERY DREAM, WHICH IS THE EXACT OPPOSITE OF THE OTHER FOUR. Showing, happening, counting and word differ passage by passage and split four ways; these five run identically twenty times over. So they are one person's work, and the danger in them is not how to build one but how the twentieth one is still bearable.";
  "★ REPETITION IS THE DESIGN PROBLEM HERE, AND SKIPPING IS THE WRONG ANSWER TO IT. A shell that can be dismissed will be dismissed, and then the player is running a puzzle rather than an errand. Whatever varies has to come from the passage itself - the sleeper, the place, the night, what came of it are all different every time and all given - so the sameness should be carried by the shape and the difference by the Scripture.";
  "★ THE SHELL IS WHERE THE GAME SAYS WHO IS ACTING, AND WITHOUT IT THE FOUR ACTING STEPS ARE A DRAWING GAME. Sent says the message was given and not composed. Waking says the angel's part ends and control is taken away. Unexplained says the deliverer does not get to know. Outcome says what happened next was not the player's doing. Strip those and what is left tests hand and memory and teaches nothing about being sent.";
  "★ UNEXPLAINED IS THE STEP THAT WILL BE ARGUED WITH, AND IT IS SETTLED. GEN40:8 asks whether interpretations do not belong to God and DAN2:27-28 says no wise man can declare it. Everybody who plays this will want to be told what the cows meant, and a designer under that pressure will add a meaning at the end as a kindness. It is not a kindness and it is not open. The dreamer has to go and find somebody, and the player watches that happen without knowing.";
  "★ OUTCOME MAY NEVER READ AS A SCORE, AND THAT IS A HARD PROBLEM WITH A PLAIN CAUSE. GEN40:23 - the chief cupbearer did not remember Joseph but forgot him. That dream was delivered perfectly and nothing came of it for two years. So the game must be able to show an excellent delivery followed by nothing, and it must not look like failure, because the labour is the player's and the fruit is God's. Any design that pays the player by what the dreamer did afterwards has quietly made Abimelech obedient into a win and the cupbearer forgetting into a loss.";
  "The reading aloud lives in this shell and its place is open. The passage is heard whole and in order before anything is asked of the player, which is settled elsewhere and is what keeps carrying a sentence from being authoring one; whether that reading belongs to sending or to arriving, and whether it can be heard again on request, nobody has decided.";
  "Whether any framing step asks the player for anything at all is open and worth asking rather than assuming. As written they are watched rather than played, which is defensible - a servant is not consulted - but a step that is only watched is a step that gets skipped, and the two pull against each other.";
  let surveyed = bible_dream_passages();
  let passages = [];
  function each_passage(passage) {
    list_add(passages, passage.reference);
  }
  each(surveyed, each_passage);
  let brief = {
    step: "framing",
    what: "the five steps that hold an errand together and ask nothing of the player",
    passages,
    settled:
      "the message is given and not composed; the sleeper, the place and the night are the passage's; the angel's part ends at the waking; the angel never interprets, however well it delivered; what the dreamer did afterwards is the passage's and is not a score",
    open: "where the reading aloud sits and whether it repeats on request; whether the finding of an interpreter is shown or only reported; how much of an outcome is shown; how a dream that was ignored is told; whether any framing step is played rather than watched",
    forbidden:
      "supplying an interpretation at any point; rewarding or penalising the player by what the dreamer did next; a shell that can be skipped past; inventing a dreamer, a place or a night the passage did not give",
    done: "all twenty surveyed passages run end to end through one shell with no code particular to any of them, the cupbearer forgetting reads no worse than Abimelech obeying, and nobody is ever told what a dream meant",
  };
  return brief;
}
