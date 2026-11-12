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
import { reply_choices_age } from "./reply_choices_age.mjs";
import { prayer_according_to_desire } from "./prayer_according_to_desire.mjs";
import { prayer_blessing_expand } from "./prayer_blessing_expand.mjs";
import { reply_choices_praise } from "./reply_choices_praise.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { emoji_smile } from "./emoji_smile.mjs";
import { emoji_disappointed } from "./emoji_disappointed.mjs";
import { prayer_blessing_line } from "./prayer_blessing_line.mjs";
import { reply_prayer_abundance_of_prayer } from "./reply_prayer_abundance_of_prayer.mjs";
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
    "app_shared_message_reply_choices_lambda",
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
  let jesus_head = text_combine_multiple([
    "   export function ",
    fn_name("reply_phrase_jesus"),
    "() {",
  ]);
  let jesus_either_removed = text_combine_multiple([
    "-  let phrase_jesus = ",
    fn_name("reply_either_both"),
    "(jesus, christ);",
  ]);
  let jesus_either_added = text_combine_multiple([
    "+  let name = ",
    fn_name("reply_either_both_unordered"),
    "(jesus, christ);",
  ]);
  let jesus_import_removed = text_combine_multiple([
    "-import { ",
    fn_name("reply_either_both"),
    ' } from "./',
    fn_name("reply_either_both"),
    '.mjs";',
  ]);
  let jesus_yeshua_messiah = text_combine_multiple([
    "+  let yeshua_messiah = ",
    fn_name("reply_sequence"),
    '([yeshua, "the", messiah]);',
  ]);
  let jesus_all = text_combine_multiple([
    "+  let phrase_jesus = ",
    fn_name("reply_choice"),
    "([name, yeshua, messiah, yeshua_messiah]);",
  ]);
  let jesus_line = "✝️ Jesus is Lord! 👑";
  let jesus_titles = {
    title: "read every title of Jesus in one function",
    fn: fn_name("reply_phrase_jesus"),
    whole: [fn_name("reply_either_both_unordered")],
    diff: [
      jesus_import_removed,
      jesus_head,
      '+  "Every way of saying the name of Jesus, each standing for the others. Lord is not one of them, because it also names the Father.";',
      '   let jesus = "jesus";',
      '   let christ = "christ";',
      jesus_either_removed,
      jesus_either_added,
      '+  let yeshua = "yeshua";',
      '+  let messiah = "messiah";',
      jesus_yeshua_messiah,
      jesus_all,
      "   return phrase_jesus;",
    ],
    cases: [
      {
        from: "",
        message: "Yeshua the Messiah",
        answered: true,
        outputs: [jesus_line],
      },
      {
        from: "",
        message: "Yeshua",
        answered: true,
        outputs: [jesus_line],
      },
      {
        from: "",
        message: "Messiah",
        answered: true,
        outputs: [jesus_line],
      },
      {
        from: "",
        message: "Christ Jesus",
        answered: true,
        outputs: [jesus_line],
      },
    ],
    decide: [
      "you asked for one function for the titles of Jesus. It reads Jesus, Christ, Jesus Christ, Christ Jesus, Yeshua, Messiah and Yeshua the Messiah. The second function that read Christ Jesus is gone, and the verse rules use this one.",
      "Lord is left out, because it also names the Father, so the LORD bless you could get Jesus is Lord back. The rejected reading was to count Lord as a title.",
      "other wordings, like the Messiah or Jesus the Messiah, get no reply and come to you until somebody really sends them.",
      "the my dear brother and my friend greetings use this same piece, so in Yeshua and in Messiah are heard after them too.",
      "Christ Jesus already gets this reply today, as two names one after the other. It is here to show that it keeps the same answer.",
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
  let combined68 = text_combine_multiple([
    "charity is a choice beside love and not part of it. It is only read where the Bibles print the noun, because ",
    fn_name("reply_word_love"),
    " also stands where a verb goes, and let us charity one another is not something the Bibles say. The rejected reading was putting charity inside ",
    fn_name("reply_word_love"),
    ".",
  ]);
  let combined69 = text_combine_multiple([
    "every Amen here comes from ",
    fn_name("prayer_end"),
    ", so it always closes the line, with the praying hands. That moves the Amen behind a quoted verse, where you first asked for it in front. The rejected reading was keeping a bare Amen in front for that one case.",
  ]);
  let us_word_call = text_combine_multiple([
    "+  let r = ",
    fn_name("reply_word_u_v"),
    '("us");',
  ]);
  let combined70 = text_combine_multiple([
    "this makes one function for the word us, with the old printing spelling vs inside it, so the name stays plain English. Live replies use it in two places: support us in ministry, and fellowship with us. So vs now counts in those two places as well. Both answers above are from the full rules, and the second is worked out from the first: today vs gets no answer there. The rejected reading was keeping two functions, ",
    fn_name("reply_word_us"),
    " for live replies and a longer name for the Bibles.",
  ]);
  let us_word = {
    title: "read vs as well as us",
    fn: fn_name("reply_word_us"),
    whole: [],
    diff: ['-  let v = "us";', "-  return v;", us_word_call, "+  return r;"],
    cases: [
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
          "I am requesting you to support vs in ministry according to God's will",
        answered: true,
        outputs: [nothing_to_give, wrapped],
      },
    ],
    decide: [
      combined70,
      "please help us has its own typed us, so it does not read vs. No Bible needs that, so I left it.",
      "after you approve, the four verse rules call this function and the longer one is deleted.",
    ],
  };
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
      fn_name("reply_word_u_v"),
      fn_name("reply_word_love"),
      fn_name("reply_word_love_loved"),
      fn_name("reply_word_s_eth"),
      fn_name("reply_word_charity_love"),
      fn_name("reply_word_son"),
      fn_name("reply_word_that_the"),
      fn_name("reply_word_he"),
      fn_name("reply_word_may_should"),
      fn_name("reply_word_herein_this"),
      fn_name("reply_word_command"),
      fn_name("reply_word_begotten_born"),
      fn_name("reply_word_because_for"),
      fn_name("reply_phrase_love_loved_for"),
      fn_name("reply_phrase_his_son"),
      fn_name("reply_phrase_that_we"),
      fn_name("reply_phrase_love_shown"),
      fn_name("reply_phrase_god_sent_his_son"),
      fn_name("reply_phrase_that_we_live"),
      fn_name("reply_phrase_love_for_one_another"),
      fn_name("reply_bible_verse_whole"),
      fn_name("reply_words"),
      fn_name("equal_by_property"),
      fn_name("equal_by_property_multiple"),
      fn_name("reply_on_match_bible_reference"),
      fn_name("reply_bible_references_closed"),
      fn_name("reply_bible_references_runs"),
      fn_name("reply_bible_references_merged"),
      fn_name("reply_bible_references_same_verse"),
      fn_name("reply_bible_runs_line"),
      fn_name("reply_bible_run_citation_after"),
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
        outputs: ["📖 1 John 3:23: Amen! 🙏"],
      },
      {
        from: "",
        message: verses_message_passage,
        answered: true,
        outputs: ["📖 1 John 4:7-10: Amen! 🙏"],
      },
      {
        from: "",
        message: text_combine_multiple([
          verses_message_commandment,
          " ",
          verses_message_passage,
        ]),
        answered: true,
        outputs: ["📖 1 John 3:23; 4:7-10: Amen! 🙏"],
      },
    ],
    decide: [
      "you asked for verses to come first in the reply and the prayer last, and for the verse to be fetched by its reference. A verse said whole gets its reference and Amen, and is not quoted back.",
      "the verse step can also quote a whole verse back when somebody says only part of it, as you asked, but no rule reads a part yet. No real message has done that, so a part of a verse gets no reply and comes to you. The rejected reading was guessing which pieces people would send.",
      combined69,
      "all the verses in a message share one line and one Amen: 1 John 3:23; 4:7-10. A comma means the same chapter, a semicolon another chapter or book. A verse quoted back keeps its own whole citation, so its words are not taken for a neighbour's. The rejected reading was one Amen per verse.",
      "the line opens with a book, and a colon comes before the Amen: the Amen is to what the Book says at that place, not to the wording or typos of the message. The rejected readings were a bare space, which reads as agreeing with what was typed, and As written in, which says it in more words.",
      "each verse rule starts as a draft written from its reference alone. It lines up the 16 English Bibles nobody owns, keeps the words in order, and offers a choice where they differ. So it also reads mixes no Bible wrote, which is how it reads this message's wordings with no quote typed in. Jesus, Christ and Jesus Christ all count as the same. Then the draft is edited by hand, swapping words and phrases for shared functions by what they mean, and the generator refuses a verse that already has a rule. The rejected readings were a list of whole wordings, adding this message's wording by hand, and letting the generator share functions by matching letters, which cannot see meaning and would write over every edit.",
      "words a Bible left out are optional, so the end of a verse can count as all of it: know God for God is love counts as 1 John 4:8 said whole. That person gets the reference and Amen, not the full verse. God is love alone gets no reply. The rejected reading was also asking for a minimum number of words, because no real message has needed it.",
      combined68,
      "a word printed with both u and v is written once and reads either spelling, even at a place where the Bibles printed only one. The rejected reading was a choice of one letter inside the word, because the cut pieces would forgive fewer typing mistakes.",
      "3:23 as the Bibles that say Yeshua the Messiah print it needs the card that reads every title of Jesus. Until that card goes in, those words get no reply and come to you.",
      "the words leading into 4:7 are read only in front of that verse, so on their own they get no reply and come to you.",
      "the verses are downloaded before the reply goes out. If the download fails there is no reply, and the message comes to you, so a reply never goes out without its verses.",
      "this alone does not answer the choir leader's messages. They need every part understood, and more cards are coming for the rest.",
    ],
  };
  let age_line = reply_choices_age();
  let age_verses = text_combine_multiple([
    "   let verses = ",
    fn_name("reply_bible_verses"),
    "();",
  ]);
  let age_add = text_combine_multiple([
    "+  let age = ",
    fn_name("reply_age_said"),
    "();",
  ]);
  let age_said = {
    title:
      "answer somebody saying their age with about how old the servant of God is",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_age_said"), fn_name("reply_choices_age")],
    diff: [age_verses, age_add, "     verses,", "+    age,"],
    cases: [
      {
        from: "",
        message: "and I'm 40th year old",
        answered: true,
        outputs: [age_line],
      },
      {
        from: "",
        message: "My name is Stephen Mark and I'm 40th year old",
        answered: true,
        outputs: [name_response, age_line],
      },
      {
        from: "",
        message: "I'm 40 year old",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "you asked for this line. The age is this year minus 1989, worked out when the reply is made, so it stays true every year with nobody editing it. Only the year is in the code, no month or day, and that is why it says about: before your birthday in any year it is one too many. The rejected reading was a typed age, which would be wrong by next year.",
      "the number they give is not used in the reply, so any two digits are read, followed by st, nd, rd or th, then year old. The rejected reading was reading only the number in the real message, which would fail for the next person.",
      "only this way of saying an age is read, because you want other wordings added when somebody really sends them. So I'm 40 year old, and I'm 40 years old, get no reply and come to you.",
      "this alone does not answer the choir leader's messages. They need every part understood, and more cards are coming for the rest.",
    ],
  };
  let teacher_blessing_line = text_combine_multiple([
    "   let teaching = ",
    fn_name("prayer_blessing"),
    '("your ministry and teaching");',
  ]);
  let teacher_old = text_combine_multiple([
    "-  let teacher = ",
    fn_name("reply_i_am_a_output"),
    '("teacher", teaching);',
  ]);
  let teacher_o_school = text_combine_multiple([
    "+  let o_sunday_school = ",
    fn_name("reply_sequence_optional"),
    '(["sunday", "school"]);',
  ]);
  let teacher_title = text_combine_multiple([
    "+  let title = ",
    fn_name("reply_sequence"),
    '([o_sunday_school, "teacher"]);',
  ]);
  let teacher_new = text_combine_multiple([
    "+  let teacher = ",
    fn_name("reply_i_am_a_output"),
    "(title, teaching);",
  ]);
  let ministers_old = text_combine_multiple([
    "-  let ministers = ",
    fn_name("reply_choice"),
    "([minister, teacher]);",
  ]);
  let work_add = text_combine_multiple([
    "+  let work = ",
    fn_name("reply_ministry_work"),
    "();",
  ]);
  let ministers_new = text_combine_multiple([
    "+  let ministers = ",
    fn_name("reply_choice"),
    "([minister, teacher, work]);",
  ]);
  let v3 = prayer_blessing("your ministry and the people of Kenya");
  let v4 = prayer_blessing("your ministry and the people of Kenya");
  let v5 = prayer_blessing("your ministry and the people of the Philippines");
  let v6 = prayer_blessing("your ministry and the people of Africa");
  let v7 = prayer_blessing("your ministry and the people of Antarctica");
  let v8 = prayer_blessing("your ministry and the people of Burma");
  let v9 = prayer_blessing("your ministry and the people of Yugoslavia");
  let teacher_work_said = {
    title:
      "bless a Sunday school teacher, and somebody doing ministry work in a country",
    fn: fn_name("app_shared_message_reply_minister"),
    whole: [
      fn_name("reply_ministry_work"),
      fn_name("reply_countries_shown"),
      fn_name("reply_continents_shown"),
      fn_name("reply_country_shown_words"),
      fn_name("reply_countries_shown_spellings"),
    ],
    diff: [
      teacher_blessing_line,
      teacher_old,
      teacher_o_school,
      teacher_title,
      teacher_new,
      ministers_old,
      work_add,
      ministers_new,
      "   return ministers;",
    ],
    cases: [
      {
        from: "",
        message: "I am a Sunday school teacher",
        answered: true,
        outputs: [teaching_response],
      },
      {
        from: "",
        message: "I am a teacher",
        answered: true,
        outputs: [teaching_response],
      },
      {
        from: "",
        message: "I do ministry work in Kenya",
        answered: true,
        outputs: [v3],
      },
      {
        from: "",
        message: "I do ministry work in Kenia",
        answered: true,
        outputs: [v4],
      },
      {
        from: "",
        message: "I do ministry work in the Philippines",
        answered: true,
        outputs: [v5],
      },
      {
        from: "",
        message: "I do ministry work in Africa",
        answered: true,
        outputs: [v6],
      },
      {
        from: "",
        message: "I do ministry work in Antarctica",
        answered: true,
        outputs: [v7],
      },
      {
        from: "",
        message: "I do ministry work in Burma",
        answered: true,
        outputs: [v8],
      },
      {
        from: "",
        message: "I do ministry work in Yugoslavia",
        answered: true,
        outputs: [v9],
      },
      {
        from: "",
        message: "I do ministry work in Nairobi",
        answered: false,
        outputs: [],
      },
      {
        from: "",
        message: "I do ministry work",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "a Sunday school teacher gets the same blessing as any teacher: your ministry and teaching. The rejected reading was a separate blessing for Sunday school.",
      "ministry work in a country also blesses the people of that country. The rejected reading was also answering with the location line, because the person is saying where they serve and not where they are from.",
      "the name in the prayer always comes from a list of 316 written names, 309 countries and 7 continents, and never from the letters somebody typed. So Kenia is prayed for as Kenya. A town is never repeated, because a town gets no reply here at all. The rejected reading was repeating the typed word, which would repeat a misspelling.",
      "continents count only for ministry work. Whether I am from Africa should count as saying where somebody is from is a separate question, not changed here. Antarctica is blessed like the rest because you asked for continents, though almost nobody lives there.",
      "every spelling now has a name. Places that no longer exist are said back as written, like Yugoslavia, and so are places where almost nobody lives, like Bouvet Island. Jokes and old misspellings get the proper name, so murica is prayed for as America and saudi as Saudi Arabia. The rejected reading was the plain blessing for these, which left real people out of the prayer on my judgment.",
      "Rhodesia and Zaire are on the list and said back as written, because the prayer only repeats what the person said. Tell me if you want Rhodesia said differently, because that name carries a painful history.",
      "the list includes names people disagree about, such as Taiwan, Palestine and Kosovo, because it only says back what the person said. Tell me if you want any of them to get the plain blessing instead.",
      "only these words are read, with the country from the list, because you want other wordings added when somebody really sends them.",
      "this alone does not answer the waiting messages. They need every part understood, and more cards are coming for the rest.",
    ],
  };
  let names_sanskrit_said = {
    title: "know 57 more common names from India",
    fn: fn_name("reply_names_sanskrit"),
    whole: [],
    diff: [
      "   let names = [",
      '+    "abhishek",',
      '+    "aditya",',
      '     "ajay",',
      '+    "akash",',
      '+    "amar",',
      '     "amit",',
      '+    "anand",',
      '+    "ananya",',
      '     "anil",',
      '     "anita",',
      '+    "anjali",',
      '+    "ankit",',
      '+    "arjun",',
      '+    "arun",',
      '+    "asha",',
      '+    "ashok",',
      '+    "bharat",',
      '+    "chandra",',
      '+    "deepa",',
      '     "deepak",',
      '+    "devi",',
      '+    "dinesh",',
      '+    "divya",',
      '+    "ganesh",',
      '     "geeta",',
      '+    "gopal",',
      '+    "harish",',
      '+    "jyoti",',
      '+    "karan",',
      '     "kavita",',
      '+    "kiran",',
      '+    "krishna",',
      '+    "kumar",',
      '     "lakshmi",',
      '+    "lata",',
      '+    "madhu",',
      '     "mahesh",',
      '     "manoj",',
      '     "meena",',
      '+    "mohan",',
      '+    "mukesh",',
      '+    "naresh",',
      '     "neha",',
      '+    "nisha",',
      '+    "pankaj",',
      '     "pooja",',
      '+    "pradeep",',
      '     "prakash",',
      '+    "pramod",',
      '     "priya",',
      '+    "rahul",',
      '     "rajesh",',
      '+    "rakesh",',
      '     "ramesh",',
      '     "rani",',
      '+    "ravi",',
      '     "rekha",',
      '+    "rohit",',
      '+    "sagar",',
      '+    "sandeep",',
      '     "sanjay",',
      '+    "santosh",',
      '+    "sarita",',
      '     "seema",',
      '+    "shanti",',
      '+    "shiva",',
      '+    "shyam",',
      '+    "sita",',
      '+    "sudha",',
      '+    "sumit",',
      '     "sunil",',
      '     "sunita",',
      '     "suresh",',
      '+    "usha",',
      '+    "varun",',
      '     "vijay",',
      '+    "vikas",',
      '+    "vikram",',
      '+    "vinod",',
      '+    "vishal",',
      '+    "vivek",',
      '+    "yogesh",',
    ],
    cases: [
      {
        from: "",
        message: "I am pastor Samuel Vikram from Kenya",
        answered: true,
        outputs: named_and_located,
      },
    ],
    decide: [
      "one of these is a name in the waiting message. All of them are here because millions of people have them, which is the rule for this list. They carry nothing else about that person: no town, no phone, no street. Are you content to publish them?",
      "you asked for more names here, so this list grew ahead of real messages. The rejected reading was adding only names somebody has already sent.",
      "a name only counts where a name is expected, after my name is, I am, or myself. So a name that is also a place, like Anand, does not change how a place is read.",
      "somebody whose name is on no list still gets no reply and comes to you.",
    ],
  };
  let desire_keep = text_combine_multiple([
    "   let v24 = ",
    fn_name("emoji_pray"),
    "();",
  ]);
  let desire_left = text_combine_multiple([
    "-  let left40 = ",
    fn_name("emoji_pray"),
    "();",
  ]);
  let desire_after = text_combine_multiple([
    "   let v25 = ",
    fn_name("emoji_pray"),
    "();",
  ]);
  let desire_text = text_combine_multiple([
    "       text: ",
    fn_name("text_combine_multiple"),
    '([v24, " ", "Prayers"]),',
  ]);
  let desire_open = text_combine_multiple([
    "-      response: ",
    fn_name("text_combine"),
    "(",
  ]);
  let desire_new = text_combine_multiple([
    "+      response: ",
    fn_name("prayer_according_to_desire"),
    "(),",
  ]);
  let desire_line = {
    title:
      "put a space after the praying hands in the reply app's prayer line, and share that line",
    fn: fn_name("app_reply_choices"),
    whole: [fn_name("prayer_according_to_desire")],
    diff: [
      desire_keep,
      desire_left,
      desire_after,
      desire_text,
      desire_open,
      "-        left40,",
      '-        "According to the desire of God, may there be prayer",',
      "-      ),",
      desire_new,
    ],
    cases: [],
    decide: [
      "this is on its own because it changes what the reply app already says. The only change is the space you asked for, and the message rules can then use the same line.",
    ],
  };
  let should_add = text_combine_multiple([
    "+  let we_should = ",
    fn_name("reply_we_should"),
    "();",
  ]);
  let love_verse =
    "📖 1 John 4:7 Beloved, let us love one another, because love comes from God. Everyone who loves has been born of God and knows God. Amen! 🙏";
  let line2 = reply_prayer_will_done();
  let stay_prayer = reply_prayer_closing([line2]);
  let we_should_said = {
    title: "answer we should love each other and stay connected",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_we_should")],
    diff: [age_verses, should_add, "     verses,", "+    we_should,"],
    cases: [
      {
        from: "",
        message: "We should love each other",
        answered: true,
        outputs: [love_verse],
      },
      {
        from: "",
        message:
          "We should also love each other and stay connected to each other",
        answered: true,
        outputs: [love_verse, stay_prayer],
      },
      {
        from: "",
        message: "We should stay connected to each other",
        answered: true,
        outputs: [stay_prayer],
      },
      {
        from: "",
        message: "We should love",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "love each other gets 1 John 4:7 with its words and Amen, on the verse line, as you asked. The Amen is on that line, so it is not said twice. The rejected reading was an Amen line of its own.",
      "stay connected gets the prayer that the LORD have His will done, in the closing prayer at the end.",
      "the sentence is written as we should, then one thing, then and another as many times as they say. A new thing is one more choice. The rejected reading was one rule per whole sentence.",
    ],
  };
  let pray_add = text_combine_multiple([
    "+  let pray_for_me = ",
    fn_name("reply_pray_for_me"),
    "();",
  ]);
  let line3 = prayer_according_to_desire();
  let v2 = prayer_blessing_expand();
  let pray_lines = [line3, v2];
  let pray_for_me_said = {
    title: "answer I ask you to pray for me",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_pray_for_me")],
    diff: [age_verses, pray_add, "     verses,", "+    pray_for_me,"],
    cases: [
      {
        from: "",
        message: "I ask you to pray for me",
        answered: true,
        outputs: pray_lines,
      },
      {
        from: "",
        message: "I ask you to pray for me, my dear brother",
        answered: true,
        outputs: pray_lines,
      },
      {
        from: "",
        message: "I ask you to pray",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "these are your two lines, the prayer line from the reply app and the blessing on you, your family, your church and your country. Both are shared with the reply app, so editing either changes both.",
      "the blessing keeps its own opening and Amen, so a reply can hold it and a separate closing prayer. The rejected reading was moving it inside the closing prayer, because that would make it a second wording of the same blessing.",
      "only these words are read, because you want other ways of asking added when somebody really sends them.",
    ],
  };
  let myself_names = text_combine_multiple([
    "   let my_name_is = ",
    fn_name("reply_sequence"),
    '(["my", "name", "is"]);',
  ]);
  let myself_and = text_combine_multiple([
    "+  let o_and = ",
    fn_name("reply_optional"),
    '("and");',
  ]);
  let myself_add = text_combine_multiple([
    "+  let myself = ",
    fn_name("reply_sequence"),
    '([o_and, "myself"]);',
  ]);
  let myself_old = text_combine_multiple([
    "-  let said = ",
    fn_name("reply_choice"),
    "([iam, my_name_is]);",
  ]);
  let myself_new = text_combine_multiple([
    "+  let said = ",
    fn_name("reply_choice"),
    "([iam, my_name_is, myself]);",
  ]);
  let myself_said = {
    title: "answer somebody signing off with myself and their name",
    fn: fn_name("app_shared_message_reply_iam_titled_name"),
    whole: [],
    diff: [myself_names, myself_and, myself_add, myself_old, myself_new],
    cases: [
      {
        from: "",
        message: "And myself Samuel Grace from Kenya",
        answered: true,
        outputs: named_and_located,
      },
      {
        from: "",
        message: "Myself Samuel",
        answered: true,
        outputs: [name_response],
      },
      {
        from: "",
        message: "Myself from Kenya",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "myself then a name counts the same as my name is, so it gets the same answer, and from a country adds the location line. The rejected reading was a new line for a sign-off, because new words are yours to write.",
      "myself with no name after it gets no reply and comes to you.",
    ],
  };
  let name_alone_add = text_combine_multiple([
    "+  let name_alone = ",
    fn_name("app_shared_message_reply_iam_titled_name"),
    "();",
  ]);
  let age_then = text_combine_multiple([
    "   let age = ",
    fn_name("reply_age_said"),
    "();",
  ]);
  let name_alone_said = {
    title: "answer somebody giving their name with no country after it",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [],
    diff: [age_then, name_alone_add, "     age,", "+    name_alone,"],
    cases: [
      {
        from: "",
        message: "My name is Stephen Mark",
        answered: true,
        outputs: [name_response],
      },
      {
        from: "",
        message: "My name is Stephen Mark and I'm 40th year old",
        answered: true,
        outputs: [name_response, age_line],
      },
      {
        from: "",
        message: "Myself Samuel",
        answered: true,
        outputs: [name_response],
      },
      {
        from: "",
        message: "I am Grace",
        answered: true,
        outputs: [name_response],
      },
      {
        from: "",
        message: "My name is hungry",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "the earlier cards said my name is and myself would get the name line, but they only taught the words. The rule was reached only when from and a country followed, so those tests were never true. This is the line that makes them true.",
      "measured on the two waiting messages: with this line both are read whole, one gets 11 lines back and the other 10. All 20 messages with no reply yet stay silent.",
      "I am Grace on its own now gets the name line. An earlier card said it would not, and said a bare name would be a separate rule; this is that rule. The rejected reading was answering my name is and myself but not I am, which would give one way of saying a name no reply and the others one.",
    ],
  };
  let combined71 = text_combine_multiple([
    "-  let v2 = ",
    fn_name("text_lord_bless"),
    "();",
  ]);
  let combined72 = text_combine_multiple([
    "+  let v2 = ",
    fn_name("text_lord_bless_always"),
    "();",
  ]);
  let response = reply_response_greetings_friend();
  let t3 = reply_choices_location();
  let v11 = prayer_blessing("your ministry and teaching");
  let v12 = prayer_blessing("your ministry");
  let line4 = prayer_according_to_desire();
  let v13 = prayer_blessing("you, your family, your church and your country");
  let blessing_always_said = {
    title: "May the LORD always bless",
    fn: fn_name("prayer_blessing"),
    whole: [fn_name("text_lord_bless_always")],
    diff: [
      combined71,
      combined72,
      blessing_kept_combine,
      "     v2,",
      "     blessed,",
      '     " exceedingly abundantly more than anyone can ask or think",',
      "   ]);",
      blessing_kept_wrap,
      "   return v;",
    ],
    cases: [
      {
        from: "3d27ef64ea033e69",
        message: "Hello myfriendinChrist, am from AccrainGhana,amteacher,",
        answered: true,
        outputs: [response, t3, v11],
      },
      {
        from: "",
        message: "I am a pastor",
        answered: true,
        outputs: [v12],
      },
      {
        from: "",
        message: "I ask you to pray for me",
        answered: true,
        outputs: [line4, v13],
      },
    ],
    decide: [
      "this changes only the words: every blessing prayer now says May the LORD always bless. Nothing new is matched, so no message gets a reply that got none before.",
      "the blessing for a reader who chose Jewish keeps May the LORD bless you and keep you, because it is Numbers 6:24-26 word for word, and Scripture is not reworded.",
      "the longer blessing in the reply app changes the same way. The short blessing on your ministry in the reply app's buttons is left as it is for now; it can follow in its own change.",
      "the rejected reading was May the LORD bless you now. Always says the blessing does not end, and now would date it to the day it was sent.",
      "measured on the saved tests: one saved message changes, the full message from Accra, and only in this one word. The two short ones here show the change on its own.",
    ],
  };
  let name_alone_then = text_combine_multiple([
    "   let name_alone = ",
    fn_name("app_shared_message_reply_iam_titled_name"),
    "();",
  ]);
  let meeting_add = text_combine_multiple([
    "+  let meeting = ",
    fn_name("reply_meeting_blessed"),
    "();",
  ]);
  let meeting_praise = reply_choices_praise();
  let meeting_glory = reply_choices_glory();
  let meeting_blessing = prayer_blessing("you and everyone at the meeting");
  let meeting_blessed_said = {
    title: "answer somebody saying today's meeting was blessed",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_meeting_blessed")],
    diff: [name_alone_then, meeting_add, "     name_alone,", "+    meeting,"],
    cases: [
      {
        from: "",
        message: "Today meeting is very blessed",
        answered: true,
        outputs: [meeting_praise, meeting_glory, meeting_blessing],
      },
    ],
    decide: [
      "these are the words of a message waiting for a reply, and only those words are matched. The rejected reading was also taking was, or leaving out very, because nobody has said those yet.",
      "the reply is praise to the LORD, glory to God, then the blessing on them and everyone at the meeting.",
      "leaving out the Amen is caution, not a rejection: the reply still praises God and pronounces a blessing on the meeting. No Amen is said to the message itself because Amen agrees that what was said is so, and nobody here saw the meeting. Amen stays where its object is on the page - a verse quoted back, a praise of God, the end of the reply's own prayer. The rejected reading was keeping the Amen because the rule matches only these exact words; that proves a person read the words, not that the meeting was blessed.",
    ],
  };
  function blessing_exclaimed_for(blessed) {
    let request = text_combine_multiple([
      "always bless ",
      blessed,
      " exceedingly abundantly more than anyone can ask or think",
    ]);
    let exclaimed_line = text_may_the_lord_exclamation(request);
    let exclaimed_wrapped = prayer_wrap(exclaimed_line);
    return exclaimed_wrapped;
  }
  let exclaimed_v2_out = text_combine_multiple([
    "-  let v2 = ",
    fn_name("text_lord_bless_always"),
    "();",
  ]);
  let exclaimed_combine_out = text_combine_multiple([
    "-  let prayer = ",
    fn_name("text_combine_multiple"),
    "([",
  ]);
  let exclaimed_combine_in = text_combine_multiple([
    "+  let request = ",
    fn_name("text_combine_multiple"),
    "([",
  ]);
  let exclaimed_line_in = text_combine_multiple([
    "+  let prayer = ",
    fn_name("text_may_the_lord_exclamation"),
    "(request);",
  ]);
  let exclaimed_pastor = blessing_exclaimed_for("your ministry");
  let exclaimed_kenya = blessing_exclaimed_for(
    "your ministry and the people of Kenya",
  );
  let exclaimed_desire = prayer_according_to_desire();
  let exclaimed_family = blessing_exclaimed_for(
    "you, your family, your church and your country",
  );
  let combined73 = text_combine_multiple([
    "the ! is added the same way the provider prayer already adds it, through ",
    fn_name("text_may_the_lord_exclamation"),
    ", so the two prayers end alike.",
  ]);
  let blessing_exclaimed = {
    title: "the blessing prayer ends with !",
    fn: fn_name("prayer_blessing"),
    whole: [],
    diff: [
      exclaimed_v2_out,
      exclaimed_combine_out,
      "-    v2,",
      exclaimed_combine_in,
      '+    "always bless ",',
      "     blessed,",
      '     " exceedingly abundantly more than anyone can ask or think",',
      "   ]);",
      exclaimed_line_in,
      blessing_kept_wrap,
      "   return v;",
    ],
    cases: [
      {
        from: "",
        message: "I am a pastor",
        answered: true,
        outputs: [exclaimed_pastor],
      },
      {
        from: "",
        message: "I do ministry work in Kenya",
        answered: true,
        outputs: [exclaimed_kenya],
      },
      {
        from: "",
        message: "I ask you to pray for me",
        answered: true,
        outputs: [exclaimed_desire, exclaimed_family],
      },
    ],
    decide: [
      "this changes only the words: the blessing prayer now reads ... more than anyone can ask or think! Amen! Nothing new is matched, so no message gets a reply that got none before.",
      "four replies use this one blessing: a pastor or minister, ministry work in a country, the Bless button's longer blessing on you, your family, your church and your country, and the meeting change waiting above. All four change together.",
      combined73,
      "the rejected reading was leaving the blessing without !, as the heal, job, provide and safe travels prayers still are. Those can follow in their own change.",
    ],
  };
  let meeting_then = text_combine_multiple([
    "   let meeting = ",
    fn_name("reply_meeting_blessed"),
    "();",
  ]);
  let tiktok_add = text_combine_multiple([
    "+  let tiktok = ",
    fn_name("reply_tiktok_link"),
    "();",
  ]);
  let exclaimed = text_may_the_lord_exclamation("bless all Christian videos");
  let prayer2 = text_combine_multiple([
    "May the word of the LORD go forth! ",
    exclaimed,
  ]);
  let tiktok_prayer = prayer_wrap(prayer2);
  let tiktok_link_said = {
    title: "answer somebody sending a TikTok link",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_tiktok_link")],
    diff: [meeting_then, tiktok_add, "     meeting,", "+    tiktok,"],
    cases: [
      {
        from: "",
        message: "https://vt.tiktok.com/ZSqGDCgCN/",
        answered: true,
        outputs: [tiktok_prayer],
      },
    ],
    decide: [
      "the words of the prayer are yours: May the word of the LORD go forth! May the LORD bless all Christian videos! It is said inside the prayer, so it opens in the name of the Father, and of the Son, and of the Holy Spirit and ends with Amen.",
      "you wrote word of LORD; this says word of the LORD, the way the Bible says it (Isaiah 2:3). The rejected reading was keeping word of LORD exactly as typed.",
      "this is the shape of the link a waiting message really sent - the short vt.tiktok.com address and its code - and only that shape is matched. The rejected reading was also taking www.tiktok.com and other sites' links, because nobody waiting has sent those yet.",
      "the video is not watched, so the prayer blesses Christian videos and never this video by name.",
    ],
  };
  let lower_minus = text_combine_multiple([
    "-  let lower = ",
    fn_name("text_lower_to"),
    "(message);",
  ]);
  let straight_plus = text_combine_multiple([
    "+  let straight = ",
    fn_name("text_apostrophe_straightened"),
    "(message);",
  ]);
  let lower_plus = text_combine_multiple([
    "+  let lower = ",
    fn_name("text_lower_to"),
    "(straight);",
  ]);
  let tokens_then = text_combine_multiple([
    "   let tokens = ",
    fn_name("text_split_empty"),
    "(lower);",
  ]);
  let apostrophe_curly = {
    title: "read a phone's curly apostrophe the same as a straight one",
    fn: fn_name("reply_messages_inner_transform"),
    whole: [],
    diff: [lower_minus, straight_plus, lower_plus, tokens_then],
    cases: [
      {
        from: "",
        message: "I’m Grace from Kenya",
        answered: true,
        outputs: named_and_located,
      },
      {
        from: "",
        message: "I’m John",
        answered: true,
        outputs: [name_response],
      },
      {
        from: "",
        message: "I’m from Pakistan",
        answered: true,
        outputs: [t],
      },
    ],
    decide: [
      "phones type the curly apostrophe and computers type the straight one. Today the curly one is thrown away before any rule reads the message, so I'm John gets an answer and the same words typed on a phone get nothing. Tested before this change: I'm John, I'm from Pakistan and Hi I'm John from Kenya are answered, and every one of them typed with the curly mark is not.",
      "this only ever adds answers: a message with no curly apostrophe reads exactly as before, and one with it reads the way the straight spelling already does.",
      "the straightening is the repo's own step, already used for the Bible word stores for the same reason. It covers the two curly marks only. The rejected reading was also turning other lookalikes into the straight mark (the modifier letter, the backtick, the prime), because no waiting message has been seen using them.",
    ],
  };
  let amen_let_kept = text_combine_multiple([
    "   let age = ",
    fn_name("reply_age_said"),
    "();",
  ]);
  let amen_let_added = text_combine_multiple([
    "+  let amen = ",
    fn_name("reply_amen_said"),
    "();",
  ]);
  let amen_heard = {
    title: "hear an Amen and answer nothing to it",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_amen_said")],
    diff: [amen_let_kept, amen_let_added, "     age,", "+    amen,"],
    cases: [
      {
        from: "",
        message: "Amen 🙏",
        answered: true,
        outputs: [],
      },
      {
        from: "",
        message: "Amen\ngood morning",
        answered: true,
        outputs: ["🌅👋😁 Good morning! ✝️"],
      },
    ],
    decide: [
      "an Amen gets no words back. Today a message holding an Amen gets no reply at all, even when the rest of it would be answered; after this the Amen is read past and the rest is answered.",
      "a message that is only Amen now counts as read with nothing to say, instead of as not understood. Nothing is sent either way. The rejected reading was keeping a bare Amen as not understood, so it would still show up as waiting for a new rule.",
      "the emojis around it are dropped before any rule reads the message, so Amen with emojis reads the same as Amen.",
    ],
  };
  let bless_let_kept = text_combine_multiple([
    "   let name_alone = ",
    fn_name("app_shared_message_reply_iam_titled_name"),
    "();",
  ]);
  let bless_let_added = text_combine_multiple([
    "+  let blessed_back = ",
    fn_name("reply_god_bless_you_thanked"),
    "();",
  ]);
  let v10 = emoji_pray();
  let v14 = emoji_smile();
  let bless_thanks = text_combine_multiple([
    v10,
    " Thank you for the blessing! ",
    v14,
  ]);
  let v15 = prayer_blessing_expand();
  let bless_outputs = [bless_thanks, v15];
  let bless_thanked = {
    title: "thank somebody who says God bless you, and bless them back",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_god_bless_you_thanked")],
    diff: [
      bless_let_kept,
      bless_let_added,
      "     name_alone,",
      "+    blessed_back,",
    ],
    cases: [
      {
        from: "",
        message: "God bless you",
        answered: true,
        outputs: bless_outputs,
      },
      {
        from: "",
        message: "God bless you dear brother",
        answered: true,
        outputs: bless_outputs,
      },
    ],
    decide: [
      "the words are yours: thanks for the blessing, then the longer blessing on you, your family, your church and your country, each as its own paragraph.",
      "brother after it is optional, and so are my, dear and in Christ, the same way the other replies hear them.",
      "only God bless you is matched. The rejected reading was also taking God bless or May God bless you, because nobody waiting has said those yet.",
    ],
  };
  let full_let_kept = text_combine_multiple([
    "   let tiktok = ",
    fn_name("reply_tiktok_link"),
    "();",
  ]);
  let full_let_added = text_combine_multiple([
    "+  let friend_list = ",
    fn_name("reply_friend_list_full"),
    "();",
  ]);
  let v16 = emoji_pray();
  let v17 = emoji_disappointed();
  let full_output = text_combine_multiple([
    v17,
    " My Facebook friend list has gotten full before, yes, but if God wills we can talk here ",
    v16,
  ]);
  let friend_list_said = {
    title: "answer somebody who says my friend list is full",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [fn_name("reply_friend_list_full")],
    diff: [full_let_kept, full_let_added, "     tiktok,", "+    friend_list,"],
    cases: [
      {
        from: "",
        message: "brother your friend list is full",
        answered: true,
        outputs: [full_output],
      },
      {
        from: "",
        message: "your friend list is full",
        answered: true,
        outputs: [full_output],
      },
    ],
    decide: [
      "the words are yours: a disappointed face, then My Facebook friend list has gotten full before, yes, but if God wills we can talk here, with a praying hands emoji after. Facebook is said so it is plain which list is meant; the rejected reading was hearing your Facebook friend list is full as well, because nobody waiting has said Facebook.",
      "brother in front is optional, heard by the same my dear brother piece as every other rule. Oh brother in front is heard only once the change putting oh into that piece goes in too. Only your friend list is full is matched; the rejected reading was also taking other wordings, because nobody waiting has used them yet.",
      "measured with all four of these changes in: a message saying Amen, then God bless you brother, then oh brother your friend list is full, gets three paragraphs - the thanks, the blessing, and this answer - and good morning and hello are answered as before.",
    ],
  };
  let oh_db_kept = text_combine_multiple([
    "   let db = ",
    fn_name("reply_either_both"),
    "(dear, brother);",
  ]);
  let oh_added = text_combine_multiple([
    "+  let oh = ",
    fn_name("reply_optional"),
    '("oh");',
  ]);
  let oh_seq_removed = text_combine_multiple([
    "-  let fn16 = ",
    fn_name("reply_sequence"),
    "([my, db, in_christ]);",
  ]);
  let oh_seq_added = text_combine_multiple([
    "+  let fn16 = ",
    fn_name("reply_sequence"),
    "([oh, my, db, in_christ]);",
  ]);
  let greetings = reply_response_greetings();
  let oh_hello_said = [greetings];
  let oh_brother_heard = {
    title: "hear oh in front of brother everywhere brother is heard",
    fn: fn_name("reply_phrase_my_dear_brother"),
    whole: [],
    diff: [
      oh_db_kept,
      oh_added,
      oh_seq_removed,
      oh_seq_added,
      "   let choices = [fn16, my];",
    ],
    cases: [
      {
        from: "",
        message: "Hello oh brother",
        answered: true,
        outputs: oh_hello_said,
      },
      {
        from: "",
        message: "Hello oh my dear brother",
        answered: true,
        outputs: oh_hello_said,
      },
      {
        from: "",
        message: "Hello oh dear brother",
        answered: true,
        outputs: oh_hello_said,
      },
      {
        from: "",
        message: "Hello oh",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "this is the shared piece: every rule that hears brother, my brother, dear brother or my dear brother in Christ now also hears oh in front of it - greetings, thank you, God bless you, the friend list answer, and the rest. Nothing is said differently; only more messages are heard.",
      "oh is heard only right before brother or dear, never alone, so oh by itself and oh my are not newly matched. The rejected reading was hearing oh anywhere as a word to skip, because oh my God would then read as my God.",
      "the friend list change leans on this one for oh brother your friend list is full. Approved without this, it still answers your friend list is full and brother your friend list is full.",
    ],
  };
  let jesus_lord = "✝️ Jesus is Lord! 👑";
  let jesus_said_added = text_combine_multiple([
    "+  let jesus = ",
    fn_name("reply_choice"),
    '(["jesus", "iesus"]);',
  ]);
  let jesus_name_removed = text_combine_multiple([
    "-  let name = ",
    fn_name("reply_either_both_unordered"),
    "(jesus, christ);",
  ]);
  let jesus_christ_added = text_combine_multiple([
    "+  let jesus_christ = ",
    fn_name("reply_sequence"),
    "([jesus, christ]);",
  ]);
  let christ_jesus_added = text_combine_multiple([
    "+  let christ_jesus = ",
    fn_name("reply_sequence"),
    "([christ, jesus]);",
  ]);
  let yeshua_messiah_kept = text_combine_multiple([
    "   let yeshua_messiah = ",
    fn_name("reply_sequence"),
    '([yeshua, "the", messiah]);',
  ]);
  let messiah_yeshua_added = text_combine_multiple([
    "+  let messiah_yeshua = ",
    fn_name("reply_sequence"),
    "([messiah, yeshua]);",
  ]);
  let jesus_choice_removed = text_combine_multiple([
    "-  let phrase_jesus = ",
    fn_name("reply_choice"),
    "([name, yeshua, messiah, yeshua_messiah]);",
  ]);
  let jesus_choice_added = text_combine_multiple([
    "+  let phrase_jesus = ",
    fn_name("reply_choice"),
    "([jesus_christ, christ_jesus, yeshua_messiah, messiah_yeshua, jesus, christ, yeshua, messiah]);",
  ]);
  let jesus_whole_name = {
    title: "hear the name of Jesus said in two words as one name",
    fn: fn_name("reply_phrase_jesus"),
    whole: [],
    diff: [
      '   "Every way of saying the name of Jesus, each standing for the others. Lord is not one of them, because it also names the Father.";',
      '-  let jesus = "jesus";',
      jesus_said_added,
      '   let christ = "christ";',
      jesus_name_removed,
      '+  "★ THE TWO-WORD NAMES ARE LISTED BEFORE THE ONE-WORD ONES. Two readings that cost the same are settled by which was found first, so with Christ listed alone ahead of Christ Jesus, a verse ending in Christ Jesus was read as ending at Christ, and Jesus was left over for the rule that answers his name - a second reply. Measured 2026-11-11 on Philippians 4:7.";',
      jesus_christ_added,
      christ_jesus_added,
      '   let yeshua = "yeshua";',
      '   let messiah = "messiah";',
      yeshua_messiah_kept,
      messiah_yeshua_added,
      jesus_choice_removed,
      jesus_choice_added,
      "   return phrase_jesus;",
    ],
    cases: [
      {
        from: "",
        message: "Jesus Christ",
        answered: true,
        outputs: [jesus_lord],
      },
      {
        from: "",
        message: "Christ Jesus",
        answered: true,
        outputs: [jesus_lord],
      },
      {
        from: "",
        message: "Iesus Christ",
        answered: true,
        outputs: [jesus_lord],
      },
      {
        from: "",
        message: "Yeshua the Messiah",
        answered: true,
        outputs: [jesus_lord],
      },
      {
        from: "",
        message: "Messiah Yeshua",
        answered: true,
        outputs: [jesus_lord],
      },
    ],
    decide: [
      "this is the shared piece for the name of Jesus, used by the rule that answers his name and by every rule that hears it inside something longer. Nothing is said differently: each message above already gets Jesus is Lord once today, because a reply said twice is sent once.",
      "what it changes is which reading wins when two cost the same. Christ Jesus, Jesus Christ, Yeshua the Messiah and Messiah Yeshua are now read as one name before either word is read alone, so a verse or a phrase ending in the whole name is not cut short with the last word answered on its own. Iesus, the old spelling, and Messiah Yeshua in that order are heard too.",
      "the Philippians change waits on this one: once it is approved, Philippians 4:7 uses this shared piece for its ending in place of its own Christ Jesus. Approved alone, nothing anybody sees changes today.",
    ],
  };
  let php_cited = "📖 Philippians 4:6-7: Amen! 🙏";
  let php_said_removed =
    '-  "Every verse the rules know how to read, one at a time. The words that lead into a passage are read only in front of its first verse, because on their own they say nothing to answer.";';
  let php_said_added =
    '+  "Every verse the rules know how to read, one at a time, each of which may have a heading in front of it saying a verse is coming and where it is. A heading alone is never read, because a verse must follow it.";';
  let php_lead_words_removed = text_combine_multiple([
    "-  let lead_in = ",
    fn_name("reply_words"),
    "(",
  ]);
  let php_lead_text_removed =
    '-    "for in the word of the lord it is written in the first john verses 7 through 10",';
  let php_lead_optional_removed = text_combine_multiple([
    "-  let fn = ",
    fn_name("reply_optional"),
    "(lead_in);",
  ]);
  let php_lead_added = text_combine_multiple([
    "+  let lead = ",
    fn_name("reply_bible_lead"),
    "();",
  ]);
  let php_seven_kept = text_combine_multiple([
    "   let noted = ",
    fn_name("reply_bible_1jn_4_7"),
    "();",
  ]);
  let php_seven_led_removed = text_combine_multiple([
    "-  let seven = ",
    fn_name("reply_sequence"),
    "([fn, noted]);",
  ]);
  let php_kept_3_ = text_combine_multiple([
    "   let noted2 = ",
    fn_name("reply_bible_1jn_3_23"),
    "();",
  ]);
  let php_kept_4_ = text_combine_multiple([
    "   let noted3 = ",
    fn_name("reply_bible_1jn_4_8"),
    "();",
  ]);
  let php_kept_4_9 = text_combine_multiple([
    "   let noted4 = ",
    fn_name("reply_bible_1jn_4_9"),
    "();",
  ]);
  let php_kept = text_combine_multiple([
    "   let noted5 = ",
    fn_name("reply_bible_1jn_4_10"),
    "();",
  ]);
  let php_six_read = text_combine_multiple([
    "+  let php_6 = ",
    fn_name("reply_bible_php_4_6"),
    "();",
  ]);
  let php_seven_read = text_combine_multiple([
    "+  let php_7 = ",
    fn_name("reply_bible_php_4_7"),
    "();",
  ]);
  let php_list_removed = text_combine_multiple([
    "-  let verses = ",
    fn_name("reply_choice"),
    "([noted2, seven, noted3, noted4, noted5]);",
  ]);
  let php_list_added = text_combine_multiple([
    "+  let verse = ",
    fn_name("reply_choice"),
    "([noted2, noted, noted3, noted4, noted5, php_6, php_7]);",
  ]);
  let php_led_added = text_combine_multiple([
    "+  let verses = ",
    fn_name("reply_sequence"),
    "([lead, verse]);",
  ]);
  let php_seven_message =
    "Beloved, let us love one another, for love is from God; and everyone who loves has been born of God and knows God.";
  let php_bsb_message =
    "Be anxious for nothing, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.";
  let php_verses_said = {
    title:
      "read Philippians 4:6-7, hear a heading before any verse, and answer with the verse and Amen",
    fn: fn_name("reply_bible_verses"),
    whole: [
      fn_name("reply_bible_php_4_6"),
      fn_name("reply_bible_php_4_7"),
      fn_name("reply_bible_lead"),
      fn_name("reply_bible_reference"),
      fn_name("reply_bible_book"),
    ],
    diff: [
      php_said_removed,
      php_said_added,
      php_lead_words_removed,
      php_lead_text_removed,
      "-  );",
      php_lead_optional_removed,
      php_lead_added,
      php_seven_kept,
      php_seven_led_removed,
      php_kept_3_,
      php_kept_4_,
      php_kept_4_9,
      php_kept,
      php_six_read,
      php_seven_read,
      php_list_removed,
      php_list_added,
      php_led_added,
      "   return verses;",
    ],
    cases: [
      {
        from: "",
        message:
          "*Today’s Verse* ✨ *Philippians 4:6-7* _“Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds.",
        answered: true,
        outputs: [php_cited],
      },
      {
        from: "",
        message: php_bsb_message,
        answered: true,
        outputs: [php_cited],
      },
      {
        from: "",
        message: "Today's Verse Philippians 4:6-7",
        answered: false,
        outputs: [],
      },
      {
        from: "",
        message: text_combine_multiple([
          "Today's Verse 1 John 4:7 ",
          php_seven_message,
        ]),
        answered: true,
        outputs: ["📖 1 John 4:7: Amen! 🙏"],
      },
      {
        from: "",
        message: text_combine_multiple([
          "For in the word of the Lord it is written in Philippians 4:6-7 ",
          php_bsb_message,
        ]),
        answered: true,
        outputs: [php_cited],
      },
    ],
    decide: [
      "the answer is the same as for the 1 John verses: the reference, then Amen with praying hands. Nothing new is said.",
      "each verse is a choice of whole phrases the way each Bible nobody owns words them, using the shared pieces for God and for old u-for-v spellings, rather than a word-by-word lineup where any word one Bible leaves out became skippable. Four words only a newer translation uses are added - do, anything, situation and transcends - because a waiting daily-verse post quoted it that way. The ending in Christ Jesus may be left off, because that post stopped at your minds, and when said it is heard by the one shared Jesus piece. That piece also allows Christ alone, so the verse could stop at Christ with Jesus left over for a second reply; the applied tie-break (fewest replies wins) makes the whole verse win. The rejected readings were a name of its own for this verse, and a separate two-word-only Jesus piece.",
      "this is the shared piece: a heading - for in the word of the Lord it is written in, or Today's Verse, then where the passage is, either or both - may now come before every verse, including the 1 John ones, instead of each heading only before the verse it first came with. A heading alone is still never answered. Where the passage is may be the or not, 1 or first, then any numbers with verse, chapter, through or to between them. Any of the 66 books may be named, as you asked, taken from the book list the Bible pages already show, with 1, first or 1st (and 2 and 3 the same way) for a numbered book, plus Song of Songs, Song of Solomon and Psalm. So a heading for a verse with no rule yet is still not answered, but a new verse rule needs nothing added here. The rejected reading was checking the heading's numbers against the verse, because the reply names the verse it read.",
    ],
  };
  let fewest_per_position = fn_name(
    "reply_cheapest_per_position_fewest_pieces",
  );
  let fewest_cheapest_removed = text_combine_multiple([
    "-  let choices_cheapest = ",
    fn_name("reply_cheapest_per_position"),
    "(choices_main);",
  ]);
  let fewest_counted_added = text_combine_multiple([
    "+  let counted = ",
    fn_name("reply_pieces_counted"),
    "(choices_main);",
  ]);
  let fewest_cheapest_added = text_combine_multiple([
    "+  let choices_cheapest = ",
    fewest_per_position,
    "(counted);",
  ]);
  let fewest_room_kept = text_combine_multiple([
    "   let room = ",
    fn_name("reply_once_or_more"),
    "(choices_cheapest);",
  ]);
  let fewest_last_kept = text_combine_multiple([
    "   let last = ",
    fn_name("reply_last"),
    "();",
  ]);
  let fewest_repeats_removed = text_combine_multiple([
    "-  let with_repeats = ",
    fn_name("reply_sequence"),
    "([room, last]);",
  ]);
  let fewest_whole_added = text_combine_multiple([
    "+  let read_whole = ",
    fn_name("reply_sequence"),
    "([room, last]);",
  ]);
  let fewest_repeats_added = text_combine_multiple([
    "+  let with_repeats = ",
    fewest_per_position,
    "(read_whole);",
  ]);
  let fewest_said_kept = text_combine_multiple([
    "   let said_once = ",
    fn_name("reply_outputs_mapped"),
    "(with_repeats, ",
    fn_name("list_unique"),
    ");",
  ]);
  let fewest_pieces = {
    title: "when two readings cost the same, take the one with fewer replies",
    fn: fn_name("app_shared_message_reply_choices"),
    whole: [
      fn_name("reply_pieces_counted"),
      fn_name("reply_cheapest_per_position_fewest_pieces"),
      fn_name("reply_cheapest_fewest_pieces"),
    ],
    diff: [
      fewest_cheapest_removed,
      fewest_counted_added,
      fewest_cheapest_added,
      fewest_room_kept,
      fewest_last_kept,
      fewest_repeats_removed,
      fewest_whole_added,
      fewest_repeats_added,
      fewest_said_kept,
    ],
    cases: [
      {
        from: "",
        message: "Hello. Amen",
        answered: true,
        outputs: said,
      },
      {
        from: "",
        message: "Christ Jesus.",
        answered: true,
        outputs: ["✝️ Jesus is Lord! 👑"],
      },
    ],
    decide: [
      "nothing is said differently. Measured 2026-11-11 over 174 messages - the worked cases and every card's cases - not one answer changed. The real messages kept outside the repository were not part of that run.",
      "what it fixes: a message is read as a run of pieces, one reply each, and after every piece reading one more was tried before stopping. When two readings cost the same, the first found won, so the one with more pieces won. Philippians 4:7 ending in Christ Jesus was read as the verse stopping at Christ plus Jesus for the rule that answers his name - two replies. With this, the whole verse wins: one reply.",
      "the pieces are counted only at the top, where each one is a reply, never inside a rule. They only break a tie: a reading needing one forgiven letter still loses to an exact one however many pieces either has. The rejected readings were a tiny cost per piece, which mixes a count into the typo cost, and trying stop before one more piece, which would still leave the answer to list order.",
      "once this is applied, the Philippians card goes back to the one shared Jesus piece and its two-word piece is deleted.",
    ],
  };
  let v18 = prayer_blessing("your ministry and worship");
  let worship_said = [v18];
  let choir_added_worship = text_combine_multiple([
    "+  let worship = ",
    fn_name("prayer_blessing"),
    '("your ministry and worship");',
  ]);
  let choir_added_title = text_combine_multiple([
    "+  let choir_title = ",
    fn_name("reply_sequence"),
    '(["choir", "leader"]);',
  ]);
  let choir_added_rule = text_combine_multiple([
    "+  let choir = ",
    fn_name("reply_i_am_a_output"),
    "(choir_title, worship);",
  ]);
  let choir_removed_choice = text_combine_multiple([
    "-  let ministers = ",
    fn_name("reply_choice"),
    "([minister, teacher, work]);",
  ]);
  let choir_added_choice = text_combine_multiple([
    "+  let ministers = ",
    fn_name("reply_choice"),
    "([minister, teacher, choir, work]);",
  ]);
  let choir_kept_teacher = text_combine_multiple([
    "   let teacher = ",
    fn_name("reply_i_am_a_output"),
    "(title, teaching);",
  ]);
  let choir_kept_work = text_combine_multiple([
    "   let work = ",
    fn_name("reply_ministry_work"),
    "();",
  ]);
  let choir_leader_blessed = {
    title:
      "bless the ministry and worship of somebody who says they are a choir leader",
    fn: fn_name("app_shared_message_reply_minister"),
    whole: [],
    diff: [
      choir_kept_teacher,
      choir_kept_work,
      choir_added_worship,
      choir_added_title,
      choir_added_rule,
      choir_removed_choice,
      choir_added_choice,
      "   return ministers;",
    ],
    cases: [
      {
        from: "",
        message: "I am a choir leader",
        answered: true,
        outputs: worship_said,
      },
      {
        from: "",
        message: "am choir leader",
        answered: true,
        outputs: worship_said,
      },
      {
        from: "",
        message: "I am a teacher",
        answered: true,
        outputs: teaching_said,
      },
      {
        from: "",
        message: "choir leader",
        answered: false,
        outputs: [],
      },
    ],
    decide: [
      "a choir leader got no answer before this. Now they get the same prayer a teacher gets, with your ministry and worship.",
      "this is what keeps the two red worked cases red: both long messages from a choir leader stop only at those two words. Swapping in Sunday school teacher answers them, so age, country and name are not the cause.",
      "only the words choir leader are heard, the same way teacher is: after I am, I'm or am. A choir member, a worship leader or a singer is not heard yet.",
      "rejected wordings: your ministry and singing, your ministry and music, and plain your ministry like a pastor. Worship was the wording asked for.",
    ],
  };
  let blessed_kept_titles = text_combine_multiple([
    "   let titles = ",
    fn_name("reply_titles_preaching"),
    "();",
  ]);
  let blessed_removed_item = text_combine_multiple([
    "-  let item = ",
    fn_name("prayer_blessing"),
    '("your ministry");',
  ]);
  let blessed_removed_minister = text_combine_multiple([
    "-  let minister = ",
    fn_name("reply_i_am_a_output"),
    "(titles, item);",
  ]);
  let blessed_removed_teaching = text_combine_multiple([
    "-  let teaching = ",
    fn_name("prayer_blessing"),
    '("your ministry and teaching");',
  ]);
  let blessed_added_minister_said = text_combine_multiple([
    "+  let minister_said = ",
    fn_name("reply_i_am_a"),
    "(titles);",
  ]);
  let blessed_added_minister = text_combine_multiple([
    "+  let minister = ",
    fn_name("reply_on_match_blessings"),
    "(minister_said, ministry);",
  ]);
  let blessed_kept_sunday = text_combine_multiple([
    "   let o_sunday_school = ",
    fn_name("reply_sequence_optional"),
    '(["sunday", "school"]);',
  ]);
  let blessed_kept_title = text_combine_multiple([
    "   let title = ",
    fn_name("reply_sequence"),
    '([o_sunday_school, "teacher"]);',
  ]);
  let blessed_removed_teacher = text_combine_multiple([
    "-  let teacher = ",
    fn_name("reply_i_am_a_output"),
    "(title, teaching);",
  ]);
  let blessed_added_teacher_said = text_combine_multiple([
    "+  let teacher_said = ",
    fn_name("reply_i_am_a"),
    "(title);",
  ]);
  let blessed_added_teacher = text_combine_multiple([
    "+  let teacher = ",
    fn_name("reply_on_match_blessings"),
    "(teacher_said, teaching);",
  ]);
  let blessed_kept_work = text_combine_multiple([
    "   let work = ",
    fn_name("reply_ministry_work"),
    "();",
  ]);
  let blessed_removed_worship = text_combine_multiple([
    "-  let worship = ",
    fn_name("prayer_blessing"),
    '("your ministry and worship");',
  ]);
  let blessed_kept_choir_title = text_combine_multiple([
    "   let choir_title = ",
    fn_name("reply_sequence"),
    '(["choir", "leader"]);',
  ]);
  let blessed_removed_choir = text_combine_multiple([
    "-  let choir = ",
    fn_name("reply_i_am_a_output"),
    "(choir_title, worship);",
  ]);
  let blessed_added_choir_said = text_combine_multiple([
    "+  let choir_said = ",
    fn_name("reply_i_am_a"),
    "(choir_title);",
  ]);
  let blessed_added_choir = text_combine_multiple([
    "+  let choir = ",
    fn_name("reply_on_match_blessings"),
    "(choir_said, worship);",
  ]);
  let blessed_kept_choice = text_combine_multiple([
    "   let ministers = ",
    fn_name("reply_choice"),
    "([minister, teacher, choir, work]);",
  ]);
  let line5 = prayer_blessing_line("your ministry and your teaching");
  let ministry_teaching = reply_prayer_closing([line5]);
  let line6 = prayer_blessing_line("your ministry and your worship");
  let ministry_worship = reply_prayer_closing([line6]);
  let line7 = prayer_blessing_line("your ministry");
  let ministry_alone = reply_prayer_closing([line7]);
  let blessings_listed = {
    title:
      "a teacher, a pastor and a choir leader add words to one list of blessings, prayed for in one line at the end",
    fn: fn_name("app_shared_message_reply_minister"),
    whole: [fn_name("reply_i_am_a"), fn_name("reply_on_match_blessings")],
    diff: [
      blessed_kept_titles,
      blessed_removed_item,
      blessed_removed_minister,
      blessed_removed_teaching,
      blessed_added_minister_said,
      '+  let ministry = ["your ministry"];',
      blessed_added_minister,
      '+  let teaching = ["your ministry", "your teaching"];',
      blessed_kept_sunday,
      blessed_kept_title,
      blessed_removed_teacher,
      blessed_added_teacher_said,
      blessed_added_teacher,
      blessed_kept_work,
      blessed_removed_worship,
      '+  let worship = ["your ministry", "your worship"];',
      blessed_kept_choir_title,
      blessed_removed_choir,
      blessed_added_choir_said,
      blessed_added_choir,
      blessed_kept_choice,
    ],
    cases: [
      {
        from: "",
        message: "I am a teacher I am a pastor",
        answered: true,
        outputs: [ministry_teaching],
      },
      {
        from: "",
        message: "I am a pastor I am a teacher",
        answered: true,
        outputs: [ministry_teaching],
      },
      {
        from: "",
        message: "I am a pastor",
        answered: true,
        outputs: [ministry_alone],
      },
      {
        from: "",
        message: "I am a choir leader",
        answered: true,
        outputs: [ministry_worship],
      },
      {
        from: "3d27ef64ea033e69",
        message: "Hello myfriendinChrist, am from AccrainGhana,amteacher,",
        answered: true,
        outputs: [friend_response, t, ministry_teaching],
      },
    ],
    decide: [
      "a teacher adds your ministry and your teaching to a list of blessings, a pastor adds your ministry, a choir leader adds your ministry and your worship. A word already in the list is not added again.",
      "at the end, the whole list is asked for in one line of the closing prayer: May the LORD always bless your ministry and your teaching exceedingly abundantly more than anyone can ask or think! It goes after His will done and before being led to somebody who can give.",
      "a message with only one of them changes too: its blessing moves from where it was said into the closing prayer.",
      "rejected: a separate petition for each blessing, and the earlier card that moved each whole prayer to the end. Both repeat exceedingly abundantly once per blessing.",
      "not done here: the other rules that bless, like pray for me or a meeting, still say their own prayer. Each moves to the list in a card of its own.",
    ],
  };
  let pray_listed_removed_line = text_combine_multiple([
    "-  let line = ",
    fn_name("prayer_according_to_desire"),
    "();",
  ]);
  let pray_listed_added_prayed = text_combine_multiple([
    "+  let prayed = ",
    fn_name("reply_prayer_abundance_of_prayer"),
    "();",
  ]);
  let pray_listed_removed_v = text_combine_multiple([
    "-  let v = ",
    fn_name("prayer_blessing_expand"),
    "();",
  ]);
  let pray_listed_removed_answered = text_combine_multiple([
    "-  let answered = ",
    fn_name("reply_on_match_output_multiple"),
    "(asked, lines);",
  ]);
  let pray_listed_added_said = text_combine_multiple([
    "+  let said = ",
    fn_name("reply_on_match_prayer"),
    "(asked, prayed);",
  ]);
  let pray_listed_added_answered = text_combine_multiple([
    "+  let answered = ",
    fn_name("reply_on_match_blessings"),
    "(said, blessed);",
  ]);
  let line8 = prayer_blessing_line(
    "you, your family, your church and your country",
  );
  let pray_listed_abundance = reply_prayer_abundance_of_prayer();
  let pray_listed_prayer = reply_prayer_closing([pray_listed_abundance, line8]);
  let pray_listed_lines = [pray_listed_prayer];
  let line9 = prayer_blessing_line(
    "your ministry, you, your family, your church and your country",
  );
  let pray_listed_pastor = reply_prayer_closing([pray_listed_abundance, line9]);
  let pray_for_me_listed = {
    title:
      "I ask you to pray for me is answered in the closing prayer: others led to pray for you, and you, your family, your church and your country added to the list of blessings",
    fn: fn_name("reply_pray_for_me"),
    whole: [fn_name("reply_prayer_abundance_of_prayer")],
    diff: [
      "   ]);",
      pray_listed_removed_line,
      pray_listed_removed_v,
      "-  let lines = [line, v];",
      pray_listed_removed_answered,
      pray_listed_added_prayed,
      pray_listed_added_said,
      '+  let blessed = ["you", "your family", "your church", "your country"];',
      pray_listed_added_answered,
      "   return answered;",
    ],
    cases: [
      {
        from: "",
        message: "I ask you to pray for me",
        answered: true,
        outputs: pray_listed_lines,
      },
      {
        from: "",
        message: "I ask you to pray for me, my dear brother",
        answered: true,
        outputs: pray_listed_lines,
      },
      {
        from: "",
        message: "I am a pastor and I ask you to pray for me",
        answered: true,
        outputs: [pray_listed_pastor],
      },
    ],
    decide: [
      "the line According to the desire of God, may there be prayer is gone. In its place the closing prayer asks: May the LORD lead others to provide you with an abundance of prayer! Rejected: keeping both, which says the same thing twice.",
      "the blessing on you, your family, your church and your country moves into the list, so it is asked for in the one blessing line of the closing prayer.",
      "the new line comes before the blessing line, because lines a rule notes come first and the blessings are added last. Should the blessing come first instead? That would change every closing prayer that has both.",
      "this undoes what the earlier card chose, keeping that blessing as a prayer of its own. That was chosen so it would not become a second wording; now every blessing has the same wording, so that reason is gone.",
      "the list keeps the order the message said things in, so a pastor who then asks for prayer gets your ministry, you, your family, your church and your country. Rejected: always putting you first, which would need a rule for where each word goes.",
      "the reply app still says the old separate blessing, because it shares only the old piece, which is not changed here.",
    ],
  };
  let meeting_listed_kept_glory = text_combine_multiple([
    "   let glory = ",
    fn_name("reply_choices_glory"),
    "();",
  ]);
  let meeting_listed_removed_blessing = text_combine_multiple([
    "-  let blessing = ",
    fn_name("prayer_blessing"),
    '("you and everyone at the meeting");',
  ]);
  let meeting_listed_removed_said = text_combine_multiple([
    "-  let said = ",
    fn_name("reply_sequence_outputs"),
    "(words, [praise, glory, blessing]);",
  ]);
  let meeting_listed_added_praised = text_combine_multiple([
    "+  let praised = ",
    fn_name("reply_sequence_outputs"),
    "(words, [praise, glory]);",
  ]);
  let meeting_listed_added_said = text_combine_multiple([
    "+  let said = ",
    fn_name("reply_on_match_blessings"),
    "(praised, blessed);",
  ]);
  let line10 = prayer_blessing_line("you and everyone at the meeting");
  let meeting_listed_prayer = reply_prayer_closing([line10]);
  let line11 = prayer_blessing_line(
    "your ministry, you and everyone at the meeting",
  );
  let meeting_listed_pastor = reply_prayer_closing([line11]);
  let meeting_listed = {
    title:
      "a blessed meeting adds you and everyone at the meeting to the list of blessings",
    fn: fn_name("reply_meeting_blessed"),
    whole: [],
    diff: [
      meeting_listed_kept_glory,
      meeting_listed_removed_blessing,
      meeting_listed_removed_said,
      meeting_listed_added_praised,
      '+  let blessed = ["you", "everyone at the meeting"];',
      meeting_listed_added_said,
      "   return said;",
    ],
    cases: [
      {
        from: "",
        message: "Today meeting is very blessed",
        answered: true,
        outputs: [meeting_praise, meeting_glory, meeting_listed_prayer],
      },
      {
        from: "",
        message: "I am a pastor today meeting is very blessed",
        answered: true,
        outputs: [meeting_praise, meeting_glory, meeting_listed_pastor],
      },
    ],
    decide: [
      "praise to the LORD and glory to God stay where they are. The blessing on you and everyone at the meeting moves into the list, so it is asked for in the one blessing line of the closing prayer.",
      "a pastor who says the meeting was blessed gets one line: your ministry, you and everyone at the meeting. Before, that was two separate prayers.",
    ],
  };
  let thanked_removed_blessing = text_combine_multiple([
    "-  let blessing = ",
    fn_name("prayer_blessing_expand"),
    "();",
  ]);
  let thanked_kept_you = text_combine_multiple([
    "   let you = ",
    fn_name("reply_phrase_you"),
    "();",
  ]);
  let thanked_removed_said = text_combine_multiple([
    "-  let said = ",
    fn_name("reply_sequence_outputs"),
    '(["god", "bless", you], [thanks, blessing]);',
  ]);
  let thanked_added_thanked = text_combine_multiple([
    "+  let thanked = ",
    fn_name("reply_sequence_outputs"),
    '(["god", "bless", you], [thanks]);',
  ]);
  let thanked_added_blessed = text_combine_multiple([
    "+  let blessed = ",
    fn_name("reply_blessings_you_family_church_country"),
    "();",
  ]);
  let thanked_added_said = text_combine_multiple([
    "+  let said = ",
    fn_name("reply_on_match_blessings"),
    "(thanked, blessed);",
  ]);
  let line12 = prayer_blessing_line(
    "you, your family, your church and your country",
  );
  let thanked_prayer = reply_prayer_closing([line12]);
  let thanked_outputs = [bless_thanks, thanked_prayer];
  let thanked_listed = {
    title:
      "God bless you adds you, your family, your church and your country to the list of blessings",
    fn: fn_name("reply_god_bless_you_thanked"),
    whole: [fn_name("reply_blessings_you_family_church_country")],
    diff: [
      thanked_removed_blessing,
      thanked_kept_you,
      thanked_removed_said,
      thanked_added_thanked,
      thanked_added_blessed,
      thanked_added_said,
      "   return said;",
    ],
    cases: [
      {
        from: "",
        message: "God bless you",
        answered: true,
        outputs: thanked_outputs,
      },
      {
        from: "",
        message: "God bless you dear brother",
        answered: true,
        outputs: thanked_outputs,
      },
    ],
    decide: [
      "the thanks for the blessing stays where it is. The blessing on you, your family, your church and your country moves into the list, so it is asked for in the one blessing line of the closing prayer.",
      "the four are now written once, in their own small list, so the pray for me rule can use the same list next instead of spelling them again.",
    ],
  };
  let work_added_people = text_combine_multiple([
    "+    let people = ",
    fn_name("text_combine_multiple"),
    '(["the people of ", country]);',
  ]);
  let work_removed_blessed = text_combine_multiple([
    "-    let blessed = ",
    fn_name("text_combine_multiple"),
    "([",
  ]);
  let work_removed_blessing = text_combine_multiple([
    "-    let country_blessing = ",
    fn_name("prayer_blessing"),
    "(blessed);",
  ]);
  let work_kept_words = text_combine_multiple([
    "     let country_words = ",
    fn_name("reply_country_shown_words"),
    "(country);",
  ]);
  let work_kept_choice = text_combine_multiple([
    "     let country_choice = ",
    fn_name("reply_choice"),
    "(country_words);",
  ]);
  let work_removed_rule = text_combine_multiple([
    "-    let rule = ",
    fn_name("reply_sequence_output"),
    "([country_choice], country_blessing);",
  ]);
  let work_added_rule = text_combine_multiple([
    "+    let rule = ",
    fn_name("reply_on_match_blessings"),
    "(country_choice, blessed);",
  ]);
  let line13 = prayer_blessing_line("your ministry and the people of Ghana");
  let work_prayer = reply_prayer_closing([line13]);
  let line14 = prayer_blessing_line(
    "your ministry, your worship, the people of Ghana, you, your family, your church and your country",
  );
  let work_choir = reply_prayer_closing([pray_listed_abundance, line14]);
  let work_listed = {
    title:
      "ministry work in a country adds your ministry and the people of that country to the list of blessings",
    fn: fn_name("reply_ministry_work"),
    whole: [],
    diff: [
      work_removed_blessed,
      '-      "your ministry and the people of ",',
      "-      country,",
      "-    ]);",
      work_removed_blessing,
      work_added_people,
      '+    let blessed = ["your ministry", people];',
      work_kept_words,
      work_kept_choice,
      work_removed_rule,
      work_added_rule,
      "     return rule;",
    ],
    cases: [
      {
        from: "",
        message: "I do ministry work in Ghana",
        answered: true,
        outputs: [work_prayer],
      },
      {
        from: "",
        message:
          "I am a choir leader I do ministry work in Ghana and I ask you to pray for me",
        answered: true,
        outputs: [work_choir],
      },
    ],
    decide: [
      "the blessing on your ministry and the people of the country moves into the list, so it is asked for in the one blessing line of the closing prayer.",
      "a choir leader in Ghana who asks for prayer now gets one closing prayer instead of two, and your ministry is said once instead of twice.",
      "two long real messages of this shape are recorded as getting no reply. Once this goes in, they are written again from what the rules then say.",
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
    jesus_titles,
    us_word,
    verses_said,
    age_said,
    teacher_work_said,
    names_sanskrit_said,
    desire_line,
    we_should_said,
    pray_for_me_said,
    myself_said,
    name_alone_said,
    blessing_always_said,
    meeting_blessed_said,
    blessing_exclaimed,
    tiktok_link_said,
    apostrophe_curly,
    amen_heard,
    bless_thanked,
    friend_list_said,
    oh_brother_heard,
    jesus_whole_name,
    fewest_pieces,
    php_verses_said,
    choir_leader_blessed,
    blessings_listed,
    pray_for_me_listed,
    meeting_listed,
    thanked_listed,
    work_listed,
  ];
  return proposals;
}
