import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { words_reached_for_plain_lines } from "./words_reached_for_plain_lines.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
import { g_openers_lines } from "./g_openers_lines.mjs";
import { g_arc_prompt_arguments_assert } from "./g_arc_prompt_arguments_assert.mjs";
import { g_arc_catch_up_name } from "./g_arc_catch_up_name.mjs";
import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { g_arc_answer_field_lines } from "./g_arc_answer_field_lines.mjs";
import { g_arc_answer_example } from "./g_arc_answer_example.mjs";
import { g_arc_prompt_becoming } from "./g_arc_prompt_becoming.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { g_openers_unbeliever } from "./g_openers_unbeliever.mjs";
import { g_openers_disciple_arc } from "./g_openers_disciple_arc.mjs";
import { g_generation_settings } from "./g_generation_settings.mjs";
export function g_arc_prompt(
  chapter_code,
  verses_text,
  turn_target,
  profile,
  leader,
  written_text,
) {
  "$plain profile";
  "$plain written_text";
  "$plain chapter_code";
  "The LLM prompt that writes one person/arc, as one string ready to send.";
  "ONE PERSON A CALL, not the whole chapter's cast (fewer tokens - higher LLM quality)";
  "The profile (gender, age, etc.) is RECEIVED rather than LLM decide.";
  ("the profile is one of ", fn_name("g_profiles"), ".");
  ("turn_target is drawn for this person by ", fn_name("g_npc_pool"), ".");
  ("leader says this is the one convert the plant is left with as its elder - one per plant, dealt from ",
    fn_name("g_profiles_leader"),
    ".");
  ("~Twelve turns make a conversation, and one person holds at most one conversation a day, so seventy turns is about six days this person is met on - not six days running, because the player's day holds a conversation with everybody else too.");
  ("LLM groups 'turn_target' turns into conversations.");
  ("WHAT THE CHAPTER ALREADY HOLDS ARRIVES AS AN ARGUMENT, written by ",
    fn_name("g_arc_prompt_written"),
    " - who has been written, and how many turns have answered out of each passage so far. Both of those used to be missing, and each was missing in the same way: this call could only see itself, so it wrote a person nobody else had met and evened out a chapter it believed it was the first to touch.");
  ("It comes in AS TEXT rather than as the arcs themselves, because reading arcs is the one thing this function must not do. It is handed everything it says and so can be rendered for any arguments at all, which is what lets a gate check the shape of a prompt on a machine where nothing has been generated.");
  ("EMPTY IS THE FIRST PERSON of a chapter and the section is left out whole. Nobody written and every passage at zero is a paragraph saying nothing, and the writer would weigh it anyway.");
  ("Converts are written before the leader for the same reason: the elder's turns are one per sermon line of the plant, so that arc is the largest single lever on coverage and wants the fullest count to aim with.");
  g_arc_prompt_arguments_assert(
    chapter_code,
    verses_text,
    turn_target,
    profile,
    leader,
    written_text,
  );
  let list = g_openers_unbeliever();
  let unbeliever_lines = g_openers_lines(list);
  ("The disciple openers arrive WITHOUT the Bible question door. A question is one turn with no floor, drawn from a pool that is subtracted from the chapter's matches before arcs are sized at all, so a question turn written into an arc is a turn already paid for elsewhere. The list not offering it is what keeps it out.");
  let list5 = g_openers_disciple_arc();
  let disciple_lines = g_openers_lines(list5);
  let s = g_generation_settings();
  let turns_low = property_get(s, "conversation_turns_low");
  let turns_mean = property_get(s, "conversation_turns_mean");
  let turns_high = property_get(s, "conversation_turns_high");
  let chapter_named = ebible_chapter_code_label(chapter_code);
  let preaching = list_join_space([
    "The player is answering from",
    chapter_named,
  ]);
  let joined = list_join_empty([preaching, "."]);
  ("The chapter named here is the one the plant is STANDING IN, and a leader is handed more than it. The passages say which chapter each of them is from, so the line stays true as written - it says where the player is, not what the whole list is drawn from.");
  let joined9 = list_join_space(["Aim for", turn_target, "turns."]);
  let unbeliever_block = list_join_newline(unbeliever_lines);
  let joined6 = list_join_newline([
    "openers for somebody who does not yet believe, one of:",
    unbeliever_block,
  ]);
  let disciple_block = list_join_newline(disciple_lines);
  let joined7 = list_join_newline([
    "openers for somebody who already believes, one of:",
    disciple_block,
  ]);
  let joined8 = list_join_space([
    "A conversation holds about",
    turns_mean,
    "turns. The fewest is",
    turns_low,
    "and the most is",
    turns_high,
    "turns.",
  ]);
  ("THE VOCABULARY IS ASKED FOR AND THE VOICE IS NOT, and the line is worded to keep those apart. A rare word carries none of what makes a person sound like themselves - the rhythm, what they notice, what they will not say - so a smaller vocabulary takes nothing away from a writer, while telling one how to phrase a sentence takes the sentence away from them.");
  ("It also asks for nothing new. The fit rule above already wants a reader able to point at what in the person's line the passage answers, and the plainest word is nearly always the most concrete one - so a line that names a category rather than a thing was already failing that test, and this says out loud why.");
  ("The age is READ rather than written here, because a gate over what has been written has to measure against the same number the writing was asked for.");
  ("IT COVERS THE UNSPOKEN FIELDS TOO, and that was added rather than assumed. It first asked only for the words the person SAYS, which is the only text a child ever meets - and the occupation, the trouble and the summary looked like they were nobody's business, being written for the next call rather than for a player. They are not, for two reasons. The four fields are written in ONE answer by one writer, so a register let loose in three of them is the register the fourth is written beside; the dyer's summary said she had practised her household religion, and her spoken lines said rites three times. And the summary alone is handed to the prompt that writes the NEXT person, so a hard word there is not sitting still - it is the example the following arc is written from.");
  ("THE WORDS ARE NAMED BECAUSE THE RULE ALONE DOES NOT WORK, and that is measured rather than supposed. The sentence above has always been in this prompt, and the two arcs written under it reached past a child's vocabulary on fifty of a hundred and ten lines - one of them for SINCE five times. The writer was not breaking the rule; it cannot tell that SINCE is hard, because nothing in the word says so and no amount of care recovers a fact about a reader from the word itself. So the rule is kept and the answer is written down beside it.");
  ("The plain twin is given rather than the fault alone. Told only what not to write, a writer works around the word and the sentence comes out bent; handed what to write instead, there is nothing left to decide.");
  let reading_age = property_get(s, "reading_age");
  let reached_for = words_reached_for_plain_lines();
  let joined2 = list_join_space([
    "Write every word of your answer so a child of",
    reading_age,
    "could read it - the lines the person speaks, and the occupation, trouble and summary beside them. Where the plain word and the exact word differ, take the plain one; where you need something a child that age has no word for, have the person show the thing rather than name it - what they do, in the words they would use while doing it.",
  ]);
  let plain_words = list_join_newline([
    joined2,
    "These are the words writers reach for here past what that child has, and what to write in place of each. Do not use the word on the left.",
    reached_for,
  ]);
  let becoming = g_arc_prompt_becoming(leader);
  ("The field list and the answer example are BOTH rendered from one source, so a renamed field cannot be described here and missing from the shape at the end. A prompt never fails, so that disagreement would have gone out unnoticed on every call.");
  let fields = g_arc_answer_fields();
  let fields2 = property_get(fields, "person");
  let person_lines = g_arc_answer_field_lines(fields2);
  let person_fields = list_join_newline(person_lines);
  let fields3 = property_get(fields, "conversation");
  let conversation_lines = g_arc_answer_field_lines(fields3);
  let conversation_fields = list_join_newline(conversation_lines);
  let fields4 = property_get(fields, "turn");
  let turn_lines = g_arc_answer_field_lines(fields4);
  let turn_fields = list_join_newline(turn_lines);
  let example = g_arc_answer_example();
  let catch_up = g_arc_catch_up_name();
  let catch_up_first = list_join_space([
    "On conversations after the first, the conversation begins by the person greeting (you don't generate greeting) and then speaks their",
    catch_up,
    "before anything else.",
  ]);
  let catch_up_blind = list_join_space([
    "Then the player picks the opener while playing, so the",
    catch_up,
    "cannot answer the opener. You choose the order of the turns/openers, so choose a",
    catch_up,
    "that will come before the person speaking their answer to the first opener.",
  ]);
  ("THE OPENERS SIT IN THE TURN SECTION because the turn field describing 'opener' tells the writer to copy the word from the opener lines above it. They used to be rendered after that field list, so 'above' named something not yet shown - and the three numbered steps that stood here instead said what the opener lines say anyway, with less in them.");
  ("The catch_up pair stays BELOW the field list, because those two lines name a field, and moving them up with the openers would only trade one forward reference for another.");
  ("NEVER ON ONE WORD is there to keep an answer off ground a translation could move. Where translations disagree they disagree about SINGLE WORDS - monogenes is only begotten or one and only, and both are defensible readings of a contested root - while the sentence around the word says the same thing either way. So an answer resting on one word's precise sense is an answer resting on a translator's choice, and the player is reading one translation and cannot see that a choice was made.");
  ("IT NOW NAMES THE ORIGINAL, and that was decided rather than drifted into. The line first said only 'never on the precise sense of a single word', which asked for no knowledge of which words are contested - a flat ban avoids every contested word without knowing which they are, at the cost of banning uncontested ones too. It now bars a word's English sense only where that sense disagrees with the Greek, Hebrew or Aramaic, which is narrower and truer and does ask the writer to know where the two differ. Where it does not know, the sentence around the word still has to carry the answer, because the line above already wants a fit plain to somebody who has never read the Bible.");
  ("THE BAN NAMES WHO IT MEANS NOW, because as written it took away somebody the openers ask about. It said only 'no other townspeople - this person knows none of them', while one of the three doors to a believer asks how ministering to their NEIGHBOUR is going. A person whose profile gives them a husband and children can send those turns through their household; one dealt single and childless has nobody left, and the only way to answer is to invent the person the line just forbade.");
  ("What the ban was ever protecting is the people at the plants. Each of those is written by a call that never sees this one, so this person saying what another of them believes can contradict that person's own arc with nothing to catch it. Somebody the person knows who is at no plant cannot collide with anything, because no other arc knows they exist - so the ban is now spelled as the people at a plant, and household, family and friends are allowed out loud beside it.");
  ("It also asks for nothing new. The line above it already wants an answer plain to somebody who has never read the Bible, and an answer turning on one word's precise sense already fails that - so this says out loud what the fit test was already asking for.");
  ("THE UNMISTAKABLE RULE REACHES PAST PRONOUNS, and it was widened because a written line got through it. The dyer asked what she should do with what is actually MINE, and a reader could not tell what she meant - her wool, her wrongdoing, her money, the part of her life she had not handed over. Nothing there is a pronoun, so the rule as it stood had nothing to say. A phrase like that is worse than a bare pronoun rather than better: it reads as though the thing had been named somewhere, so the player goes looking back for a naming that never happened, and the plain word ACTUALLY makes it sound like a distinction they were meant to have followed.");
  ("THE PLAYER IS NOT AN EYEWITNESS, and the line saying so is here because two written arcs already assumed otherwise. In the game somebody sent to this town tells the player the gospel before the player tells anybody, so the player is one link along a chain and not the start of it - and a person who asks the player what he looked like is asking a question the player cannot answer at all.");
  ("The rule above it was not enough on its own. 'Nothing about the player' bans what a writer says ABOUT the player; this bans what a writer ASSUMES about them, which is a different thing and shows up in lines that never mention the player's past at all - SEEN AND TOUCHED, THAT IS A DIFFERENT KIND OF STORY reads as a person answering somebody who was there.");
  ("It leaves the passage alone. Where the Scripture itself says WE HAVE SEEN AND OUR HANDS HAVE TOUCHED, that is the writer of the letter speaking and the person may say so - what is barred is the person putting the player inside that WE.");
  ("The section carries its OWN blank line above and below it, and is one empty entry when there is nothing written. Written as an ordinary entry between two blank ones, an empty section would print two blank lines running - which is the shape a reader takes for a section that failed to render rather than one that was correctly left out.");
  let written_said = "";
  let written_any = text_empty_not_is(written_text);
  if (written_any) {
    written_said = list_join_newline(["", written_text, ""]);
  }
  let json = json_format_to(profile);
  let lines = [
    "This is a Christian game about sharing the gospel.",
    "The setting is 1st-2nd century while Rome is persecuting Christians.",
    "The player walks up to somebody, hears what they say, and answers with a perfectly relevant and appropriate (including empathetic / affirming if loving and truthful) passage of Scripture.",
    "",
    "THE CHAPTER",
    joined,
    "These passages are the only Scripture you may answer from. Each line is one passage: in square brackets its chapter, a colon, and its verse numbers, then its text.",
    "More than one chapter may be listed. Two passages from two different chapters and/or books can carry the same verse numbers, so a passage needs its book and chapter along with verse numbers to identify it - which is why you name a passage by copying everything inside its brackets, and never a part of it.",
    verses_text,
    "",
    "Here is JSON about the person:",
    json,
    "These facts are settled. Do not change them. Do not create a hateful caricature. It is okay if their speech lovingly reflects the JSON and setting.",
    "",
    "THE TURNS",
    "The player chooses an opener. Then the person answers the opener, then the player answers them with a passage chosen from a list, then the person says something afterward. Those three are one turn.",
    "One opener can take more than one turn. On every turn after the first, the person is still answering that same opener - they bring up the next thing they have to say about it, and the player answers that with a passage too.",
    "While playing, the person's afterward line and their next answer are read one after the other, so do not say the same thing twice across them.",
    "A conversation uses each opener at most once, and the turns under one opener are back-to-back: the player opens a topic once, and the person carries it until it is done, before the player opens another.",
    "Here are the openers. Each one gives the name of the opener, then what the player says when they choose it, then what kind of response the person says back:",
    joined6,
    joined7,
    "",
    "CHOOSING PASSAGES",
    "Goal is each passage is used an equal number of times, and closer to equality is better than further.",
    "Relevance and appropriateness are more important than equally using each passage - do not use passages by force.",
    "There are far more turns than there are passages, so you will answer with the same passages many times over. That is expected and is not a failure.",
    "One passage answers one turn, and the fit has to be obvious. Somebody who has never read the Bible plays this game. So write each thing the person says so that a single passage above is plainly the answer to it - not true-but-sideways or indirect or through inferencing, and not an answer that corrects how they are reasoning rather than what they said.",
    "Be explicit. Name the thing in the same plain terms the passage uses for it, rather than gesturing at it - a reader should be able to point at what in the person's line the passage answers, without having to be told.",
    "Every pronoun must be unmistakable, with whoever or whatever it stands for named in the same sentence. So must every phrase that stands in for a thing without naming it - what is actually mine, the rest of it, all of that - which reads as though the thing were named somewhere and leaves the player hunting for where. Name the thing. The player reads one line at a time and has nobody to ask what was meant.",
    "Where a passage speaks in an image, what the person says connects to what that passage plainly says, and never to what the image suggests anywhere else.",
    "What the person says should rely on what the passage plainly means, never on the precise sense of a single word if that sense in English disagrees with the Greek/Hebrew/Aramaic meaning.",
    written_said,
    "LENGTH",
    joined9,
    "This is a target, not a quota. Turns following from/relevant to the arc matter more than reaching the count.",
    "A short arc is fine. Not every person needs a long story.",
    "",
    "Ask yourself before writing anything: what passages should I choose for equal usage? Then ask: what arc and story for this person is needed to choose those passages?",
    "Keep that reasoning to yourself. What it settles is the summary you write below, and the turns are that same arc lived out in detail.",
    "",
    "WHAT TO WRITE, consistent with the JSON above",
    "You should choose this about the person, once:",
    person_fields,
    "",
    "And this about each conversation:",
    conversation_fields,
    "",
    "And this about each turn:",
    turn_fields,
    "",
    becoming,
    "",
    catch_up_first,
    catch_up_blind,
    "That is what turns in multiple conversations are for: It is a discipling over many days, not one long conversation.",
    "",
    "GROUPING",
    "Group the turns into conversations.",
    "In the game, each day, the player talks to the person at most once.",
    joined8,
    "You decide where each one ends.",
    "",
    "These conversations are a SUMMARY of this person's life, never a transcript of it. John 21 verse 25 says the world could not hold the books if everything Jesus did were written down, and the Gospels are short compared to the years they cover. So write the same way.",
    "The turns are the few exchanges worth showing out of many more that happened. Between two conversations this person has gone on living, and may have changed in ways the player did not see playing the game.",
    "So do not try to show every step of a person changing. Choose the changes that mattered - the ones after which this person was not the same as before.",
    "You are free to open each conversation with them further on than the player left them. In the game, the next conversation could be the very next day or many days later, and the gaps may not be regular. The person must not say or imply how many days it has been because the game decides when conversations are scheduled when a player starts a new game, and how many actual days a game day stands for is not decided yet. So the conversations you generate should be consistent with being schedule on days back-to-back and also with many days in between.",
    "",
    "Every turn follows from where this person is in their arc (consistent, on topic with the arc). Early on that is their own trouble. Later it is whatever their walk with God has brought them to since.",
    "",
    "WHAT NOT TO WRITE",
    "No names. The game picks names when it runs.",
    "No people at any church plants. People are generated independently and by avoiding talking about them, then all arcs are consistent.",
    "You may talk about household members, family members, friends, anyone the person knows, provided that person does not go to a church plant that is in the game.",
    "No time of day, no weather, no place.",
    "Nothing about the player - not their gender, family, marital status, past, or how long they have been here.",
    "The player never saw Jesus. Somebody who was sent here told the player the gospel, the same way the player is telling this person now. So the person does not speak to the player as somebody who saw or heard or touched him, does not ask the player what he was like, and does not treat the player's answers as things the player watched happen.",
    "Where a passage itself says that its writer saw and touched, that is the writer of the letter speaking, and the person may say so. What they may not do is put the player among the ones who were there.",
    "In the game, the Roman government persecutes the player eventually, but all these arcs need to be independent of that - so the arc could be during persecution or not during persecution - we don't know which when the arcs are generated, so the arc needs to be consistent with either persecution or not.",
    "So nothing about persecution* or danger*.",
    "Nothing about soldiers* unless the person is a soldier.",
    "Nothing about rulers* unless the person is a ruler.",
    "*Or unless these verses raise it. This person is whatever the JSON above says they are, and may speak of their own work plainly.",
    "You only generate the right answer. You do not generate any wrong answers. Every passage you name must be the right answer - just copy its reference from inside the square brackets it is written in above.",
    "",
    "Keep everything the person says short/summarized - prefer fewest number of sentences - should be ~1-2. Do not sacrifice clarity or arc consistency.",
    plain_words,
    "That is the vocabulary and not the voice. How this person talks is yours to write.",
    "",
    "Answer as JSON, in exactly this shape. The values are left empty here; fill every one of them.",
    example,
    "Above two turns of one conversation are shown only so the schema of JSON is clear.",
    "You are not limited to two turns or one conversation. Write as many conversations/turns as the arc needs.",
    "Do not repeat the settled facts back. They are already known.",
  ];
  let r = list_join_newline(lines);
  return r;
}
