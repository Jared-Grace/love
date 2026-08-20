export function js_node_type_is_cases() {
  "Things to ask the kind question about, beside the kind asked and the answer it gives.";
  "This question is asked from a hundred and twenty-four places, which is more than anything else in the family, and almost all of them ask it about whatever they are holding rather than about something already known to be parsed code. So the answers that matter are the ones where the thing asked about is not parsed code at all: nothing, a word, a number, a list, an object carrying no kind. Every one of those has to come back false rather than stop, because the whole point of asking is to find out.";
  "The reading gets that by asking two questions on two lines - is this parsed code, and only then is it this kind - and its own prose says why they cannot be joined into one: asking the kind of nothing stops, so the first answer is what makes the second askable rather than a tidier way of writing it. Written as one joined line, the canonicalizing pass lifted the kind lookup out in front of its own guard, the lookup then ran on nothing, and every canonicalize in the repo stopped until it was put back. That happened, it was written down, and until these cases there was nothing to stop it happening again.";
  "The second case is the sharp one. The word handed over is itself the name of a kind, so a reading that had lost its guard and gone straight to comparing would answer true - the most confident possible wrong answer, from the shape most likely to be reached for.";
  "Each thing is named by a word rather than written out, because two of them cannot be written down as a value in a list at all and the rest read better as names than as literals. The gate is what turns each word into the thing.";
  let cases = [
    {
      name: "nothing is not parsed code of any kind",
      given: "nothing",
      type: "Identifier",
      same: false,
    },
    {
      name: "a plain word is not parsed code, even when the word is the name of a kind",
      given: "word",
      type: "Identifier",
      same: false,
    },
    {
      name: "a number is not parsed code",
      given: "number",
      type: "Identifier",
      same: false,
    },
    {
      name: "a list is not parsed code, however much parsed code is in it",
      given: "list",
      type: "Identifier",
      same: false,
    },
    {
      name: "an object carrying no kind is not parsed code",
      given: "object",
      type: "Identifier",
      same: false,
    },
    {
      name: "parsed code of the kind asked about",
      given: "identifier",
      type: "Identifier",
      same: true,
    },
    {
      name: "parsed code of some other kind",
      given: "identifier",
      type: "Literal",
      same: false,
    },
  ];
  return cases;
}
