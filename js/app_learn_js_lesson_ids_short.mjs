import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function app_learn_js_lesson_ids_short() {
  arguments_assert(arguments, 0);
  ("The id every code lesson is stored and linked under, one per lesson, written down here rather than worked out from anything.");
  ("An id used to be built out of the lesson's category word and the words handed to its title maker, which made it a consequence of two decisions that were never about it. Rewording a title moved it. Recategorising a lesson moved it. Both are edits a person makes for how a page reads, and neither looks like it touches a key a learner's finished work is stored under. Written down, an id moves when somebody moves it and at no other time.");
  ("★ THE KEY IS THE LESSON'S OWN FUNCTION NAME, NOT ITS TITLE. That is the one name for a lesson that this repo already keeps honest: it is unique because two functions cannot share a name, and a rename carries every reference to it. Spelled out as plain words rather than through the name-reader, because there are a hundred and thirty-three of them and that many imports would cost every page that loads this more than the whole table saves. The price of the plain spelling is that renaming a lesson stops it being found here - which throws, loudly, next door.");
  ("★ EVERY VALUE IS FROZEN, INCLUDING THE ONES THAT LOOK ORDINARY. These words are already written into learners' browsers, so a word here must never follow anything. Left plain, a value that happens to spell a function in this repo gets promoted into a reference to it by the canonicalizing pass and then quietly tracks that function's renames - which happened on the first pass over this table, to the one that reads not equal. The freeze is put on all of them rather than on the ones that collide today, because which ones collide is a fact about the rest of the repo and it changes without anybody looking here.");
  ("They are short because they are read by people in two places where length is the whole cost: the address bar of a link somebody is passing to somebody else, and a record on a learner's own device. They are not shortened past recognition - a person who has done the lesson should know which one a link names.");
  ("The shape follows the function name rather than the sentence a learner reads, so a lesson that chooses which operator to solve first opens with order, one about brackets opens with brackets, and one that gives a value a name opens with name. That grouping is what makes a hundred and thirty-three of them scannable at all.");
  ("★ EIGHTEEN OF THEM WERE SHORTENED IN ONE PASS, AND THE MOMENT IS WHY. The longest was twenty one characters and the longest now is sixteen. That edit is free today and expensive at any later date: the shortened ids exist only in this repo and in a dev build, so nobody is holding one, while after a deploy each of these words is a key on somebody's device and moving it takes their finished work with it. So the pass was taken while it still cost nothing rather than left as tidying.");
  ("Eleven were over the old ceiling and seven more were dragged along to keep a family reading one way. Renaming the brackets lesson on both sides of a comparison and leaving the choose-order one beside it spelled the long way would have made the group unreadable, which is worse than either spelling on its own. So both sides moved: what was both_sides is sides throughout, what was true_false is gives, and a pair of operators is named by its first one.");
  ("A third pass, 2026-10-27, shortened fifty four that had arrived above the ceiling, at the human's asking and for the same reason: none was in prod's released list yet, so only the one person on latest held them. A family drops its long word for a short one rather than its group word - rect, meet and sq under name; the braces walk and step lessons as run and step, the way step_if_true already was; the token order lessons as token. Not picked: dropping name from the rectangle and meeting lessons, which would split them off from every other lesson that gives a value a name.");
  ("2026-10-31, at the human's asking - step by step is just one quiz type: the seven while step lessons taken out, their stepping now the last quiz of each while lesson. Their ids - step_while, step_while_log, step_while_down, step_while_halve, step_while_total, step_while_step and step_while_sq - were only ever on latest, held by its one person. Their functions and entries here are kept, as step_log_string's are, so none of these ids is ever handed to another lesson, since a device may still hold one. Not picked: carrying their finished records over to the while lessons, since finishing the stepping of a lesson is not finishing the lesson");
  ("2026-10-31, asked next: the seventeen step lessons of the branching stages taken out the same way. Their entries are kept for the same reason. They were released, but the built site's bundle had no if lesson at all when they were, so again only latest's one person can hold one.");
  ("2026-11-01, asked next: thirteen step lessons of the naming stage taken out the same way, the first, step_log_twice, kept as the lesson where stepping is taught. Their entries are kept for the same reason. Three of them - step_name_value, step_name_two and step_name_copy_single - were in the built site's bundle, so a learner there may hold one; a link naming one still resolves, because its entry stays.");
  ("2026-11-01, asked next: the six step lessons that came before their lesson taken out too; their entries are kept for the same reason.");
  let short = {
    app_learn_js_lesson_symbols_digits_numbered: text_frozen("digits_numbered"),
    app_learn_js_lesson_symbols_digit_number: text_frozen("digits_in_number"),
    app_learn_js_lesson_symbols_digits: text_frozen("digits"),
    app_learn_js_lesson_symbols_letters: text_frozen("letters"),
    app_learn_js_lesson_symbols_space: text_frozen("space"),
    app_learn_js_lesson_identifiers_letters_spaces: text_frozen("name_letters"),
    app_learn_js_lesson_identifiers_underscores:
      text_frozen("name_underscores"),
    app_learn_js_lesson_identifiers_dollar_signs: text_frozen("name_dollars"),
    app_learn_js_lesson_identifiers_symbol_first: text_frozen("name_start"),
    app_learn_js_lesson_identifiers_symbol_first_unseparated:
      text_frozen("name_run"),
    app_learn_js_lesson_operators_addition: text_frozen("add"),
    app_learn_js_lesson_operators_subtraction: text_frozen("subtract"),
    app_learn_js_lesson_operators_multiplication: text_frozen("multiply"),
    app_learn_js_lesson_operators_division: text_frozen("divide"),
    app_learn_js_lesson_operators_minus: text_frozen("minus"),
    app_learn_js_lesson_operators_asterisk: text_frozen("asterisk"),
    app_learn_js_lesson_operators_slash_forward: text_frozen("slash"),
    app_learn_js_lesson_operators_dot_numbers: text_frozen("dot_numbers"),
    app_learn_js_lesson_operators_dot_missing: text_frozen("dot_missing"),
    app_learn_js_lesson_expression_string_hello: text_frozen("string"),
    app_learn_js_lesson_expression_string_spaces: text_frozen("string_spaces"),
    app_learn_js_lesson_expression_string_concat: text_frozen("string_join"),
    app_learn_js_lesson_expression_less_than: text_frozen("less"),
    app_learn_js_lesson_expression_greater_than: text_frozen("greater"),
    app_learn_js_lesson_expression_less_than_equal: text_frozen("less_equal"),
    app_learn_js_lesson_expression_greater_than_equal:
      text_frozen("greater_equal"),
    app_learn_js_lesson_expression_equals: text_frozen("equal"),
    app_learn_js_lesson_expression_not_equal: text_frozen("not_equal"),
    app_learn_js_lesson_expression_number_trichotomy:
      text_frozen("number_three"),
    app_learn_js_lesson_expression_string_equality: text_frozen("string_equal"),
    app_learn_js_lesson_expression_string_order: text_frozen("string_order"),
    app_learn_js_lesson_expression_string_trichotomy:
      text_frozen("string_three"),
    app_learn_js_lesson_expression_string_order_equal:
      text_frozen("string_order_eq"),
    app_learn_js_lesson_expression_true_false: text_frozen("true_false"),
    app_learn_js_lesson_expression_not: text_frozen("not"),
    app_learn_js_lesson_expression_or: text_frozen("or"),
    app_learn_js_lesson_expression_and: text_frozen("and"),
    app_learn_js_lesson_expression_choose_order_nested_add:
      text_frozen("order_nest_add"),
    app_learn_js_lesson_expression_nested_add: text_frozen("nested_add"),
    app_learn_js_lesson_expression_choose_order_nested_subtract:
      text_frozen("order_nest_sub"),
    app_learn_js_lesson_expression_nested_subtract:
      text_frozen("nested_subtract"),
    app_learn_js_lesson_expression_multiply: text_frozen("times"),
    app_learn_js_lesson_expression_choose_order_nested_multiply:
      text_frozen("order_nest_mul"),
    app_learn_js_lesson_expression_nested_multiply:
      text_frozen("nested_multiply"),
    app_learn_js_lesson_expression_choose_order_nested_divide:
      text_frozen("order_nest_div"),
    app_learn_js_lesson_expression_nested_divide: text_frozen("nested_divide"),
    app_learn_js_lesson_expression_choose_order_plus_minus:
      text_frozen("order_plus_minus"),
    app_learn_js_lesson_expression_plus_minus: text_frozen("plus_minus"),
    app_learn_js_lesson_expression_choose_order_times_divide:
      text_frozen("order_times_div"),
    app_learn_js_lesson_expression_times_divide: text_frozen("times_divide"),
    app_learn_js_lesson_expression_choose_order: text_frozen("order"),
    app_learn_js_lesson_expression_choose_order_solve:
      text_frozen("order_solve"),
    app_learn_js_lesson_expression_choose_order_operators:
      text_frozen("order_minus"),
    app_learn_js_lesson_expression_choose_order_same_strength_pair:
      text_frozen("order_same_two"),
    app_learn_js_lesson_expression_choose_order_plus_times:
      text_frozen("order_plus_mul"),
    app_learn_js_lesson_expression_plus_times: text_frozen("plus_times"),
    app_learn_js_lesson_expression_choose_order_plus_divide:
      text_frozen("order_plus_div"),
    app_learn_js_lesson_expression_plus_divide: text_frozen("plus_divide"),
    app_learn_js_lesson_expression_choose_order_minus_times:
      text_frozen("order_minus_mul"),
    app_learn_js_lesson_expression_minus_times: text_frozen("minus_times"),
    app_learn_js_lesson_expression_choose_order_minus_divide:
      text_frozen("order_minus_div"),
    app_learn_js_lesson_expression_minus_divide: text_frozen("minus_divide"),
    app_learn_js_lesson_expression_which_part_first: text_frozen("which_first"),
    app_learn_js_lesson_expression_exponent: text_frozen("power"),
    app_learn_js_lesson_expression_choose_order_arithmetic_parentheses:
      text_frozen("order_group_math"),
    app_learn_js_lesson_expression_parentheses_arithmetic:
      text_frozen("brackets_math"),
    app_learn_js_lesson_expression_choose_order_parentheses_minus_divide:
      text_frozen("order_brk_minus"),
    app_learn_js_lesson_expression_parentheses_minus_divide:
      text_frozen("brackets_minus"),
    app_learn_js_lesson_expression_parentheses_moved:
      text_frozen("brackets_moved"),
    app_learn_js_lesson_expression_choose_order_arithmetic_less_than:
      text_frozen("order_math_less"),
    app_learn_js_lesson_expression_arithmetic_less_than:
      text_frozen("math_less"),
    app_learn_js_lesson_functions_arithmetic: text_frozen("fn_math"),
    app_learn_js_lesson_functions_invalid: text_frozen("fn_invalid"),
    app_learn_js_lesson_functions_console_log: text_frozen("log"),
    app_learn_js_lesson_functions_console_log_statement:
      text_frozen("log_line"),
    app_learn_js_lesson_functions_console_log_arithmetic:
      text_frozen("log_math"),
    app_learn_js_lesson_functions_console_log_string: text_frozen("log_string"),
    app_learn_js_lesson_step_log_string: text_frozen("step_log_string"),
    app_learn_js_lesson_expression_remainder_2: text_frozen("rem_2"),
    app_learn_js_lesson_expression_remainder_3: text_frozen("rem_3"),
    app_learn_js_lesson_expression_remainder_4: text_frozen("rem_4"),
    app_learn_js_lesson_expression_remainder_subtract:
      text_frozen("rem_subtract"),
    app_learn_js_lesson_expression_round_down: text_frozen("round_down"),
    app_learn_js_lesson_expression_integer_division: text_frozen("int_divide"),
    app_learn_js_lesson_expression_choose_order_integer_division:
      text_frozen("order_int_divide"),
    app_learn_js_lesson_expression_dividend: text_frozen("dividend"),
    app_learn_js_lesson_expression_divisor: text_frozen("divisor"),
    app_learn_js_lesson_expression_quotient: text_frozen("quotient"),
    app_learn_js_lesson_expression_remainder: text_frozen("remainder"),
    app_learn_js_lesson_expression_whole_part_formula:
      text_frozen("whole_formula"),
    app_learn_js_lesson_expression_choose_order_whole_part:
      text_frozen("order_whole"),
    app_learn_js_lesson_expression_whole_part: text_frozen("whole"),
    app_learn_js_lesson_expression_whole_part_both:
      text_frozen("whole_one_step"),
    app_learn_js_lesson_expression_remainder_divide: text_frozen("rem_divide"),
    app_learn_js_lesson_expression_choose_order_remainder:
      text_frozen("order_rem"),
    app_learn_js_lesson_expression_remainder_divide_solve:
      text_frozen("rem_formula"),
    app_learn_js_lesson_expression_remainder_any: text_frozen("rem_any"),
    app_learn_js_lesson_expression_round_up: text_frozen("round_up"),
    app_learn_js_lesson_expression_round_nearest: text_frozen("round_near"),
    app_learn_js_lesson_expression_absolute_value: text_frozen("absolute"),
    app_learn_js_lesson_expression_smaller: text_frozen("smaller"),
    app_learn_js_lesson_expression_larger: text_frozen("larger"),
    app_learn_js_lesson_expression_min_max_of_three:
      text_frozen("min_max_three"),
    app_learn_js_lesson_expression_equal_true_false: text_frozen("equal_gives"),
    app_learn_js_lesson_expression_not_equal_true_false:
      text_frozen("not_equal_gives"),
    app_learn_js_lesson_expression_equal_number_string_true_false:
      text_frozen("equal_kinds"),
    app_learn_js_lesson_expression_choose_order_compare:
      text_frozen("order_compare"),
    app_learn_js_lesson_expression_comparing_a_comparison:
      text_frozen("compare_compare"),
    app_learn_js_lesson_expression_parentheses_one_side:
      text_frozen("brackets_one"),
    app_learn_js_lesson_expression_choose_order_same_strength:
      text_frozen("order_same"),
    app_learn_js_lesson_expression_three_steps_left_to_right:
      text_frozen("three_left"),
    app_learn_js_lesson_expression_choose_order_three:
      text_frozen("order_three"),
    app_learn_js_lesson_expression_three_steps_strong_first:
      text_frozen("three_strong"),
    app_learn_js_lesson_expression_choose_order_both_sides:
      text_frozen("order_sides"),
    app_learn_js_lesson_expression_choose_order_both_sides_any_comparison:
      text_frozen("order_sides_any"),
    app_learn_js_lesson_expression_arithmetic_equality:
      text_frozen("math_sides"),
    app_learn_js_lesson_expression_both_sides_any_comparison:
      text_frozen("sides_any"),
    app_learn_js_lesson_expression_choose_order_swapping_add:
      text_frozen("order_swap_plus"),
    app_learn_js_lesson_expression_swapping_add: text_frozen("swap_plus"),
    app_learn_js_lesson_expression_choose_order_swapping_divide:
      text_frozen("order_swap_div"),
    app_learn_js_lesson_expression_swapping_divide: text_frozen("swap_divide"),
    app_learn_js_lesson_expression_swapping_order: text_frozen("swap_order"),
    app_learn_js_lesson_expression_choose_order_pair: text_frozen("order_pair"),
    app_learn_js_lesson_expression_parentheses_both_sides:
      text_frozen("brackets_sides"),
    app_learn_js_lesson_expression_swapping_equal: text_frozen("swap_equal"),
    app_learn_js_lesson_expression_choose_order_and: text_frozen("order_and"),
    app_learn_js_lesson_expression_comparison_and: text_frozen("and_compare"),
    app_learn_js_lesson_expression_choose_order_in_between:
      text_frozen("order_in_between"),
    app_learn_js_lesson_expression_in_between: text_frozen("in_between"),
    app_learn_js_lesson_expression_choose_order_or: text_frozen("order_or"),
    app_learn_js_lesson_expression_comparison_or: text_frozen("or_compare"),
    app_learn_js_lesson_expression_choose_order_and_before_or:
      text_frozen("order_and_or"),
    app_learn_js_lesson_expression_and_before_or: text_frozen("and_or_line"),
    app_learn_js_lesson_expression_choose_order_stop_early_or:
      text_frozen("order_stop_or"),
    app_learn_js_lesson_expression_choose_order_parentheses:
      text_frozen("order_brackets"),
    app_learn_js_lesson_expression_parentheses_or: text_frozen("brackets_or"),
    app_learn_js_lesson_expression_choose_order_parentheses_and_or:
      text_frozen("order_moved"),
    app_learn_js_lesson_expression_parentheses_and_or:
      text_frozen("brackets_pair"),
    app_learn_js_lesson_expression_choose_order_stop_early_and:
      text_frozen("order_stop_and"),
    app_learn_js_lesson_expression_choose_order_stop_early_both:
      text_frozen("order_stop_both"),
    app_learn_js_lesson_expression_choose_order_not_twice:
      text_frozen("order_not_twice"),
    app_learn_js_lesson_expression_not_twice: text_frozen("not_twice"),
    app_learn_js_lesson_expression_choose_order_not: text_frozen("order_not"),
    app_learn_js_lesson_expression_not_comparison: text_frozen("not_compare"),
    app_learn_js_lesson_expression_not_equal_same:
      text_frozen("not_equal_same"),
    app_learn_js_lesson_expression_choose_order_not_pair:
      text_frozen("order_not_pair"),
    app_learn_js_lesson_expression_not_pair: text_frozen("not_and_or"),
    app_learn_js_lesson_statement_name_value: text_frozen("name_value"),
    app_learn_js_lesson_step_name_value: text_frozen("step_name_value"),
    app_learn_js_lesson_statement_name_identifier: text_frozen("name_any"),
    app_learn_js_lesson_statement_name_two: text_frozen("name_two"),
    app_learn_js_lesson_step_name_two: text_frozen("step_name_two"),
    app_learn_js_lesson_statement_name_again: text_frozen("name_again"),
    app_learn_js_lesson_step_name_again: text_frozen("step_name_again"),
    app_learn_js_lesson_statement_name_copy: text_frozen("name_copy"),
    app_learn_js_lesson_statement_name_copy_single:
      text_frozen("name_copy_single"),
    app_learn_js_lesson_step_name_copy_single: text_frozen("step_name_copy"),
    app_learn_js_lesson_statement_name_sum: text_frozen("name_sum"),
    app_learn_js_lesson_step_name_sum: text_frozen("step_name_sum"),
    app_learn_js_lesson_statement_name_total: text_frozen("name_total"),
    app_learn_js_lesson_statement_name_join: text_frozen("name_join"),
    app_learn_js_lesson_step_name_join: text_frozen("step_name_join"),
    app_learn_js_lesson_statement_name_itself_sum: text_frozen("name_add_self"),
    app_learn_js_lesson_statement_name_one_more: text_frozen("name_one_more"),
    app_learn_js_lesson_statement_name_again_last: text_frozen("name_watch"),
    app_learn_js_lesson_statement_name_one_less: text_frozen("name_one_less"),
    app_learn_js_lesson_statement_name_count: text_frozen("name_count"),
    app_learn_js_lesson_statement_name_count_last:
      text_frozen("name_count_watch"),
    app_learn_js_lesson_statement_name_one_more_last:
      text_frozen("name_more_watch"),
    app_learn_js_lesson_statement_name_one_less_last:
      text_frozen("name_less_watch"),
    app_learn_js_lesson_statement_name_itself_sum_last:
      text_frozen("name_self_watch"),
    app_learn_js_lesson_statement_name_copy_kept: text_frozen("name_copy_kept"),
    app_learn_js_lesson_statement_name_compare: text_frozen("name_compare"),
    app_learn_js_lesson_statement_name_subtract: text_frozen("name_subtract"),
    app_learn_js_lesson_statement_name_multiply: text_frozen("name_multiply"),
    app_learn_js_lesson_statement_name_divide: text_frozen("name_divide"),
    app_learn_js_lesson_statement_name_plus_assign: text_frozen("name_plus_eq"),
    app_learn_js_lesson_step_name_plus_assign: text_frozen("step_name_add_eq"),
    app_learn_js_lesson_statement_name_minus_assign:
      text_frozen("name_minus_eq"),
    app_learn_js_lesson_statement_name_times_assign:
      text_frozen("name_times_eq"),
    app_learn_js_lesson_statement_name_divide_assign:
      text_frozen("name_divide_eq"),
    app_learn_js_lesson_statement_name_increment: text_frozen("name_increment"),
    app_learn_js_lesson_statement_name_decrement: text_frozen("name_decrement"),
    app_learn_js_lesson_step_name_minus_assign: text_frozen("step_name_sub_eq"),
    app_learn_js_lesson_step_name_times_assign: text_frozen("step_name_mul_eq"),
    app_learn_js_lesson_step_name_divide_assign:
      text_frozen("step_name_div_eq"),
    app_learn_js_lesson_step_name_increment: text_frozen("step_name_inc"),
    app_learn_js_lesson_step_name_decrement: text_frozen("step_name_dec"),
    app_learn_js_lesson_statement_name_fill_from: text_frozen("name_fill_from"),
    app_learn_js_lesson_statement_name_swap_try: text_frozen("name_swap_try"),
    app_learn_js_lesson_statement_name_temp_keep: text_frozen("name_temp_keep"),
    app_learn_js_lesson_statement_name_swap: text_frozen("name_swap"),
    app_learn_js_lesson_statement_name_average_two: text_frozen("name_avg_two"),
    app_learn_js_lesson_statement_name_average_three:
      text_frozen("name_avg_three"),
    app_learn_js_lesson_statement_name_middle: text_frozen("name_middle"),
    app_learn_js_lesson_statement_name_grid_row: text_frozen("name_grid_row"),
    app_learn_js_lesson_statement_name_grid_position:
      text_frozen("name_grid_col"),
    app_learn_js_lesson_statement_name_grid_index:
      text_frozen("name_grid_index"),
    app_learn_js_lesson_statement_name_sum_to: text_frozen("name_sum_to"),
    app_learn_js_lesson_statement_name_digit_split:
      text_frozen("name_digit_split"),
    app_learn_js_lesson_statement_name_digit_rest:
      text_frozen("name_digit_rest"),
    app_learn_js_lesson_statement_name_digit_append:
      text_frozen("name_digit_back"),
    app_learn_js_lesson_statement_name_clock_face: text_frozen("name_clock_12"),
    app_learn_js_lesson_statement_name_clock_next:
      text_frozen("name_clock_next"),
    app_learn_js_lesson_statement_name_egg_boxes: text_frozen("name_egg_boxes"),
    app_learn_js_lesson_statement_name_handshakes:
      text_frozen("name_handshakes"),
    app_learn_js_lesson_statement_name_rows_down: text_frozen("name_rows_down"),
    app_learn_js_lesson_statement_name_rows_apart:
      text_frozen("name_rows_apart"),
    app_learn_js_lesson_statement_name_grid_steps:
      text_frozen("name_grid_steps"),
    app_learn_js_lesson_statement_name_pages_read:
      text_frozen("name_pages_read"),
    app_learn_js_lesson_statement_name_last_seat: text_frozen("name_last_seat"),
    app_learn_js_lesson_statement_name_seat_one: text_frozen("name_seat_one"),
    app_learn_js_lesson_statement_name_seat_zero: text_frozen("name_seat_zero"),
    app_learn_js_lesson_statement_name_seat_less: text_frozen("name_seat_less"),
    app_learn_js_lesson_statement_name_king_steps:
      text_frozen("name_king_steps"),
    app_learn_js_lesson_statement_name_grid_inside:
      text_frozen("name_grid_inside"),
    app_learn_js_lesson_statement_name_clock_back:
      text_frozen("name_clock_back"),
    app_learn_js_lesson_statement_name_even: text_frozen("name_even"),
    app_learn_js_lesson_statement_name_page_start:
      text_frozen("name_page_start"),
    app_learn_js_lesson_statement_name_clamp: text_frozen("name_clamp"),
    app_learn_js_lesson_statement_name_meetings_overlap:
      text_frozen("name_meet_clash"),
    app_learn_js_lesson_statement_name_overlap_hours:
      text_frozen("name_clash_hours"),
    app_learn_js_lesson_statement_name_meetings_join:
      text_frozen("name_meet_join"),
    app_learn_js_lesson_statement_name_rectangles_overlap:
      text_frozen("name_rect_clash"),
    app_learn_js_lesson_statement_name_shared_squares:
      text_frozen("name_sq_shared"),
    app_learn_js_lesson_statement_name_shared_squares_none:
      text_frozen("name_sq_none"),
    app_learn_js_lesson_statement_name_square_in_rectangle:
      text_frozen("name_sq_in_rect"),
    app_learn_js_lesson_statement_name_meeting_inside:
      text_frozen("name_meet_inside"),
    app_learn_js_lesson_statement_name_rectangle_inside:
      text_frozen("name_rect_inside"),
    app_learn_js_lesson_statement_name_meeting_ended:
      text_frozen("name_meet_ended"),
    app_learn_js_lesson_statement_name_meetings_free:
      text_frozen("name_meet_free"),
    app_learn_js_lesson_statement_name_rectangle_above:
      text_frozen("name_rect_above"),
    app_learn_js_lesson_statement_name_rectangles_columns_between:
      text_frozen("name_rect_cols"),
    app_learn_js_lesson_statement_name_rectangles_join_down:
      text_frozen("name_rect_down"),
    app_learn_js_lesson_statement_name_rectangles_join_across:
      text_frozen("name_rect_across"),
    app_learn_js_lesson_statement_name_rectangles_cover_together:
      text_frozen("name_rect_cover"),
    app_learn_js_lesson_statement_name_rectangles_cover_edges:
      text_frozen("name_rect_edges"),
    app_learn_js_lesson_statement_name_rectangle_wide_as_tall:
      text_frozen("name_rect_square"),
    app_learn_js_lesson_if_true: text_frozen("if_true"),
    app_learn_js_lesson_braces_step_if_true: text_frozen("step_if_true"),
    app_learn_js_lesson_if_false: text_frozen("if_false"),
    app_learn_js_lesson_braces_step_if_false: text_frozen("step_if_false"),
    app_learn_js_lesson_if_less_than: text_frozen("if_less_than"),
    app_learn_js_lesson_if_name: text_frozen("if_name"),
    app_learn_js_lesson_braces_step_if_name: text_frozen("step_if_name"),
    app_learn_js_lesson_if_names_less_than: text_frozen("if_names_less"),
    app_learn_js_lesson_if_not: text_frozen("if_not"),
    app_learn_js_lesson_if_steps: text_frozen("if_steps"),
    app_learn_js_lesson_number_text_plus: text_frozen("number_text_plus"),
    app_learn_js_lesson_number_text_join: text_frozen("number_text_join"),
    app_learn_js_lesson_if_even: text_frozen("if_even"),
    app_learn_js_lesson_if_change: text_frozen("if_change"),
    app_learn_js_lesson_if_two_lines: text_frozen("if_two_lines"),
    app_learn_js_lesson_if_two_changes: text_frozen("if_two_changes"),
    app_learn_js_lesson_if_twice: text_frozen("if_twice"),
    app_learn_js_lesson_if_two_ifs: text_frozen("if_two_ifs"),
    app_learn_js_lesson_if_and_if_not: text_frozen("if_and_if_not"),
    app_learn_js_lesson_if_two_bounds: text_frozen("if_two_bounds"),
    app_learn_js_lesson_if_else: text_frozen("if_else"),
    app_learn_js_lesson_if_else_once: text_frozen("if_else_once"),
    app_learn_js_lesson_if_halve_even: text_frozen("if_halve_even"),
    app_learn_js_lesson_if_else_change: text_frozen("if_else_change"),
    app_learn_js_lesson_if_halve_or_triple: text_frozen("if_halve_triple"),
    app_learn_js_lesson_if_nested: text_frozen("if_nested"),
    app_learn_js_lesson_braces_run: text_frozen("braces_run"),
    app_learn_js_lesson_braces_run_if_else: text_frozen("run_if_else"),
    app_learn_js_lesson_braces_run_nested: text_frozen("run_nested"),
    app_learn_js_lesson_braces_run_after_nested: text_frozen("run_after_nest"),
    app_learn_js_lesson_braces_run_if_else_in_if: text_frozen("run_else_in_if"),
    app_learn_js_lesson_braces_run_if_in_else: text_frozen("run_if_in_else"),
    app_learn_js_lesson_braces_run_else_if: text_frozen("run_else_if"),
    app_learn_js_lesson_braces_run_if_else_in_if_else:
      text_frozen("run_nest_ifelse"),
    app_learn_js_lesson_braces_step_if_else_in_if_else:
      text_frozen("step_nest_ifelse"),
    app_learn_js_lesson_braces_run_if_else_in_else:
      text_frozen("run_two_elses"),
    app_learn_js_lesson_braces_step_if_else_in_else:
      text_frozen("step_two_elses"),
    app_learn_js_lesson_braces_run_else_if_twice: text_frozen("run_else_ifs"),
    app_learn_js_lesson_braces_run_else_if_else: text_frozen("run_chain_else"),
    app_learn_js_lesson_braces_run_thrice: text_frozen("run_thrice"),
    app_learn_js_lesson_braces_step: text_frozen("braces_step"),
    app_learn_js_lesson_braces_step_if_else: text_frozen("step_if_else"),
    app_learn_js_lesson_braces_step_nested: text_frozen("step_nested"),
    app_learn_js_lesson_braces_step_after_nested:
      text_frozen("step_after_nest"),
    app_learn_js_lesson_braces_step_if_else_in_if:
      text_frozen("step_else_in_if"),
    app_learn_js_lesson_braces_step_if_in_else: text_frozen("step_if_in_else"),
    app_learn_js_lesson_braces_step_else_if: text_frozen("step_else_if"),
    app_learn_js_lesson_braces_step_else_if_twice: text_frozen("step_else_ifs"),
    app_learn_js_lesson_braces_step_else_if_else:
      text_frozen("step_chain_else"),
    app_learn_js_lesson_braces_step_thrice: text_frozen("step_thrice"),
    app_learn_js_lesson_if_after_nested: text_frozen("if_after_nested"),
    app_learn_js_lesson_brace_pair: text_frozen("brace_pair"),
    app_learn_js_lesson_brace_pair_two: text_frozen("brace_pair_two"),
    app_learn_js_lesson_brace_lines_two: text_frozen("brace_lines_two"),
    app_learn_js_lesson_brace_lines_two_nested: text_frozen("brace_lines_nest"),
    app_learn_js_lesson_brace_lines: text_frozen("brace_lines"),
    app_learn_js_lesson_token_order: text_frozen("token_order"),
    app_learn_js_lesson_token_order_alone: text_frozen("token_alone"),
    app_learn_js_lesson_token_order_braces: text_frozen("token_braces"),
    app_learn_js_lesson_token_order_braces_plain: text_frozen("token_plain"),
    app_learn_js_lesson_token_order_braces_three: text_frozen("token_braces_3"),
    app_learn_js_lesson_token_order_braces_three_plain:
      text_frozen("token_plain_3"),
    app_learn_js_lesson_token_order_braces_colored:
      text_frozen("token_colored"),
    app_learn_js_lesson_token_order_braces_only:
      text_frozen("token_brace_only"),
    app_learn_js_lesson_token_order_braces_two: text_frozen("token_braces_2"),
    app_learn_js_lesson_if_else_in_if: text_frozen("if_else_in_if"),
    app_learn_js_lesson_if_else_in_if_else: text_frozen("if_else_outer"),
    app_learn_js_lesson_if_in_else: text_frozen("if_in_else"),
    app_learn_js_lesson_else_if: text_frozen("else_if"),
    app_learn_js_lesson_if_else_in_else: text_frozen("if_else_in_else"),
    app_learn_js_lesson_else_if_else: text_frozen("else_if_else"),
    app_learn_js_lesson_else_if_twice: text_frozen("else_if_twice"),
    app_learn_js_lesson_else_if_order: text_frozen("else_if_order"),
    app_learn_js_lesson_if_thrice: text_frozen("if_thrice"),
    app_learn_js_lesson_while: text_frozen("while"),
    app_learn_js_lesson_while_log: text_frozen("while_log"),
    app_learn_js_lesson_while_log_after_change: text_frozen("while_log_after"),
    app_learn_js_lesson_while_log_skipped: text_frozen("while_log_skip"),
    app_learn_js_lesson_while_double: text_frozen("while_double"),
    app_learn_js_lesson_while_increment: text_frozen("while_increment"),
    app_learn_js_lesson_while_up_to: text_frozen("while_up_to"),
    app_learn_js_lesson_while_log_double: text_frozen("while_log_double"),
    app_learn_js_lesson_while_decrement: text_frozen("while_decrement"),
    app_learn_js_lesson_while_countdown: text_frozen("while_countdown"),
    app_learn_js_lesson_while_repeat_word: text_frozen("while_repeat"),
    app_learn_js_lesson_while_start_end: text_frozen("while_start_end"),
    app_learn_js_lesson_while_repeat_word_down: text_frozen("while_word_down"),
    app_learn_js_lesson_while_two_lines: text_frozen("while_two_lines"),
    app_learn_js_lesson_while_two_names: text_frozen("while_two_names"),
    app_learn_js_lesson_while_two_meet: text_frozen("while_two_meet"),
    app_learn_js_lesson_while_product: text_frozen("while_product"),
    app_learn_js_lesson_while_and: text_frozen("while_and"),
    app_learn_js_lesson_while_down: text_frozen("while_down"),
    app_learn_js_lesson_while_less_equal: text_frozen("while_less_equal"),
    app_learn_js_lesson_while_greater_equal: text_frozen("while_greater_eq"),
    app_learn_js_lesson_while_not_equal: text_frozen("while_not_eq"),
    app_learn_js_lesson_while_halve: text_frozen("while_halve"),
    app_learn_js_lesson_while_count: text_frozen("while_count"),
    app_learn_js_lesson_while_total: text_frozen("while_total"),
    app_learn_js_lesson_while_total_step: text_frozen("while_step"),
    app_learn_js_lesson_while_total_squares: text_frozen("while_squares"),
    app_learn_js_lesson_while_if: text_frozen("while_if"),
    app_learn_js_lesson_for: text_frozen("for"),
    app_learn_js_lesson_for_change: text_frozen("for_change"),
    app_learn_js_lesson_for_start: text_frozen("for_start"),
    app_learn_js_lesson_for_increment: text_frozen("for_increment"),
    app_learn_js_lesson_for_decrement: text_frozen("for_decrement"),
    app_learn_js_lesson_for_repeat_word: text_frozen("for_repeat"),
    app_learn_js_lesson_for_total: text_frozen("for_total"),
    app_learn_js_lesson_for_up_to: text_frozen("for_up_to"),
    app_learn_js_lesson_for_total_step: text_frozen("for_total_step"),
    app_learn_js_lesson_for_count: text_frozen("for_count"),
    app_learn_js_lesson_for_after_change: text_frozen("for_after_change"),
    app_learn_js_lesson_for_log_double: text_frozen("for_log_double"),
    app_learn_js_lesson_for_down_to: text_frozen("for_down_to"),
    app_learn_js_lesson_for_two_names: text_frozen("for_two_names"),
    app_learn_js_lesson_for_if: text_frozen("for_if"),
    app_learn_js_lesson_for_count_if: text_frozen("for_count_if"),
    app_learn_js_lesson_for_total_if: text_frozen("for_total_if"),
    app_learn_js_lesson_for_if_even: text_frozen("for_if_even"),
    app_learn_js_lesson_for_if_else: text_frozen("for_if_else"),
    app_learn_js_lesson_array_first: text_frozen("array_first"),
    app_learn_js_lesson_array_second: text_frozen("array_second"),
    app_learn_js_lesson_array_any: text_frozen("array_any"),
    app_learn_js_lesson_array_length: text_frozen("array_length"),
    app_learn_js_lesson_array_last_index: text_frozen("array_last_index"),
    app_learn_js_lesson_array_last: text_frozen("array_last"),
    app_learn_js_lesson_step_while: text_frozen("step_while"),
    app_learn_js_lesson_step_while_log: text_frozen("step_while_log"),
    app_learn_js_lesson_step_while_down: text_frozen("step_while_down"),
    app_learn_js_lesson_step_while_halve: text_frozen("step_while_halve"),
    app_learn_js_lesson_step_while_total: text_frozen("step_while_total"),
    app_learn_js_lesson_step_while_total_step: text_frozen("step_while_step"),
    app_learn_js_lesson_step_while_total_squares: text_frozen("step_while_sq"),
    app_learn_js_lesson_statement_name_rectangles_rows_between:
      text_frozen("name_rect_rows"),
    app_learn_js_lesson_statement_name_remainder: text_frozen("name_remainder"),
    app_learn_js_lesson_statement_name_greater: text_frozen("name_greater"),
    app_learn_js_lesson_statement_name_smaller_equal:
      text_frozen("name_smaller_eq"),
    app_learn_js_lesson_statement_name_greater_equal:
      text_frozen("name_greater_eq"),
    app_learn_js_lesson_statement_name_equal: text_frozen("name_equal"),
    app_learn_js_lesson_statement_name_not_equal: text_frozen("name_not_equal"),
    app_learn_js_lesson_statement_name_and: text_frozen("name_and"),
    app_learn_js_lesson_statement_name_or: text_frozen("name_or"),
    app_learn_js_lesson_statement_name_not: text_frozen("name_not"),
    app_learn_js_lesson_comment_note: text_frozen("comment"),
    app_learn_js_lesson_log_twice: text_frozen("log_twice"),
    app_learn_js_lesson_step_log_twice: text_frozen("step_log_twice"),
    app_learn_js_lesson_comment_skip_line: text_frozen("comment_skip"),
    app_learn_js_lesson_comment_after_code: text_frozen("comment_after"),
    app_learn_js_lesson_statement_name_true_false:
      text_frozen("name_true_false"),
    app_learn_js_lesson_statement_name_number: text_frozen("name_number"),
    app_learn_js_lesson_statement_name_minus_one: text_frozen("name_minus_one"),
    app_learn_js_lesson_statement_name_plus_one: text_frozen("name_plus_one"),
    app_learn_js_lesson_step_name_plus_one: text_frozen("step_name_plus"),
    app_learn_js_lesson_step_name_one_more: text_frozen("step_name_more"),
    app_learn_js_lesson_step_name_copy_kept: text_frozen("step_copy_kept"),
    app_learn_js_lesson_step_name_swap_try: text_frozen("step_swap_try"),
    app_learn_js_lesson_step_if_change: text_frozen("step_if_change"),
    app_learn_js_lesson_step_if_two_lines: text_frozen("step_if_two"),
    app_learn_js_lesson_step_name_average_two: text_frozen("step_avg_two"),
    app_learn_js_lesson_step_name_grid_inside: text_frozen("step_grid_inside"),
    app_learn_js_lesson_step_name_average_three: text_frozen("step_avg_three"),
    app_learn_js_lesson_array_last_index_solve: text_frozen(
      "array_last_index_solve",
    ),
    app_learn_js_lesson_array_last_solve: text_frozen("array_last_solve"),
    app_learn_js_lesson_array_index_name: text_frozen("array_index_name"),
    app_learn_js_lesson_array_index_step: text_frozen("array_index_step"),
    app_learn_js_lesson_array_index_steps_two: text_frozen(
      "array_index_steps_two",
    ),
    app_learn_js_lesson_array_for: text_frozen("array_for"),
    app_learn_js_lesson_array_for_length: text_frozen("array_for_length"),
    app_learn_js_lesson_array_for_inner: text_frozen("array_for_inner"),
    app_learn_js_lesson_array_for_start_two: text_frozen("array_for_start_two"),
    app_learn_js_lesson_array_for_step_two: text_frozen("array_for_step_two"),
    app_learn_js_lesson_array_for_step_two_odd: text_frozen(
      "array_for_step_two_odd",
    ),
    app_learn_js_lesson_array_for_backwards: text_frozen("array_for_backwards"),
    app_learn_js_lesson_array_for_backwards_step_two: text_frozen(
      "array_backwards_step_two",
    ),
    app_learn_js_lesson_array_for_if_even: text_frozen("array_for_if_even"),
    app_learn_js_lesson_array_for_if_odd: text_frozen("array_for_if_odd"),
    app_learn_js_lesson_array_for_find: text_frozen("array_for_find"),
    app_learn_js_lesson_array_for_flag: text_frozen("array_for_flag"),
    app_learn_js_lesson_array_for_flag_false: text_frozen("array_flag_false"),
    app_learn_js_lesson_array_for_if_third: text_frozen("array_for_third"),
    app_learn_js_lesson_array_for_found: text_frozen("array_found"),
    app_learn_js_lesson_array_includes: text_frozen("array_includes"),
    app_learn_js_lesson_array_for_at: text_frozen("array_at"),
    app_learn_js_lesson_array_for_at_last: text_frozen("array_at_last"),
    app_learn_js_lesson_array_for_at_first: text_frozen("array_at_first"),
    app_learn_js_lesson_array_index_of_found: text_frozen("array_index_found"),
    app_learn_js_lesson_array_index_of: text_frozen("array_index_of"),
    app_learn_js_lesson_array_index_of_first: text_frozen("array_index_first"),
    app_learn_js_lesson_array_for_break: text_frozen("array_break"),
    app_learn_js_lesson_array_for_count: text_frozen("array_count"),
    app_learn_js_lesson_array_for_total: text_frozen("array_total"),
    app_learn_js_lesson_array_for_biggest: text_frozen("array_biggest"),
    app_learn_js_lesson_string_letter: text_frozen("string_letter"),
    app_learn_js_lesson_string_for: text_frozen("string_for"),
    app_learn_js_lesson_string_index_e: text_frozen("string_index_e"),
    app_learn_js_lesson_string_found_e: text_frozen("string_found_e"),
    app_learn_js_lesson_string_includes_e: text_frozen("string_includes_e"),
    app_learn_js_lesson_array_for_includes_e: text_frozen("array_includes_e"),
    app_learn_js_lesson_array_for_count_e: text_frozen("array_count_e"),
    app_learn_js_lesson_statement_name_not_itself:
      text_frozen("name_not_itself"),
    app_learn_js_lesson_array_push: text_frozen("array_push"),
    app_learn_js_lesson_array_push_last: text_frozen("array_push_last"),
    app_learn_js_lesson_array_for_pushed: text_frozen("array_for_pushed"),
    app_learn_js_lesson_array_empty: text_frozen("array_empty"),
    app_learn_js_lesson_array_empty_push: text_frozen("array_empty_push"),
    app_learn_js_lesson_array_empty_for_push: text_frozen(
      "array_empty_for_push",
    ),
    app_learn_js_lesson_array_empty_for_push_last: text_frozen(
      "array_empty_for_push_last",
    ),
    app_learn_js_lesson_array_empty_for_push_step_two: text_frozen(
      "array_empty_for_push_step_two",
    ),
    app_learn_js_lesson_array_pop: text_frozen("array_pop"),
    app_learn_js_lesson_array_pop_value: text_frozen("array_pop_value"),
    app_learn_js_lesson_array_pop_while: text_frozen("array_pop_while"),
    app_learn_js_lesson_array_unshift: text_frozen("array_unshift"),
    app_learn_js_lesson_array_shift: text_frozen("array_shift"),
    app_learn_js_lesson_array_shift_value: text_frozen("array_shift_value"),
    app_learn_js_lesson_array_reverse: text_frozen("array_reverse"),
  };
  return short;
}
