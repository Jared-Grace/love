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
  ("The questions at the end are the ones nobody else can answer. They are kept beside the change rather than in a message, because the change is what they are about and a message is read once.");
  let greeting = reply_response_greetings();
  let said = [greeting];
  let t = reply_choices_location();
  let located = [t];
  let f_name = fn_name("reply_response_greetings");
  let combined = text_combine_multiple([
    "   let greeting_response = ",
    f_name,
    "();",
  ]);
  let f_name2 = fn_name("reply_word_hello");
  let combined2 = text_combine_multiple(["   let hello = ", f_name2, "();"]);
  let f_name3 = fn_name("reply_choice");
  let combined3 = text_combine_multiple([
    "+  let time_of_day = ",
    f_name3,
    '(["morning", "afternoon", "evening"]);',
  ]);
  let f_name4 = fn_name("reply_sequence");
  let combined4 = text_combine_multiple([
    "+  let good_time = ",
    f_name4,
    '(["good", time_of_day]);',
  ]);
  let f_name5 = fn_name("reply_choice");
  let combined5 = text_combine_multiple([
    "-  let hi_word = ",
    f_name5,
    '(["hi", hello, "hey"]);',
  ]);
  let f_name6 = fn_name("reply_choice");
  let combined6 = text_combine_multiple([
    "+  let hi_word = ",
    f_name6,
    '(["hi", hello, "hey", good_time]);',
  ]);
  let f_name7 = fn_name("reply_phrase_my_dear_brother");
  let combined7 = text_combine_multiple([
    "   let my_dear_brother = ",
    f_name7,
    "();",
  ]);
  let f_name8 = fn_name("reply_sequence_output");
  let combined8 = text_combine_multiple(["   let greeting = ", f_name8, "("]);
  let time_of_day = {
    title: "answer good morning, good afternoon and good evening",
    fn: fn_name("app_message_reply_greeting"),
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
  ("★ WHAT IS BEING TAKEN OUT IS SOMEBODY ELSE'S NAME AND ADDRESS OUT OF A PUBLIC REPOSITORY, AND WHAT REPLACES IT IS A RUN OF LETTERS. The rules had to be told a name before they could recognise one, so every person the rules answered was a person whose details had been published here to make it work. A run of letters recognises everybody and publishes nobody, and it is not a weakening of the rule because what decides whether a message really says where somebody is from is the country beside it, which stays a closed list.");
  let f_name9 = fn_name("reply_choices_name");
  let combined9 = text_combine_multiple(["   let response = ", f_name9, "();"]);
  let f_name10 = fn_name("reply_names");
  let combined10 = text_combine_multiple(["-  let names = ", f_name10, "();"]);
  let f_name11 = fn_name("reply_once_or_more");
  let combined11 = text_combine_multiple([
    "-  let names_once_or_more = ",
    f_name11,
    "(names);",
  ]);
  let f_name12 = fn_name("reply_word_any");
  let combined12 = text_combine_multiple([
    "+  let names_once_or_more = ",
    f_name12,
    "();",
  ]);
  let f_name13 = fn_name("reply_titles_ministry");
  let combined13 = text_combine_multiple(["   let titles = ", f_name13, "();"]);
  let f_name14 = fn_name("reply_phrase_i_am");
  let combined14 = text_combine_multiple(["   let iam = ", f_name14, "();"]);
  let f_name15 = fn_name("reply_sequence_output");
  let combined15 = text_combine_multiple([
    "   let iam_titled_name = ",
    f_name15,
    "(",
  ]);
  let f_name16 = fn_name("reply_names");
  let combined16 = text_combine_multiple([
    "the three names this rule was told are then named by nothing, and ",
    f_name16,
    " goes with them. Deleting it is what actually takes them out of the repository - left in place unused they are still published, just unreachable.",
  ]);
  let name_out = {
    title: "stop needing to be told somebody's name before it will answer them",
    fn: fn_name("app_message_reply_iam_titled_name"),
    diff: [
      combined9,
      combined10,
      combined11,
      combined12,
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
        message: "I am evangelist Grace from Bungoma Kenya",
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
      "a title is still required in front of the name, so evangelist Grace is recognised and a bare Grace is not. That is deliberate, because a run of letters after I am with no title matches every message ever sent. Should a bare name after I am be answered too, and if so on the strength of what beside it?",
      "the messages above are made up in the shape of real ones rather than quoted from them, because the real ones are the thing being taken out of here.",
    ],
  };
  let f_name17 = fn_name("reply_word_in");
  let combined17 = text_combine_multiple(["   let n = ", f_name17, "();"]);
  let f_name18 = fn_name("reply_countries");
  let combined18 = text_combine_multiple([
    "   let r_countries = ",
    f_name18,
    "();",
  ]);
  let f_name19 = fn_name("reply_cities");
  let combined19 = text_combine_multiple([
    "-  let r_cities = ",
    f_name19,
    "();",
  ]);
  let f_name20 = fn_name("reply_optional");
  let combined20 = text_combine_multiple(["   let o_n = ", f_name20, "(n);"]);
  let f_name21 = fn_name("reply_word_any");
  let combined21 = text_combine_multiple([
    "+  let any_word = ",
    f_name21,
    "();",
  ]);
  let f_name22 = fn_name("reply_optional");
  let f_name23 = fn_name("reply_sequence");
  let combined22 = text_combine_multiple([
    "+  let r_cities = ",
    f_name22,
    "(",
    f_name23,
    "([any_word, o_n]));",
  ]);
  let f_name24 = fn_name("reply_choice_optional");
  let combined23 = text_combine_multiple([
    "+  let o_the = ",
    f_name24,
    '(["the"]);',
  ]);
  let f_name25 = fn_name("reply_choices_location");
  let combined24 = text_combine_multiple(["   let item = ", f_name25, "();"]);
  let f_name26 = fn_name("reply_choice");
  let combined25 = text_combine_multiple([
    "   let iam_o_titled_name = ",
    f_name26,
    "([iam, iam_titled_name]);",
  ]);
  let f_name27 = fn_name("reply_sequence_output");
  let combined26 = text_combine_multiple([
    "   let from_city_country = ",
    f_name27,
    "(",
  ]);
  let f_name28 = fn_name("reply_cities");
  let combined27 = text_combine_multiple([
    "the two towns this rule was told are then named by nothing, and ",
    f_name28,
    " goes with them once the contact line below has stopped asking for it too.",
  ]);
  let town_out = {
    title: "answer somebody from a town the rules were never told about",
    fn: fn_name("app_message_reply_from_city_country"),
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
        message: "Hello mydearinChrist, am from NairobiinKenya,ampastor,",
        answered: true,
        outputs: located,
      },
      {
        from: "40d47c1ec2a9759d",
        message:
          "I'mpastorDanielPeterJohnFromKarachiPakistancontact 92 03001234567MainRoadKarachiCity",
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
  let f_name29 = fn_name("list_concat_multiple");
  let combined28 = text_combine_multiple(["+  let v = ", f_name29, "(["]);
  let f_name30 = fn_name("reply_countries_names");
  let combined29 = text_combine_multiple(["+    ", f_name30, "(),"]);
  let f_name31 = fn_name("reply_countries_aliases");
  let combined30 = text_combine_multiple(["+    ", f_name31, "(),"]);
  let f_name32 = fn_name("reply_countries_authored");
  let combined31 = text_combine_multiple(["+    ", f_name32, "(),"]);
  let f_name33 = fn_name("reply_choice");
  let combined32 = text_combine_multiple([
    "   let countries = ",
    f_name33,
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
  let f_name34 = fn_name("reply_once_or_more");
  let combined34 = text_combine_multiple([
    "   let digits_oom = ",
    f_name34,
    "(rc_digits);",
  ]);
  let f_name35 = fn_name("reply_roads");
  let combined35 = text_combine_multiple([
    "-  let r_roads = ",
    f_name35,
    "();",
  ]);
  let f_name36 = fn_name("reply_cities");
  let combined36 = text_combine_multiple([
    "-  let r_cities = ",
    f_name36,
    "();",
  ]);
  let f_name37 = fn_name("reply_choice");
  let combined37 = text_combine_multiple([
    "+  let road_kinds = ",
    f_name37,
    "([",
  ]);
  let f_name38 = fn_name("reply_sequence");
  let f_name39 = fn_name("reply_word_any");
  let combined38 = text_combine_multiple([
    "+  let r_roads = ",
    f_name38,
    "([",
    f_name39,
    "(), road_kinds]);",
  ]);
  let f_name40 = fn_name("reply_word_any");
  let combined39 = text_combine_multiple([
    "+  let r_cities = ",
    f_name40,
    "();",
  ]);
  let f_name41 = fn_name("reply_sequence");
  let combined40 = text_combine_multiple([
    "   let fn = ",
    f_name41,
    '(["contact", digits_oom, r_roads, r_cities]);',
  ]);
  let f_name42 = fn_name("reply_roads");
  let combined41 = text_combine_multiple([
    "the seven words that say what kind of road it is move here out of ",
    f_name42,
    ", which then holds nothing but one real street and is deleted. The street name itself was the only thing in it that had to be told in advance.",
  ]);
  let street_out = {
    title:
      "stop needing to be told somebody's street before it will read their contact line",
    fn: fn_name("app_message_reply_choices"),
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
          "I'mpastorDanielPeterJohnFromKarachiPakistancontact 92 03001234567MainRoadKarachiCity",
        answered: true,
        outputs: located,
      },
    ],
    decide: [
      combined41,
      "a contact line is read and then thrown away - nothing in the reply repeats an address back. Should it be read at all, or should a message that gives an address simply be left to the country rule beside it?",
    ],
  };
  let proposals = [time_of_day, name_out, town_out, countries_in, street_out];
  return proposals;
}
