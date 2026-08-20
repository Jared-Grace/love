import { fn_name } from "./fn_name.mjs";
export function bible_events_genesis_22() {
  ("Genesis 22 gathered into events in the shape ",
    fn_name("bible_event_fields"),
    " describes — a title and the verses under it, nothing else. this is the WORKED INSTANCE the gather's shape was settled on, and the shape it settled on is two fields: see that function for why nine others were written and then taken out again");
  ("WHERE THE BOUNDARIES FALL, and why. a chapter is not an event — these four are cut where WHAT IS HAPPENING changes, which is what makes each one scene-sized. cutting them differently later costs a re-title of verse ranges and no re-reading, so the cut is not a decision anybody has to get right now");
  let events = [
    {
      title: "Abraham told to offer Isaac",
      who: ["Abraham"],
      passages: [
        {
          chapter_code: "GEN22",
          verses: "1-2",
        },
      ],
    },
    {
      title: "The three-day journey to Moriah",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "3-8",
        },
      ],
    },
    {
      title: "The knife stayed on the mountain",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "9-14",
        },
      ],
    },
    {
      title: "The oath sworn to Abraham a second time",
      passages: [
        {
          chapter_code: "GEN22",
          verses: "15-19",
        },
      ],
    },
  ];
  ("GEN22:20-24 is DELIBERATELY ABSENT. it reports the sons Milcah bore to Nahor, and nobody in it does anything — so it fails the gather's only filter, does something HAPPEN with agents. it is named here rather than silently dropped, because a silent drop cannot be checked by anyone reading this later");
  ("HEBREWS 11:17-19 IS ALSO ABSENT, and that is the harder call. it tells this event again and supplies the one thing Genesis withholds — that Abraham reckoned God able to raise the dead — but it tells it inside an argument rather than as narrative, so listing it here would have a cut-scene read the epistle's reasoning as if it were the scene. a RETELLING is not a witness. where a mechanic wants what a retelling supplies, it can ask for it then; the gather does not decide that in advance");
  return events;
}
