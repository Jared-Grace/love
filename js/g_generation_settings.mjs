import { g_day_matches } from "./g_day_matches.mjs";
import { g_day_lines } from "./g_day_lines.mjs";
export function g_generation_settings() {
  "Every number a church-plant's content is generated from, in one place, so a run is repeatable from this file alone and never from a conversation somebody had once.";
  "Only CHOSEN numbers live here. Anything a sum can reach - conversations in a day, matches in a plant, how many people the arcs come to - is worked out by the plan that reads this, because a number written down twice is a number that can disagree with itself.";
  "The two that already had names keep them. Matches in a day and sermon lines in a day are read from their own functions rather than copied, so this cannot drift from the pacing the rest of the game is built on.";
  "A conversation's length is a DRAW, not a size, so it takes three numbers rather than one - a low end, a middle it sits near, and a high end it rarely reaches. One npc is short some days and long others, and that variety is wanted.";
  "The low end is a setting because getting into a conversation costs a fixed price - walk over, tap the player, pray, pick the prayer, tap the person, ask for discernment, choose an opener - and a conversation holding one or two turns spends more of itself on the approach than on the Scripture it exists to reach. It also fixes the most conversations a day can hold, which is why that number is worked out rather than written down.";
  "The swap count is how many times the finished arc lengths are nudged - two arcs picked, one giving a turn to the other - which takes the arithmetic out of a descending list without changing the total or the number of people. Fifty is enough for the lengths to stop looking counted and few enough that the descent's shape survives. It is seeded on the chapter code, so a chapter always lands the same way.";
  "The leader is measured in DAYS, as a share of the plant's own length, rather than in a count of conversations. A flat ten-to-twelve said the same thing about a five-day plant and a twenty-day one, and it can only be right about one of them.";
  "EVERY day is the share, floor and ceiling alike, so the leader is one of the day's three conversations and the other two are whoever else has something to say. That is what a day of discipling looks like, and it is also the only share that stays honest as a plant changes length.";
  "It was half the days, which read as a floor but behaved as a spread: the leader's turns were laid down at a conversation's usual length across three days in four, so the leader was most of what a day held while never being the whole of any day. Meeting them once every day and letting the room fill the rest says the same total in a shape somebody can recognise.";
  "There is no number here for how many people a plant's cast holds, and the absence is deliberate. That count is worked out from what the preaching pays for once the leader is taken off the top, so writing it down here would be a second answer to a question that already has one, free to disagree with it.";
  "It WAS written here for a while, as a ten-thirteen-sixteen draw, because deriving it came out at about six however big the plant was. The fault was never the deriving: the leader's length was capped at a share of the budget, and a share grows with what it is a share of, so every extra turn a bigger plant won went back to the leader. Cutting that cap put the count back where it belongs and emptied these three keys.";
  "A hundred turns is the least the leader may be worth, and it is the ONE number here that decides how long a plant has to be. Everything else about a plant scales with its length - more days means more matches, more converts, longer arcs - so nothing else has a floor. The leader does, because an elder is formed over a fixed amount of time and a plant too short to do that has no elder to appoint at the end of it.";
  "The day range is DESCRIPTION and not a promise. A plant ends when its arcs run out, arc turns are drawn, and nothing anywhere stops a run of short ones ending one early - so these three say what a scheduled plant comes to, and a generator that missed them would be telling the truth about itself while this file lied.";
  "Forty seeds were scheduled at thirteen people and fifty-six matches: the mean came to seventeen and a half, the longest to twenty-one, and the shortest to thirteen. The floor was written at fifteen and two of the forty went under it, so it moved down to what was measured rather than the plants being forced up to it. Nothing was protecting anything - the floor exists so the leader can reach their hundred turns, nine days is enough for that, and the shortest plant still gave them a hundred and sixty-eight.";
  "The ceiling is every day. That is the logical bound rather than a preference - an npc holds one conversation a day, so the leader cannot be seen more often than the plant has days. Lower it if a leader who is always there stops feeling like a choice.";
  "The fewest CONVERSATIONS an arc may hold is one, and a one-conversation arc is a whole person rather than a thin one - somebody who hears and believes, and whose discipling then happens through the other believers rather than on screen. Holding the floor at three bought nothing and cost variety, because the budget then had to go into fewer, longer arcs.";
  "An arc's TURNS are drawn directly rather than counted out in conversations, because a conversation is itself a draw and multiplying two draws together says nothing either of them meant. Thirty is two and a half conversations at the usual length - long enough to hear and believe and be answered once, short enough that a room holds a dozen of them.";
  "The CAST and the ROOM are two different counts and only one of them is here. The cast is how many arcs get written for a chapter-group, drawn once and met by every player, and it is derived. The room is how many of those people one save groups together, and that one is chosen, under the plant_npcs names below. They were once a single set called plant_npcs, and that name made a false claim: it read as the size a plant may be, so it said a plant is never smaller than ten when a first plant is always six.";
  "How many people a plant holds is a RAMP over the plants already planted, not a draw around one number. A first plant is small because a first plant is always small - nobody's first church is twelve disciples - and the size settling near thirteen later is what makes the Lord's Supper table an arrival rather than the default. Six is where it starts and six plants is how long it takes to settle.";
  "Past the settle the size stays there, and a bigger room is a separate rare event rather than the top of a wider draw. Widening the draw was tried on paper and put more than half the settled plants at fourteen or above, because spreading a bell's upper half over three numbers makes each of them common. A one-in-ten roll says the rare thing rarely and says it in one number somebody can move.";
  "Below the target a plant may fall two, so a settled plant is eleven to thirteen rather than always thirteen. A church that lost people is as real as one that grew.";
  "Eleven areas is the escalation ladder's own length - a rung apiece - and it is a CEILING rather than a count. A selection that only makes three plants climbs three rungs, because one plant cannot be a whole escalation; a selection twice the size climbs the same eleven more slowly. What it is NOT is the number of books, which is the player's choice and says nothing about pacing.";
  "The pool multiple is how many npcs are written for every one a single playthrough meets. One means every game meets everybody in a different order and grouping; two means a game meets half of them and a second game is genuinely new people.";
  let day_matches = g_day_matches();
  let day_lines = g_day_lines();
  let r = {
    day_matches,
    day_lines,
    conversation_turns_low: 6,
    conversation_turns_mean: 12,
    conversation_turns_high: 24,
    plant_days: 18,
    plant_days_minimum: 13,
    plant_days_maximum: 21,
    leader_days_percent_minimum: 100,
    leader_days_percent_maximum: 100,
    leader_turns_minimum: 100,
    arc_conversations_minimum: 1,
    arc_conversations_maximum: 9,
    plant_npcs_maximum: 16,
    arc_turns_low: 12,
    arc_turns_mean: 36,
    arc_turns_high: 90,
    plant_npcs_first: 6,
    plant_npcs_settle: 13,
    plant_npcs_settle_plants: 7,
    plant_npcs_below_settle: 2,
    plant_npcs_large_percent: 10,
    npc_pool_multiple: 1,
    areas_maximum: 11,
    sender_areas: 1,
    question_matches_percent: 25,
    arc_length_swaps: 50,
    npcs_available_minimum: 4,
  };
  return r;
}
