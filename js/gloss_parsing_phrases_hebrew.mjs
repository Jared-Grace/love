export function gloss_parsing_phrases_hebrew() {
  "Every word the Hebrew interlinear builds its spelled-out parsings out of, said as a phrase a reader with no grammar can follow.";
  "The Greek table next door cannot be widened to cover this, and the reason is not tidiness. Greek perfect and imperfect name when something happened; Hebrew perfect and imperfect name whether the speaker is looking at the action whole or still running, and a word can carry either while pointing at the past, the present or the future. One shared row would have to say both things at once, so it would say one of them falsely to half the Bible.";
  "The unit here is a feature rather than a word, because the Hebrew source writes its features as phrases with spaces in them - third person masculine singular is one fact about the word, not four. Splitting on spaces would hand back parts no reader can be told anything about, and would lose the one thing that makes a Hebrew parsing readable, which is that its pieces are already whole.";
  "The person-and-gender rows carry two wordings, because the same feature means opposite things in the two places it stands. Inside the word's own parsing it says who is doing the action; hanging off the end of the word it says who the action was done to or whose the thing is. A single wording would be right in one position and wrong in the other, with nothing in the row to say which.";
  "Codes the source left unexpanded are deliberately absent rather than guessed at. cdc, md, fd and their neighbours are the interlinear's own shorthand escaping into a column meant to be spelled out, and gmasculine and singulard are plain corruptions. Writing a phrase for one of them would put a guess in front of a reader as a fact, where leaving it out makes the composer refuse the word and keeps it named in the standing list of what the source has not spelled out.";
  let phrases = [
    {
      word: "Noun",
      dimension: "kind",
      phrase: "a naming word",
      suffix: "",
    },
    {
      word: "Verb",
      dimension: "kind",
      phrase: "an action word",
      suffix: "",
    },
    {
      word: "Adjective",
      dimension: "kind",
      phrase: "a describing word",
      suffix: "",
    },
    {
      word: "Adverb",
      dimension: "kind",
      phrase: "a word saying how or when or where something is done",
      suffix: "",
    },
    {
      word: "Pronoun",
      dimension: "kind",
      phrase: "a stand-in word of the sort English writes as he or this or who",
      suffix: "",
    },
    {
      word: "Preposition",
      dimension: "kind",
      phrase:
        "a small joining word of the sort English writes as in or to or from",
      suffix: "",
    },
    {
      word: "Preposition-b",
      dimension: "kind",
      phrase:
        "the small word meaning in or at or with that Hebrew writes stuck onto the front of the word it belongs to",
      suffix: "",
    },
    {
      word: "Preposition-k",
      dimension: "kind",
      phrase:
        "the small word meaning like or as that Hebrew writes stuck onto the front of the word it belongs to",
      suffix: "",
    },
    {
      word: "Preposition-l",
      dimension: "kind",
      phrase:
        "the small word meaning to or for or belonging to that Hebrew writes stuck onto the front of the word it belongs to",
      suffix: "",
    },
    {
      word: "Preposition-m",
      dimension: "kind",
      phrase:
        "the small word meaning from or out of that Hebrew writes stuck onto the front of the word it belongs to",
      suffix: "",
    },
    {
      word: "Conjunction",
      dimension: "kind",
      phrase:
        "a joining word of the sort English writes as and or or or because",
      suffix: "",
    },
    {
      word: "Interjection",
      dimension: "kind",
      phrase: "a cried-out word of the sort English writes as oh or look",
      suffix: "",
    },
    {
      word: "Number",
      dimension: "kind",
      phrase: "a counting word",
      suffix: "",
    },
    {
      word: "Article",
      dimension: "kind",
      phrase: "the word the",
      suffix: "",
    },
    {
      word: "Conjunctive waw",
      dimension: "kind",
      phrase: "the joining word and",
      suffix: "",
    },
    {
      word: "Direct object marker",
      dimension: "kind",
      phrase:
        "a small word with no meaning of its own that points ahead at whatever the action is done to",
      suffix: "",
    },
    {
      word: "Interrogative",
      dimension: "kind",
      phrase: "a word that asks",
      suffix: "",
    },
    {
      word: "Negative particle",
      dimension: "kind",
      phrase: "a small word meaning not",
      suffix: "",
    },
    {
      word: "Punctuation",
      dimension: "kind",
      phrase: "a mark of punctuation rather than a word",
      suffix: "",
    },
    {
      word: "Qal",
      dimension: "feature",
      phrase: "in the plain stem where the one doing the action simply does it",
      suffix: "",
    },
    {
      word: "Nifal",
      dimension: "feature",
      phrase:
        "in the stem where the action is done to the subject or done by the subject to itself",
      suffix: "",
    },
    {
      word: "Piel",
      dimension: "feature",
      phrase: "in the stem that makes the action a strong or thorough one",
      suffix: "",
    },
    {
      word: "Pual",
      dimension: "feature",
      phrase:
        "in the strong stem with the action done to the subject rather than by it",
      suffix: "",
    },
    {
      word: "Hifil",
      dimension: "feature",
      phrase:
        "in the stem meaning to cause someone or something else to do the action",
      suffix: "",
    },
    {
      word: "Hofal",
      dimension: "feature",
      phrase:
        "in the causing stem with the action done to the subject rather than by it",
      suffix: "",
    },
    {
      word: "Hitpael",
      dimension: "feature",
      phrase:
        "in the stem for doing the action to oneself or among one another",
      suffix: "",
    },
    {
      word: "Nithpael",
      dimension: "feature",
      phrase:
        "in a rare stem joining doing the action to oneself with having it done to one",
      suffix: "",
    },
    {
      word: "QalPass",
      dimension: "feature",
      phrase:
        "in the plain stem with the action done to the subject rather than by it",
      suffix: "",
    },
    {
      word: "QalPassParticiple",
      dimension: "feature",
      phrase:
        "in the plain stem and in the form that works like a describing word with the action done to it rather than by it",
      suffix: "",
    },
    {
      word: "Perfect",
      dimension: "feature",
      phrase:
        "in the form that looks at the action as one whole finished thing",
      suffix: "",
    },
    {
      word: "Imperfect",
      dimension: "feature",
      phrase:
        "in the form that looks at the action as still running or not yet done",
      suffix: "",
    },
    {
      word: "Imperative",
      dimension: "feature",
      phrase: "in the form used to tell someone to do it",
      suffix: "",
    },
    {
      word: "Infinitive construct",
      dimension: "feature",
      phrase:
        "in the bare form of the action that English would say as to do it",
      suffix: "",
    },
    {
      word: "Infinitive absolute",
      dimension: "feature",
      phrase:
        "in the bare form of the action standing on its own to press the point home",
      suffix: "",
    },
    {
      word: "Participle",
      dimension: "feature",
      phrase:
        "in the form that works like a describing word for the one doing the action",
      suffix: "",
    },
    {
      word: "Consecutive imperfect",
      dimension: "feature",
      phrase:
        "in the form that carries a story one step forward and so is read as what then happened",
      suffix: "",
    },
    {
      word: "Conjunctive imperfect",
      dimension: "feature",
      phrase: "in the not-yet-finished form with and joined to its front",
      suffix: "",
    },
    {
      word: "Conjunctive perfect",
      dimension: "feature",
      phrase:
        "in the whole-and-finished form with and joined to its front which often carries what will happen next",
      suffix: "",
    },
    {
      word: "Imperfect Jussive",
      dimension: "feature",
      phrase: "in the not-yet-finished form used to say let it be so",
      suffix: "",
    },
    {
      word: "Conjunctive imperfect Jussive",
      dimension: "feature",
      phrase:
        "in the not-yet-finished form with and joined to its front and used to say let it be so",
      suffix: "",
    },
    {
      word: "Imperfect Cohortative",
      dimension: "feature",
      phrase: "in the not-yet-finished form used to say let me or let us",
      suffix: "",
    },
    {
      word: "Imperfect Cohortative if contextual",
      dimension: "feature",
      phrase:
        "in the not-yet-finished form which here may be the one meaning let me or let us",
      suffix: "",
    },
    {
      word: "Conjunctive imperfect Cohortative",
      dimension: "feature",
      phrase:
        "in the not-yet-finished form with and joined to its front and used to say let me or let us",
      suffix: "",
    },
    {
      word: "Conjunctive imperfect Cohortative if contextual",
      dimension: "feature",
      phrase:
        "in the not-yet-finished form with and joined to its front which here may be the one meaning let me or let us",
      suffix: "",
    },
    {
      word: "proper",
      dimension: "feature",
      phrase: "the name of one particular person or place",
      suffix: "",
    },
    {
      word: "relative",
      dimension: "feature",
      phrase:
        "of the kind that points back at something already said the way English uses who or which",
      suffix: "",
    },
    {
      word: "masculine singular",
      dimension: "feature",
      phrase: "masculine and one of them",
      suffix: "",
    },
    {
      word: "masculine plural",
      dimension: "feature",
      phrase: "masculine and more than one",
      suffix: "",
    },
    {
      word: "masculine singular construct",
      dimension: "feature",
      phrase:
        "masculine and one of them and leaning on the word after it so that the two read as one of the other",
      suffix: "",
    },
    {
      word: "masculine plural construct",
      dimension: "feature",
      phrase:
        "masculine and more than one and leaning on the word after it so that the two read as ones of the other",
      suffix: "",
    },
    {
      word: "masculine dual construct",
      dimension: "feature",
      phrase:
        "masculine and a pair of them and leaning on the word after it so that the two read as a pair of the other",
      suffix: "",
    },
    {
      word: "masculine singular determinate",
      dimension: "feature",
      phrase: "masculine and one particular one of them",
      suffix: "",
    },
    {
      word: "masculine plural determinate",
      dimension: "feature",
      phrase: "masculine and more than one and the particular ones meant",
      suffix: "",
    },
    {
      word: "feminine singular",
      dimension: "feature",
      phrase: "feminine and one of them",
      suffix: "",
    },
    {
      word: "feminine plural",
      dimension: "feature",
      phrase: "feminine and more than one",
      suffix: "",
    },
    {
      word: "feminine singular construct",
      dimension: "feature",
      phrase:
        "feminine and one of them and leaning on the word after it so that the two read as one of the other",
      suffix: "",
    },
    {
      word: "feminine plural construct",
      dimension: "feature",
      phrase:
        "feminine and more than one and leaning on the word after it so that the two read as ones of the other",
      suffix: "",
    },
    {
      word: "feminine dual construct",
      dimension: "feature",
      phrase:
        "feminine and a pair of them and leaning on the word after it so that the two read as a pair of the other",
      suffix: "",
    },
    {
      word: "feminine singular determinate",
      dimension: "feature",
      phrase: "feminine and one particular one of them",
      suffix: "",
    },
    {
      word: "feminine plural determinate",
      dimension: "feature",
      phrase: "feminine and more than one and the particular ones meant",
      suffix: "",
    },
    {
      word: "common singular",
      dimension: "feature",
      phrase: "of either gender and one of them",
      suffix: "",
    },
    {
      word: "common plural",
      dimension: "feature",
      phrase: "of either gender and more than one",
      suffix: "",
    },
    {
      word: "common singular construct",
      dimension: "feature",
      phrase:
        "of either gender and one of them and leaning on the word after it so that the two read as one of the other",
      suffix: "",
    },
    {
      word: "common plural construct",
      dimension: "feature",
      phrase:
        "of either gender and more than one and leaning on the word after it so that the two read as ones of the other",
      suffix: "",
    },
    {
      word: "ordinal masculine singular",
      dimension: "feature",
      phrase: "naming a place in an order and masculine and one of them",
      suffix: "",
    },
    {
      word: "ordinal masculine plural",
      dimension: "feature",
      phrase: "naming a place in an order and masculine and more than one",
      suffix: "",
    },
    {
      word: "ordinal masculine singular determinate",
      dimension: "feature",
      phrase:
        "naming a place in an order and masculine and one particular one of them",
      suffix: "",
    },
    {
      word: "ordinal feminine singular",
      dimension: "feature",
      phrase: "naming a place in an order and feminine and one of them",
      suffix: "",
    },
    {
      word: "ordinal feminine plural construct",
      dimension: "feature",
      phrase:
        "naming a place in an order and feminine and more than one and leaning on the word after it",
      suffix: "",
    },
    {
      word: "ordinal feminine singular construct",
      dimension: "feature",
      phrase:
        "naming a place in an order and feminine and one of them and leaning on the word after it",
      suffix: "",
    },
    {
      word: "ordinal feminine singular determinate",
      dimension: "feature",
      phrase:
        "naming a place in an order and feminine and one particular one of them",
      suffix: "",
    },
    {
      word: "first person common singular",
      dimension: "who",
      phrase: "for I",
      suffix: "me or my",
    },
    {
      word: "first person common plural",
      dimension: "who",
      phrase: "for we",
      suffix: "us or our",
    },
    {
      word: "second person masculine singular",
      dimension: "who",
      phrase: "for you where you is one man",
      suffix: "you where you is one man",
    },
    {
      word: "second person feminine singular",
      dimension: "who",
      phrase: "for you where you is one woman",
      suffix: "you where you is one woman",
    },
    {
      word: "second person masculine plural",
      dimension: "who",
      phrase: "for you where you is more than one man",
      suffix: "you where you is more than one man",
    },
    {
      word: "second person feminine plural",
      dimension: "who",
      phrase: "for you where you is more than one woman",
      suffix: "you where you is more than one woman",
    },
    {
      word: "third person masculine singular",
      dimension: "who",
      phrase: "for he",
      suffix: "him or his",
    },
    {
      word: "third person feminine singular",
      dimension: "who",
      phrase: "for she",
      suffix: "her",
    },
    {
      word: "third person masculine plural",
      dimension: "who",
      phrase: "for they where they are men",
      suffix: "them or their where they are men",
    },
    {
      word: "third person feminine plural",
      dimension: "who",
      phrase: "for they where they are women",
      suffix: "them or their where they are women",
    },
    {
      word: "third person common plural",
      dimension: "who",
      phrase: "for they",
      suffix: "them or their",
    },
    {
      word: "Paragogic nun",
      dimension: "who",
      phrase: "with a spare ending added that changes nothing it says",
      suffix: "no more than a spare sound",
    },
  ];
  return phrases;
}
