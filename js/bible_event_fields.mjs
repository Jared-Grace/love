export function bible_event_fields() {
  "the shape of ONE gathered Bible event — the durable reading artifact the Scripture-drama game is built on. an EVENT is the thing that happened; PASSAGES attach to it, so Kings and Chronicles telling the same event are two witnesses on one record rather than two records. every field here is DESCRIPTION — what the text says — and never a game decision (no difficulty, no player action, no weapon, no vantage), because a description cannot be invalidated by a mechanic nobody has invented yet, while a stored game decision would invalidate every event the moment the design moved. the inclusion test for a field is NOT 'might this be useful' but 'would recovering it later need a broad re-scan': whether an angel is present must be gathered while reading, since finding it afterwards means re-reading everything, whereas who spoke a line is left out because the passage reference recovers it by reading five verses";
  let fields = [
    {
      name: "name",
      holds: "a short stable human-readable name for the event, e.g. 'Abraham told to offer Isaac'",
      why: "the identity a second witness and an `after` reference both point at, so it must not change once written",
    },
    {
      name: "who",
      holds: "the agents the text places in the event, as a list of names",
      why: "the primary MATCH KEY — a streaming pass reading Chronicles after Kings finds the existing event by who and what, and without a matchable identity it silently writes a duplicate instead of a second witness",
    },
    {
      name: "where",
      holds: "the place the text names, or empty when it names none",
      why: "part of the match key, and empty is a real answer rather than a hole to fill",
    },
    {
      name: "when",
      holds: "what the text itself says about timing, relative or absolute, or empty",
      why: "the text's own claim, kept apart from the ordering fields below so a reading is never confused with an inference",
    },
    {
      name: "happens",
      holds: "what occurs, in plain words",
      why: "the description proper — the one field a scene cannot be built without",
    },
    {
      name: "passages",
      holds: "the witnesses, as a list of {chapter_code, verses}",
      why: "references rather than text, so the translation stays swappable and the record never carries a copy of Scripture that could drift from its source",
    },
    {
      name: "after",
      holds: "the names of events this one follows where the text establishes it, as a list",
      why: "order as the text gives it — within a narrative book this is free, so it is recorded rather than derived later",
    },
    {
      name: "order_uncertain",
      holds: "why this event's position is not settled, or empty when it is",
      why: "some orderings are genuinely disputed (Job's date, Ezra against Nehemiah, Galatians against Acts 15) and forcing one would make a claim Scripture does not. recording the uncertainty is description; resolving it silently is not",
    },
    {
      name: "angels_present",
      holds: "whether the text places an angel or messenger in this event",
      why: "the subject of the game that reads this, and it passes the inclusion test — recovering it afterwards means re-reading every chapter",
    },
    {
      name: "wrongdoing_shown",
      holds: "whether the text shows someone doing wrong here",
      why: "also needs a broad re-scan to recover. NOTE it is the TEXT's presentation being recorded, not a ruling this record makes, and what a game does with it belongs to the game",
    },
    {
      name: "gaps",
      holds: "a list of {missing, filled_by} — what this passage does not say, and the passages elsewhere in Scripture that do say it; filled_by empty means genuinely unfilled",
      why: "the field that keeps invention small. Genesis 22 gives no interior until Hebrews 11:19 supplies it, and Genesis omits Joseph's fetters until Psalm 105:18 supplies them. gathering this while the chapter is open is far cheaper than reconstructing it, and a pass that skips it means reading the whole Bible twice",
    },
  ];
  return fields;
}
