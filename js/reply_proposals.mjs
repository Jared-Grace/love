import { arguments_assert } from "./arguments_assert.mjs";
import { reply_response_greetings } from "./reply_response_greetings.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { reply_choices_name } from "./reply_choices_name.mjs";
import { reply_response_good_morning } from "./reply_response_good_morning.mjs";
import { reply_response_good_afternoon } from "./reply_response_good_afternoon.mjs";
import { reply_response_good_evening } from "./reply_response_good_evening.mjs";
import { reply_response_greetings_friend } from "./reply_response_greetings_friend.mjs";
import { prayer_blessing } from "./prayer_blessing.mjs";
import { prayer_wrap } from "./prayer_wrap.mjs";
import { reply_choices_give } from "./reply_choices_give.mjs";
import { reply_prayer_bless_family } from "./reply_prayer_bless_family.mjs";
import { reply_prayer_help_you } from "./reply_prayer_help_you.mjs";
import { reply_prayer_feed_children } from "./reply_prayer_feed_children.mjs";
import { prayer_lines_wrap } from "./prayer_lines_wrap.mjs";
import { reply_prayer_provide_ministry } from "./reply_prayer_provide_ministry.mjs";
import { reply_prayer_will_done } from "./reply_prayer_will_done.mjs";
import { reply_prayer_lead_provider } from "./reply_prayer_lead_provider.mjs";
import { reply_response_nothing_to_give } from "./reply_response_nothing_to_give.mjs";
import { reply_choices_glory } from "./reply_choices_glory.mjs";
import { reply_prayer_closing } from "./reply_prayer_closing.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { reply_response_whatsapp } from "./reply_response_whatsapp.mjs";
export function reply_proposals() {
  arguments_assert(arguments, 0);
  ("Changes to the reply rules that have been worked out and measured but not made, each one carrying the lines it would change, the messages it would newly answer, and what those messages would get back.");
  ("★ THE REPLIES GO OUT UNDER ONE PERSON'S NAME, SO THAT PERSON DECIDES THE WORDING BEFORE IT SHIPS AND NOT AFTER. A rule set that is edited and then shown is a rule set that has already spoken for somebody; written down here first, the change can be read on a phone, argued with, and turned down, and the code is untouched the whole time. That is the whole reason this list exists rather than a branch.");
  ("Each one records what it was measured to do rather than describing it. A proposal that says what it intends is a claim about a grammar, and a grammar is exactly the kind of thing whose behaviour cannot be read off its intention - the pieces are chosen by what matches, so a rule aimed at one message routinely lands on another.");
  ("The reply is asked for rather than written out, so a proposal cannot promise words that are no longer the words. What it is promising is that these messages start reaching the greeting that is already written, and that promise stays true when the greeting is reworded.");
  ("★ EVERY LINE IS WRITTEN WITH ITS SIGN FIRST AND THEN THE SOURCE LINE EXACTLY AS THE FILE HOLDS IT, INDENTATION AND WRAPPING AND ALL. The gate beside this checks each unsigned line against the file, so a line tidied up while writing it out here reads as the code having moved on. That is not fussiness - it was caught doing exactly that, on a call the canonicalizing pass had broken over four lines.");
  ("★ A CHANGE ALSO NAMES THE FILES THAT DO NOT EXIST YET, AND NAMES THEM RATHER THAN WRITING THEM OUT. A few signed lines in an existing function are only half of what a change to the rules really is; the other half is whole new files, and those are far too long to write out twice and would be out of date the moment either copy moved. Named, they are fetched and shown as they really are, so what is on the screen is the whole change and not the part that happened to be short enough to quote.");
  ("The names of the new files are asked for through the naming function rather than spelled, so that renaming one carries this list along with it. A change that names a file nobody answers to any more would show nothing where the file should be, which is the same silence the whole arrangement is built to avoid.");
  ("The questions at the end are the ones nobody else can answer. They are kept beside the change rather than in a message, because the change is what they are about and a message is read once.");
  let greeting = reply_response_greetings();
  let said = [greeting];
  let t = reply_choices_location();
  let located = [t];
  let combined = text_combine_multiple([
    "   let greeting_response = ",
    fn_name("reply_response_greetings"),
    "();",
  ]);
  let combined2 = text_combine_multiple([
    "   let hello = ",
    fn_name("reply_word_hello"),
    "();",
  ]);
  let combined3 = text_combine_multiple([
    "+  let time_of_day = ",
    fn_name("reply_choice"),
    '(["morning", "afternoon", "evening"]);',
  ]);
  let combined4 = text_combine_multiple([
    "+  let good_time = ",
    fn_name("reply_sequence"),
    '(["good", time_of_day]);',
  ]);
  let combined5 = text_combine_multiple([
    "-  let hi_word = ",
    fn_name("reply_choice"),
    '(["hi", hello, "hey"]);',
  ]);
  let combined6 = text_combine_multiple([
    "+  let hi_word = ",
    fn_name("reply_choice"),
    '(["hi", hello, "hey", good_time]);',
  ]);
  let combined7 = text_combine_multiple([
    "   let my_dear_brother = ",
    fn_name("reply_phrase_my_dear_brother"),
    "();",
  ]);
  let combined8 = text_combine_multiple([
    "   let greeting = ",
    fn_name("reply_sequence_output"),
    "(",
  ]);
  let time_of_day = {
    title: "answer good morning, good afternoon and good evening",
    fn: fn_name("app_shared_message_reply_greeting"),
    whole: [],
    diff: [
      combined,
      combined2,
      combined3,
      combined4,
      combined5,
      combined6,
      combined7,
      combined8,
      "     [hi_word, my_dear_brother],",
      "     greeting_response,",
      "   );",
      "   return greeting;",
    ],
    cases: [
      {
        from: "90a90a48e23dcc51",
        message: "Good morning",
        answered: true,
        outputs: said,
      },
      {
        from: "69fb4a16808a5bf9",
        message: "Good morningbrother",
        answered: true,
        outputs: said,
      },
      {
        from: "",
        message: "Good afternoon my dear brother",
        answered: true,
        outputs: said,
      },
      {
        from: "",
        message: "Good evening",
        answered: true,
        outputs: said,
      },
      {
        from: "",
        message: "Good night",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "good night is left out. It is how somebody signs off rather than how they open, and greetings in the name of our LORD Jesus Christ read wrongly as an answer to it. Should it answer at all, and with what?",
      "good morning gets the greeting that is already written rather than one matched to the time of day. A reply naming the morning would be new words, and new words are yours to write.",
    ],
  };
  ("The two below were written as one change of four, cut along the lines of the files it landed in. The other two took a town and a street out of these rules; both came out another way first, and on 2026-11-02 those two were taken off this list, out of date. The measurements below were taken with all four applied at once, the town rule among them, and have not been taken again.");
  ("★ WHAT IS BEING TAKEN OUT IS SOMEBODY ELSE'S NAME AND ADDRESS OUT OF A PUBLIC REPOSITORY, AND WHAT REPLACES IT IS A DICTIONARY OF NAMES MILLIONS OF PEOPLE HAVE. The rules had to be told a name before they could recognise one, so every person the rules answered was a person whose details had been published here to make it work. A dictionary recognises a great many people and publishes nobody, because every name in it would be in it if this correspondence had never happened.");
  ("A dictionary was chosen over the simpler thing, which was to accept any run of letters at all after a title. Any run of letters would also publish nobody, and it would recognise everybody rather than only the people whose names somebody thought to write down - but it would equally read I am pastor hungry as a name, and it would give the rules no way to tell a name from a word. The dictionary can be wrong about a person, and when it is, that person is on the list by the next commit; a rule that asks nothing can never be wrong and never be improved either.");
  let combined9 = text_combine_multiple([
    "   let response = ",
    fn_name("reply_choices_name"),
    "();",
  ]);
  let combined10 = text_combine_multiple([
    "-  let names = ",
    fn_name("reply_names"),
    "();",
  ]);
  let f_name = fn_name("reply_once_or_more");
  let combined11 = text_combine_multiple([
    "-  let names_once_or_more = ",
    f_name,
    "(names);",
  ]);
  let combined12 = text_combine_multiple([
    "+  let names = ",
    fn_name("reply_names_common"),
    "();",
  ]);
  let combined12b = text_combine_multiple([
    "+  let names_once_or_more = ",
    f_name,
    "(names);",
  ]);
  let combined13 = text_combine_multiple([
    "   let titles = ",
    fn_name("reply_titles_ministry"),
    "();",
  ]);
  let combined14 = text_combine_multiple([
    "   let iam = ",
    fn_name("reply_phrase_i_am"),
    "();",
  ]);
  let combined15 = text_combine_multiple([
    "   let iam_titled_name = ",
    fn_name("reply_sequence_output"),
    "(",
  ]);
  let combined16 = text_combine_multiple([
    "the three names this rule was told are then named by nothing, and ",
    fn_name("reply_names"),
    " goes with them. Deleting it is what actually takes them out of the repository - left in place unused they are still published, just unreachable.",
  ]);
  let name_out = {
    title: "stop needing to be told somebody's name before it will answer them",
    fn: fn_name("app_shared_message_reply_iam_titled_name"),
    whole: [
      fn_name("reply_names_common"),
      fn_name("reply_names_bible"),
      fn_name("list_adder_unique_sorted"),
      fn_name("reply_names_authored"),
      fn_name("reply_names_akan"),
      fn_name("reply_names_arabic"),
      fn_name("reply_names_english"),
      fn_name("reply_names_filipino"),
      fn_name("reply_names_igbo"),
      fn_name("reply_names_kalenjin"),
      fn_name("reply_names_kamba"),
      fn_name("reply_names_kikuyu"),
      fn_name("reply_names_luhya"),
      fn_name("reply_names_luo"),
      fn_name("reply_names_mandinka"),
      fn_name("reply_names_persian"),
      fn_name("reply_names_sanskrit"),
      fn_name("reply_names_shona"),
      fn_name("reply_names_sotho"),
      fn_name("reply_names_spanish"),
      fn_name("reply_names_swahili"),
      fn_name("reply_names_yoruba"),
      fn_name("reply_names_zulu"),
    ],
    diff: [
      combined9,
      combined10,
      combined11,
      combined12,
      combined12b,
      combined13,
      combined14,
      combined15,
      "     [iam, titles, names_once_or_more],",
      "     response,",
      "   );",
      "   return iam_titled_name;",
    ],
    cases: [
      {
        from: "",
        message: "I am pastor Samuel from Nairobi in Kenya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am evangelist Grace from Mombasa Kenya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am pastor Ali from Rawalpindi in Pakistan",
        answered: true,
        outputs: located,
      },
    ],
    decide: [
      combined16,
      "a title is still required in front of the name, so evangelist Grace is recognised and a bare Grace is not. That was deliberate while any run of letters counted as a name, because a run of letters after I am matches every message ever sent. It need not stay that way now. A dictionary does not match I am hungry, so the title could be dropped and a bare Grace answered on the strength of the dictionary alone. Should it be?",
      "the dictionary is two thousand one hundred and sixty five names as of 2026-09-08, and it costs about a sixth of a second to read one message against it, measured on a full sentence rather than a short one. That is the whole price of the change and it is paid per message.",
      "the list is short of somebody, always. What is wanted is a way of noticing that - a message that was answered as though it said nothing when a person plainly gave a name - because otherwise the only person who finds out is the one who got the wrong reply.",
      "the messages above are made up in the shape of real ones rather than quoted from them, because the real ones are the thing being taken out of here. That claim was false when it was first written - the examples beside the word lists had been quoted, a town and a person's name among them, and a scrub that read the lists walked straight past them. Trivial openings like a bare greeting are the one exception: they identify nobody and stay.",
    ],
  };
  let combined28 = text_combine_multiple([
    "+  let v = ",
    fn_name("list_concat_multiple"),
    "([",
  ]);
  let combined29 = text_combine_multiple([
    "+    ",
    fn_name("reply_countries_names"),
    "(),",
  ]);
  let combined30 = text_combine_multiple([
    "+    ",
    fn_name("reply_countries_aliases"),
    "(),",
  ]);
  let combined31 = text_combine_multiple([
    "+    ",
    fn_name("reply_countries_authored"),
    "(),",
  ]);
  let combined32 = text_combine_multiple([
    "   let countries = ",
    fn_name("reply_choice"),
    "(v);",
  ]);
  let combined33 = text_combine_multiple([
    "the third list holds ",
    "china, korea, america, england, scotland, wales, usa, uk and drc",
    ", among others. The register would not supply those, because it is a register of identities and refuses a word that names more than one thing - it holds the People's Republic of China and holds no bare China at all. Every one of them is a word real messages actually use.",
  ]);
  let countries_in = {
    title: "know the world's countries rather than two of them",
    fn: fn_name("reply_countries"),
    whole: [
      fn_name("reply_countries_names"),
      fn_name("reply_countries_aliases"),
      fn_name("reply_countries_authored"),
    ],
    diff: [
      '-  let v = ["kenya", "pakistan"];',
      combined28,
      combined29,
      combined30,
      combined31,
      "+  ]);",
      combined32,
      "   return countries;",
    ],
    cases: [
      {
        from: "",
        message: "I am pastor John from Lagos in Nigeria",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am pastor Maria from Manila in Philippines",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from India",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from China",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from Naija",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from Narnia",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "three lists rather than one, kept apart by where the words came from. The first two are quotable to a public register of countries word for word; the third is thirty one words somebody chose, and it is the only one that is an opinion. It is the short one on purpose, so it is the one to argue with.",
      combined33,
      "three hundred and twenty words is four thousand bytes on every page that loads these rules. Nothing else on the page is charged for it, because only the reply rules read it.",
    ],
  };
  ("The two below are one change in two places: the first makes a written-out word forgive the ways it gets mistyped, the second makes the cheapest reading of a message win. They are separate because the first is useful on its own and the second is not, and because the first is the one with numbers in it to argue with.");
  ("★ EVERY WORD THESE RULES WAIT FOR IS SPELLED CORRECTLY, AND ALMOST NOBODY WRITING TO THEM SPELLS EVERY WORD CORRECTLY. Today one wrong letter anywhere in a country's name means no reply at all - not a worse reply, no reply - and the person who wrote it is left thinking nobody read it. The rules cannot be told every misspelling, because misspellings are not a list; what they can be told is what a mistake looks like.");
  ("The single place all of this hangs off is that a word longer than one letter is split into its letters and matched letter by letter. Replacing that split is the whole switch: everything above it and everything below it is untouched, and nothing else in the rules changes at all.");
  let combined42 = text_combine_multiple([
    "   let si = ",
    fn_name("text_is"),
    "(item);",
  ]);
  let combined43 = text_combine_multiple([
    "     size = ",
    fn_name("text_size"),
    "(item);",
  ]);
  let combined44 = text_combine_multiple([
    "     if (",
    fn_name("greater_than"),
    "(size, 1)) {",
  ]);
  let combined45 = text_combine_multiple([
    "-      let split = ",
    fn_name("text_split_empty"),
    "(item);",
  ]);
  let combined46 = text_combine_multiple([
    "-      wrapped = ",
    fn_name("reply_sequence"),
    "(split);",
  ]);
  let combined47 = text_combine_multiple([
    "+      wrapped = ",
    fn_name("reply_word_cost"),
    "(item);",
  ]);
  let combined48 = text_combine_multiple([
    "what a mistake costs, which is a ranking and not a measurement, and is yours to reorder. A neighbouring key, a doubled letter and a word spelled the way it sounds cost one each. Two letters the wrong way round cost two. A letter missing, or a letter too many, costs three. The numbers live in ",
    fn_name("reply_typo_costs"),
    " and only ever decide which of two allowed readings wins - they never decide whether a reading is allowed.",
  ]);
  let combined49 = text_combine_multiple([
    "how much is forgiven, which is what actually decides. One mistake for every five letters, counted down, in ",
    fn_name("reply_typo_budget"),
    ". So usa and uk and from forgive nothing at all - form is not read as from, and that matters, because form is a real word a real sentence could mean. kenya and nigeria forgive one. philippines forgives two, and needs to.",
  ]);
  let combined50 = text_combine_multiple([
    "fourteen pairs of spellings that sound the same are forgiven as one mistake, in ",
    fn_name("reply_typo_sounds"),
    ": ph and f, c and k, ck and k, s and z, x and ks, ei and ie, y and i, ou and u, each way round. filippines is not a slip of the finger - it is somebody spelling a sound correctly.",
  ]);
  let combined51 = text_combine_multiple([
    "a letter swapped for a letter nowhere near it on the keyboard is not forgiven at all, and that absence matters more than any number here. It was in the first draft, and it let kenza be read as kenya - which is not a misspelling of Kenya, it is somebody's name. Only the keys a finger can actually hit by mistake count, read off the three letter rows in ",
    fn_name("reply_keys_nearby"),
    ".",
  ]);
  let typo_layer = {
    title: "read a word that was mistyped, and know what the forgiving cost",
    fn: fn_name("reply_wrap_invoke"),
    whole: [
      fn_name("reply_word_cost"),
      fn_name("reply_typo_budget"),
      fn_name("reply_typo_ends"),
      fn_name("reply_typo_costs"),
      fn_name("reply_typo_sounds"),
      fn_name("list_pairs_both_ways"),
      fn_name("reply_keys_nearby"),
      fn_name("keyboard_letter_rows"),
    ],
    diff: [
      combined42,
      "   let size = null;",
      "   if (si) {",
      combined43,
      combined44,
      combined45,
      combined46,
      combined47,
      "     }",
      "   }",
    ],
    cases: [
      {
        from: "",
        message: "I am pastor Maria from Manila in Phillipines",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am pastor Maria from Manila in Filipines",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am pastor John from Lagos in Nigera",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from Kejya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from Ugadna",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from Zimbabwee",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from Kenza",
        answered: false,
        outputs: [],
      },
      {
        from: "",
        message: "I am from Narnia",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      combined48,
      combined49,
      combined50,
      combined51,
      "a letter missing and a letter too many are forgiven once per word however long the word is, and not once every five letters like everything else. At three, a message naming the Falkland Islands was also read as naming the Aland Islands, and would have been answered as such. Those two are the only mistakes that change how long a word is; every other kind keeps the length, so no number of them can walk one word into another.",
      "measured on the eighteen real messages already saved: nothing that is answered today stops being answered, and eight misspelled messages that get nothing back today are answered. It was measured with four changes applied, because that was the shape it would have shipped in; two of those four have since been taken off this list, so these numbers have not been taken in the shape it would ship in now.",
      "it costs time. Those eighteen messages take about four tenths of a second in total today and about eight tenths with this on, and the slowest single message goes from about a seventh of a second to about half a second. That is a reply being written, not a page being drawn, so half a second is probably not felt - but it is roughly twice the work and it is worth knowing before it is on.",
      "of the three hundred and twenty country words, ten pairs can now be read as each other. Every one of them is the same country spelled two ways - guiana and guyana, romania and roumania and rumania, surinam and suriname, bermuda and bermudas, america and merica - so both readings give the same answer. No two different countries reach each other. Chad and Chile do not.",
      "of the one hundred and sixteen runs of letters that appear in the real messages, none newly reads as a country that it is not.",
    ],
  };
  let combined52 = text_combine_multiple([
    "-    result = ",
    fn_name("list_first"),
    "(result);",
  ]);
  let combined53 = text_combine_multiple([
    "+    result = ",
    fn_name("reply_cheapest"),
    "(result);",
  ]);
  let cheapest_reading = {
    title:
      "when a message can be read several ways, take the one that needed the least forgiving",
    fn: fn_name("reply_messages_inner"),
    whole: [fn_name("reply_cheapest")],
    diff: [
      "   let possbility_start = {",
      "     tokens,",
      "     index: 0,",
      "     matches: true,",
      "+    cost: 0,",
      "   };",
      "   } else {",
      combined52,
      combined53,
      "   }",
      "   return result;",
    ],
    cases: [],
    decide: [
      "on its own this changes nothing, because today every reading costs nothing and the first is as cheap as the last. It only matters once the change above is on.",
      "the reason it is needed then: the first reading found is an accident of the order the rules happen to be listed in. Without this, a message spelled perfectly could be answered by a rule that only matched it by forgiving two letters, while the rule that matched it exactly sat second in the list. With it, a reading that needs no forgiving always beats one that does, whatever order anything is written in.",
      "it has no messages of its own to show, which is the honest thing to say about it. What it changes is which of two answers is picked when both are already possible, and no real message saved so far is read two ways.",
    ],
  };
  let name_response = reply_choices_name();
  let named_and_located = [name_response, t];
  let combined54 = text_combine_multiple([
    "   let response = ",
    fn_name("reply_choices_name"),
    "();",
  ]);
  let combined55 = text_combine_multiple([
    "-  let names = ",
    fn_name("reply_names_common"),
    "();",
  ]);
  let combined56 = text_combine_multiple([
    "-  let names_once_or_more = ",
    fn_name("reply_once_or_more"),
    "(names);",
  ]);
  let combined57 = text_combine_multiple([
    "-  let titles = ",
    fn_name("reply_titles_ministry"),
    "();",
  ]);
  let combined58 = text_combine_multiple([
    "+  let name = ",
    fn_name("reply_name_title_optional"),
    "();",
  ]);
  let combined59 = text_combine_multiple([
    "   let iam = ",
    fn_name("reply_phrase_i_am"),
    "();",
  ]);
  let combined60 = text_combine_multiple([
    "   let iam_titled_name = ",
    fn_name("reply_sequence_output"),
    "(",
  ]);
  let name_piece = {
    title: "answer somebody who gives their name without a title",
    fn: fn_name("app_shared_message_reply_iam_titled_name"),
    whole: [fn_name("reply_name_title_optional")],
    diff: [
      combined54,
      combined55,
      combined56,
      combined57,
      combined58,
      combined59,
      combined60,
      "-    [iam, titles, names_once_or_more],",
      "+    [iam, name],",
      "     response,",
      "   );",
      "   return iam_titled_name;",
    ],
    cases: [
      {
        from: "",
        message: "I am Grace from Kenya",
        answered: true,
        outputs: named_and_located,
      },
      {
        from: "",
        message: "I'm Grace from Kenya",
        answered: true,
        outputs: named_and_located,
      },
      {
        from: "",
        message: "I am John Mark from Kenya",
        answered: true,
        outputs: named_and_located,
      },
      {
        from: "",
        message: "I am pastor Grace from Kenya",
        answered: true,
        outputs: named_and_located,
      },
      {
        from: "",
        message: "I am hungry from Kenya",
        answered: false,
        outputs: [],
      },
      {
        from: "",
        message: "I am pastor from Kenya",
        answered: false,
        outputs: [],
      },
      {
        from: "",
        message: "I am Grace",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "a word now counts as a name only because it is on the list of names. Glory, peace, joy, hope, grace, faith, mercy, gift, blessing and praise are all on it, so I am blessing from Kenya gets the same reply as I am Grace from Kenya. Is that acceptable?",
      "I am Grace on its own still gets no reply. This rule is only reached when from and a country follow. Answering a bare name would be a separate rule that uses this same piece.",
      "measured on the whole rule set: all eighteen saved tests give the same answer as before.",
    ],
  };
  let said2 = reply_response_good_morning();
  let morning_said = [said2];
  let said3 = reply_response_good_afternoon();
  let afternoon_said = [said3];
  let said4 = reply_response_good_evening();
  let evening_said = [said4];
  let combined17 = text_combine_multiple([
    "   let greeting_response = ",
    fn_name("reply_response_greetings"),
    "();",
  ]);
  let combined18 = text_combine_multiple([
    "   let hello = ",
    fn_name("reply_word_hello"),
    "();",
  ]);
  let combined19 = text_combine_multiple([
    "-  let time_of_day = ",
    fn_name("reply_choice"),
    '(["morning", "afternoon", "evening"]);',
  ]);
  let combined21 = text_combine_multiple([
    "-  let good_time = ",
    fn_name("reply_sequence"),
    '(["good", time_of_day]);',
  ]);
  let combined22 = text_combine_multiple([
    "-  let hi_word = ",
    fn_name("reply_choice"),
    '(["hi", hello, "hey", good_time]);',
  ]);
  let combined20 = text_combine_multiple([
    "+  let hi_word = ",
    fn_name("reply_choice"),
    '(["hi", hello, "hey"]);',
  ]);
  let combined23 = text_combine_multiple([
    "   let my_dear_brother = ",
    fn_name("reply_phrase_my_dear_brother"),
    "();",
  ]);
  let combined24 = text_combine_multiple([
    "   let greeting = ",
    fn_name("reply_sequence_output"),
    "(",
  ]);
  let combined25 = text_combine_multiple([
    "+  let morning_response = ",
    fn_name("reply_response_good_morning"),
    "();",
  ]);
  let combined26 = text_combine_multiple([
    "+  let morning = ",
    fn_name("reply_good_time"),
    '("morning", morning_response);',
  ]);
  let combined26b = text_combine_multiple([
    "+  let afternoon_response = ",
    fn_name("reply_response_good_afternoon"),
    "();",
  ]);
  let combined26c = text_combine_multiple([
    "+  let afternoon = ",
    fn_name("reply_good_time"),
    '("afternoon", afternoon_response);',
  ]);
  let combined26d = text_combine_multiple([
    "+  let evening_response = ",
    fn_name("reply_response_good_evening"),
    "();",
  ]);
  let combined26e = text_combine_multiple([
    "+  let evening = ",
    fn_name("reply_good_time"),
    '("evening", evening_response);',
  ]);
  let combined27 = text_combine_multiple([
    "+  let greetings = ",
    fn_name("reply_choice"),
    "([greeting, morning, afternoon, evening]);",
  ]);
  let good_morning_back = {
    title: "say good morning, good afternoon and good evening back",
    fn: fn_name("app_shared_message_reply_greeting"),
    whole: [
      fn_name("reply_response_dressed"),
      fn_name("reply_response_greetings"),
      fn_name("reply_response_good_morning"),
      fn_name("reply_response_good_afternoon"),
      fn_name("reply_response_good_evening"),
      fn_name("reply_good_time"),
      fn_name("emoji_sun"),
      fn_name("emoji_sunset"),
    ],
    diff: [
      combined17,
      combined18,
      combined19,
      combined21,
      combined22,
      combined20,
      combined23,
      combined24,
      "     [hi_word, my_dear_brother],",
      "     greeting_response,",
      "   );",
      "-  return greeting;",
      combined25,
      combined26,
      combined26b,
      combined26c,
      combined26d,
      combined26e,
      combined27,
      "+  return greetings;",
    ],
    cases: [
      {
        from: "90a90a48e23dcc51",
        message: "Good morning",
        answered: true,
        outputs: morning_said,
      },
      {
        from: "69fb4a16808a5bf9",
        message: "Good morningbrother",
        answered: true,
        outputs: morning_said,
      },
      {
        from: "",
        message: "Good morning my dear brother",
        answered: true,
        outputs: morning_said,
      },
      {
        from: "",
        message: "Good afternoon",
        answered: true,
        outputs: afternoon_said,
      },
      {
        from: "",
        message: "Good evening",
        answered: true,
        outputs: evening_said,
      },
      {
        from: "",
        message: "Hello",
        answered: true,
        outputs: said,
      },
      {
        from: "",
        message: "Good night",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "good morning, good afternoon and good evening no longer get the greeting in the name of our LORD Jesus Christ. Only these words go back.",
      "good evening was not asked for and is included so that it does not stay the one time of day answered differently. Should it stay in?",
      "measured on the whole rule set: of the eighteen saved tests, only the two good morning ones change.",
    ],
  };
  let friend_response = reply_response_greetings_friend();
  let friend_said = [friend_response];
  let friend_kept_hi_word = text_combine_multiple([
    "   let hi_word = ",
    fn_name("reply_choice"),
    '(["hi", hello, "hey"]);',
  ]);
  let friend_added_phrase = text_combine_multiple([
    "+  let friend_phrase = ",
    fn_name("reply_phrase_my_friend_in_christ"),
    "();",
  ]);
  let friend_added_response = text_combine_multiple([
    "+  let friend_response = ",
    fn_name("reply_response_greetings_friend"),
    "();",
  ]);
  let friend_added_rule = text_combine_multiple([
    "+  let friend = ",
    fn_name("reply_sequence_output"),
    "([hi_word, friend_phrase], friend_response);",
  ]);
  let friend_kept_morning_response = text_combine_multiple([
    "   let morning_response = ",
    fn_name("reply_response_good_morning"),
    "();",
  ]);
  let friend_kept_morning = text_combine_multiple([
    "   let morning = ",
    fn_name("reply_good_time"),
    '("morning", morning_response);',
  ]);
  let friend_kept_afternoon_response = text_combine_multiple([
    "   let afternoon_response = ",
    fn_name("reply_response_good_afternoon"),
    "();",
  ]);
  let friend_kept_afternoon = text_combine_multiple([
    "   let afternoon = ",
    fn_name("reply_good_time"),
    '("afternoon", afternoon_response);',
  ]);
  let friend_kept_evening_response = text_combine_multiple([
    "   let evening_response = ",
    fn_name("reply_response_good_evening"),
    "();",
  ]);
  let friend_kept_evening = text_combine_multiple([
    "   let evening = ",
    fn_name("reply_good_time"),
    '("evening", evening_response);',
  ]);
  let friend_removed_greetings = text_combine_multiple([
    "-  let greetings = ",
    fn_name("reply_choice"),
    "([greeting, morning, afternoon, evening]);",
  ]);
  let friend_added_greetings = text_combine_multiple([
    "+  let greetings = ",
    fn_name("reply_choice"),
    "([greeting, friend, morning, afternoon, evening]);",
  ]);
  let friend_in_christ = {
    title: "greet somebody who calls me a friend in Christ",
    fn: fn_name("app_shared_message_reply_greeting"),
    whole: [
      fn_name("reply_phrase_my_friend_in_christ"),
      fn_name("reply_response_greetings_friend"),
      fn_name("emoji_handshake"),
      fn_name("emoji_hug"),
    ],
    diff: [
      combined17,
      combined18,
      friend_kept_hi_word,
      combined23,
      combined24,
      "     [hi_word, my_dear_brother],",
      "     greeting_response,",
      "   );",
      friend_added_phrase,
      friend_added_response,
      friend_added_rule,
      friend_kept_morning_response,
      friend_kept_morning,
      friend_kept_afternoon_response,
      friend_kept_afternoon,
      friend_kept_evening_response,
      friend_kept_evening,
      friend_removed_greetings,
      friend_added_greetings,
      "   return greetings;",
    ],
    cases: [
      {
        from: "",
        message: "Hello myfriendinChrist",
        answered: true,
        outputs: friend_said,
      },
      {
        from: "",
        message: "Hello friend",
        answered: true,
        outputs: friend_said,
      },
      {
        from: "",
        message: "Hi my friend",
        answered: true,
        outputs: friend_said,
      },
      {
        from: "",
        message: "Hey friend in Christ",
        answered: true,
        outputs: friend_said,
      },
      {
        from: "",
        message: "Hello my dear brother",
        answered: true,
        outputs: said,
      },
      {
        from: "",
        message: "my friend",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "the reply is the plain greeting exactly as it is, cross included, and then the new sentence with a handshake and a hug after it, all in one reply. A second reply was the rejected reading.",
      "in Christ uses the same piece as my dear brother in Christ, so in Jesus and in Jesus Christ are heard too. Is that acceptable?",
      "a greeting word has to come first, so my friend on its own gets no reply. Should it?",
      "measured on the whole rule set: all eighteen saved tests give the same answer as before. That includes the full message this came from, which still gets no reply because of what follows the greeting.",
    ],
  };
  let teaching_response = prayer_blessing("your ministry and teaching");
  let teaching_said = [teaching_response];
  let ministry_response = prayer_blessing("your ministry");
  let ministry_said = [ministry_response];
  let teacher_removed_titles = text_combine_multiple([
    "-  let titles = ",
    fn_name("reply_titles_ministry"),
    "();",
  ]);
  let teacher_added_titles = text_combine_multiple([
    "+  let titles = ",
    fn_name("reply_titles_preaching"),
    "();",
  ]);
  let teacher_kept_item = text_combine_multiple([
    "   let item = ",
    fn_name("prayer_blessing"),
    '("your ministry");',
  ]);
  let teacher_kept_minister = text_combine_multiple([
    "   let minister = ",
    fn_name("reply_i_am_a_output"),
    "(titles, item);",
  ]);
  let teacher_added_teaching = text_combine_multiple([
    "+  let teaching = ",
    fn_name("prayer_blessing"),
    '("your ministry and teaching");',
  ]);
  let teacher_added_rule = text_combine_multiple([
    "+  let teacher = ",
    fn_name("reply_i_am_a_output"),
    '("teacher", teaching);',
  ]);
  let teacher_added_choice = text_combine_multiple([
    "+  let ministers = ",
    fn_name("reply_choice"),
    "([minister, teacher]);",
  ]);
  let teacher_blessed = {
    title:
      "bless the ministry and teaching of somebody who says they are a teacher",
    fn: fn_name("app_shared_message_reply_minister"),
    whole: [fn_name("reply_i_am_a_output"), fn_name("reply_titles_preaching")],
    diff: [
      teacher_removed_titles,
      teacher_added_titles,
      teacher_kept_item,
      teacher_kept_minister,
      teacher_added_teaching,
      teacher_added_rule,
      teacher_added_choice,
      "-  return minister;",
      "+  return ministers;",
    ],
    cases: [
      {
        from: "",
        message: "amteacher",
        answered: true,
        outputs: teaching_said,
      },
      {
        from: "",
        message: "am teacher",
        answered: true,
        outputs: teaching_said,
      },
      {
        from: "",
        message: "I am a teacher",
        answered: true,
        outputs: teaching_said,
      },
      {
        from: "",
        message: "I'm a teacher",
        answered: true,
        outputs: teaching_said,
      },
      {
        from: "",
        message: "I am a pastor",
        answered: true,
        outputs: ministry_said,
      },
      {
        from: "",
        message: "teacher",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "a teacher got the blessing on your ministry before this. Now a teacher gets the same prayer with your ministry and teaching, and an apostle, evangelist, pastor or preacher keeps your ministry.",
      "this is any teacher, not only one in a church. Somebody who teaches school is also blessed in their ministry.",
      "measured on the whole rule set: all eighteen saved tests give the same answer as before.",
    ],
  };
  let blessing_kept_start = text_combine_multiple([
    "   let v2 = ",
    fn_name("text_lord_bless"),
    "();",
  ]);
  let blessing_kept_combine = text_combine_multiple([
    "   let prayer = ",
    fn_name("text_combine_multiple"),
    "([",
  ]);
  let blessing_kept_wrap = text_combine_multiple([
    "   let v = ",
    fn_name("prayer_wrap"),
    "(prayer);",
  ]);
  let pastor_one_space = prayer_wrap(
    "May the LORD bless your ministry exceedingly abundantly more than anyone can ask or think",
  );
  let blessing_one_space = {
    title: "one space before Amen in the blessing prayer",
    fn: fn_name("prayer_blessing"),
    whole: [],
    diff: [
      blessing_kept_start,
      blessing_kept_combine,
      "     v2,",
      "     blessed,",
      '-    " exceedingly abundantly more than anyone can ask or think ",',
      '+    " exceedingly abundantly more than anyone can ask or think",',
      "   ]);",
      blessing_kept_wrap,
      "   return v;",
    ],
    cases: [
      {
        from: "",
        message: "I am a pastor",
        answered: true,
        outputs: [pastor_one_space],
      },
    ],
    decide: [
      "two spaces sit before Amen today. This makes it one, as you wrote it.",
      "the longer blessing on you, your family, your church and your country changes the same way, including in the reply app.",
      "measured on the whole rule set: all eighteen saved tests give the same answer as before.",
    ],
  };
  let from_removed_optional = text_combine_multiple([
    "-  let o_n = ",
    fn_name("reply_optional"),
    "(n);",
  ]);
  let from_added_cities = text_combine_multiple([
    "+  let cities = ",
    fn_name("reply_cities"),
    "();",
  ]);
  let from_added_optional = text_combine_multiple([
    "+  let o_city_in = ",
    fn_name("reply_sequence_optional"),
    "([cities, n]);",
  ]);
  let from_town_country = {
    title:
      "answer somebody who names a listed city and then in and their country",
    fn: fn_name("app_shared_message_reply_from_country"),
    whole: [fn_name("reply_cities"), fn_name("reply_cities_names")],
    diff: [
      '-  "So the town is gone rather than widened, and the cost is named rather than hidden: a message naming a town before its country is no longer recognised by this rule, while `i am from kenya` now is - which it was not before, and which is the commonest shape of the two. What is never lost is a word of the reply, because the reply is a fixed sentence about where we are and never repeats back where they are.";',
      '-  "What this deliberately does NOT do is leave a slot open to any run of letters to catch the town again. A slot that matches anything matches the wrong thing somewhere, and an unrecognised town is the cheapest possible thing to be wrong about - the rule simply declines, and another rule may answer instead.";',
      '+  "So no town from a message is written here and none is ever added. The shape is from, then optionally a city from a public list and the word in, then a country. A small town stays unmatched and goes to a human, which is the right answer to it. A slot open to any run of letters was tried and took a whole cry for help as a town: `i am from the hospital my wife died i need prayer i am in kenya` got only this sentence back, and so never reached anybody. A closed list cannot do that.";',
      from_removed_optional,
      from_added_cities,
      from_added_optional,
      '-    [iam_o_titled_name, "from", o_n, r_countries],',
      '+    [iam_o_titled_name, "from", o_city_in, r_countries],',
    ],
    cases: [
      {
        from: "",
        message: "am from NairobiinKenya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "am from Nairobi in Kenya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "am from Kenya",
        answered: true,
        outputs: located,
      },
      {
        from: "3d27ef64ea033e69",
        message: "Hello myfriendinChrist, am from AccrainGhana,amteacher,",
        answered: true,
        outputs: [friend_response, t, teaching_response],
      },
    ],
    decide: [
      "this replaces the card that took any word as the town. That card answered two cries for help with only a location reply, so nobody would have read them. Both are on the no reply yet list now, and a gate fails if a rule starts answering them.",
      "the list is 926 places from Wikidata: every capital, old ones included, and every big city of half a million people or more. It is a public list and no message fed it, so it publishes nobody. Smaller towns get no reply and come to you. Is half a million the right line?",
      "the city and the country are not checked against each other. Am from Paris in Kenya gets the same reply. The reply only says where we are, so that costs nothing. Is that acceptable?",
      "a place now needs the word in before the country. Am from Nairobi Kenya gets no reply, and neither does am from in Kenya, which got one before. No saved test writes either one.",
      "a city with no country still gets no reply. Should it stay that way?",
      "approve this after the friend and teacher cards. The last test here is the full saved message, and it only gets all three replies once all three are in.",
      "measured on the whole rule set with all three cards in: seventeen of the eighteen saved tests give the same answer as before, and the eighteenth is that full message, which got nothing before. With this card alone all eighteen stay the same.",
    ],
  };
  let combined34 = text_combine_multiple([
    "+  let names = ",
    fn_name("reply_cities_names_all"),
    "();",
  ]);
  let combined35 = text_combine_multiple([
    "-  let names = ",
    fn_name("reply_cities_names"),
    "();",
  ]);
  let towns_wikidata = {
    title: "read every city of ten thousand people or more as a town",
    fn: fn_name("reply_cities"),
    whole: [
      fn_name("reply_cities_names_all"),
      fn_name("reply_cities_wikidata_names"),
    ],
    diff: [combined35, combined34],
    cases: [
      {
        from: "",
        message: "am from Kisumu in Kenya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "am from Eldoret in Kenya",
        answered: true,
        outputs: located,
      },
    ],
    decide: [
      "this adds 3,755 towns to the 926 places the rules know, making 4,681. They come from a public Wikidata search for every city of ten thousand people or more. No message fed it, so it publishes nobody.",
      "the reply is the same fixed line as before. It says where we are and never repeats the town.",
      "a town still needs the word in before the country, so Kisumu Kenya gets no reply.",
      "Wikidata only counts what somebody tagged as a city, so plenty of real towns are missing. Those still get no reply and come to you.",
      "a check now tries 581 phrases, such as hospital, poor, my prison, an orphanage and a church, and fails if any of them reads as a town. Five names were left out because of it: podor, thebes, police, mission and farim. Podor and Thebes are real places, so somebody from there gets no reply and comes to you.",
      "one phrase is not checked: a pain reads as the city Al Ain, already on the list, one mistake away. Nobody says they are from a pain.",
      "ordinary words can still read as a town when they are not on that list. Africa reads as Arica, so am from Africa in Kenya gets the location reply. The reply is harmless there. Is that acceptable?",
      "this makes the rules download about 41 KB bigger before compression. That is over the limit a page may grow in one step, so that check will fail until somebody accepts the new size.",
    ],
  };
  let give_response = reply_choices_give();
  let line_family = reply_prayer_bless_family();
  let line_help = reply_prayer_help_you();
  let line_children = reply_prayer_feed_children();
  let prayer_family_help_children = prayer_lines_wrap([
    line_family,
    line_help,
    line_children,
  ]);
  let prayer_children_family_help = prayer_lines_wrap([
    line_children,
    line_family,
    line_help,
  ]);
  let prayer_help_children_family = prayer_lines_wrap([
    line_help,
    line_children,
    line_family,
  ]);
  let prayer_children_help_family = prayer_lines_wrap([
    line_children,
    line_help,
    line_family,
  ]);
  let poor_family = {
    title:
      "answer somebody from a poor family asking for help for their hungry children",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [
      fn_name("prayer_lines_wrap"),
      fn_name("reply_prayer_bless_family"),
      fn_name("reply_prayer_help_you"),
      fn_name("reply_prayer_feed_children"),
      fn_name("text_may_the_lord_combine"),
      fn_name("text_may_the_lord_exclamation"),
    ],
    diff: ["     give,", "+    poor_family,"],
    cases: [
      {
        from: "",
        message:
          "I am from a poor family, please help me, my children are hungry",
        answered: true,
        outputs: [prayer_family_help_children, give_response],
      },
      {
        from: "",
        message:
          "my children are hungry, I am from a poor family, please help me",
        answered: true,
        outputs: [prayer_children_family_help, give_response],
      },
      {
        from: "",
        message:
          "please help me, my children are hungry, I am from a poor family",
        answered: true,
        outputs: [prayer_help_children_family, give_response],
      },
      {
        from: "",
        message: "I am from a poor family, please help, my children are hungry",
        answered: true,
        outputs: [prayer_family_help_children, give_response],
      },
      {
        from: "",
        message:
          "I am from a poor family, please help me, my children need food",
        answered: true,
        outputs: [prayer_family_help_children, give_response],
      },
      {
        from: "",
        message: "my children need food, please help, I'm from a poor family",
        answered: true,
        outputs: [prayer_children_help_family, give_response],
      },
      {
        from: "",
        message:
          "Hello my dear brother, I am from a poor family, please help me, my children are hungry",
        answered: true,
        outputs: [greeting, prayer_family_help_children, give_response],
      },
      {
        from: "",
        message:
          "I am from a poor family, please help me, my children are hungry, I am from Kenya",
        answered: true,
        outputs: [prayer_family_help_children, give_response, t],
      },
      {
        from: "",
        message:
          "I am from a poor family, please help us, my children are hungry",
        answered: true,
        outputs: [prayer_family_help_children, give_response],
      },
    ],
    decide: [
      "the prayer and Give go as two replies, prayer first. One reply holding both was the rejected reading. Each line of the prayer is on its own line, as you wrote them, each ending in an exclamation mark, with Amen after the last line.",
      "Give is the same function the Give button sends in the reply app, so changing that wording changes it here too.",
      "all three parts must be there. A part on its own gets no reply and comes to you. Answering each part alone was the rejected reading, because a person could then get three replies, or get Give for saying only my children are hungry.",
      "anything else in the message means no reply, so my wife died in the middle sends the whole message to you.",
      "only the words you gave are heard. My child, our children and we are from a poor family get no reply. Should any of them?",
      "measured on the whole rule set: all eighteen saved tests give the same answer as before.",
    ],
  };
  let combined36 = text_combine_multiple([
    "-  let r = ",
    fn_name("reply_sequence"),
    "([room, last]);",
  ]);
  let combined37 = text_combine_multiple([
    "+  let with_repeats = ",
    fn_name("reply_sequence"),
    "([room, last]);",
  ]);
  let combined38 = text_combine_multiple([
    "+  let r = ",
    fn_name("reply_outputs_mapped"),
    "(with_repeats, ",
    fn_name("list_unique"),
    ");",
  ]);
  let card_repeats_once = {
    title: "answer each thing said only once, however many times it is said",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_outputs_mapped")],
    diff: [combined36, combined37, combined38],
    cases: [
      {
        from: "ed34005fa45d9297",
        message: "HelloHellHelloHellomyHelloHellom",
        answered: true,
        outputs: [greeting],
      },
      {
        from: "",
        message: "hello hello hello",
        answered: true,
        outputs: [greeting],
      },
      {
        from: "",
        message: "am from Kenya am from Kenya hello",
        answered: true,
        outputs: [t, greeting],
      },
    ],
    decide: [
      "this changes one saved test: the hello test goes from six greetings to one. It is the only saved test with repeats.",
      "identical replies become one, and the first one keeps its place. So thanks, hello, thanks gets one glory line, then one greeting.",
      "the check is on the words of the reply, not on what the person meant. Two different things said that happen to get the same reply also become one.",
    ],
  };
  let line_ministry = reply_prayer_provide_ministry();
  let line_will_done = reply_prayer_will_done();
  let line_lead = reply_prayer_lead_provider();
  let nothing_to_give = reply_response_nothing_to_give();
  let line_glory = reply_choices_glory();
  let visit_removed_fragment = text_combine_multiple([
    "-  let pray_request = ",
    fn_name("reply_choices_will_done_fragment"),
    "();",
  ]);
  let visit_removed_response = text_combine_multiple([
    "-  let will_be_done = ",
    fn_name("reply_pray_response"),
    "(pray_request);",
  ]);
  let visit_removed_step = text_combine_multiple([
    "-  let visit_step = ",
    fn_name("reply_on_match_output_code"),
    '(s_visit, will_be_done, "todo()");',
  ]);
  let visit_added_coded = text_combine_multiple([
    "+  let visit_coded = ",
    fn_name("reply_on_match_outputs_codes_multiple"),
    '(s_visit, [], ["todo()"]);',
  ]);
  let visit_added_will = text_combine_multiple([
    "+  let will_done = ",
    fn_name("reply_prayer_will_done"),
    "();",
  ]);
  let visit_added_step = text_combine_multiple([
    "+  let visit_step = ",
    fn_name("reply_on_match_prayer"),
    "(visit_coded, will_done);",
  ]);
  let combined41 = text_combine_multiple([
    "+  let asks = ",
    fn_name("app_shared_message_reply_asks"),
    "();",
  ]);
  let room_before = text_combine_multiple([
    "-  let room = ",
    fn_name("reply_once_or_more"),
    "(choices_main);",
  ]);
  let room_cheapest = text_combine_multiple([
    "+  let choices_cheapest = ",
    fn_name("reply_cheapest_per_position"),
    "(choices_main);",
  ]);
  let room_after = text_combine_multiple([
    "+  let room = ",
    fn_name("reply_once_or_more"),
    "(choices_cheapest);",
  ]);
  let combined61 = text_combine_multiple([
    "-  let r = ",
    fn_name("reply_outputs_mapped"),
    "(with_repeats, ",
    fn_name("list_unique"),
    ");",
  ]);
  let combined62 = text_combine_multiple([
    "+  let said_once = ",
    fn_name("reply_outputs_mapped"),
    "(with_repeats, ",
    fn_name("list_unique"),
    ");",
  ]);
  let combined63 = text_combine_multiple([
    "+  let r = ",
    fn_name("reply_prayers_closed"),
    "(said_once);",
  ]);
  let wrapped = reply_prayer_closing([
    line_will_done,
    line_ministry,
    line_lead,
  ]);
  let wrapped2 = reply_prayer_closing([line_will_done, line_family, line_lead]);
  let wrapped3 = reply_prayer_closing([
    line_will_done,
    line_children,
    line_lead,
  ]);
  let wrapped4 = reply_prayer_closing([
    line_will_done,
    line_family,
    line_help,
    line_lead,
  ]);
  let wrapped6 = reply_prayer_closing([
    line_will_done,
    line_help,
    line_ministry,
    line_children,
    line_lead,
  ]);
  let wrapped7 = reply_prayer_closing([
    line_will_done,
    line_family,
    line_children,
    line_lead,
  ]);
  let wrapped8 = reply_prayer_closing([
    line_will_done,
    line_family,
    line_help,
    line_children,
    line_lead,
  ]);
  let wrapped9 = reply_prayer_closing([line_will_done]);
  let card_asks_gathered = {
    title:
      "answer a poor family, hungry children or a ministry, alone or together, and close the reply with one prayer",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [
      fn_name("app_shared_message_reply_asks"),
      fn_name("reply_on_match_prayer"),
      fn_name("reply_prayers_closed"),
      fn_name("reply_property_prayers"),
      fn_name("reply_prayer_provide_ministry"),
      fn_name("reply_cheapest_per_position"),
      fn_name("reply_response_nothing_to_give"),
      fn_name("reply_prayer_will_done"),
      fn_name("reply_prayer_lead_provider"),
      fn_name("reply_choices_lead_provider_fragment"),
      fn_name("reply_prayer_closing"),
    ],
    diff: [
      combined41,
      visit_removed_fragment,
      visit_removed_response,
      visit_removed_step,
      visit_added_coded,
      visit_added_will,
      visit_added_step,
      "-    give,",
      "-    poor_family,",
      "+    asks,",
      room_before,
      room_cheapest,
      room_after,
      combined61,
      combined62,
      combined63,
    ],
    cases: [
      {
        from: "31c5df9f5c22e68d",
        message:
          "I am requesting you to support in ministry, God's will, come and fellowship with us, God's will, thank you.",
        answered: true,
        outputs: [nothing_to_give, line_glory, wrapped],
      },
      {
        from: "",
        message: "I am from a poor family",
        answered: true,
        outputs: [nothing_to_give, wrapped2],
      },
      {
        from: "",
        message: "my children are hungry",
        answered: true,
        outputs: [nothing_to_give, wrapped3],
      },
      {
        from: "",
        message: "I am from a poor family, please help me",
        answered: true,
        outputs: [nothing_to_give, wrapped4],
      },
      {
        from: "",
        message:
          "I am from a poor family, please help me, my children are hungry",
        answered: true,
        outputs: [nothing_to_give, wrapped8],
      },
      {
        from: "",
        message:
          "I am requesting you to support us in ministry according to God's will",
        answered: true,
        outputs: [nothing_to_give, wrapped],
      },
      {
        from: "",
        message:
          "please help, I am requesting you to support us in ministry according to God's will, my children are hungry",
        answered: true,
        outputs: [nothing_to_give, wrapped6],
      },
      {
        from: "",
        message: "I am from a poor family, hello, my children need food",
        answered: true,
        outputs: [nothing_to_give, greeting, wrapped7],
      },
      {
        from: "",
        message: "come and fellowship with us",
        answered: true,
        outputs: [wrapped9],
      },
    ],
    decide: [
      "this answers messages alone that used to reach you. I am from a poor family, and my children are hungry, now get a prayer and the Sorry line, and nobody reads them. That is what you asked for, and it was the rejected reading on the earlier card. All three of those messages left the no-reply list and are tests here.",
      "please help on its own still gets no reply, because it is not one of the three things. Anything else in the message still means no reply, so my wife died in the middle still sends the whole message to you.",
      "this changes one saved test. Test 1 now gets three replies as you wrote them: the short Sorry line, the glory line, and the prayer.",
      "the Sorry line is now only Sorry, I have nothing that I can give you at this time. What it used to ask of God moved into the prayer.",
      "every giving prayer holds His will and lead you to someone, whatever they asked for. The rejected reading was saying lead you to someone only for a ministry.",
      "the order is always His will, then what they asked for in the order they asked, then lead you to someone. The rejected reading was the order they said it, which would put lead you to someone in the middle when they ask for two things.",
      "come and fellowship with us alone gets a short prayer with only His will in it, because that line now lives in the prayer. The rejected reading was keeping it a plain line when it is alone. Should it stay a plain line?",
      "the prayer opens with In the name of the Father on its own line, and all its lines run together after it, as you wrote it. The rejected reading was one line each.",
      "the prayer is the last thing said, so it closes the reply whatever else was said. Every line of it is said once.",
      "the Sorry line stays where the first of these things was said, and only the prayer moves to the end. So family, hello, children gets the Sorry line, the greeting, then the prayer. The rejected reading was moving the Sorry line to just before the prayer. Should it move?",
      "only the lines shown go in the closing prayer. Any other line that prays could join it later with one call.",
      "the old long Sorry line stays for the old rules until you approve this, and can go after.",
      "please help can come before or after each thing, as you wrote it. I did not write the repeating into this rule, because the rule set already repeats. That also lets other things be said in between. A please help between two things can be read as belonging to either one, which on its own made a message with five of them take two seconds and a longer one run out of memory. So at each place in the message only the cheapest reading is kept. Over 1033 mixed messages, typos included, no reply changed.",
      "the two old rules and the piece that took three parts in any order are unused once this goes in. I would remove them after you approve.",
    ],
  };
  let names_pakistan = {
    title: "know five more common names from Pakistan",
    fn: fn_name("reply_names_persian"),
    whole: [],
    diff: [
      '-  let names = ["javed", "nasreen", "naveed", "sarfraz", "shazia"];',
      '+  let names = ["akhtar", "dilshad", "javed", "khan", "nasreen", "naveed", "nawaz", "parveen", "sarfraz", "shazia"];',
    ],
    cases: [
      {
        from: "",
        message: "I am pastor Samuel Nawaz from Kenya",
        answered: true,
        outputs: named_and_located,
      },
    ],
    decide: [
      "two of these five are names in the waiting message. All five are here because millions of people have them, which is the rule for this list. They carry nothing else about that person: no town, no phone, no street. Are you content to publish them?",
      "the rejected reading was leaving names open, so any letters could stand as a name. I am pastor Samuel my wife is sick from Kenya then got a reply that ignored the sick wife. That message is now on the no reply yet list, and a gate fails if a rule starts answering it.",
      "somebody whose name is on no list still gets no reply and comes to you.",
    ],
  };
  let o_in_added = text_combine_multiple([
    "+  let o_in = ",
    fn_name("reply_optional"),
    "(n);",
  ]);
  let o_city_in_removed = text_combine_multiple([
    "-  let o_city_in = ",
    fn_name("reply_sequence_optional"),
    "([cities, n]);",
  ]);
  let o_city_in_added = text_combine_multiple([
    "+  let o_city_in = ",
    fn_name("reply_sequence_optional"),
    "([cities, o_in]);",
  ]);
  let town_in_optional = {
    title:
      "answer somebody who names a listed city and their country without in",
    fn: fn_name("app_shared_message_reply_from_country"),
    whole: [],
    diff: [
      '-  "So no town from a message is written here and none is ever added. The shape is from, then optionally a city from a public list and the word in, then a country. A small town stays unmatched and goes to a human, which is the right answer to it. A slot open to any run of letters was tried and took a whole cry for help as a town: `i am from the hospital my wife died i need prayer i am in kenya` got only this sentence back, and so never reached anybody. A closed list cannot do that.";',
      '+  "So no town from a message is written here and none is ever added. The shape is from, then optionally a city from a public list and maybe the word in, then a country. A small town stays unmatched and goes to a human, which is the right answer to it. A slot open to any run of letters was tried and took a whole cry for help as a town: `i am from the hospital my wife died i need prayer i am in kenya` got only this sentence back, and so never reached anybody. A closed list cannot do that.";',
      o_city_in_removed,
      o_in_added,
      o_city_in_added,
    ],
    cases: [
      {
        from: "",
        message: "am from Nairobi Kenya",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "am from Nairobi in Kenya",
        answered: true,
        outputs: located,
      },
    ],
    decide: [
      "this undoes one line of the card you approved: a place used to need the word in before the country. Am from Nairobi Kenya came off the no reply yet list because of this.",
      "am from in Kenya, am from Nairobi and am from Zzyzxville in Kenya still get no reply.",
    ],
  };
  let t2 = text_frozen("digits");
  let contact_digits_list_removed = text_combine_multiple([
    "-  let d = ",
    t2,
    "();",
  ]);
  let contact_digit_removed = text_combine_multiple([
    "-  let rc_digits = ",
    fn_name("reply_choice"),
    "(d);",
  ]);
  let contact_digits_removed = text_combine_multiple([
    "-  let digits_oom = ",
    fn_name("reply_once_or_more"),
    "(rc_digits);",
  ]);
  let contact_roads_removed = text_combine_multiple([
    "-  let r_roads = ",
    fn_name("reply_roads"),
    "();",
  ]);
  let contact_removed = text_combine_multiple([
    "-  let fn = ",
    fn_name("reply_sequence"),
    '(["contact", digits_oom, r_roads]);',
  ]);
  let contact_added = text_combine_multiple([
    "+  let fn = ",
    fn_name("reply_contact_address"),
    "();",
  ]);
  let cannot_middle_removed = text_combine_multiple([
    "-  let cannot_middle = ",
    fn_name("reply_choice_optional"),
    '(["\'", "no"]);',
  ]);
  let cannot_removed = text_combine_multiple([
    "-  let fn20 = ",
    fn_name("reply_sequence"),
    '(["can", cannot_middle, "t"]);',
  ]);
  let cannot_lambda_removed = text_combine_multiple([
    "-    let r2 = ",
    fn_name("app_shared_message_reply_choices_lambda"),
    "(filtered, u);",
  ]);
  let cannot_matcher_removed = text_combine_multiple([
    "-  let matcher = ",
    fn_name("reply_on_match_capture"),
    "(fn20, lambda);",
  ]);
  let cant_out = {
    title: "stop answering can't, cant and cannot",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [],
    diff: [
      cannot_middle_removed,
      cannot_removed,
      "-  function lambda(filtered, u) {",
      cannot_lambda_removed,
      "-    return r2;",
      "-  }",
      cannot_matcher_removed,
      "-    matcher,",
    ],
    cases: [],
    decide: [
      "no real message has needed this. Of the 18 different messages stored, none ever got this reply. Only one holds those letters, and there cant is the last word of an address. The rejected reading was keeping the rule with new wording, which would keep a reply nobody has needed.",
      "cant, can't and cannot now get no reply and come to you. So does a message like hello cant, because any part the rules cannot read means no reply for the whole message. Nobody has really sent these. After this goes in I would add them to the no reply yet list, so a gate fails if a rule starts answering them.",
      "measured with a copy of the rules: all eighteen saved tests give the same answer as before.",
      "the function that wrote this reply is unused once this goes in. I would remove it after you approve.",
    ],
  };
  let whatsapp_line = reply_response_whatsapp();
  let contact_street = {
    title:
      "answer a phone number with the WhatsApp line, and read a short street, town and cantonment after it",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [
      fn_name("reply_contact_address"),
      fn_name("reply_phone_number"),
      fn_name("reply_phone_codes_lengths"),
      fn_name("reply_digits_exactly"),
      fn_name("list_value_repeat"),
      fn_name("reply_response_whatsapp"),
      fn_name("reply_letters_at_most"),
      fn_name("reply_at_most"),
      fn_name("reply_cantonment"),
    ],
    diff: [
      contact_digits_list_removed,
      contact_digit_removed,
      contact_digits_removed,
      contact_roads_removed,
      contact_removed,
      contact_added,
    ],
    cases: [
      {
        from: "",
        message: "92 03001234567",
        answered: true,
        outputs: [whatsapp_line],
      },
      {
        from: "",
        message: "contact 92 03001234567 M Main Road",
        answered: true,
        outputs: [whatsapp_line],
      },
      {
        from: "",
        message: "contact 92 03001234567 M Main Road Karachi Cant",
        answered: true,
        outputs: [whatsapp_line],
      },
      {
        from: "",
        message: "contact 92 03001234567 M Main Road Karachi Cantonment",
        answered: true,
        outputs: [whatsapp_line],
      },
      {
        from: "40d47c1ec2a9759d",
        message:
          "I'mpastorSamuelAndrewMarkFromKarachiPakistancontact 92 03001234567MMainRoadKarachiCant",
        answered: true,
        outputs: [...named_and_located, whatsapp_line],
      },
    ],
    decide: [
      "a number counts as a phone number when it is a country calling code, maybe a 0, then as many digits as that code allows. So 92 alone or 92 123 is not one, and those messages still reach you. The table of codes and lengths is generated from Google's phone number data, mobile and landline only. The rejected readings were my first table written from memory, which matched on 101 rows of 205, and any run of digits, which would answer a year or a Bible verse number.",
      "a phone number on its own, with no word contact, now gets the WhatsApp line too. The rejected reading was requiring the word contact, which would leave a bare number with nobody answering it.",
      "the street name can be any letters, up to 12. Spaces are gone before a rule reads a message, so counting letters is the only limit available. It now needs a whole phone number before it and a road word after it, so contact 92 help me road gets no reply any more. The rejected reading was any length, and that answered a message about hungry children.",
      "the open word gate does not watch this new piece. It only lists pieces that take any word at all, and it has no way to record your yes. If I listed this piece, the gate would go red the moment you approved. Your yes on this card is the record instead.",
      "cant counts as a cantonment only after a listed town. So contact 92 03001234567 M Main Road Cant gets no reply and comes to you. The rejected reading was allowing cant after any road, which no real message needs.",
      "approve this after the card before it. Until that card is in, Karachi Cant also gets the can't reply.",
      "the WhatsApp line is the same words your own WhatsApp reply button sends, and it stands where the number stood. So the last test gets the name line, the location line, then the WhatsApp line.",
      "the last test is the pastor message rewritten with made-up details. Measured on the real message while the can't rule was still there: all four copies answered, three lines each. That reading never used the can't rule, so removing the rule leaves it standing. I would measure the real message again once this is in. Measured with a copy of the rules with both cards in: no saved test changes except this one.",
    ],
  };
  let combined39 = text_combine_multiple([
    "-  let iam_titled_name = ",
    fn_name("reply_sequence_output"),
    "([iam, name], response);",
  ]);
  let combined40 = text_combine_multiple([
    "+  let my_name_is = ",
    fn_name("reply_sequence"),
    '(["my", "name", "is"]);',
  ]);
  let combined64 = text_combine_multiple([
    "+  let said = ",
    fn_name("reply_choice"),
    "([iam, my_name_is]);",
  ]);
  let combined65 = text_combine_multiple([
    "+  let iam_titled_name = ",
    fn_name("reply_sequence_output"),
    "([said, name], response);",
  ]);
  let my_name_said = {
    title: "read my name is, and answer it with the name line",
    fn: fn_name("app_shared_message_reply_iam_titled_name"),
    whole: [],
    diff: [combined39, combined40, combined64, combined65],
    cases: [
      {
        from: "",
        message: "My name is Stephen Mark",
        answered: true,
        outputs: [name_response],
      },
    ],
    decide: [
      "you asked for this: my name is gets the same name line as I am. It uses the same list of names, so my name is hungry gets no reply and comes to you.",
      "the location rule uses this same piece, so my name is Stephen Mark from Ghana now gets the name line and the location line. The rejected reading was a separate rule for my name is, which would then need its own copy of the from rule.",
      "this alone does not answer the choir leader's messages. They need every part understood, and more cards are coming for the rest.",
    ],
  };
  let combined66 = text_combine_multiple([
    "   let fn = ",
    fn_name("reply_contact_address"),
    "();",
  ]);
  let combined67 = text_combine_multiple([
    "+  let join = ",
    fn_name("reply_join_glory"),
    "();",
  ]);
  let v = reply_choices_glory();
  let line = reply_prayer_will_done();
  let prayer = reply_prayer_closing([line]);
  let join_glory = {
    title: "answer wanting others to join to bring glory to God",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_join_glory")],
    diff: [combined66, combined67, "     fn,", "+    join,"],
    cases: [
      {
        from: "",
        message:
          "I want others to join me so that together we can bring glory to God.",
        answered: true,
        outputs: [v, prayer],
      },
    ],
    decide: [
      "you asked for the will of God and Glory to God, both as they already are. You listed the will of God first, but it comes last here, because every prayer line goes in the one prayer that closes a reply. The rejected reading was putting it first for this message alone, which would give this one message a different shape from every other reply.",
      "only these exact words are read, because you want other wordings added when somebody really sends them. So I want others to join me, on its own, gets no reply and comes to you.",
      "this alone does not answer the choir leader's messages. They need every part understood, and more cards are coming for the rest.",
    ],
  };
  let verses_join = text_combine_multiple([
    "   let join = ",
    fn_name("reply_join_glory"),
    "();",
  ]);
  let verses_add = text_combine_multiple([
    "+  let verses = ",
    fn_name("reply_bible_verses"),
    "();",
  ]);
  let verses_closed_before = text_combine_multiple([
    "-  let r = ",
    fn_name("reply_prayers_closed"),
    "(said_once);",
  ]);
  let verses_closed_prayers = text_combine_multiple([
    "+  let prayed = ",
    fn_name("reply_prayers_closed"),
    "(said_once);",
  ]);
  let verses_closed_after = text_combine_multiple([
    "+  let r = ",
    fn_name("reply_bible_references_closed"),
    "(prayed);",
  ]);
  let verses_message_commandment =
    "And this is his commandment, that we should believe in the name of his Son Jesus Christ, and love one another, as he hath commanded us.";
  let verses_message_passage =
    "For in the word of the Lord it is written in the first John, verses 7 through 10: Beloved, let us love one another, for love is from God; and everyone who loves has been born of God and knows God. He who does not love does not know God, for God is love. In this was manifested the love of God among us, because God sent his only begotten Son into the world, that we might live through him. Herein is love, not that we loved God, but that he loved us, and sent his Son to be the propitiation for our sins.";
  let verses_said = {
    title: "read 1 John 3:23 and 4:7-10, and answer with the verse and Amen",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [
      fn_name("reply_bible_verses"),
      fn_name("reply_bible_1jn_3_23"),
      fn_name("reply_bible_1jn_4_7"),
      fn_name("reply_bible_1jn_4_8"),
      fn_name("reply_bible_1jn_4_9"),
      fn_name("reply_bible_1jn_4_10"),
      fn_name("reply_bible_verse_whole"),
      fn_name("reply_words"),
      fn_name("reply_on_match_bible_reference"),
      fn_name("reply_bible_references_closed"),
      fn_name("reply_bible_references_runs"),
      fn_name("reply_bible_references_merged"),
      fn_name("reply_bible_run_line"),
    ],
    diff: [
      verses_join,
      verses_add,
      "     join,",
      "+    verses,",
      verses_closed_before,
      verses_closed_prayers,
      verses_closed_after,
      "   return r;",
    ],
    cases: [
      {
        from: "",
        message: verses_message_commandment,
        answered: true,
        outputs: ["1 John 3:23 Amen!"],
      },
      {
        from: "",
        message: verses_message_passage,
        answered: true,
        outputs: ["1 John 4:7-10 Amen!"],
      },
      {
        from: "",
        message: text_combine_multiple([
          verses_message_commandment,
          " ",
          verses_message_passage,
        ]),
        answered: true,
        outputs: ["1 John 3:23 Amen!", "1 John 4:7-10 Amen!"],
      },
    ],
    decide: [
      "you asked for verses to come first in the reply and the prayer last, and for the verse to be fetched by its reference. A verse said whole gets its reference and Amen, and is not quoted back.",
      "the verse step can also quote a whole verse back when somebody says only part of it, as you asked, but no rule reads a part yet. No real message has done that, so a part of a verse gets no reply and comes to you. The rejected reading was guessing which pieces people would send.",
      "only these wordings are read, because you want others added when somebody really sends them. Jesus, Christ and Jesus Christ all count as the same in 3:23. The words as he hath commanded us are in that wording because this message uses them.",
      "the words leading into 4:7 are read only in front of that verse, so on their own they get no reply and come to you.",
      "the verses are downloaded before the reply goes out. If the download fails there is no reply, and the message comes to you, so a reply never goes out without its verses.",
      "this alone does not answer the choir leader's messages. They need every part understood, and more cards are coming for the rest.",
    ],
  };
  let proposals = [
    time_of_day,
    name_out,
    countries_in,
    typo_layer,
    cheapest_reading,
    name_piece,
    good_morning_back,
    friend_in_christ,
    teacher_blessed,
    blessing_one_space,
    from_town_country,
    poor_family,
    towns_wikidata,
    card_repeats_once,
    card_asks_gathered,
    names_pakistan,
    town_in_optional,
    cant_out,
    contact_street,
    my_name_said,
    join_glory,
    verses_said,
  ];
  return proposals;
}
