import { arguments_assert } from "./arguments_assert.mjs";
export function markdown_plain_text_cases() {
  "A piece of markdown and the plain text it is meant to come back as, written down rather than worked out, with a refusal written as nothing at all.";
  "What this pins is not the removing, which is two replacements, but the line between a mark and the evidence a mark is made of. The letters these are for quote HTML at eBible, so a hash and a greater-than sit inside almost every quoted line and mean nothing there. A reader that took them for markdown wherever it met them would refuse the very letters this exists to send.";
  "The refusals are written down as carefully as the conversions, because a refusal is the promise the name makes: for every text this accepts, what comes back really is plain. A link quietly surviving as its own brackets is the failure, and it would go out in an email rather than showing up here.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      markdown: "**1. Verse ids do not match.** 131 versions.",
      plain: "1. Verse ids do not match. 131 versions.",
      why: "the pair of stars a heading is written with comes off",
    },
    {
      markdown: 'prints `4b` as `id="V5"`.',
      plain: 'prints 4b as id="V5".',
      why: "the marks a quoted fragment is fenced with come off, and the fragment itself is left exactly as it was",
    },
    {
      markdown: 'quote: `<span class="verse" id="V13">13&#160;</span>`',
      plain: 'quote: <span class="verse" id="V13">13&#160;</span>',
      why: "an entity inside a quote is the evidence and has to arrive as its own characters - this is the whole reason the letter goes as plain text rather than as a rendered page",
    },
    {
      markdown: "a back-link to #V4 labelled 24:8, and 5 > 3",
      plain: "a back-link to #V4 labelled 24:8, and 5 > 3",
      why: "a hash and a greater-than in the middle of a line are content, not marks - they are what the quoted HTML is made of",
    },
    {
      markdown: "- part-verse - https://ebible.org/aaz/GEN02.htm",
      plain: "- part-verse - https://ebible.org/aaz/GEN02.htm",
      why: "a bullet already reads as a bullet with nothing done to it, so it is left alone rather than taken off",
    },
    {
      markdown: "---",
      plain: "---",
      why: "a rule already reads as a divider, so it is left alone too",
    },
    {
      markdown: "",
      plain: "",
      why: "an empty text holds no mark and is already plain",
    },
    {
      markdown: "# How to edit this",
      plain: null,
      why: "a heading at the start of a line is a mark this does not know how to take off, so it is refused rather than sent with its hash showing",
    },
    {
      markdown: "> a quoted block",
      plain: null,
      why: "the same at the start of a line for a quote block",
    },
    {
      markdown: "see [the measurements](https://example.org/x.json)",
      plain: null,
      why: "a link is the refusal that matters most - left alone it would reach the reader as its own brackets and the address would never be clickable",
    },
    {
      markdown: "*emphasis*",
      plain: null,
      why: "one star is emphasis rather than a heading, and it survives the removal of the pair, so it has to be caught by name",
    },
    {
      markdown: "| a | b |",
      plain: null,
      why: "a table row at the start of a line draws nothing in plain text but its own bars",
    },
  ];
  return cases;
}
