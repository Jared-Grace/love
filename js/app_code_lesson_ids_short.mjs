import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_code_lesson_ids_short() {
  arguments_assert(arguments, 0);
  ("The id every code lesson is stored and linked under, one per lesson, written down here rather than worked out from anything.");
  ("An id used to be built out of the lesson's category word and the words handed to its title maker, which made it a consequence of two decisions that were never about it. Rewording a title moved it. Recategorising a lesson moved it. Both are edits a person makes for how a page reads, and neither looks like it touches a key a learner's finished work is stored under. Written down, an id moves when somebody moves it and at no other time.");
  ("★ THE KEY IS THE LESSON'S OWN FUNCTION NAME, NOT ITS TITLE. That is the one name for a lesson that this repo already keeps honest: it is unique because two functions cannot share a name, and a rename carries every reference to it. Spelled out as plain words rather than through the name-reader, because there are a hundred and thirty-three of them and that many imports would cost every page that loads this more than the whole table saves. The price of the plain spelling is that renaming a lesson stops it being found here - which throws, loudly, next door.");
  ("★ EVERY VALUE IS FROZEN, INCLUDING THE ONES THAT LOOK ORDINARY. These words are already written into learners' browsers, so a word here must never follow anything. Left plain, a value that happens to spell a function in this repo gets promoted into a reference to it by the canonicalizing pass and then quietly tracks that function's renames - which happened on the first pass over this table, to the one that reads not equal. The freeze is put on all of them rather than on the ones that collide today, because which ones collide is a fact about the rest of the repo and it changes without anybody looking here.");
  ("They are short because they are read by people in two places where length is the whole cost: the address bar of a link somebody is passing to somebody else, and a record on a learner's own device. They are not shortened past recognition - a person who has done the lesson should know which one a link names.");
  ("The shape follows the function name rather than the sentence a learner reads, so a lesson that chooses which operator to solve first opens with order, one about brackets opens with brackets, and one that gives a value a name opens with name. That grouping is what makes a hundred and thirty-three of them scannable at all.");
  ("★ EIGHTEEN OF THEM WERE SHORTENED IN ONE PASS, AND THE MOMENT IS WHY. The longest was twenty one characters and the longest now is sixteen. That edit is free today and expensive at any later date: the shortened ids exist only in this repo and in a dev build, so nobody is holding one, while after a deploy each of these words is a key on somebody's device and moving it takes their finished work with it. So the pass was taken while it still cost nothing rather than left as tidying.");
  ("Eleven were over the old ceiling and seven more were dragged along to keep a family reading one way. Renaming the brackets lesson on both sides of a comparison and leaving the choose-order one beside it spelled the long way would have made the group unreadable, which is worse than either spelling on its own. So both sides moved: what was both_sides is sides throughout, what was true_false is gives, and a pair of operators is named by its first one.");
  let short = {
    app_code_lesson_symbols_digits_numbered: text_frozen("digits_numbered"),
    app_code_lesson_symbols_digit_number: text_frozen("digits_in_number"),
    app_code_lesson_symbols_digits: text_frozen("digits"),
    app_code_lesson_symbols_letters: text_frozen("letters"),
    app_code_lesson_symbols_space: text_frozen("space"),
    app_code_lesson_identifiers_letters_spaces: text_frozen("name_letters"),
    app_code_lesson_identifiers_underscores: text_frozen("name_underscores"),
    app_code_lesson_identifiers_dollar_signs: text_frozen("name_dollars"),
    app_code_lesson_identifiers_symbol_first: text_frozen("name_start"),
    app_code_lesson_identifiers_symbol_first_unseparated:
      text_frozen("name_run"),
    app_code_lesson_operators_addition: text_frozen("add"),
    app_code_lesson_operators_subtraction: text_frozen("subtract"),
    app_code_lesson_operators_multiplication: text_frozen("multiply"),
    app_code_lesson_operators_division: text_frozen("divide"),
    app_code_lesson_operators_minus: text_frozen("minus"),
    app_code_lesson_operators_asterisk: text_frozen("asterisk"),
    app_code_lesson_operators_slash_forward: text_frozen("slash"),
    app_code_lesson_operators_dot_numbers: text_frozen("dot_numbers"),
    app_code_lesson_operators_dot_missing: text_frozen("dot_missing"),
    app_code_lesson_expression_string_hello: text_frozen("string"),
    app_code_lesson_expression_string_spaces: text_frozen("string_spaces"),
    app_code_lesson_expression_string_concat: text_frozen("string_join"),
    app_code_lesson_expression_less_than: text_frozen("less"),
    app_code_lesson_expression_greater_than: text_frozen("greater"),
    app_code_lesson_expression_less_than_equal: text_frozen("less_equal"),
    app_code_lesson_expression_greater_than_equal: text_frozen("greater_equal"),
    app_code_lesson_expression_equals: text_frozen("equal"),
    app_code_lesson_expression_not_equal: text_frozen("not_equal"),
    app_code_lesson_expression_number_trichotomy: text_frozen("number_three"),
    app_code_lesson_expression_string_equality: text_frozen("string_equal"),
    app_code_lesson_expression_string_order: text_frozen("string_order"),
    app_code_lesson_expression_string_trichotomy: text_frozen("string_three"),
    app_code_lesson_expression_string_order_equal:
      text_frozen("string_order_eq"),
    app_code_lesson_expression_true_false: text_frozen("true_false"),
    app_code_lesson_expression_not: text_frozen("not"),
    app_code_lesson_expression_or: text_frozen("or"),
    app_code_lesson_expression_and: text_frozen("and"),
    app_code_lesson_expression_nested_add: text_frozen("nested_add"),
    app_code_lesson_expression_nested_subtract: text_frozen("nested_subtract"),
    app_code_lesson_expression_multiply: text_frozen("times"),
    app_code_lesson_expression_nested_multiply: text_frozen("nested_multiply"),
    app_code_lesson_expression_nested_divide: text_frozen("nested_divide"),
    app_code_lesson_expression_plus_minus: text_frozen("plus_minus"),
    app_code_lesson_expression_times_divide: text_frozen("times_divide"),
    app_code_lesson_expression_choose_order: text_frozen("order"),
    app_code_lesson_expression_choose_order_solve: text_frozen("order_solve"),
    app_code_lesson_expression_choose_order_operators:
      text_frozen("order_minus"),
    app_code_lesson_expression_plus_times: text_frozen("plus_times"),
    app_code_lesson_expression_plus_divide: text_frozen("plus_divide"),
    app_code_lesson_expression_minus_times: text_frozen("minus_times"),
    app_code_lesson_expression_minus_divide: text_frozen("minus_divide"),
    app_code_lesson_expression_which_part_first: text_frozen("which_first"),
    app_code_lesson_expression_exponent: text_frozen("power"),
    app_code_lesson_expression_parentheses_arithmetic:
      text_frozen("brackets_math"),
    app_code_lesson_expression_parentheses_minus_divide:
      text_frozen("brackets_minus"),
    app_code_lesson_expression_parentheses_moved: text_frozen("brackets_moved"),
    app_code_lesson_expression_arithmetic_less_than: text_frozen("math_less"),
    app_code_lesson_functions_arithmetic: text_frozen("fn_math"),
    app_code_lesson_functions_invalid: text_frozen("fn_invalid"),
    app_code_lesson_functions_console_log: text_frozen("log"),
    app_code_lesson_functions_console_log_statement: text_frozen("log_line"),
    app_code_lesson_functions_console_log_arithmetic: text_frozen("log_math"),
    app_code_lesson_functions_console_log_string: text_frozen("log_string"),
    app_code_lesson_expression_remainder_2: text_frozen("rem_2"),
    app_code_lesson_expression_remainder_3: text_frozen("rem_3"),
    app_code_lesson_expression_remainder_4: text_frozen("rem_4"),
    app_code_lesson_expression_remainder_subtract: text_frozen("rem_subtract"),
    app_code_lesson_expression_round_down: text_frozen("round_down"),
    app_code_lesson_expression_integer_division: text_frozen("int_divide"),
    app_code_lesson_expression_dividend: text_frozen("dividend"),
    app_code_lesson_expression_divisor: text_frozen("divisor"),
    app_code_lesson_expression_quotient: text_frozen("quotient"),
    app_code_lesson_expression_remainder: text_frozen("remainder"),
    app_code_lesson_expression_whole_part_formula: text_frozen("whole_formula"),
    app_code_lesson_expression_whole_part: text_frozen("whole"),
    app_code_lesson_expression_whole_part_both: text_frozen("whole_one_step"),
    app_code_lesson_expression_remainder_divide: text_frozen("rem_divide"),
    app_code_lesson_expression_remainder_divide_solve:
      text_frozen("rem_formula"),
    app_code_lesson_expression_remainder_any: text_frozen("rem_any"),
    app_code_lesson_expression_round_up: text_frozen("round_up"),
    app_code_lesson_expression_round_nearest: text_frozen("round_near"),
    app_code_lesson_expression_absolute_value: text_frozen("absolute"),
    app_code_lesson_expression_smaller: text_frozen("smaller"),
    app_code_lesson_expression_larger: text_frozen("larger"),
    app_code_lesson_expression_min_max_of_three: text_frozen("min_max_three"),
    app_code_lesson_expression_equal_true_false: text_frozen("equal_gives"),
    app_code_lesson_expression_not_equal_true_false:
      text_frozen("not_equal_gives"),
    app_code_lesson_expression_equal_number_string_true_false:
      text_frozen("equal_kinds"),
    app_code_lesson_expression_choose_order_compare:
      text_frozen("order_compare"),
    app_code_lesson_expression_comparing_a_comparison:
      text_frozen("compare_compare"),
    app_code_lesson_expression_parentheses_one_side:
      text_frozen("brackets_one"),
    app_code_lesson_expression_choose_order_three: text_frozen("order_three"),
    app_code_lesson_expression_either_first: text_frozen("either_first"),
    app_code_lesson_expression_choose_order_both_sides:
      text_frozen("order_sides"),
    app_code_lesson_expression_choose_order_both_sides_any_comparison:
      text_frozen("order_sides_any"),
    app_code_lesson_expression_arithmetic_equality: text_frozen("math_sides"),
    app_code_lesson_expression_swapping_add: text_frozen("swap_plus"),
    app_code_lesson_expression_swapping_divide: text_frozen("swap_divide"),
    app_code_lesson_expression_swapping_order: text_frozen("swap_order"),
    app_code_lesson_expression_choose_order_pair: text_frozen("order_pair"),
    app_code_lesson_expression_parentheses_both_sides:
      text_frozen("brackets_sides"),
    app_code_lesson_expression_swapping_equal: text_frozen("swap_equal"),
    app_code_lesson_expression_choose_order_and: text_frozen("order_and"),
    app_code_lesson_expression_comparison_and: text_frozen("and_compare"),
    app_code_lesson_expression_in_between: text_frozen("in_between"),
    app_code_lesson_expression_choose_order_or: text_frozen("order_or"),
    app_code_lesson_expression_comparison_or: text_frozen("or_compare"),
    app_code_lesson_expression_choose_order_and_before_or:
      text_frozen("order_and_or"),
    app_code_lesson_expression_and_before_or: text_frozen("and_or_line"),
    app_code_lesson_expression_choose_order_brackets:
      text_frozen("order_brackets"),
    app_code_lesson_expression_brackets_or: text_frozen("brackets_or"),
    app_code_lesson_expression_choose_order_brackets_moved:
      text_frozen("order_moved"),
    app_code_lesson_expression_brackets_moved: text_frozen("brackets_pair"),
    app_code_lesson_expression_not_twice: text_frozen("not_twice"),
    app_code_lesson_expression_choose_order_not: text_frozen("order_not"),
    app_code_lesson_expression_not_comparison: text_frozen("not_compare"),
    app_code_lesson_expression_not_equal_same: text_frozen("not_equal_same"),
    app_code_lesson_expression_choose_order_not_pair:
      text_frozen("order_not_pair"),
    app_code_lesson_expression_not_pair: text_frozen("not_and_or"),
    app_code_lesson_statement_name_value: text_frozen("name_value"),
    app_code_lesson_statement_name_identifier: text_frozen("name_any"),
    app_code_lesson_statement_name_two: text_frozen("name_two"),
    app_code_lesson_statement_name_again: text_frozen("name_again"),
    app_code_lesson_statement_name_copy: text_frozen("name_copy"),
    app_code_lesson_statement_name_sum: text_frozen("name_sum"),
    app_code_lesson_statement_name_total: text_frozen("name_total"),
    app_code_lesson_statement_name_itself_sum: text_frozen("name_add_self"),
    app_code_lesson_statement_name_one_more: text_frozen("name_one_more"),
    app_code_lesson_statement_name_copy_kept: text_frozen("name_copy_kept"),
    app_code_lesson_statement_name_compare: text_frozen("name_compare"),
    app_code_lesson_comment_note: text_frozen("comment"),
    app_code_lesson_log_twice: text_frozen("log_twice"),
    app_code_lesson_comment_skip_line: text_frozen("comment_skip"),
  };
  return short;
}
