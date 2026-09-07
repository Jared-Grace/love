import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_response_greetings } from "./reply_response_greetings.mjs";
import { fn_name } from "./fn_name.mjs";
export function reply_proposals() {
  arguments_assert(arguments, 0);
  ("Changes to the reply rules that have been worked out and measured but not made, each one carrying the lines it would change, the messages it would newly answer, and what those messages would get back.");
  ("★ THE REPLIES GO OUT UNDER ONE PERSON'S NAME, SO THAT PERSON DECIDES THE WORDING BEFORE IT SHIPS AND NOT AFTER. A rule set that is edited and then shown is a rule set that has already spoken for somebody; written down here first, the change can be read on a phone, argued with, and turned down, and the code is untouched the whole time. That is the whole reason this list exists rather than a branch.");
  ("Each one records what it was measured to do rather than describing it. A proposal that says what it intends is a claim about a grammar, and a grammar is exactly the kind of thing whose behaviour cannot be read off its intention - the pieces are chosen by what matches, so a rule aimed at one message routinely lands on another.");
  ("The reply is asked for rather than written out, so a proposal cannot promise words that are no longer the words. What it is promising is that these messages start reaching the greeting that is already written, and that promise stays true when the greeting is reworded.");
  ("The questions at the end are the ones nobody else can answer. They are kept beside the change rather than in a message, because the change is what they are about and a message is read once.");
  let greeting = reply_response_greetings();
  let said = [greeting];
  let time_of_day = {
    title: "answer good morning, good afternoon and good evening",
    fn: fn_name("app_message_reply_greeting"),
    diff: [
      text_combine_multiple([
        "  let greeting_response = ",
        fn_name("reply_response_greetings"),
        "();",
      ]),
      text_combine_multiple([
        "  let hello = ",
        fn_name("reply_word_hello"),
        "();",
      ]),
      text_combine_multiple([
        "+ let time_of_day = ",
        fn_name("reply_choice"),
        '(["morning", "afternoon", "evening"]);',
      ]),
      text_combine_multiple([
        "+ let good_time = ",
        fn_name("reply_sequence"),
        '(["good", time_of_day]);',
      ]),
      text_combine_multiple([
        "-  let hi_word = ",
        fn_name("reply_choice"),
        '(["hi", hello, "hey"]);',
      ]),
      text_combine_multiple([
        "+ let hi_word = ",
        fn_name("reply_choice"),
        '(["hi", hello, "hey", good_time]);',
      ]),
      text_combine_multiple([
        "  let my_dear_brother = ",
        fn_name("reply_phrase_my_dear_brother"),
        "();",
      ]),
      text_combine_multiple([
        "  let greeting = ",
        fn_name("reply_sequence_output"),
        "([hi_word, my_dear_brother], greeting_response);",
      ]),
      "  return greeting;",
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
  let proposals = [time_of_day];
  return proposals;
}
