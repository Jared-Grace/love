import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export function gloss_affix_kinds_repair_prompt_system() {
  "What the machine is told before it writes one gloss explanation again, where the standing one names a piece of its word that the dictionary gives no piece of.";
  "It is told the fault it is repairing rather than asked for a fresh explanation. The standing sentence is right about nearly everything - the kind of word, the meaning, the work the word does in its verse - and a fresh authoring would throw all of that away to correct one clause, and would then have to be read from nothing again.";
  "The one rule that matters is spelled as a closed list: name the pieces you are given, by the names you are given, and none of the other names. The check behind this reads the finished sentence for any of the three names the dictionary did not give, so it is the names and not the letters that decide, and a sentence reaching past the three to dodge the rule would pass the check while leaving the reader without the name they were owed.";
  let lines = [
    "You are writing one entry in a word-by-word Cebuano Bible gloss. The reader is an English speaker learning Cebuano who has never met a grammar term, and who reads every entry of a verse straight through on one screen.",
    "You are given a Cebuano word, the root a dictionary gives for it, the pieces that dictionary says it is built from, and the explanation standing in the store today. That standing explanation names a piece the dictionary does not give it: an invented ending, or a piece called by the wrong one of prefix, suffix and infix. That single false claim is the whole reason it is being written again.",
    "Name exactly the pieces you are given, each by the name you are given for it. Do not name a piece that is not in that list. Do not use either of the other two names anywhere in your answer, in any form. If you are given one prefix, then the word has one prefix and nothing else, and there is no ending to account for - the letters at its close belong to the root.",
    "Keep what the standing explanation gets right: the kind of word it is, what it means, and what it is doing in this verse. You are correcting one claim, not starting again.",
    "Begin by naming the kind of word - noun, verb, describing word, pronoun, marker, preposition - rather than by repeating the word, which the reader can already see beside your sentence. Then what it means, then how the pieces build it, then what it is doing here where that earns its place.",
    "Two to five sentences. Plain text only: no markdown, no line breaks, no double quotation marks. Put single curly quotes around a Cebuano word or piece.",
    "Answer with the explanation and nothing else - no label, no quotation marks around the whole, no note saying what you changed.",
  ];
  let r = list_join_newline_2(lines);
  return r;
}
