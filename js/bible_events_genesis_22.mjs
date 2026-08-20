import { fn_name } from "./fn_name.mjs";
export function bible_events_genesis_22() {
  ("one chapter gathered into events in the shape ",
    fn_name("bible_event_fields"),
    " describes — the WORKED INSTANCE, written against the BSB text of GEN22 rather than from recall, so the record's shape is checked by use before anything is gathered in volume. Genesis 22 was chosen because it exercises the hard parts at once: an angel arrives partway through, the chapter does not say what Abraham was thinking, and the chapter ends with a genealogy that must NOT become an event. nothing here is a game decision — no vantage, no player action, no difficulty");
  ("TWO THINGS THIS INSTANCE SETTLED. first, a chapter is not an event: verses 1-19 hold four, and drawing the boundary where WHAT IS HAPPENING changes is what makes each one scene-sized. boundaries stay cheap to redraw because every event carries verse ranges rather than a position. second, a RETELLING is not a second witness — Hebrews 11:17-19 tells this event again inside an argument, and putting it in passages would have a cut-scene read Hebrews' reasoning as if it were the scene. it belongs in gaps.filled_by, which is where a retelling is actually useful: it supplies what the narrative omits. so a second witness is a parallel NARRATIVE (Chronicles beside Kings), and no new field was needed to say so");
  let events = [
    {
      name: "Abraham told to offer Isaac",
      who: ["God", "Abraham"],
      where: "",
      when: "some time later (22:1)",
      happens:
        "God tests Abraham, calls him by name, and tells him to take Isaac to the land of Moriah and offer him there as a burnt offering on a mountain God will show him.",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "1-2",
        },
      ],
      after: [],
      order_uncertain: "",
      angels_present: false,
      wrongdoing_shown: false,
      gaps: [
        {
          missing:
            "what testing means here, given that the command is to do what God elsewhere forbids",
          filled_by: "James 1:13; Jeremiah 19:5",
        },
        {
          missing: "where Abraham was when the command came",
          filled_by: "Genesis 21:33-34 places him in Beersheba beforehand",
        },
      ],
    },
    {
      name: "The three-day journey to Moriah",
      who: ["Abraham", "Isaac", "two servants"],
      where: "toward the land of Moriah",
      when: "the next morning, and the place seen on the third day (22:3-4)",
      happens:
        "Abraham sets out early with wood, fire and a knife. He leaves the servants with the donkey, saying that he and the boy will worship and both return. Isaac carries the wood and asks where the lamb is; Abraham answers that God will provide it, and they walk on together.",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "3-8",
        },
      ],
      after: ["Abraham told to offer Isaac"],
      order_uncertain: "",
      angels_present: false,
      wrongdoing_shown: false,
      gaps: [
        {
          missing: "what Abraham expected, given that he says both will return",
          filled_by:
            "Hebrews 11:17-19 — he considered that God was able to raise the dead",
        },
        {
          missing: "Isaac's age, and whether he understood what was intended",
          filled_by: "",
        },
      ],
    },
    {
      name: "The knife stayed on the mountain",
      who: ["Abraham", "Isaac", "the angel of the LORD", "a ram"],
      where: "the place God had designated, a mountain in Moriah",
      when: "on arrival, after the three-day journey",
      happens:
        "Abraham builds the altar, arranges the wood, binds Isaac and lays him on it, and takes the knife. The angel of the LORD calls from heaven and stops him, saying that he now knows Abraham fears God and has not withheld his only son. Abraham sees a ram caught by its horns and offers it instead, and names the place The LORD Will Provide.",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "9-14",
        },
      ],
      after: ["The three-day journey to Moriah"],
      order_uncertain: "",
      angels_present: true,
      wrongdoing_shown: false,
      gaps: [
        {
          missing: "whether Isaac resisted the binding",
          filled_by: "",
        },
        {
          missing: "which mountain, of the mountains of Moriah",
          filled_by: "2 Chronicles 3:1 names Mount Moriah as the temple's site",
        },
      ],
    },
    {
      name: "The oath sworn to Abraham a second time",
      who: ["the angel of the LORD", "Abraham"],
      where: "the same mountain",
      when: "a second call, immediately after the ram (22:15)",
      happens:
        "The angel of the LORD calls a second time and swears by God Himself: because Abraham did this and did not withhold his only son, his descendants will be multiplied like the stars and the sand, will possess the gates of their enemies, and through his offspring all nations of the earth will be blessed. Abraham then returns to the servants and settles in Beersheba.",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "15-19",
        },
      ],
      after: ["The knife stayed on the mountain"],
      order_uncertain: "",
      angels_present: true,
      wrongdoing_shown: false,
      gaps: [
        {
          missing: "who the offspring through whom all nations are blessed is",
          filled_by: "Galatians 3:16",
        },
      ],
    },
  ];
  ("GEN22:20-24 is DELIBERATELY ABSENT. it reports the sons Milcah bore to Nahor, and nobody in it does anything — so it fails the gather's only filter, does something HAPPEN with agents. it is kept named here rather than silently dropped because it is the exact case the filter exists for, and because it does carry one thing a later event needs: Rebekah's parentage, which Genesis 24 uses");
  return events;
}
