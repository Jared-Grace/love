import { fn_name } from "./fn_name.mjs";
import { bible_dream_brief_passages } from "./bible_dream_brief_passages.mjs";
export function bible_dream_brief_word() {
  "The whole brief for the acting step where a sentence is carried: what it is for, which passages need it, what Scripture has settled, what a designer still decides, what it may never do, and what would prove it finished.";
  "★ THE PLAYER CARRIES THE WORDS AND NEVER COMPOSES THEM, AND EVERY DECISION IN THIS STEP ANSWERS TO THAT. A messenger who improves a message is a false messenger, so any design in which the player picks what to say, or fills a gap, or chooses between two wordings, has quietly made the angel an author. The whole difficulty of the step is making carrying something feel like doing something.";
  "★ THE PLAYER HEARS THE PASSAGE READ ALOUD, IN ORDER, BEFORE ANY OF IT IS ASKED OF THEM. That single decision is what makes the step possible without making it authoring: they have already received the words of God whole, and the screen is simply not repeating them in order. So putting the sentence back is remembering what was given, not inventing what to give. Starting with the Scripture rather than with the puzzle is also the rule this whole game is built on, and here the rule and the mechanic turn out to be the same thing.";
  "★ THE ORDER IS TOLD BY PICTURES AND THE WORDS ARE HANDED OVER SCRAMBLED. Go and tell Pharaoh is a walking, a joining, a speaking and a crown; the player is shown those four in order and the words out of order, and puts the words under the pictures. The pictures carry the order so that the words do not have to be on screen in it, which is the difference between carrying a message and copying one off a card.";
  ("★ THE PICTURES ARE NOT NEW ART - THE REPO ALREADY HAS THAT VOCABULARY. ",
    fn_name("app_emoji_bible"),
    " renders whole verses as glyphs with a key beneath them, and ",
    fn_name("bible_glyph_referents"),
    " holds what each glyph refers to. Drawing a fresh set for this step would be a second vocabulary for the same Bible, and the two would disagree within a month. Whoever takes this step should start by reading what those already say and asking what is missing, not by choosing icons.");
  ("Seven of the passages that speak give no picture at all - MAT2:13 is a sentence and nothing else. For those this step is the entire delivery, so it has to stand on its own and cannot lean on a drawing being done first.");
  let passages = bible_dream_brief_passages("word");
  let brief = {
    step: "word",
    what: "the sentence the passage gives reaches the dreamer whole and in order",
    passages,
    settled:
      "the words themselves, that they are heard read aloud before anything is asked, and that a messenger may not add to them, shorten them or smooth them",
    open: "whether a picture stands for a word or for a phrase; what a wrong order costs and whether it can be undone; how a long speech is broken up; whether the reading aloud can be heard again on request",
    forbidden:
      "showing the words in their right order on screen while asking for that order, which makes it copying; any paraphrase; any choice of wording offered to the player",
    done: "all twelve speaking passages can be delivered word for word, including the seven that give no picture, with no code particular to any one of them",
  };
  return brief;
}
