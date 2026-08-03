export function number_to_words_cases() {
  "Numbers beside the words they are read out as, each with the part of the reading it is there to hold down.";
  "Every ten from twenty upward is a separate word rather than a rule applied to a digit, so the place where the tens are looked up is the one place in this reading that can be wrong for most numbers at once while looking right for the first nineteen. It was: for a year the tens were looked up by the whole tens amount rather than by the tens digit, so everything from twenty to ninety-nine read as the word undefined and nothing said so, because the only caller was asking about the number two.";
  "Small numbers are here as well, even though they were never broken, because they are what makes a failure readable - a run where only the tens fail says the tens are at fault, where a run that fails everywhere says nothing about where to look.";
  let cases = [
    {
      number: 0,
      words: "zero",
      why: "nothing has its own word rather than being built from the others",
    },
    {
      number: 7,
      words: "seven",
      why: "a single digit is a word looked up whole",
    },
    {
      number: 15,
      words: "fifteen",
      why: "everything under twenty is its own word rather than a ten and a unit",
    },
    {
      number: 20,
      words: "twenty",
      why: "the first number whose tens are looked up, with no unit after it to cover a wrong answer",
    },
    {
      number: 47,
      words: "forty-seven",
      why: "a ten and a unit joined by a dash, which is the ordinary shape of a two-digit number",
    },
    {
      number: 99,
      words: "ninety-nine",
      why: "the last number before the hundreds, so the tens lookup is asked for its highest word",
    },
    {
      number: 100,
      words: "one hundred",
      why: "a hundred on its own adds no tens at all, so nothing is left dangling after the word hundred",
    },
    {
      number: 123,
      words: "one hundred twenty-three",
      why: "a hundred with tens and units after it, which is where the three parts have to be joined in order",
    },
    {
      number: 1000,
      words: "one thousand",
      why: "the first number needing a group name, with the group below it empty",
    },
    {
      number: 1234567,
      words:
        "one million two hundred thirty-four thousand five hundred sixty-seven",
      why: "three groups at once, each with its own hundreds and tens, which is the whole reading working together",
    },
  ];
  return cases;
}
