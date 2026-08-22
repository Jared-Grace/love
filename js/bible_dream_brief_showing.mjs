import { bible_dream_brief_passages } from "./bible_dream_brief_passages.mjs";
export function bible_dream_brief_showing() {
  "The whole brief for the acting step where the passage's shapes are put in front of the dreamer: what it is for, which passages need it, what Scripture has settled, what a designer still decides, what it may never do, and what would prove it finished.";
  "★ THIS IS THE STEP TO HAND TO SOMEBODY WHO DRAWS FOR A LIVING, AND THE TRACING ALREADY BUILT IS ONE ANSWER RATHER THAN THE ANSWER. There is a working mechanic here - faint guide strokes laid out at once, traced in any order and in either direction, the hand's own line kept and thinning as it strays - and every number in it was tuned by measurement rather than designed. An artist who also knows how people use things would very likely throw most of it away, and is meant to be free to. What may not be thrown away is below.";
  "★ A BADLY DRAWN SHAPE IS STILL DELIVERED, AND THAT IS SCRIPTURE AND NOT LENIENCE. NUM12:8 sets a plain word above a riddle, and a shape drawn badly is what a riddle is made of - so a wandering hand gives the dreamer a harder dream and not no dream. A design that refuses to deliver until the tracing is neat has made the angel's skill the condition of God's message reaching a man, which is the opposite of what the passages show.";
  "The imprecision is answered rather than only counted. The player's own line stays on the page, and a finished shape draws an ornament out of its own bumps a moment later, so an unsteady hand leaves a real drawing behind it. Whoever redesigns this should keep something that does that work, not necessarily these two things.";
  let passages = bible_dream_brief_passages("showing");
  let brief = {
    step: "showing",
    what: "the shapes the passage names appear, put there by the player's own hand",
    passages,
    settled:
      "which shapes appear, that they are the passage's and never the angel's, and that a poorly drawn shape is delivered anyway",
    open: "the whole of how a shape gets made - tracing, or something else entirely; what a stray hand looks like; whether shapes are chosen in any order; how a slip is shown to the player at all",
    forbidden:
      "adding a shape the passage does not give; refusing delivery on grounds of neatness; anything that needs code particular to one passage",
    done: "all twelve passages that name shapes can be shown, with nothing in the code that knows which dream it is drawing",
  };
  return brief;
}
