export async function g_arc_lengths(chapter) {
  "Works out how long each arc in one chapter should be, from the settings and the chapter's own passage grouping - so the npc count falls out as the length of the list rather than being chosen.";
  "Everything is measured in CONVERSATIONS, not in matches, because the thing that can fail to schedule is days: an npc is talked to once a day, so an arc of nine conversations needs nine days and a chapter only has as many days as it has passage groups.";
  "Three ceilings sit on the longest arc and the smallest wins - the settings' own maximum, a quarter of the arc budget so no one person eats the chapter, and the chapter's day count.";
  "Lengths descend by one from that ceiling and then sit at the minimum, longest first, because a long arc is the hardest thing to place and should be placed while the space is empty. Whatever is left at the end is a short tail arc, which always fits.";
  let settings = g_generation_settings();
  let groups = await g_sermon_chapter_groups(chapter);
  let days = groups.length;
  let lines = await g_sermon_chapter_lines(chapter);
  let matches = g_passage_match_count(lines);
  let question_share = multiply(matches, settings.question_matches_percent);
  let question_matches = Math.round(divide(question_share, 100));
  let arc_matches = subtract(matches, question_matches);
  let conversations = Math.floor(divide(arc_matches, settings.conversation_turns));
  let quarter = divide(arc_matches, 4);
  let cap_share = Math.floor(divide(quarter, settings.conversation_turns));
  let cap = Math.min(settings.arc_conversations_maximum, cap_share, days);
  let minimum = settings.arc_conversations_minimum;
  let lengths = [];
  let remaining = conversations;
  let length = cap;
  for (let step = 0; step < conversations; step++) {
    if (less_than(remaining, minimum)) {
      break;
    }
    if (less_than(length, minimum)) {
      break;
    }
    let take = Math.min(length, remaining);
    list_add(lengths, take);
    remaining = subtract(remaining, take);
    if (greater_than(length, minimum)) {
      length = subtract(length, 1);
    }
  }
  if (greater_than(remaining, 0)) {
    list_add(lengths, remaining);
  }
  let npcs = lengths.length;
  let npcs_minimum = Math.max(
    Math.ceil(divide(settings.day_matches, settings.conversation_turns)),
    settings.npcs_available_minimum,
  );
  let npcs_floor_met = greater_than_equal(npcs, npcs_minimum);
  let r = {
    chapter,
    days,
    lines,
    matches,
    question_matches,
    arc_matches,
    conversations,
    cap,
    lengths,
    npcs,
    npcs_minimum,
    npcs_floor_met,
  };
  return r;
}
