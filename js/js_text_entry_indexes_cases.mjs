export function js_text_entry_indexes_cases() {
  "The lines this repo's own chapter files are actually written in, each paired with the entry positions a reader of them must find.";
  "THE FORMATTER HAS TWO SHAPES AND ONLY ONE OF THEM WAS EVER TESTED (2026-09-18). A verse too long for one line is written one entry per line; a short verse keeps its whole list on the line that opens it. A reading that matched whole trimmed lines answered the first shape perfectly and was blind to the second, and the blindness cost a four picture draw that stopped on Genesis twenty six verse six. Both shapes are written down here so that neither can be the only one somebody remembers.";
  "THE LAST TWO CASES ARE THE ONES THAT WOULD PASS A LOOSER READING. A word repeated three times on one line proves the positions come back in order and all of them, which is what the occurrence count downstream is standing on. A line holding unsettled and settle proves that neither a longer entry around the letters nor a shorter one inside them is an answer - the quotes are part of what is looked for, and that is why.";
  let cases = [
    {
      line: '        words: ["So", "Isaac", "settled", "in", "$proper_name$Gerar."],',
      spelled: '"settled"',
      spots: [31],
    },
    {
      line: '        words: ["So", "Isaac", "settled", "in", "$proper_name$Gerar."],',
      spelled: '"So"',
      spots: [16],
    },
    {
      line: '          "settled",',
      spelled: '"settled"',
      spots: [10],
    },
    {
      line: '          "settled"',
      spelled: '"settled"',
      spots: [10],
    },
    {
      line: '        words: ["a", "b", "a", "c", "a"],',
      spelled: '"a"',
      spots: [16, 26, 36],
    },
    {
      line: '        words: ["unsettled", "settle"],',
      spelled: '"settled"',
      spots: [],
    },
  ];
  return cases;
}
