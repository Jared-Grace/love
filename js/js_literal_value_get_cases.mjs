import { text_frozen } from "./text_frozen.mjs";
export function js_literal_value_get_cases() {
  "Small written-out pieces of code beside the plain value each one is holding, or the note that the reading stopped rather than answering.";
  "What this reading is for is crossing back out of parsed code into an ordinary value, and the thing worth watching is that the value keeps its kind on the way. A written number comes back as a number and not as the text of one; a written piece of text comes back as text. The first two cases stand together for that reason, and pulling either out would leave the other saying nothing.";
  "The value nothing and a stop are told apart here by being written down differently in shape rather than differently in wording. A stop is noted as a stop and a value is noted as a value, so the case that expects nothing cannot be satisfied by a reading that fell over, which is the one confusion this shape exists to make impossible.";
  "The last two cases are the ones with no value in them at all. A name and a sum are both perfectly good parsed code, and neither is holding a value - so the reading stops, which is right, because a caller that got nothing back would have no way to tell that from a written nothing.";
  "Each piece of code is held as fixed text so the canonicalizing pass leaves the names inside it alone.";
  let cases = [
    {
      name: "a written number, which comes back a number and not the text of one",
      code: text_frozen("1"),
      told: {
        value: 1,
      },
    },
    {
      name: "a written piece of text, which comes back text",
      code: text_frozen('"hello"'),
      told: {
        value: "hello",
      },
    },
    {
      name: "the word for yes",
      code: text_frozen("true"),
      told: {
        value: true,
      },
    },
    {
      name: "the word for no, which is a value and not an absence",
      code: text_frozen("false"),
      told: {
        value: false,
      },
    },
    {
      name: "the word for nothing, which is written down as a value rather than as a stop",
      code: text_frozen("null"),
      told: {
        value: null,
      },
    },
    {
      name: "a name, which is parsed code holding no value",
      code: text_frozen("a"),
      told: {
        refused: true,
      },
    },
    {
      name: "a sum, which is parsed code holding two values and not one",
      code: text_frozen("1 + 1"),
      told: {
        refused: true,
      },
    },
  ];
  return cases;
}
