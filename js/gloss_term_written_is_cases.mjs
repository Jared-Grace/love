export function gloss_term_written_is_cases() {
  "Pieces of writing beside a grammatical word, and whether the writing really names that word, one case for each way the reading can be fooled.";
  "What rests on this reading is a gate that checks an explanation of a Bible word against the parsing the interlinear gives for it. Say yes where the answer is no and the gate raises a finding against a sentence that is right, and somebody is sent to spoil good English in order to quiet it. Say no where the answer is yes and a sentence claiming the wrong tense ships unnoticed.";
  "THE WRONG ANSWERS THAT ACTUALLY HAPPENED ARE THE FIRST TWO CASES. Both explanations were right English and both were raised as faults, because 'perfectly' opens with the whole of 'perfect' and only the front of a word was being guarded.";
  "THE CASE THAT CARRIES THE MOST WEIGHT IS THE ONE DOING BOTH AT ONCE - naming the tense and then saying something is perfectly clear in the same breath. A reading that simply refused any wording holding the adverb would come out right on the first two cases and wrong on that one, so it is the only case that tells the two cures apart.";
  "THE ENDINGS THAT MUST STAY ALLOWED ARE HERE TOO. A plural is the same word still, so an explanation naming two participles names participles, and refusing every letter after the word would have lost it.";
  let cases = [
    {
      wording: "It looks backwards and it is perfectly regular.",
      term: "perfect",
      written: false,
      why: "the first finding that was wrong. 'perfectly' is a manner adverb about how regular something looks, and nothing here claims a tense at all",
    },
    {
      wording:
        "What was unsettled about a dead woman is perfectly clear about a city.",
      term: "perfect",
      written: false,
      why: "the second finding that was wrong, and the same adverb doing the same ordinary English work",
    },
    {
      wording: "The perfect tense here is perfectly regular.",
      term: "perfect",
      written: true,
      why: "the case that tells the two cures apart. The tense IS named, and the adverb stands beside it - so refusing the whole wording on sight of the adverb would answer no and lose a real naming",
    },
    {
      wording: "The verb stands in the perfect.",
      term: "perfect",
      written: true,
      why: "the ordinary yes, with a full stop straight after the word, which is one of the endings the front-only guard was left open for",
    },
    {
      wording: "It is in the perfect, not the aorist.",
      term: "perfect",
      written: true,
      why: "a comma straight after the word, the other ending the guard was left open for",
    },
    {
      wording: "Perfect is the tense carried here.",
      term: "perfect",
      written: true,
      why: "the word opens the wording, with nothing in front of it - which is what the space added to the front of the wording is for",
    },
    {
      wording: "This is an imperfect verb.",
      term: "perfect",
      written: false,
      why: "the word sits inside a longer word, and a longer word naming a different tense at that",
    },
    {
      wording: "A pluperfect would be built another way.",
      term: "perfect",
      written: false,
      why: "inside a longer word again, from the other side, so one wrong claim cannot be read as three",
    },
    {
      wording: "Two participles stand together here.",
      term: "participle",
      written: true,
      why: "a plural is the same word still, and refusing every letter after the word would have thrown this away",
    },
    {
      wording: "The verb reads imperfectly in English.",
      term: "imperfect",
      written: false,
      why: "the adverb refused is built from whatever word was asked, not from one word written into the reading",
    },
    {
      wording: "The verb stands in the aorist.",
      term: "perfect",
      written: false,
      why: "the plain no, where the word is simply absent and another term is named instead",
    },
  ];
  return cases;
}
