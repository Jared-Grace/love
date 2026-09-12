import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_called } from "./app_code_operators_called.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_operator_called_is(symbol) {
  arguments_assert(arguments, 1);
  ("whether an operator is written as a name with brackets round the one thing it acts on: Math.floor comes back yes and ! comes back no");
  ("Asked by the printer and by the telling that points at the brackets, out of one list, because those two have to agree about every pair of brackets on the line. A line printed with a pair the telling says nothing about, or a telling naming a pair the line does not show, is worse than either on its own.");
  let names = app_code_operators_called();
  let called = list_includes(names, symbol);
  return called;
}
