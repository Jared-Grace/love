import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { g_arc_prompt_elder_requirements } from "./g_arc_prompt_elder_requirements.mjs";
export function g_arc_prompt_becoming(leader) {
  "The part of the arc prompt that says where this person ends up, as one block of lines.";
  "A leader's arc is not a longer arc of the same kind, and the turn count alone does not say so - it hands the writing call five times the turns with no reason for them, which reads as one very long conversation instead of a discipling.";
  "The elder qualifications are asked for HERE rather than in the profile deck, because they are character proven over time and a deck of circumstances holds neither. The deck can only say who is not a teenager.";
  "They are asked for as the arc's DESTINATION rather than as a description. Somebody who does not yet believe is not yet gentle, hospitable and proven - becoming that IS the arc, so a list handed over flat would be written as a person who was qualified from the first turn and had nowhere to go.";
  "NOT A RECENT CONVERT (1 Timothy 3 verse 6) looks unmeetable and is not, and how it was got wrong is worth keeping. It was first read as a rule the game breaks and then argued around, which is the wooden literalism that Jesus himself answers in Matthew 12 - David ate the bread of the Presence, the priests profane the Sabbath and are guiltless, I desire mercy and not sacrifice.";
  "The plain answer is that the GAME CLOCK IS NOT THE STORY CLOCK. A player meets this person over an hour; the person was discipled for as long as the story needs. John 21 verse 25 - the world could not hold the books - and the Gospels are a few pages, so Scripture is already the compression this is accused of. The prompt therefore asks for hinge moments rather than for every step, and the distance between two conversations is where the unwatched time goes.";
  ("That distance is REAL and not a licence the prompt takes. ",
    fn_name("g_plant_days"),
    " meets a person at most once a day and lays their conversations into whatever a day has room for, so the gap between one persons consecutive conversations falls out of the fitting rather than being chosen - measured over three seeded plants it ran from one day to twelve, commonest at one or two. The prompt can say the gap varies and is unknown because it does and it is.");
  ("A GLOBAL DAY MULTIPLIER was drafted for this and is not wanted. Striding the calendar several days at a time buys the same room, but it fixes one number for the whole game and so quietly settles how big a game may be - whether a playthrough could hold the whole Bible. A varying gap needs no such number, so that question stays open.");
  ("Titus 1 verse 5 and Acts 14 verse 23 still stand behind it - elders were appointed in towns months old - but they are the second answer rather than the first.");
  ("The reasoning stays HERE and only the instruction goes out. A prompt that argued its own case would be handing the writing call the judgment of where a requirement stops applying, and that judgment is not the writing call's to make.");
  let belief = [
    "Every person begins not yet believing, and eventually believes. So the arc runs unbeliever first, then disciple.",
    "Belief only moves forward. Once they believe, they never go back.",
  ];
  if (not(leader)) {
    let r = list_join_newline(belief);
    return r;
  }
  let requirements = g_arc_prompt_elder_requirements();
  let elder = [
    "",
    "THIS PERSON IS THE LEADER.",
    "The player is planting a house church. The player will leave the plant. Then this person will be the leader of the plant. This is the person the others are left with, so the arc goes further than belief: not yet believing, then a disciple, then somebody who can teach the rest and hold them together.",
    "That is what turns in multiple conversations are for. It is a discipling over many days, not one long conversation.",
    "Early on they ask about their own trouble. Later they ask how to answer somebody else's, what to do when one of them falls away, and how to keep going once the player is gone. So the later conversations turn outward.",
    "They still need answering from these passages. Do not write them as somebody who has outgrown Scripture.",
    "",
    requirements,
  ];
  let lines = belief.concat(elder);
  let r = list_join_newline(lines);
  return r;
}
