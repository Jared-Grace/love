import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_routes } from "./calendar_worker_routes.mjs";
import { calendar_worker_wrangler } from "./calendar_worker_wrangler.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
export async function calendar_db_named_stage(database_name) {
  arguments_assert(arguments, 1);
  ("Writes the calendar Worker's folder with the settings of whichever Worker holds the named database - calendar-live for calendar, the test one for calendar_test - and returns the folder, so wrangler run there finds that database in its own settings.");
  ("The names are read off the settings themselves rather than spelled again here, so a database renamed there is found here too; a name neither Worker holds is refused.");
  let r2 = calendar_worker_routes();
  let routes_each = [r2, []];
  function holds(routes) {
    let config = calendar_worker_wrangler(routes);
    let r = equal(config.d1_databases[0].database_name, database_name);
    return r;
  }
  let routes = routes_each.find(holds);
  if (equal(routes, undefined)) {
    throw new Error(
      text_combine_multiple([
        fn_name("calendar_db_named_stage"),
        ": no calendar Worker holds a database named ",
      ]) + database_name,
    );
  }
  let folder = await calendar_worker_stage(routes);
  return folder;
}
