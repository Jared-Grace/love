import { arguments_assert } from "./arguments_assert.mjs";
import { reply_response_greetings } from "./reply_response_greetings.mjs";
import { reply_choices_location } from "./reply_choices_location.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
    fn: fn_name("app_message_reply_greeting"),
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
  ("The four below are one change cut along the lines of the files it lands in. Three real people's details are written into these rules today - a name, a town and a street - and each one sits in a different function, so each gets its own set of lines to read. They were measured together and the measurements below are of all four applied at once; accepting only some of them leaves one of the three still written down here.");
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
  let f_name11 = fn_name("reply_once_or_more");
  let combined11 = text_combine_multiple([
    "-  let names_once_or_more = ",
    f_name11,
    "(names);",
  ]);
  let combined12 = text_combine_multiple([
    "+  let names = ",
    fn_name("reply_names_common"),
    "();",
  ]);
  let combined12b = text_combine_multiple([
    "+  let names_once_or_more = ",
    f_name11,
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
    fn: fn_name("app_message_reply_iam_titled_name"),
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
  let combined17 = text_combine_multiple([
    "   let n = ",
    fn_name("reply_word_in"),
    "();",
  ]);
  let combined18 = text_combine_multiple([
    "   let r_countries = ",
    fn_name("reply_countries"),
    "();",
  ]);
  let combined19 = text_combine_multiple([
    "-  let r_cities = ",
    fn_name("reply_cities"),
    "();",
  ]);
  let combined20 = text_combine_multiple([
    "   let o_n = ",
    fn_name("reply_optional"),
    "(n);",
  ]);
  let combined21 = text_combine_multiple([
    "+  let any_word = ",
    fn_name("reply_word_any"),
    "();",
  ]);
  let combined22 = text_combine_multiple([
    "+  let r_cities = ",
    fn_name("reply_optional"),
    "(",
    fn_name("reply_sequence"),
    "([any_word, o_n]));",
  ]);
  let combined23 = text_combine_multiple([
    "+  let o_the = ",
    fn_name("reply_choice_optional"),
    '(["the"]);',
  ]);
  let combined24 = text_combine_multiple([
    "   let item = ",
    fn_name("reply_choices_location"),
    "();",
  ]);
  let combined25 = text_combine_multiple([
    "   let iam_o_titled_name = ",
    fn_name("reply_choice"),
    "([iam, iam_titled_name]);",
  ]);
  let combined26 = text_combine_multiple([
    "   let from_city_country = ",
    fn_name("reply_sequence_output"),
    "(",
  ]);
  let combined27 = text_combine_multiple([
    "the two towns this rule was told are then named by nothing, and ",
    fn_name("reply_cities"),
    " goes with them once the contact line below has stopped asking for it too.",
  ]);
  let town_out = {
    title: "answer somebody from a town the rules were never told about",
    fn: fn_name("app_message_reply_from_country"),
    whole: [fn_name("reply_word_any")],
    diff: [
      combined17,
      combined18,
      combined19,
      combined20,
      combined21,
      combined22,
      combined23,
      combined24,
      combined25,
      combined26,
      '-    [iam_o_titled_name, "from", r_cities, o_n, r_countries],',
      '+    [iam_o_titled_name, "from", r_cities, o_the, r_countries],',
      "     item,",
      "   );",
      "   return from_city_country;",
    ],
    cases: [
      {
        from: "3d27ef64ea033e69",
        message: "Hello myfriendinChrist, am from AccrainGhana,amteacher,",
        answered: true,
        outputs: located,
      },
      {
        from: "40d47c1ec2a9759d",
        message:
          "I'mpastorSamuelAndrewMarkFromKarachiPakistancontact 92 03001234567MainRoadKarachiCity",
        answered: true,
        outputs: located,
      },
      {
        from: "",
        message: "I am from the uk",
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
      "the town becomes optional as well as unnamed, which is what lets I am from Kenya answer at all. Today the rule cannot match without a town, so somebody who names only their country gets nothing back.",
      "I am from prison in Kenya is answered, and so is I am from hospital in Kenya. That is the price of not knowing the world's towns: anything at all can stand where a town stands. The reply says where the servant of God is from rather than repeating where they said they were from, so nothing wrong is quoted back at them - but it is still an answer to a sentence that was not really about a place. Is that price worth paying?",
      combined27,
      "the first two messages here are real ones and are shown beside what was really sent. They get nothing back today.",
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
  let combined34 = text_combine_multiple([
    "   let digits_oom = ",
    fn_name("reply_once_or_more"),
    "(rc_digits);",
  ]);
  let combined35 = text_combine_multiple([
    "-  let r_roads = ",
    fn_name("reply_roads"),
    "();",
  ]);
  let combined36 = text_combine_multiple([
    "-  let r_cities = ",
    fn_name("reply_cities"),
    "();",
  ]);
  let combined37 = text_combine_multiple([
    "+  let road_kinds = ",
    fn_name("reply_choice"),
    "([",
  ]);
  let combined38 = text_combine_multiple([
    "+  let r_roads = ",
    fn_name("reply_sequence"),
    "([",
    fn_name("reply_word_any"),
    "(), road_kinds]);",
  ]);
  let combined39 = text_combine_multiple([
    "+  let r_cities = ",
    fn_name("reply_word_any"),
    "();",
  ]);
  let combined40 = text_combine_multiple([
    "   let fn = ",
    fn_name("reply_sequence"),
    '(["contact", digits_oom, r_roads, r_cities]);',
  ]);
  let combined41 = text_combine_multiple([
    "the seven words that say what kind of road it is move here out of ",
    fn_name("reply_roads"),
    ", which then holds nothing but one real street and is deleted. The street name itself was the only thing in it that had to be told in advance.",
  ]);
  let street_out = {
    title:
      "stop needing to be told somebody's street before it will read their contact line",
    fn: fn_name("app_message_reply_choices"),
    whole: [fn_name("reply_word_any")],
    diff: [
      combined34,
      combined35,
      combined36,
      combined37,
      '+    "avenue",',
      '+    "blvd",',
      '+    "circle",',
      '+    "lane",',
      '+    "road",',
      '+    "street",',
      '+    "way",',
      "+  ]);",
      combined38,
      combined39,
      combined40,
    ],
    cases: [
      {
        from: "40d47c1ec2a9759d",
        message:
          "I'mpastorSamuelAndrewMarkFromKarachiPakistancontact 92 03001234567MainRoadKarachiCity",
        answered: true,
        outputs: located,
      },
    ],
    decide: [
      combined41,
      "a contact line is read and then thrown away - nothing in the reply repeats an address back. Should it be read at all, or should a message that gives an address simply be left to the country rule beside it?",
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
      "measured on the eighteen real messages already saved: nothing that is answered today stops being answered, and eight misspelled messages that get nothing back today are answered. It was measured with the four changes above already applied, because that is the shape it would ship in.",
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
  let proposals = [
    time_of_day,
    name_out,
    town_out,
    countries_in,
    street_out,
    typo_layer,
    cheapest_reading,
  ];
  return proposals;
}
