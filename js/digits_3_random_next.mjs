import { list_iterator_refillable } from "../../love/js/list_iterator_refillable.mjs";
import { list_adder } from "../../love/js/list_adder.mjs";
import { each_range_1 } from "../../love/js/each_range_1.mjs";
import { property_initialize_lambda } from "../../love/js/property_initialize_lambda.mjs";
import { digit_count_values_shuffled_next } from "../../love/js/digit_count_values_shuffled_next.mjs";
export function digits_3_random_next() {
  let data = {};
  function lambda() {
    function lambda3(la) {
      function lambda2(c) {
        function lambda5() {
          let next = digit_count_values_shuffled_next(c);
          return next;
        }
        let next = property_initialize_lambda(data, c, lambda5);
        let v2 = next();
        la(v2);
      }
      let digit_count_max = 3;
      each_range_1(digit_count_max, lambda2);
    }
    let list = list_adder(lambda3);
    return list;
  }
  let next_arg = list_iterator_refillable(lambda);
  return next_arg;
}
