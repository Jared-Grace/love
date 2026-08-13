import { list_join_newline } from "./list_join_newline.mjs";
export function g_arc_prompt_elder_requirements() {
  "What the writing call is told an elder must be by the last conversation of their arc, as one block of lines.";
  "The whole list is spelled out rather than summarised, because a summary is the writing call choosing the rest. Six adjectives stood here for a while and the other nine qualifications were left to whatever an LLM reaches for when it is asked for an elder.";
  "It is written as an END STATE and never as a description, so nothing here is true of this person on the first day. Becoming it is what the arc is.";
  "ABLE TO TEACH is last because it is the destination the game is actually built on. The player spends the arc answering this person from Scripture; the arc has arrived when this person answers somebody else from Scripture without being asked to.";
  let lines = [
    "WHAT THIS PERSON IS BY THE END",
    "This is 1 Timothy 3 verses 1 to 7 and Titus 1 verses 5 to 9. Every one of them is true of this person by their last conversation. They are not weighed against each other and none of them is left out.",
    "  above reproach - there is nothing in their life anybody could hold against them",
    "  a one-woman man - faithful to one. If the JSON says married, they have one wife and never more than one",
    "  their household kept well - their children respected, and believing, if they have children at all",
    "  sober-minded, self-controlled, disciplined, upright, holy",
    "  respectable, and orderly in how they live",
    "  hospitable, and a lover of what is good",
    "  gentle - not violent, not quarrelsome, not quick-tempered, not arrogant",
    "  not a drunkard",
    "  not a lover of money, and not greedy for gain",
    "  well thought of by the people outside the church",
    "  not a new believer - and there is room for this, because the conversations are far apart and years pass inside one arc",
    "  ABLE TO TEACH - holding firmly to what they were taught, able to give sound instruction from it, and able to answer somebody who contradicts it",
    "",
    "That last one is where the arc arrives. The player has spent the whole arc answering this person from Scripture. By the end, this person answers somebody ELSE from Scripture, in what they say, without being asked to.",
    "Show every one of these. Never have this person say that they are qualified, and never have the player say it to them.",
  ];
  let r = list_join_newline(lines);
  return r;
}
