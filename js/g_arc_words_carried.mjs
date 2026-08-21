export function g_arc_words_carried(arc) {
  "The words of the one field a written person hands on to the person written after them - their summary - lowered and stripped to letters, the same way their spoken words are.";
  "IT IS THE SUMMARY AND NOTHING ELSE, because the summary alone travels. A written arc keeps an occupation, a trouble and a summary, and none of the three is ever shown to a player - but the prompt for the NEXT person is handed every summary written so far, so that nobody is written blind to who is already taken. The other two stop where they are.";
  "SO ITS WORDS MATTER FOR A REASON THE SPOKEN ONES DO NOT. No child reads a summary, so nothing here is about whether a summary is too hard. It is about what the next call is shown: a summary written in one register is the register the next arc is written in, so a hard word in it does not sit still - it is the example the writer is copying from.";
  "THAT IS WHY A COUNT IS THE WRONG QUESTION HERE. A chapter holds one summary per person, so a word in one of them is rare in the way anything is rare among a dozen sentences, and a rarity threshold over that says nothing. What can be asked is the plain one: is this word inside the vocabulary the writing was asked for.";
  let summary = property_get(arc, "summary");
  let kept = words_letters_lowered(summary);
  return kept;
}
