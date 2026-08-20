export function bible_event_fields() {
  "the shape of ONE gathered Bible event — TWO fields, a title and the references under it, and nothing else. an EVENT is the thing that happened; PASSAGES attach to it, so Kings and Chronicles telling the same event are two witnesses on one record rather than two records.";
  "★ WHY IT IS ONLY TWO. this record had eleven fields for one day (who, where, when, happens, gaps, angels_present, wrongdoing_shown, and the rest) on the argument that a plain fact is cheap to capture while the chapter is open and expensive to return for. that argument was WRONG, and the first scene built on the record is what showed it: writing the Genesis 22 turns used the references and a re-read of the chapter, and consumed none of the other nine. a FACT is speculative for exactly the reason a game decision is — nothing yet reads it, so nobody knows which facts the mechanic will want. capturing more is not caution, it is guessing earlier.";
  "★ SO THE RULE IS: THE GATHER MAY ONLY POINT. a reference points at the text and cannot disagree with it, so a gathered event can never need rework — it is forward progress in the strict sense. the moment the record holds a READING (a paraphrase, a judgment that an angel is present, a claim about what is missing) it holds something that can be wrong, and being wrong at four hundred chapters is the cost the two fields exist to avoid.";
  "THE ONE THING THAT CAN STILL MOVE, and it is cheap: where the boundary between two events falls. regrouping is re-titling verse ranges, never re-reading, so it does not make the gather backwards-going.";
  "A TITLE IS STILL A SUMMARY, so keep it descriptive and neutral — it names the event so a later reference can point at it, and it is not the place to interpret one.";
  "AND THE CONSTRAINT THIS RECORD PUTS ON THE MECHANIC: every event is made of verses and of nothing else that is gathered here. so the one thing the player does, whatever it turns out to be, has to be made of verses — a mechanic needing speech works only where someone speaks, and a game whose action changes per event is four hundred games.";
  let fields = [
    {
      name: "title",
      holds:
        "a short descriptive name for the event, e.g. 'Abraham told to offer Isaac'",
      why: "the handle a later reference points at, and the only thing here that is written rather than pointed at — so it must not change once written",
    },
    {
      name: "passages",
      holds: "the references, as a list of {chapter_code, verses}",
      why: "references rather than text, so the translation stays swappable and the record never carries a copy of Scripture that could drift from its source. SEVERAL means several witnesses to one event, which is what makes Chronicles beside Kings stop being a special case",
    },
  ];
  return fields;
}
