import { not } from "./not.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function g_arc_prompt_becoming(leader) {
  "The part of the arc prompt that says where this person ends up, as one block of lines.";
  "A leader's arc is not a longer arc of the same kind, and the turn count alone does not say so - it hands the writing call five times the turns with no reason for them, which reads as one very long conversation instead of a discipling.";
  "The elder qualifications are asked for HERE rather than in the profile deck, because they are character proven over time and a deck of circumstances holds neither. The deck can only say who is not a teenager.";
  "They are asked for as the arc's DESTINATION rather than as a description. Somebody who does not yet believe is not yet gentle, hospitable and proven - becoming that IS the arc, so a list handed over flat would be written as a person who was qualified from the first turn and had nowhere to go.";
  "NOT A RECENT CONVERT (1 Timothy 3 verse 6) looks unmeetable and is not, and how it was got wrong is worth keeping. It was first read as a rule the game breaks and then argued around, which is the wooden literalism that Jesus himself answers in Matthew 12 - David ate the bread of the Presence, the priests profane the Sabbath and are guiltless, I desire mercy and not sacrifice.";
  "The plain answer is that the GAME CLOCK IS NOT THE STORY CLOCK. A player meets this person over an hour; the person was discipled for as long as the story needs. John 21 verse 25 - the world could not hold the books - and the Gospels are a few pages, so Scripture is already the compression this is accused of. The prompt therefore asks for hinge moments rather than for every step, and the years are what the distance between conversations is made of.";
  "Titus 1 verse 5 and Acts 14 verse 23 still stand behind it - elders were appointed in towns months old - but they are the second answer rather than the first.";
  let belief = [
    "All npcs begin not yet believing, and eventually they believe. So the arc will have unbeliever first, then disciple.",
    "Belief only moves forward. Once they believe, they never go back.",
  ];
  if (not(leader)) {
    let r = list_join_newline(belief);
    return r;
  }
  let elder = [
    "",
    "THIS PERSON IS THE LEADER.",
    "The player will leave. This is the person the others are left with, so the arc goes further than belief: not yet believing, then a disciple, then somebody who can teach the rest and hold them together.",
    "That is what the turns are for. It is a discipling over many days, not one long conversation.",
    "So the later conversations turn outward. Early on they ask about their own trouble. Later they ask how to answer somebody else's, what to do when one of them falls away, and how to keep going once the player is gone.",
    "They still need answering from these passages. Do not write them as somebody who has outgrown Scripture.",
    "",
    "1 Timothy 3 and Titus 1 say who an elder may be. Almost all of it is character, so none of it is settled by the JSON above - it is EARNED across the arc.",
    "Treat it as where the arc arrives. They do not begin qualified. By the last conversations, somebody reading only what this person says should be able to see that they are - without it ever being said.",
    "  a one-woman man - the Greek of 1 Timothy 3 verse 2 is mias gynaikos andra, faithful to one. If the JSON says married, they have ONE wife and never more than one. If it says widowed or unmarried, faithfulness to one is still what shows.",
    "  if they are married or have children, they prove it AT HOME FIRST - 1 Timothy 3 verses 4 and 5 ask how somebody who cannot manage his own household will care for God's church. So the household is put right before the room is, never after. Let their trouble be one that tests it, and let them come through it.",
    "  hospitable, gentle, not quarrelsome, not greedy, well thought of by outsiders. Sober in a hard place.",
    "Write every one of these as something that SHOWS in what they say. Never have them announce that they are qualified, and never have the player tell them they are.",
  ];
  let lines = belief.concat(elder);
  let r = list_join_newline(lines);
  return r;
}
