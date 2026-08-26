import { text_frozen } from "./text_frozen.mjs";
export function literal_duplicates_cases() {
  "Small bodies of source written out whole, each saying which of its files a";
  "reader of repeated values should offer and which it should withhold.";
  "The finder's clean answer on this repo is an empty list, and an empty list reads";
  "exactly the same whether the judgment works or has quietly stopped answering.";
  "So the cases that earn their keep here are the two opposite kinds together: one";
  "file that must be offered, and one for every reason a file gets held back. A";
  "reader that offered everything would fail the withheld ones; a reader that";
  "offered nothing would fail the first; and a reader that dropped a whole body of";
  "source the moment one file in it looked wrong would fail the last case, which";
  "puts the real sites and every withheld kind in one place.";
  "The naming of a field is two cases here rather than one, because the two shapes";
  "of it are opposites. A word handed to the call this repo reads fields with has";
  "room for a call in its place and is offered; a word standing before the colon of";
  "a written-out record has no room, because a call written there stops being a";
  "call and becomes a field named by the letters of the call. One drop used to";
  "cover both, and the pair is kept here so that collapsing them back into one";
  "fails whichever way it is collapsed.";
  "Every file's source is held as fixed text, because the pass that canonicalizes";
  "this file would otherwise read the names written inside a case as references and";
  "change what the case says.";
  let getter = text_frozen(
    'export function x_pad_size() {\n  let v = "0.8375em";\n  return v;\n}\n',
  );
  let site = text_frozen(
    'export function x_pad_draw(node) {\n  html_style_padding_set(node, "0.8375em");\n}\n',
  );
  let prose = text_frozen(
    'export function x_pad_note() {\n  "0.8375em";\n  return 1;\n}\n',
  );
  let key = text_frozen(
    'export function x_pad_keys() {\n  let record = { "0.8375em": 1 };\n  return record;\n}\n',
  );
  let lookup = text_frozen(
    'export function x_pad_lookup(record) {\n  let held = property_get(record, "0.8375em");\n  return held;\n}\n',
  );
  let peer = text_frozen(
    'export function x_gap_size() {\n  let v = "0.8375em";\n  return v;\n}\n',
  );
  let word_getter = text_frozen(
    'export function x_mode_word() {\n  let v = "plain";\n  return v;\n}\n',
  );
  let word_site = text_frozen(
    'export function x_mode_show(node) {\n  html_text_content_set(node, "plain");\n}\n',
  );
  let cases = [
    {
      codes: {
        x_pad_size: getter,
        x_pad_draw: site,
      },
      found: [
        {
          f_name: "x_pad_size",
          files: ["x_pad_draw"],
        },
      ],
      why: "a value handed to a call where a getter already returns it is the whole shape this looks for",
    },
    {
      codes: {
        x_pad_size: getter,
        x_pad_note: prose,
      },
      found: [],
      why: "the other file writes the value only as its own account of itself, and a call cannot stand where a sentence stands",
    },
    {
      codes: {
        x_pad_size: getter,
        x_pad_keys: key,
      },
      found: [],
      why: "the word stands before a colon, where a call would stop being a call and become a field named by the letters of the call",
    },
    {
      codes: {
        x_pad_size: getter,
        x_pad_lookup: lookup,
      },
      found: [
        {
          f_name: "x_pad_size",
          files: ["x_pad_lookup"],
        },
      ],
      why: "the word names a field here too, but as an argument, where a call fits and hands back the same word - so the shape of saved data does not move",
    },
    {
      codes: {
        x_pad_size: getter,
        x_gap_size: peer,
      },
      found: [],
      why: "a second name for the same value is already named - counting it would make the measure climb whenever somebody did the right thing",
    },
    {
      codes: {
        x_mode_word: word_getter,
        x_mode_show: word_site,
      },
      found: [],
      why: "a short word of plain letters could be anybody's, so a value with no shape somebody had to choose is not offered at all",
    },
    {
      codes: {
        x_pad_size: getter,
        x_pad_draw: site,
        x_pad_note: prose,
        x_pad_keys: key,
        x_pad_lookup: lookup,
      },
      found: [
        {
          f_name: "x_pad_size",
          files: ["x_pad_draw", "x_pad_lookup"],
        },
      ],
      why: "both real sites and both withheld kinds at once, so withholding has to be selective rather than all or nothing",
    },
  ];
  return cases;
}
