import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function folder_public_unlisted() {
  "The folder inside the served one that holds a build for one person to try, at an address nothing links to.";
  "It is served, so it is not private in the sense of being protected - anybody typing the address reaches it. What it is instead is unlinked: no index names it, nothing on the site points at it, and it holds one app rather than a stage. That is the whole of what is being claimed for it, written down here so nobody later reads more into the word than it can carry.";
  "It is on the SAME site on purpose, and that is the one thing a properly private address could not do. What a person has done so far in an app is kept by their browser under the address they did it at, so a build stood up somewhere else is a build where their work is not - and the person this exists for is in the middle of a review. A separate address would have been more private and would have cost them the thing being protected.";
  "Frozen, because it is typed and then kept. The address goes to somebody by hand, gets bookmarked, and comes back days later; a rename here would leave them typing a word the site has stopped answering to, and nothing would go red about it.";
  "The word is the one this stage was reached at before, when the checked stage sat inside the served folder and everything in it was public whether approved or not. That is not what this is - one app is copied here deliberately, and nothing else in the folder follows. Keeping the word keeps the address somebody already knows, without keeping the thing that was wrong with it.";
  arguments_assert(arguments, 0);
  let name = text_frozen("latest");
  return name;
}
