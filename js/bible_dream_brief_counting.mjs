import { bible_dream_brief_passages } from "./bible_dream_brief_passages.mjs";
export function bible_dream_brief_counting() {
  "The whole brief for the acting step where a number has to be right: what it is for, which passages need it, what Scripture has settled, what a designer still decides, what it may never do, and what would prove it finished.";
  "★ THE NUMBER IS THE MESSAGE IN THESE PASSAGES, AND A WRONG ONE IS A DIFFERENT DREAM. Pharaoh's seven years of plenty and seven of famine are seven because the cows were seven; eleven stars bowing are Joseph's eleven brothers and ten would be a family he does not have; three baskets are three days to the baker and three branches three days to the cupbearer, and the two men get opposite verdicts out of the same number. Nothing else in the game has to be exactly right in this way - a shape may be drawn badly and still delivered, and a count may not be off by one and still be the dream.";
  "★ IT IS A DIFFERENT PROBLEM FROM DRAWING, WHICH IS WHY IT IS ITS OWN STEP AND MAY YET NOT BE. Drawing asks for closeness and counting asks for exactness, so the two want opposite answers to almost every question a designer will ask. Whether that makes it a separate moment on the screen or a property of the showing is genuinely open, and whoever takes it may fold it in - but they should fold it in deliberately, having seen that the two ask for different things.";
  "DAN7 gives its number twice over and the second one depends on the first: ten horns come up and three of them are torn out by a little horn, which leaves seven. A design that can only ask for one number per dream cannot deliver that passage.";
  "A count the passage withholds may not be supplied. GEN37:6-7 says the sheaves gathered round and bowed and never says how many, and an angel who shows a definite number there has told Joseph something God did not.";
  let passages = bible_dream_brief_passages("counting");
  let brief = {
    step: "counting",
    what: "the dreamer ends up with the number the passage gives, exactly",
    passages,
    settled:
      "the numbers themselves; that exactness is required here where closeness is enough elsewhere; that a number the passage withholds stays withheld",
    open:
      "whether counting is its own moment or a property of showing; what answers a wrong count - refusal, or a miscount the dreamer then reports; how a count that depends on another count is asked for",
    forbidden:
      "rounding; supplying a number the passage does not give; any design that can hold only one number per dream",
    done: "all seven counting passages deliver their numbers exactly, DAN7 included with its ten and its three",
  };
  return brief;
}
