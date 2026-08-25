import { arguments_assert } from "./arguments_assert.mjs";
export function bible_versions_english_choices_withheld() {
  arguments_assert(arguments, 0);
  "The English translations this repo is free to ship and does not offer anyway, each against the reason it is held back.";
  "THE LICENCE IS NOT THE ONLY WAY A TRANSLATION CAN BE UNFIT TO OFFER, and the terms are the only question asked next door. A translation can be complete, public domain, correctly named, and still hand back the wrong passage - which is worse than handing back nothing, because nothing is visible and a plausible wrong verse is not.";
  "IT IS A NAMED LIST AND NOT A RULE ABOUT THE NAMES, for the same reason the six printings of the World English Bible are named rather than guessed at by their first letters: a rule about spelling catches what nobody meant it to catch and says nothing when it does.";
  "THE REASON IS WRITTEN BESIDE THE FOLDER BECAUSE THE LIST IS ONLY HALF THE FACT. Somebody reading this later wants to know whether the reason still holds - whether it was the translation that was wrong or the way we were asking it - and a bare list of folders cannot answer that, so the entry would be kept forever or deleted on a guess.";
  let withheld = [
    {
      bible_folder: "engDRA",
      name: "Douay-Rheims 1899",
      why: "it numbers the psalms the way the Vulgate does, one behind the Hebrew numbering for most of the book, so asked for the twenty third psalm it hands back the twenty fourth - real words about the wrong passage, which every other check here reads as a translation answering normally",
    },
  ];
  return withheld;
}
