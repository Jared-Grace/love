/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./js/json_to.mjs
function json_to(object) {
  let json = JSON.stringify(object);
  return json;
}

;// ./js/not.mjs
function not(b) {
  let n = !b;
  return n;
}

;// ./js/error.mjs
function error(message) {
  throw new Error(message);
}

;// ./js/assert_message_get.mjs


function assert_message_get(b, lambda) {
  if (not(b)) {
    let message = lambda();
    error(message);
  }
}

;// ./js/assert_json_get.mjs


function assert_json_get(b, lambda) {
  function json_get() {
    let object = lambda();
    let json = json_to(object);
    return json;
  }
  assert_message_get(b, json_get);
}

;// ./js/assert_json.mjs

function assert_json(b, o) {
  function lambda() {
    return o;
  }
  assert_json_get(b, lambda);
}

;// ./js/equal.mjs
function equal(left, right) {
  let eq = left === right;
  return eq;
}

;// ./js/equal_assert_json.mjs


function equal_assert_json(left, right, json) {
  let eq = equal(left, right);
  assert_json(eq, {
    left,
    right,
    json,
  });
}

;// ./js/error_is.mjs

function error_is(value) {
  arguments_assert(arguments, 1);
  ("whether this is a thrown error rather than ordinary data");
  ("asked so that something being written down can be told apart from something being explained. An error is the one value that looks empty when it is written down and is not, so it has to be recognised before it is written rather than after.");
  let r = value instanceof Error;
  return r;
}

;// ./js/null_is.mjs

function null_is(value) {
  let n = equal(value, null);
  return n;
}

;// ./js/not_equal.mjs
function not_equal(left, right) {
  let neq = left !== right;
  return neq;
}

;// ./js/null_not_is.mjs

function null_not_is(value) {
  let nn = not_equal(value, null);
  return nn;
}

;// ./js/property_exists.mjs
function property_exists(object, property_name) {
  let exists = object ? Object.hasOwn(object, property_name) : false;
  return exists;
}

;// ./js/property_get_or.mjs


function property_get_or(obj, key, value_not) {
  let value = value_not;
  let exists = property_exists(obj, key);
  if (exists) {
    value = property_get(obj, key);
  }
  return value;
}

;// ./js/property_get_or_null.mjs

function property_get_or_null(object, property) {
  let value = property_get_or(object, property, null);
  return value;
}

;// ./js/text_to.mjs
function text_to(input) {
  let t = input.toString();
  return t;
}

;// ./js/undefined_is.mjs

function undefined_is(value) {
  let u = equal(typeof value, "undefined");
  return u;
}

;// ./js/or.mjs
function or(left, right) {
  let ored = left || right;
  return ored;
}

;// ./js/error_readable.mjs







function error_readable(e) {
  arguments_assert(arguments, 1);
  ("what went wrong, said in a way that survives being written down");
  ("an error keeps its words on properties that are deliberately not walked when it is turned into json, so writing one down straight gives an empty pair of brackets - every word of why, lost at the one moment somebody is reading to find out why. Measured on the retrier: three failed attempts reported as three empty brackets, which reads exactly like three attempts that had nothing to say.");
  ("anything at all can be thrown, and a thrown thing that is not an error carries no words to take. Then how it prints is the best that can be said about it, and saying that is still more than saying nothing.");
  ("a thrown nothing is the one case with neither words nor a printable form, and it gets a sentence of its own rather than an exception - a reader arrives here because something already went wrong, so this is the last place that should add a second failure on top of the first.");
  let words = property_get_or_null(e, "message");
  let told = null_not_is(words);
  if (told) {
    return words;
  }
  let empty = null_is(e);
  let absent = undefined_is(e);
  let nothing = or(empty, absent);
  if (nothing) {
    let r = "nothing was thrown that could say what went wrong";
    return r;
  }
  let printed = text_to(e);
  return printed;
}

;// ./js/error_json_replacer.mjs



function error_json_replacer(key, value) {
  arguments_assert(arguments, 2);
  ("stands in front of every value on its way into json and hands back the words of anything thrown, so an error written down keeps what it said");
  ("it is offered every value at every depth, which is the whole reason it is shaped this way rather than as a walk over the properties in front of us - an error inside a list inside an object is the case that was actually losing its words, and a walk one level deep would have missed exactly that one.");
  ("the key it is offered says where the value sat, and nothing here needs to know that - what an error should say does not depend on what it was filed under.");
  let thrown = error_is(value);
  if (thrown) {
    let words = error_readable(value);
    return words;
  }
  return value;
}

;// ./js/json_format_to_spaces_replaced.mjs

function json_format_to_spaces_replaced(object, spaces, replacer) {
  arguments_assert(arguments, 3);
  ("json text for an object, indented by the given number of spaces, with every value offered to the given stand-in first");
  ("the plain reading is this one with nobody standing in, so the two cannot drift apart in how they indent or in what they consider worth writing down.");
  let json = JSON.stringify(object, replacer, spaces);
  return json;
}

;// ./js/json_format_to_replaced.mjs


function json_format_to_replaced(object, replacer) {
  arguments_assert(arguments, 2);
  ("json text for an object at the usual width, with every value offered to the given stand-in first");
  ("the usual width is spelled here and nowhere else. The plain reading is this one with nobody standing in, so neither can drift from the other in how wide it writes.");
  let json = json_format_to_spaces_replaced(object, 1, replacer);
  return json;
}

;// ./js/error_json.mjs



function error_json(o) {
  "raise a failure described by an object, keeping the words of anything thrown that was put in it";
  "an error hands back an empty pair of brackets when it is written down, because the words it carries sit on properties that are deliberately not walked. So a caller who caught something and passed it along here raised a report with a hole exactly where the reason was - and it reads like a caller who had nothing to say, at the one moment somebody is reading to find out why. Two such callers were found and repaired by hand before this was moved here; putting it here is what stops there being a third.";
  "the plain reading of an object into json is left alone. What is written down for somebody to read and what is written down to be stored are different questions, and only the first one wants an error turned into a sentence.";
  let message = json_format_to_replaced(o, error_json_replacer);
  error(message);
}

;// ./js/error_json_lamba.mjs

function error_json_lamba(lambda) {
  let message = lambda();
  error_json(message);
}

;// ./js/properties_get.mjs
function properties_get(obj) {
  let properties = Object.getOwnPropertyNames(obj);
  return properties;
}

;// ./js/property_get.mjs



function property_get(object, property_name) {
  if (not(property_name in object)) {
    function object_get() {
      let properties = properties_get(object);
      ("this way you see ",
        property_name,
        " if you receive truncated beginning or ending");
      let v = {
        property_name,
        properties,
        object,
        properties_end: properties,
        property_name_end: property_name,
      };
      return v;
    }
    error_json_lamba(object_get);
  }
  let value = object[property_name];
  return value;
}

;// ./js/arguments_assert.mjs


function arguments_assert(args, count) {
  let length = property_get(args, "length");
  equal_assert_json(length, count, {
    hint: "this function was called with a different number of arguments than it expects — check the call site's argument count",
  });
}

;// ./js/html_hash_get.mjs
function html_hash_get() {
  let h = window.location.hash;
  return h;
}

;// ./js/function_duplicate_kind_parallel.mjs
function function_duplicate_kind_parallel() {
  "A mark placed in a function body saying that this function shares its shape with another on purpose, and that the two should never be collapsed into one.";
  "It is named after the function that reads it, so a reader who meets it in a body and does not know why it is there has the answer in front of them: open the function this one is named after. Nothing else written in a body says who is listening.";
  "It does nothing when it runs, and it is a call rather than a bare mention because the auto pass rewrites a bare mention back into a call. Being a call costs one jump into an empty body; being read costs nothing at all, because the mark is found by looking at the written function rather than by running it.";
  "A mark is worth more than a sentence of prose saying the same thing, for the one reason prose cannot manage: something checks it. A sentence can go stale without anyone noticing, and this cannot, because the mark is the very thing the search reads.";
}

;// ./js/text_slice.mjs

function text_slice(s, from, to) {
  "The run of letters from one place in some text up to but not including another.";
  function_duplicate_kind_parallel();
  let sliced = s.slice(from, to);
  return sliced;
}

;// ./js/text_size.mjs
function text_size(s) {
  let size = s.length;
  return size;
}

;// ./js/text_skip.mjs


function text_skip(s, skip_count) {
  let b = text_size(s);
  let skipped = text_slice(s, skip_count, b);
  return skipped;
}

;// ./js/html_hash_name_get.mjs



function html_hash_name_get() {
  arguments_assert(arguments, 0);
  ("The word written after the hash mark in the address bar, without the mark.");
  ("What the page is being asked for - a screen name, a sandbox name, a title.");
  ("The address holds the mark and the word together, and no reader of the word");
  ("ever wants the mark on the front of it, so the two lines that take it off");
  ("were being written wherever the address is read.");
  let hash = html_hash_get();
  let name = text_skip(hash, 1);
  return name;
}

;// ./js/undefined_not_is_assert_lambda.mjs


function undefined_not_is_assert_lambda(value, lambda) {
  if (undefined_is(value)) {
    error_json_lamba(lambda);
  }
}

;// ./js/undefined_not_is_assert_object_property_json.mjs


function undefined_not_is_assert_object_property_json(
  value,
  object,
  property_name,
  json,
) {
  function object_get() {
    let properties = properties_get(object);
    let v = {
      property_name,
      properties,
      object,
      json,
    };
    return v;
  }
  undefined_not_is_assert_lambda(value, object_get);
}

;// ./js/property_set.mjs

function property_set(object, property_name, value) {
  undefined_not_is_assert_object_property_json(value, object, property_name, {
    hint: "the value being set shouldn't be undefined — did it fail to compute?",
  });
  object[property_name] = value;
}

;// ./js/property_initialize_lambda.mjs




function property_initialize_lambda(object, property_name, lambda) {
  let exists = property_exists(object, property_name);
  if (not(exists)) {
    let value_set = lambda();
    property_set(object, property_name, value_set);
  }
  let value = property_get(object, property_name);
  return value;
}

;// ./js/fn_name.mjs

function fn_name(f_name) {
  function_duplicate_kind_parallel();
  return f_name;
}

;// ./js/global_get.mjs



let global = {};
function global_get() {
  let exists = property_exists(global, fn_name("global_alternate_set"));
  if (exists) {
    let value = property_get(global, fn_name("global_alternate_set"));
    return value;
  }
  return global;
}

;// ./js/global_function_initialize_lambda.mjs



function global_function_initialize_lambda(fn, lambda) {
  arguments_assert(arguments, 2);
  let global = global_get();
  let value = property_initialize_lambda(global, fn.name, lambda);
  return value;
}

;// ./js/lambda_get.mjs
function lambda_get(value) {
  function value_get() {
    return value;
  }
  return value_get;
}

;// ./js/global_function_initialize.mjs



function global_function_initialize(fn, initial) {
  arguments_assert(arguments, 2);
  let value_get = lambda_get(initial);
  let value = global_function_initialize_lambda(fn, value_get);
  return value;
}

;// ./js/global_function_property_set.mjs


function global_function_property_set(fn, property_name, value) {
  let fn_object = global_function_initialize(fn, {});
  property_set(fn_object, property_name, value);
}

;// ./js/undefined_is_if_null.mjs

function undefined_is_if_null(result) {
  if (undefined_is(result)) {
    result = null;
  }
  return result;
}

;// ./js/storage_local_specify_set.mjs


function storage_local_specify_set(storage_local_key, value) {
  value = undefined_is_if_null(value);
  let j = json_to({
    value,
  });
  localStorage.setItem(storage_local_key, j);
}

;// ./js/list_is.mjs
function list_is(value) {
  let l = Array.isArray(value);
  return l;
}

;// ./js/list_is_assert_json.mjs


function list_is_assert_json(list, json) {
  let result = list_is(list);
  assert_json(result, {
    list,
    json,
  });
}

;// ./js/each.mjs


function each(list, lambda$item) {
  "the hint is a lone literal, and the name a field of its own, because every text-joining helper in the repo reduces THROUGH this loop - building the message out of pieces here would call back into the very function that is building it, and the stack would run out before the mistake could be reported";
  list_is_assert_json(list, {
    fn: each.name,
    hint: "this expects a list to walk. a text is walkable too, one LETTER at a time, so handing it one where a list was meant runs the body against every character and never says a word - the trap a comma-joined argument off a command line falls into. split it into a list first",
  });
  for (let item of list) {
    let result = lambda$item(item);
    if (equal(result, true)) {
      return;
    }
  }
}

;// ./js/each_index.mjs

function each_index(list, lambda$item$index) {
  let index = 0;
  function lambda_each_index(item) {
    lambda$item$index(item, index);
    index++;
  }
  each(list, lambda_each_index);
}

;// ./js/list_reduce_index.mjs

function list_reduce_index(list, lambda$value$item$index, inital) {
  let value = inital;
  function lambda(item, index) {
    value = lambda$value$item$index(value, item, index);
  }
  each_index(list, lambda);
  return value;
}

;// ./js/list_reduce.mjs

function list_reduce(list, lambda$value$item, inital) {
  function lambda(value, item, index) {
    let v = lambda$value$item(value, item);
    return v;
  }
  let reduced = list_reduce_index(list, lambda, inital);
  return reduced;
}

;// ./js/text_combine.mjs

function text_combine(left, right) {
  "Two pieces of text joined end to end.";
  function_duplicate_kind_parallel();
  let combined = left + right;
  return combined;
}

;// ./js/text_combine_multiple.mjs



function text_combine_multiple(list) {
  arguments_assert(arguments, 1);
  let combined = list_reduce(list, text_combine, "");
  return combined;
}

;// ./js/storage_key_name_get.mjs


function storage_key_name_get(app_fn_name, key) {
  function_duplicate_kind_parallel();
  ("The key a setting is filed under in somebody's browser, named by the word the owning app answers to rather than by the app itself.");
  ("The join lives here and nowhere else. A key is a published thing sitting on disks this repo will never see again, so a second place spelling the same join is a second place it can quietly stop matching.");
  ("Asking for the name rather than the function is what lets one page read a setting another page filed. Everything under here only ever wanted the name - a page that has to hand over the whole app to say whose setting it is drags that app's entire reading into its own bundle, which for a page that shows one verse is the difference between a page and a reader.");
  let ley = text_combine_multiple([app_fn_name, " ", key]);
  return ley;
}

;// ./js/storage_key_get.mjs

function storage_key_get(app_fn, key) {
  "The key a setting is filed under, named by the app itself. The twin underneath takes the name on its own, and everything the join needs is that name - so the two cannot come to spell a key two ways.";
  let ley = storage_key_name_get(app_fn.name, key);
  return ley;
}

;// ./js/global_function_get.mjs


function global_function_get(fn) {
  let global = global_get();
  let value = property_get(global, fn.name);
  return value;
}

;// ./js/global_function_exists.mjs


function global_function_exists(fn) {
  let global = global_get();
  let exists = property_exists(global, fn.name);
  return exists;
}

;// ./js/storage_local_enabled.mjs




function storage_local_enabled() {
  let set = global_function_exists(storage_local_enabled);
  if (not(set)) {
    return true;
  }
  let left = global_function_get(storage_local_enabled);
  let enabled = equal(left, true);
  return enabled;
}

;// ./js/storage_local_set.mjs




function storage_local_set(app_fn, key, value) {
  let storage_local_key = storage_key_get(app_fn, key);
  if (storage_local_enabled()) {
    storage_local_specify_set(storage_local_key, value);
    return;
  }
  global_function_property_set(storage_local_set, storage_local_key, value);
}

;// ./js/global_function_initialize_object.mjs
/* unused harmony import specifier */ var global_function_initialize_object_global_function_initialize;

function global_function_initialize_object(fn) {
  let value = global_function_initialize_object_global_function_initialize(fn, {});
  return value;
}

;// ./js/global_function_property_exists.mjs
/* unused harmony import specifier */ var global_function_property_exists_global_function_initialize_object;
/* unused harmony import specifier */ var global_function_property_exists_property_exists;


function global_function_property_exists(fn, property_name) {
  let fn_object = global_function_property_exists_global_function_initialize_object(fn);
  let exists = global_function_property_exists_property_exists(fn_object, property_name);
  return exists;
}

;// ./js/storage_local_exists_global.mjs
/* unused harmony import specifier */ var storage_local_exists_global_storage_local_set;
/* unused harmony import specifier */ var storage_local_exists_global_global_function_property_exists;


function storage_local_exists_global(storage_local_key) {
  let exists = storage_local_exists_global_global_function_property_exists(
    storage_local_exists_global_storage_local_set,
    storage_local_key,
  );
  return exists;
}

;// ./js/global_function_property_get.mjs
/* unused harmony import specifier */ var global_function_property_get_global_function_initialize;
/* unused harmony import specifier */ var global_function_property_get_property_get;


function global_function_property_get(fn, property_name) {
  let fn_object = global_function_property_get_global_function_initialize(fn, {});
  let value = global_function_property_get_property_get(fn_object, property_name);
  return value;
}

;// ./js/storage_local_get_global.mjs
/* unused harmony import specifier */ var storage_local_get_global_storage_local_exists_global;
/* unused harmony import specifier */ var storage_local_get_global_global_function_property_get;
/* unused harmony import specifier */ var storage_local_get_global_storage_local_set;



function storage_local_get_global(storage_local_key) {
  let exists = storage_local_get_global_storage_local_exists_global(storage_local_key);
  ("localStorage has this behavior of null if not exists, so the in-memory version also mirrors api");
  let value = null;
  if (exists) {
    value = storage_local_get_global_global_function_property_get(storage_local_get_global_storage_local_set, storage_local_key);
  }
  return value;
}

;// ./js/storage_local_name_get.mjs
/* unused harmony import specifier */ var storage_local_name_get_storage_key_name_get;
/* unused harmony import specifier */ var storage_local_name_get_storage_local_enabled;
/* unused harmony import specifier */ var storage_local_specify_get;
/* unused harmony import specifier */ var storage_local_name_get_storage_local_get_global;




function storage_local_name_get(app_fn_name, key) {
  "What one app filed on this device under a word it chose, asked for by the name that app answers to.";
  "The twin beside this one takes the app itself, and every page that owns what it is reading should keep taking it. This one is for reading across: a page that shows a verse and hands the reading on to the bible wants to open at the size the bible was left at, and the only thing standing between it and that setting was that saying whose setting it is meant importing the whole reader.";
  "Nothing is written back from here on purpose. Reading another app's setting is a kindness; writing one is that app losing track of its own, and there is no reader who wants a page they passed through to change what they chose next door.";
  let storage_local_key = storage_local_name_get_storage_key_name_get(app_fn_name, key);
  if (storage_local_name_get_storage_local_enabled()) {
    let result = storage_local_specify_get(storage_local_key);
    return result;
  }
  let value = storage_local_name_get_storage_local_get_global(storage_local_key);
  return value;
}

;// ./js/storage_local_get.mjs
/* unused harmony import specifier */ var storage_local_get_storage_local_name_get;

function storage_local_get(app_fn, key) {
  "What this app filed on this device under a word it chose. The twin underneath is handed the name on its own, so the way a setting is found is written once and a page reading across to another app finds it the same way this one does.";
  let value = storage_local_get_storage_local_name_get(app_fn.name, key);
  return value;
}

;// ./js/storage_local_initialize.mjs
/* unused harmony import specifier */ var storage_local_initialize_storage_local_set;
/* unused harmony import specifier */ var storage_local_initialize_null_is;
/* unused harmony import specifier */ var storage_local_initialize_storage_local_get;



function storage_local_initialize(app_fn, key, value_initial) {
  let value = storage_local_initialize_storage_local_get(app_fn, key);
  let n = storage_local_initialize_null_is(value);
  if (n) {
    storage_local_initialize_storage_local_set(app_fn, key, value_initial);
    value = storage_local_initialize_storage_local_get(app_fn, key);
  }
  return value;
}

;// ./js/storage_local_initialize_context.mjs
/* unused harmony import specifier */ var storage_local_initialize_context_property_get;
/* unused harmony import specifier */ var storage_local_initialize_context_storage_local_initialize;


function storage_local_initialize_context(context, key, value_initial) {
  let app_fn = storage_local_initialize_context_property_get(context, "app_fn");
  let value = storage_local_initialize_context_storage_local_initialize(app_fn, key, value_initial);
  return value;
}

;// ./js/app_message_messages_get.mjs
/* unused harmony import specifier */ var app_message_messages_get_arguments_assert;
/* unused harmony import specifier */ var app_message_messages_get_storage_local_initialize_context;


function app_message_messages_get(context, messages_property) {
  app_message_messages_get_arguments_assert(arguments, 2);
  let value = app_message_messages_get_storage_local_initialize_context(context, messages_property, []);
  return value;
}

;// ./js/app_message_refresh.mjs
/* unused harmony import specifier */ var app_message_refresh_arguments_assert;
/* unused harmony import specifier */ var html_clear;
/* unused harmony import specifier */ var app_message_refresh_app_message_messages_get;
/* unused harmony import specifier */ var app_message_message_display;
/* unused harmony import specifier */ var app_shared_button_uncolored_background_color;
/* unused harmony import specifier */ var html_style_background_color_set;
/* unused harmony import specifier */ var reply_messages_matches;
/* unused harmony import specifier */ var list_empty_is;
/* unused harmony import specifier */ var html_text_set;
/* unused harmony import specifier */ var list_first_property;
/* unused harmony import specifier */ var html_div_text_multiple;
/* unused harmony import specifier */ var list_map;
/* unused harmony import specifier */ var invoke_multiple_unordered_async;













async function app_message_refresh(
  div_messages,
  context,
  messages_property,
  start,
) {
  app_message_refresh_arguments_assert(arguments, 4);
  html_clear(div_messages);
  let messages = app_message_refresh_app_message_messages_get(context, messages_property);
  function lambda(message) {
    app_message_message_display("left", message, div_messages);
    let right = app_message_message_display(
      "right",
      "(Loading...)",
      div_messages,
    );
    let background = app_shared_button_uncolored_background_color();
    html_style_background_color_set(right, background);
    async function next() {
      let results = await reply_messages_matches([message], start);
      let e = list_empty_is(results);
      html_clear(right);
      if (e) {
        html_text_set(
          right,
          "I have received your message. Lord-willing, I will answer. Please come back later to see if I have replied.",
        );
      } else {
        let outputs = list_first_property(results, "outputs");
        html_div_text_multiple(right, outputs);
      }
    }
    return next;
  }
  let nexts = list_map(messages, lambda);
  await invoke_multiple_unordered_async(nexts);
}

;// ./js/html_component_element_get.mjs

function html_component_element_get(component) {
  let element = property_get(component, "element");
  return element;
}

;// ./js/html_text_set.mjs

function html_text_set_html_text_set(component, text) {
  let element = html_component_element_get(component);
  element.innerHTML = text;
}

;// ./js/html_parent_append.mjs

function html_parent_append(parent, child) {
  let parent_element = html_component_element_get(parent);
  let child_element = html_component_element_get(child);
  parent_element.appendChild(child_element);
}

;// ./js/html_style_set.mjs

function html_style_set(b, style_key, style_value) {
  let b_element = html_component_element_get(b);
  b_element.style[style_key] = style_value;
}

;// ./js/html_component_wrap.mjs
function html_component_wrap(element) {
  let c = {
    element,
  };
  return c;
}

;// ./js/html_element.mjs



function html_element(parent, tag_name) {
  let e = document.createElement(tag_name);
  let component = html_component_wrap(e);
  html_parent_append(parent, component);
  html_style_set(component, "box-sizing", "border-box");
  return component;
}

;// ./js/html_document_head.mjs

function html_document_head() {
  let head_e = document.head;
  let head = html_component_wrap(head_e);
  return head;
}

;// ./js/html_style_head.mjs



function html_style_head(style_text) {
  let parent = html_document_head();
  let component = html_element(parent, "style");
  html_text_set_html_text_set(component, style_text);
}

;// ./js/html_style_button.mjs


function html_style_button(style) {
  html_style_head(text_combine_multiple(["button { ", style, " }"]));
}

;// ./js/html_attribute_set.mjs

function html_attribute_set(component, key, value) {
  let element = html_component_element_get(component);
  element.setAttribute(key, value);
}

;// ./js/html_link.mjs


function html_link() {
  let head = html_document_head();
  let link = html_element(head, "link");
  return link;
}

;// ./js/html_stylesheet.mjs


function html_stylesheet(href) {
  let l = html_link();
  html_attribute_set(l, "href", href);
  html_attribute_set(l, "rel", "stylesheet");
}

;// ./js/global_function_once.mjs

function global_function_once(fn, lambda) {
  function value_get() {
    lambda();
    return true;
  }
  global_function_initialize_lambda(fn, value_get);
}

;// ./js/html_font_include.mjs


function html_font_include(fn, href) {
  global_function_once(fn, lambda);
  function lambda() {
    html_stylesheet(href);
  }
}

;// ./js/html_roboto_include.mjs

function html_roboto_include() {
  let href =
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
  let fn = html_roboto_include;
  html_font_include(fn, href);
}

;// ./js/html_font_set.mjs

function html_font_set(html, value) {
  html_style_set(html, "font-family", value);
}

;// ./js/html_font_sans_serif_value.mjs
function html_font_sans_serif_value() {
  let v = '"Roboto", Arial, Helvetica, sans-serif';
  return v;
}

;// ./js/html_document_root.mjs

function html_document_root() {
  let root_element = document.documentElement;
  let html = html_component_wrap(root_element);
  return html;
}

;// ./js/html_font_sans_serif_set_html.mjs






function html_font_sans_serif_set_html() {
  let html = html_document_root();
  html_roboto_include();
  let style_value = html_font_sans_serif_value();
  html_font_set(html, style_value);
  let style = text_combine(":font-family: ", html_font_sans_serif_value());
  html_style_button(style);
}

;// ./js/app_shared_contact_user_id.mjs
/* unused harmony import specifier */ var app_shared_contact_user_id_storage_local_get;
/* unused harmony import specifier */ var app_shared_contact_user_id_storage_local_set;
/* unused harmony import specifier */ var app_shared_contact_user_id_null_not_is;
/* unused harmony import specifier */ var uuid;




async function app_shared_contact_user_id() {
  "a stable per-device id so every message a person sends — from any app's Contact screen, or the message app — lands under one folder in the developer's inbox. Kept in localStorage, created once on first use.";
  let key = "user_id";
  let existing = app_shared_contact_user_id_storage_local_get(app_shared_contact_user_id, key);
  let found = app_shared_contact_user_id_null_not_is(existing);
  if (found) {
    return existing;
  }
  let created = await uuid();
  app_shared_contact_user_id_storage_local_set(app_shared_contact_user_id, key, created);
  return created;
}

;// ./js/html_loading_state.mjs
let value = {
  count: 0,
  overlay: null,
  timer: null,
  styled: false,
  suppressed: false,
};
function html_loading_state() {
  return value;
}

;// ./js/html_viewport_width_full.mjs
function html_viewport_width_full() {
  "the full width of the window a screen is being shown in, as a CSS length - what a backdrop or an overlay spends to cover everything behind it";
  let v = "100vw";
  return v;
}

;// ./js/html_viewport_height_full.mjs
function html_viewport_height_full() {
  "the full height of the window a screen is being shown in, as a CSS length - what a backdrop or an overlay spends to cover everything behind it";
  let v = "100vh";
  return v;
}

;// ./js/html_loading_backdrop_style.mjs


function html_loading_backdrop_style() {
  "the dim full-screen layer every loading cover sits on, shared by the runtime overlay and the static boot splash so the dark-to-dark handoff cannot drift. it only dims: the spinner and the message each pin themselves to the middle of the viewport, so nothing here decides where they land";
  let r = {
    position: "fixed",
    top: "0",
    left: "0",
    width: html_viewport_width_full(),
    height: html_viewport_height_full(),
    background: "rgba(0, 0, 0, 0.8)",
    "z-index": "1000",
  };
  return r;
}

;// ./js/html_loading_message_style.mjs

function html_loading_message_style() {
  "how the one line under the loading spinner is drawn, and where it sits: pinned below the middle of the viewport, so the spinner above it stays exactly centered no matter how tall this line grows. it clears the ring at its WIDEST, not at rest - the ring breathes out to a third again its size, so an 8rem radius reaches almost 11rem, and a gap measured against the resting ring would let the line be crossed on every expansion. shared by the runtime overlay and the static boot splash";
  "the line takes its natural one-line width and is then held to the viewport, which is what lets the words be changed freely: a line pinned at half the viewport and pulled back by half its own width has only half the screen to lay itself out in, so without a ceiling a longer message would run off both edges of a phone with nothing anywhere reporting it. wrapping is already safe here because the pinning above was chosen so this line may grow as tall as it likes";
  let r = {
    position: "fixed",
    top: "calc(50% + 11rem)",
    left: "50%",
    transform: "translateX(-50%)",
    margin: "0",
    color: "white",
    "font-size": "1.5rem",
    "font-family": "sans-serif",
    "text-align": "center",
    width: "max-content",
    "max-width": html_viewport_width_full(),
    "box-sizing": "border-box",
    "text-shadow": "0 0.05em 0.15em rgba(0, 0, 0, 0.8)",
    background:
      "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 75%)",
    padding: "1.25rem 3.5rem",
  };
  return r;
}

;// ./js/html_loading_splash_id.mjs
function html_loading_splash_id() {
  "the id the static boot splash carries, so the boot can find it and take it away once the app has painted";
  let v = "app-loading";
  return v;
}

;// ./js/html_loading_splash_take.mjs


function html_loading_splash_take() {
  "take the static boot splash (the app-loading element) away once the app has loaded, and say whether there was one to take. the runtime overlay or the freshly rendered app now covers, so the instant-paint splash has done its job. a yes means the screen was already dark, so whatever replaces it should appear at once rather than fade in over a half-painted page; a no means nothing was covering, so a fade is the gentle way in";
  let id = html_loading_splash_id();
  let element = document.getElementById(id);
  if (equal(element, null)) {
    return false;
  }
  element.remove();
  return true;
}

;// ./js/html_loading_message_text.mjs
function html_loading_message_text() {
  "the single line shown under the loading spinner, shared by the runtime overlay and the build-time static splash so the wording never drifts between them";
  let r = "One moment, please 🙏";
  return r;
}

;// ./js/html_div.mjs

function html_div(parent) {
  let div = html_element(parent, "div");
  return div;
}

;// ./js/object_assign.mjs
function object_assign(to, from) {
  Object.assign(to, from);
}

;// ./js/html_style_assign.mjs


function html_style_assign(b, s) {
  let b_element = html_component_element_get(b);
  object_assign(b_element.style, s);
}

;// ./js/html_style_opacity.mjs

function html_style_opacity(component, value) {
  html_style_set(component, "opacity", value);
}

;// ./js/html_reflow_force.mjs

function html_reflow_force(component) {
  let element = html_component_element_get(component);
  let v = element.offsetHeight;
  return v;
}

;// ./js/html_p.mjs

function html_p(root) {
  let p = html_element(root, "p");
  return p;
}

;// ./js/html_p_text.mjs


function html_p_text(root, text) {
  let p = html_p(root);
  html_text_set_html_text_set(p, text);
  return p;
}

;// ./js/html_loading_spinner_color_glow.mjs
function html_loading_spinner_color_glow() {
  "the spinner's blue, as an opaque hex — every place the spinner needs it at part opacity appends a two-digit alpha to this one value, so the ring, the halo and the core can never drift to different blues";
  let c = "#8cb4ff";
  return c;
}

;// ./js/text_combine_3.mjs


function text_combine_3(a, b, c) {
  arguments_assert(arguments, 3);
  ("Three pieces of text joined end to end.");
  ("It used to hand the three to the sibling that joins a list of any length, which");
  ("is the same answer and the wrong shape: that sibling's body is one fold over a");
  ("list, so this one matched nothing, and the files writing these two joins by hand");
  ("went on writing them. Spelled as the two joins its callers spell, it takes them.");
  ("The two spellings part company on numbers - the list sibling starts from empty");
  ("text, so it writes them out rather than adding them - and they agree on text,");
  ("which is the whole of what this family is for and the whole of what reaches");
  ("here.");
  let ab = text_combine(a, b);
  let abc = text_combine(ab, c);
  return abc;
}

;// ./js/html_loading_spinner_breath_halves.mjs

function html_loading_spinner_breath_halves() {
  function_duplicate_kind_parallel();
  ("how many half-breaths make up one round of the outer ring's breathing. one half-breath takes a second, so this is also how many seconds a round lasts. the round draws a fresh radius for each one, so a bigger number means more variety before the ring repeats itself");
  let r = 8;
  return r;
}

;// ./js/numbers_up_to.mjs
function numbers_up_to(count) {
  ("the whole numbers from 0 up to but not including count: ",
    numbers_up_to.name,
    "(3) is [0, 1, 2]; used to build fixed-length grids like the 48 half-hour pieces in a day");
  let v = Array(count).keys();
  let indices = Array.from(v);
  return indices;
}

;// ./js/modulo.mjs
function modulo(left, right) {
  let remainder = left % right;
  return remainder;
}

;// ./js/integer_even_is.mjs


function integer_even_is(n) {
  "Whether this whole number splits into two equal halves with nothing over.";
  "Written as the remainder after two and a check that nothing is left, rather";
  "than through the neighbour that hands the remainder back, because that is how";
  "every place asking it writes it - a striped calendar row, a clock reading, a";
  "lesson choosing which of a pair to show - and a body written the way its";
  "callers write it is the only body the fold can recognise in them.";
  "The neighbour uses the wrapping kind of remainder, which matters for the odd";
  "reading beside it and not for this one: below zero the two kinds differ in";
  "sign only, and a sign cannot turn nothing into something.";
  let e = modulo(n, 2);
  let eq = equal(e, 0);
  return eq;
}

;// ./js/random.mjs
function random() {
  let r = Math.random();
  return r;
}

;// ./js/multiply.mjs
function multiply(left, right) {
  let p = left * right;
  return p;
}

;// ./js/subtract.mjs
function subtract(left, right) {
  let difference = left - right;
  return difference;
}

;// ./js/random_range.mjs



function random_range(smallest, largest) {
  "a random number anywhere between the two ends, fractions included — the whole-number pickers land on steps, this one lands anywhere";
  let span = subtract(largest, smallest);
  let left = random();
  let picked = multiply(left, span);
  let r = smallest + picked;
  return r;
}

;// ./js/html_loading_spinner_scale_random.mjs

function html_loading_spinner_scale_random(expanded) {
  "the outer ring's size for this half-breath: expanded draws a random large radius, otherwise a random small one. every draw is fresh, so no two expansions and no two collapses are the same size";
  if (expanded) {
    let large = random_range(1.06, 1.34);
    return large;
  }
  let small = random_range(0.78, 0.98);
  return small;
}

;// ./js/list_map.mjs


function list_map_list_map(list, lambda$item) {
  list_is_assert_json(list, {
    hint: text_combine_multiple([list_map_list_map.name, " expects a list to map over"]),
  });
  ("The wrapper hands the lambda exactly one argument. The native map also passes an index");
  ("and the whole list, and a repo function would reject those as extra arguments.");
  function lambda(item) {
    let r = lambda$item(item);
    return r;
  }
  let mapped = list.map(lambda);
  return mapped;
}

;// ./js/integer_is.mjs
function integer_is(value) {
  let ii = Number.isInteger(value);
  return ii;
}

;// ./js/integer_is_assert_json.mjs


function integer_is_assert_json(i, json) {
  let ii = integer_is(i);
  assert_json(ii, {
    i,
    json,
  });
}

;// ./js/indexed_get_generic.mjs


function indexed_get_generic(indexed, index, kind, object_get) {
  "Reads one item out of something counted from the front, and says so kindly when there is nothing there.";
  "A list and a run of text are counted the same way, so getting one item out of either is the same three steps: check the index is a whole number, read it, and refuse an answer that came back missing. Only two words differ, and both are handed in - the word for what is being read, which goes into the hint, and the caller's own way of describing what it was holding when the read failed.";
  "The description arrives as a function rather than as an object because the object is only ever built when the read has already failed, and because the caller names its own thing in its own word - a list calls it a list, a run of text calls it a text.";
  integer_is_assert_json(index, {
    hint:
      "a " +
      kind +
      " index should be a whole number — did a non-integer index arrive?",
  });
  let item = indexed[index];
  undefined_not_is_assert_lambda(item, object_get);
  return item;
}

;// ./js/list_get.mjs

function list_get(list, index) {
  let item = indexed_get_generic(list, index, "list", object_get);
  function object_get() {
    let v = {
      list,
      index,
    };
    return v;
  }
  return item;
}

;// ./js/list_first.mjs

function list_first(list) {
  let index = 0;
  let first = list_get(list, index);
  return first;
}

;// ./js/list_add.mjs
function list_add(list, item) {
  list.push(item);
}

;// ./js/html_loading_spinner_breath_scales.mjs







function html_loading_spinner_breath_scales() {
  "one radius for every half-breath of a round, alternating expanded and collapsed, each drawn fresh so no two expansions in the round are the same size. the round then closes on the radius it opened with, so it can repeat forever without a jump";
  let halves = html_loading_spinner_breath_halves();
  let indices = numbers_up_to(halves);
  function draw(index) {
    let expanded = integer_even_is(index);
    let scale = html_loading_spinner_scale_random(expanded);
    return scale;
  }
  let scales = list_map_list_map(indices, draw);
  let first = list_first(scales);
  list_add(scales, first);
  return scales;
}

;// ./js/html_loading_spinner_breath_name.mjs
function html_loading_spinner_breath_name() {
  "what the browser calls the keyframes that breathe the outer ring. the style that writes those keyframes and the spinner that plays them both read this, so the two can never drift apart";
  let r = "html_loading_breath";
  return r;
}

;// ./js/divide.mjs
function divide(top, bottom) {
  let divided = top / bottom;
  return divided;
}

;// ./js/list_map_index.mjs

function list_map_index(list, lambda$item$index) {
  let index = 0;
  function lambda(item) {
    let value = lambda$item$index(item, index);
    index++;
    return value;
  }
  let mapped = list_map_list_map(list, lambda);
  return mapped;
}

;// ./js/list_join.mjs



function list_join(list, separator) {
  let l = list_is(list);
  if (not(l)) {
    error_json({
      list,
    });
  }
  let joined = list.join(separator);
  return joined;
}

;// ./js/newline.mjs
function newline() {
  let v = "\n";
  return v;
}

;// ./js/list_join_newline.mjs


function list_join_newline(list) {
  let separator = newline();
  let joined = list_join(list, separator);
  return joined;
}

;// ./js/html_loading_spinner_breath_keyframes.mjs








function html_loading_spinner_breath_keyframes() {
  "the css that breathes the outer ring: every half-breath of the round becomes one keyframe stop, evenly spaced. the browser plays this on its own, so the ring keeps breathing even while the page is busy loading — which is the only time the spinner is ever on screen";
  let scales = html_loading_spinner_breath_scales();
  let halves = html_loading_spinner_breath_halves();
  function stop(scale, index) {
    let fraction = divide(index, halves);
    let percent = multiply(fraction, 100);
    let left2 = text_combine_3("  ", percent, "% { transform: scale(");
    let line = text_combine_3(left2, scale, "); }");
    return line;
  }
  let lines = list_map_index(scales, stop);
  let body = list_join_newline(lines);
  let name = html_loading_spinner_breath_name();
  let head2 = text_combine_3("@keyframes ", name, " {\n");
  let r = text_combine_3(head2, body, "\n}");
  return r;
}

;// ./js/html_loading_spinner_keyframes_css.mjs



function html_loading_spinner_keyframes_css() {
  "all the keyframes the loading spinner needs, as ONE css string - the single source shared by the runtime head-injector and the build-time static splash, so the instant splash and the runtime overlay can never drift apart";
  let spin =
    "@keyframes html_loading_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}";
  let blue = html_loading_spinner_color_glow();
  let glow = `@keyframes html_loading_glow {\n  0% { box-shadow: 0 0 0.75rem ${blue}66; }\n  50% { box-shadow: 0 0 2rem ${blue}e6; }\n  100% { box-shadow: 0 0 0.75rem ${blue}66; }\n}`;
  let spin_reverse =
    "@keyframes html_loading_spin_reverse {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(-360deg); }\n}";
  let breath = html_loading_spinner_breath_keyframes();
  let core =
    "@keyframes html_loading_core {\n  0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.85; }\n  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }\n  100% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.85; }\n}";
  let all = [spin, glow, spin_reverse, breath, core];
  let css = list_join_newline(all);
  return css;
}

;// ./js/html_loading_spinner_style.mjs



function html_loading_spinner_style() {
  ("inject the shared spinner keyframes into the head, once. the css is single-sourced in ",
    html_loading_spinner_keyframes_css.name,
    " so the runtime overlay and the static splash play the identical animations");
  let state = html_loading_state();
  if (state.styled) {
    return;
  }
  state.styled = true;
  let css = html_loading_spinner_keyframes_css();
  html_style_head(css);
}

;// ./js/html_loading_spinner_color_ring.mjs
function html_loading_spinner_color_ring() {
  "the pale blue the spinner's leading ring edge and its core highlight are painted in — lighter than the glow blue so the moving edge reads against the halo behind it";
  let c = "#bcd6ff";
  return c;
}

;// ./js/html_loading_spinner_breath_animation.mjs




function html_loading_spinner_breath_animation() {
  "how the outer ring plays its breathing: one round, one second per half-breath, easing at both ends, over and over";
  let name = html_loading_spinner_breath_name();
  let seconds = html_loading_spinner_breath_halves();
  let left2 = text_combine_3(name, " ", seconds);
  let r = text_combine(left2, "s ease-in-out infinite");
  return r;
}

;// ./js/html_loading_spinner_markup.mjs




function html_loading_spinner_markup() {
  "the loading spinner as a self-contained html string (inline styles only; the keyframes come from the shared keyframes css): a breathing outer ring that spins and glows, a counter-spinning inner ring, and a pulsing core. the single source of the spinner LOOK - rendered as live dom at runtime and baked into the page at build time, so the instant splash and the runtime overlay show the exact same spinner. it pins itself to the exact middle of the viewport rather than sitting in its parent's flow, so the message under it can never nudge it off center, and two covers showing at once land on the same pixels instead of half a line apart";
  let breath = html_loading_spinner_breath_animation();
  let spinner_open =
    '<div style="position:fixed;top:50%;left:50%;width:16rem;height:16rem;transform:translate(-50%,-50%)">';
  let pulse_open = text_combine_multiple([
    '<div style="position:absolute;inset:0;animation:',
    breath,
    '">',
  ]);
  let blue = html_loading_spinner_color_glow();
  let ring = html_loading_spinner_color_ring();
  let outer = `<div style="position:absolute;inset:0;border:1rem solid ${blue}33;border-top-color:${ring};border-radius:50%;box-shadow:0 0 1rem ${blue}99;animation:html_loading_spin 2s ease-in-out infinite, html_loading_glow 2s ease-in-out infinite"></div>`;
  let pulse_close = "</div>";
  let inner = `<div style="position:absolute;inset:4rem;border:0.6rem solid ${blue}26;border-bottom-color:${ring};border-radius:50%;animation:html_loading_spin_reverse 1.4s linear infinite"></div>`;
  let core = `<div style="position:absolute;top:50%;left:50%;width:2.8rem;height:2.8rem;transform:translate(-50%,-50%);border-radius:50%;background:radial-gradient(circle,${ring} 0%,#4a90e2 70%);box-shadow:0 0 1rem ${blue}e6;animation:html_loading_core 2s ease-in-out infinite"></div>`;
  let spinner_close = "</div>";
  let v = text_combine_multiple([
    spinner_open,
    pulse_open,
    outer,
    pulse_close,
    inner,
    core,
    spinner_close,
  ]);
  return v;
}

;// ./js/html_loading_spinner.mjs




function html_loading_spinner(parent) {
  "the runtime loading spinner as live dom: inject the shared keyframes, then render the shared spinner markup into a fresh div. single-sourced with the static splash so the two can never drift";
  html_loading_spinner_style();
  let spinner = html_div(parent);
  let markup = html_loading_spinner_markup();
  html_text_set_html_text_set(spinner, markup);
  return spinner;
}

;// ./js/html_loading_overlay.mjs











function html_loading_overlay() {
  "attach to <html>, not <body>: a screen re-render clears <body>, which would delete this overlay and flash white; <html> survives that clear so the spinner stays visible the whole time";
  "this builds the cover with no waiting anywhere in it, and that is a correctness rule rather than a style one: the caller can only record the cover in the shared state once this hands one back, so a single pause here lets a second caller look, see nothing recorded, build a second cover, and overwrite the record. the first cover is then on screen with nothing tracking it, so the hide never finds it and the page sits behind a spinner forever. two downloads running at once is all it takes";
  let html = html_document_root();
  let div = html_div(html);
  let backdrop = html_loading_backdrop_style();
  html_style_assign(div, backdrop);
  let fade = {
    opacity: "0",
    transition: "opacity 0.15s ease",
  };
  html_style_assign(div, fade);
  html_loading_spinner(div);
  let text = html_loading_message_text();
  let message = html_p_text(div, text);
  let message_style = html_loading_message_style();
  html_style_assign(message, message_style);
  ("hand over from the static boot splash, which shows this very spinner: two covers at once double the dim and show a second, fainter spinner through it");
  let handed_over = html_loading_splash_take();
  if (handed_over) {
    ("the screen is already dark, so appear at once: skipping the reflow means the browser never sees the see-through state, so no fade runs and nothing half-painted shows through");
    html_style_opacity(div, "1");
    return div;
  }
  html_reflow_force(div);
  html_style_opacity(div, "1");
  return div;
}

;// ./js/html_loading_show.mjs
/* unused harmony import specifier */ var html_loading_show_not_equal;
/* unused harmony import specifier */ var html_loading_show_equal;
/* unused harmony import specifier */ var html_loading_show_html_loading_state;
/* unused harmony import specifier */ var html_loading_show_html_loading_overlay;
/* unused harmony import specifier */ var html_loading_show_html_style_opacity;





function html_loading_show() {
  "this waits for nothing on purpose, so that everything from the look at the shared state to the write back into it happens in one uninterrupted run. the moment a pause sits between them, two callers starting together both see no cover and both build one, and whichever writes second leaves the other stranded on screen with nothing tracking it";
  let state = html_loading_show_html_loading_state();
  let timer = state.timer;
  if (html_loading_show_not_equal(timer, null)) {
    clearTimeout(timer);
    state.timer = null;
  }
  state.count = state.count + 1;
  let overlay = state.overlay;
  if (html_loading_show_equal(overlay, null)) {
    state.overlay = html_loading_show_html_loading_overlay();
    return;
  }
  html_loading_show_html_style_opacity(overlay, "1");
}

;// ./js/html_loading_generic.mjs
/* unused harmony import specifier */ var html_loading_generic_arguments_assert;
/* unused harmony import specifier */ var browser_is;
/* unused harmony import specifier */ var html_loading_generic_not;
/* unused harmony import specifier */ var html_loading_generic_html_loading_state;
/* unused harmony import specifier */ var html_loading_generic_html_loading_show;





async function html_loading_generic(lambda, hide_fn) {
  html_loading_generic_arguments_assert(arguments, 2);
  ("Shows the loading overlay around a run of work, unless the page has asked for");
  ("quiet or this is not a browser at all, and takes the overlay away again");
  ("however the work ends.");
  ("How it is taken away is the only thing the two commands built on this differ");
  ("by - one lets it linger, one removes it at once - so that arrives as the last");
  ("argument and everything else is written once.");
  ("Hiding happens in a finally, so a run that throws still leaves the page");
  ("usable; the error carries on afterwards, unchanged.");
  let suppressed = html_loading_generic_html_loading_state().suppressed;
  let show = browser_is() && html_loading_generic_not(suppressed);
  if (show) {
    html_loading_generic_html_loading_show();
  }
  let result = null;
  try {
    result = await lambda();
  } finally {
    if (show) {
      hide_fn();
    }
  }
  return result;
}

;// ./js/html_loading_count_down_last_is.mjs
/* unused harmony import specifier */ var greater_than;
/* unused harmony import specifier */ var html_loading_count_down_last_is_html_loading_state;
/* unused harmony import specifier */ var html_loading_count_down_last_is_subtract;



function html_loading_count_down_last_is() {
  "Notes that one piece of work asking for the overlay has finished, and says whether it was the last one still asking.";
  "Several runs of work can be waiting at once and they all share the one overlay, so the overlay may only go when the last of them is done. Counting them is what makes that safe, and every way of taking the overlay away has to count the same way or two of them will disagree about whether anybody is still waiting.";
  "The count is put back to nothing rather than left where it landed. It can only be at or below nothing to get here, and letting it sit below would mean the next run of work has to climb back up to nothing before the overlay is shown at all.";
  let state = html_loading_count_down_last_is_html_loading_state();
  state.count = html_loading_count_down_last_is_subtract(state.count, 1);
  if (greater_than(state.count, 0)) {
    let waiting = false;
    return waiting;
  }
  state.count = 0;
  let last = true;
  return last;
}

;// ./js/html_loading_overlay_remove.mjs
/* unused harmony import specifier */ var html_loading_overlay_remove_equal;
/* unused harmony import specifier */ var html_loading_overlay_remove_html_loading_state;
/* unused harmony import specifier */ var html_remove;



function html_loading_overlay_remove() {
  "Takes the overlay off the page and forgets it, and does nothing at all when there is none.";
  "Doing nothing when there is none is the whole of why this is worth a name. Every way of finishing reaches this point from a different route - one straight away, one after a fade, one after a wait that was cancelled - and any of them can arrive to find the overlay already gone, because another one got there first.";
  let state = html_loading_overlay_remove_html_loading_state();
  let overlay = state.overlay;
  if (html_loading_overlay_remove_equal(overlay, null)) {
    return;
  }
  html_remove(overlay);
  state.overlay = null;
}

;// ./js/html_loading_hide.mjs
/* unused harmony import specifier */ var html_loading_hide_html_loading_count_down_last_is;
/* unused harmony import specifier */ var html_loading_hide_html_loading_overlay_remove;
/* unused harmony import specifier */ var html_loading_hide_not;
/* unused harmony import specifier */ var html_loading_hide_greater_than;
/* unused harmony import specifier */ var html_loading_hide_equal;
/* unused harmony import specifier */ var html_loading_hide_html_loading_state;
/* unused harmony import specifier */ var html_loading_hide_html_style_opacity;







function html_loading_hide() {
  "Lets the overlay go, fading it out first, once the last piece of work that asked for it has finished.";
  "The fade is why the count is looked at twice. Between the moment the last run of work finishes and the moment the overlay has finished fading, a new run can start and ask for it again - and it would then be handed an overlay already on its way out. So each step of the fade asks again whether anybody has started waiting since, and gives up quietly if they have.";
  let last = html_loading_hide_html_loading_count_down_last_is();
  if (html_loading_hide_not(last)) {
    return;
  }
  let state = html_loading_hide_html_loading_state();
  function remove() {
    state.timer = null;
    if (html_loading_hide_greater_than(state.count, 0)) {
      return;
    }
    html_loading_hide_html_loading_overlay_remove();
  }
  function fade_out() {
    state.timer = null;
    if (html_loading_hide_greater_than(state.count, 0)) {
      return;
    }
    let overlay = state.overlay;
    if (html_loading_hide_equal(overlay, null)) {
      return;
    }
    html_loading_hide_html_style_opacity(overlay, "0");
    state.timer = setTimeout(remove, 150);
  }
  state.timer = setTimeout(fade_out, 150);
}

;// ./js/html_loading.mjs
/* unused harmony import specifier */ var html_loading_arguments_assert;
/* unused harmony import specifier */ var html_loading_html_loading_generic;
/* unused harmony import specifier */ var html_loading_html_loading_hide;



async function html_loading(lambda) {
  html_loading_arguments_assert(arguments, 1);
  ("Shows the loading overlay around a run of work, and lets it linger a moment");
  ("afterwards so a run of quick steps reads as one wait rather than a flicker.");
  let result = await html_loading_html_loading_generic(lambda, html_loading_html_loading_hide);
  return result;
}

;// ./js/global_function_async.mjs
/* unused harmony import specifier */ var global_function_async_property_initialize_lambda;
/* unused harmony import specifier */ var global_function_async_global_get;


async function global_function_async(fn, lambda) {
  let global = global_function_async_global_get();
  let value = global_function_async_property_initialize_lambda(global, fn.name, lambda);
  let awaited = await value;
  return awaited;
}

;// ./node_modules/@firebase/util/dist/index.esm.js
/* unused harmony import specifier */ var getDefaultsFromPostinstall;


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
// TODO(dlarocque): Define this as a class, since we no longer target ES5.
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */
class DecodeBase64StringError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */
const getDefaultsFromEnvVariable = () => {
    if (typeof process === 'undefined' || typeof process.env === 'undefined') {
        return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = () => {
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    }
    catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */
const getDefaults = () => {
    try {
        return (getDefaultsFromPostinstall() ||
            getDefaultsFromGlobal() ||
            getDefaultsFromEnvVariable() ||
            getDefaultsFromCookie());
    }
    catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
const getDefaultEmulatorHost = (productName) => getDefaults()?.emulatorHosts?.[productName];
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */
const getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
        return undefined;
    }
    const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === '[') {
        // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
        return [host.substring(1, separatorIndex - 1), port];
    }
    else {
        return [host.substring(0, separatorIndex), port];
    }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
const getDefaultAppConfig = () => getDefaults()?.config;
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
const getExperimentalSetting = (name) => getDefaults()?.[`_${name}`];

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks whether host is a cloud workstation or not.
 * @public
 */
function isCloudWorkstation(url) {
    // `isCloudWorkstation` is called without protocol in certain connect*Emulator functions
    // In HTTP request builders, it's called with the protocol.
    // If called with protocol prefix, it's a valid URL, so we extract the hostname
    // If called without, we assume the string is the hostname.
    try {
        const host = url.startsWith('http://') || url.startsWith('https://')
            ? new URL(url).hostname
            : url;
        return host.endsWith('.cloudworkstations.dev');
    }
    catch {
        return false;
    }
}
/**
 * Makes a fetch request to the given server.
 * Mostly used for forwarding cookies in Firebase Studio.
 * @public
 */
async function pingServer(endpoint) {
    const result = await fetch(endpoint, {
        credentials: 'include'
    });
    return result.ok;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = {
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`,
        aud: project,
        iat,
        exp: iat + 3600,
        auth_time: iat,
        sub,
        user_id: sub,
        firebase: {
            sign_in_provider: 'custom',
            identities: {}
        },
        // Override with user options
        ...token
    };
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
const emulatorStatus = {};
// Checks whether any products are running on an emulator
function getEmulatorSummary() {
    const summary = {
        prod: [],
        emulator: []
    };
    for (const key of Object.keys(emulatorStatus)) {
        if (emulatorStatus[key]) {
            summary.emulator.push(key);
        }
        else {
            summary.prod.push(key);
        }
    }
    return summary;
}
function getOrCreateEl(id) {
    let parentDiv = document.getElementById(id);
    let created = false;
    if (!parentDiv) {
        parentDiv = document.createElement('div');
        parentDiv.setAttribute('id', id);
        created = true;
    }
    return { created, element: parentDiv };
}
let previouslyDismissed = false;
/**
 * Updates Emulator Banner. Primarily used for Firebase Studio
 * @param name
 * @param isRunningEmulator
 * @public
 */
function updateEmulatorBanner(name, isRunningEmulator) {
    if (typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        !isCloudWorkstation(window.location.host) ||
        emulatorStatus[name] === isRunningEmulator ||
        emulatorStatus[name] || // If already set to use emulator, can't go back to prod.
        previouslyDismissed) {
        return;
    }
    emulatorStatus[name] = isRunningEmulator;
    function prefixedId(id) {
        return `__firebase__banner__${id}`;
    }
    const bannerId = '__firebase__banner';
    const summary = getEmulatorSummary();
    const showError = summary.prod.length > 0;
    function tearDown() {
        const element = document.getElementById(bannerId);
        if (element) {
            element.remove();
        }
    }
    function setupBannerStyles(bannerEl) {
        bannerEl.style.display = 'flex';
        bannerEl.style.background = '#7faaf0';
        bannerEl.style.position = 'fixed';
        bannerEl.style.bottom = '5px';
        bannerEl.style.left = '5px';
        bannerEl.style.padding = '.5em';
        bannerEl.style.borderRadius = '5px';
        bannerEl.style.alignItems = 'center';
    }
    function setupIconStyles(prependIcon, iconId) {
        prependIcon.setAttribute('width', '24');
        prependIcon.setAttribute('id', iconId);
        prependIcon.setAttribute('height', '24');
        prependIcon.setAttribute('viewBox', '0 0 24 24');
        prependIcon.setAttribute('fill', 'none');
        prependIcon.style.marginLeft = '-6px';
    }
    function setupCloseBtn() {
        const closeBtn = document.createElement('span');
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginLeft = '16px';
        closeBtn.style.fontSize = '24px';
        closeBtn.innerHTML = ' &times;';
        closeBtn.onclick = () => {
            previouslyDismissed = true;
            tearDown();
        };
        return closeBtn;
    }
    function setupLinkStyles(learnMoreLink, learnMoreId) {
        learnMoreLink.setAttribute('id', learnMoreId);
        learnMoreLink.innerText = 'Learn more';
        learnMoreLink.href =
            'https://firebase.google.com/docs/studio/preview-apps#preview-backend';
        learnMoreLink.setAttribute('target', '__blank');
        learnMoreLink.style.paddingLeft = '5px';
        learnMoreLink.style.textDecoration = 'underline';
    }
    function setupDom() {
        const banner = getOrCreateEl(bannerId);
        const firebaseTextId = prefixedId('text');
        const firebaseText = document.getElementById(firebaseTextId) || document.createElement('span');
        const learnMoreId = prefixedId('learnmore');
        const learnMoreLink = document.getElementById(learnMoreId) ||
            document.createElement('a');
        const prependIconId = prefixedId('preprendIcon');
        const prependIcon = document.getElementById(prependIconId) ||
            document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        if (banner.created) {
            // update styles
            const bannerEl = banner.element;
            setupBannerStyles(bannerEl);
            setupLinkStyles(learnMoreLink, learnMoreId);
            const closeBtn = setupCloseBtn();
            setupIconStyles(prependIcon, prependIconId);
            bannerEl.append(prependIcon, firebaseText, learnMoreLink, closeBtn);
            document.body.appendChild(bannerEl);
        }
        if (showError) {
            firebaseText.innerText = `Preview backend disconnected.`;
            prependIcon.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`;
        }
        else {
            prependIcon.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`;
            firebaseText.innerText = 'Preview backend running in this workspace.';
        }
        firebaseText.setAttribute('id', firebaseTextId);
    }
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', setupDom);
    }
    else {
        setupDom();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    const forceEnvironment = getDefaults()?.forceEnvironment;
    if (forceEnvironment === 'node') {
        return true;
    }
    else if (forceEnvironment === 'browser') {
        return false;
    }
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment.
 * Note: This will return true for certain test frameworks that are incompletely
 * mimicking a browser, and should not lead to assuming all browser APIs are
 * available.
 */
function isBrowser() {
    return typeof window !== 'undefined' || isWebWorker();
}
/**
 * Detect Web Worker context.
 */
function isWebWorker() {
    return (typeof WorkerGlobalScope !== 'undefined' &&
        typeof self !== 'undefined' &&
        self instanceof WorkerGlobalScope);
}
/**
 * Detect Cloudflare Worker context.
 */
function isCloudflareWorker() {
    return (typeof navigator !== 'undefined' &&
        navigator.userAgent === 'Cloudflare-Workers');
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        !!navigator.userAgent &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/** Returns true if we are running in Safari or WebKit */
function isSafariOrWebkit() {
    return (!isNode() &&
        !!navigator.userAgent &&
        (navigator.userAgent.includes('Safari') ||
            navigator.userAgent.includes('WebKit')) &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    }
    catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                reject(request.error?.message || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // TypeScript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // TODO(dlarocque): Replace this with `new.target`: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
        //                   which we can now use since we no longer target ES5.
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data JavaScript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */
function promiseWithTimeout(promise, timeInMS = 2000) {
    const deferredPromise = new Deferred();
    setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber synchronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function index_esm_async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in JavaScript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = (/* unused pure expression or super */ null && (4 * 60 * 60 * 1000)); // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 * Generates a SHA-256 hash for the given input string.
 *
 * @param input The string to hash.
 * @returns A promise that resolves to the SHA-256 hash as a hex string.
 */
async function generateSHA256Hash(input) {
    const textEncoder = new TextEncoder();
    const data = textEncoder.encode(input);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    // Convert ArrayBuffer to hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hexHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hexHash;
}


//# sourceMappingURL=index.esm.js.map

;// ./node_modules/@firebase/component/dist/esm/index.esm.js
/* unused harmony import specifier */ var index_esm_Deferred;


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide multiple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new index_esm_Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options?.identifier);
        const optional = options?.optional ?? false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/cannot be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = this.onInitCallbacks.get(normalizedIdentifier) ??
            new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


//# sourceMappingURL=index.esm.js.map

;// ./node_modules/@firebase/logger/dist/esm/index.esm.js
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach(inst => {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                    .map(arg => {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(arg => arg)
                    .join(' ');
                if (level >= (customLogLevel ?? instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}


//# sourceMappingURL=index.esm.js.map

;// ./node_modules/idb/build/wrap-idb-value.js
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);



;// ./node_modules/idb/build/index.js
/* unused harmony import specifier */ var build_wrap;



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return build_wrap(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));



;// ./node_modules/@firebase/app/dist/esm/index.esm.js
/* unused harmony import specifier */ var index_esm_ComponentContainer;
/* unused harmony import specifier */ var index_esm_setUserLogHandler;
/* unused harmony import specifier */ var setLogLevel$1;
/* unused harmony import specifier */ var index_esm_getDefaultAppConfig;
/* unused harmony import specifier */ var index_esm_deepEqual;
/* unused harmony import specifier */ var index_esm_isBrowser;
/* unused harmony import specifier */ var index_esm_isWebWorker;






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return component?.type === "VERSION" /* ComponentType.VERSION */;
}

const name$q = "@firebase/app";
const version$1 = "0.14.9";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new Logger('@firebase/app');

const name$p = "@firebase/app-compat";

const name$o = "@firebase/analytics-compat";

const name$n = "@firebase/analytics";

const name$m = "@firebase/app-check-compat";

const name$l = "@firebase/app-check";

const name$k = "@firebase/auth";

const name$j = "@firebase/auth-compat";

const name$i = "@firebase/database";

const name$h = "@firebase/data-connect";

const name$g = "@firebase/database-compat";

const name$f = "@firebase/functions";

const name$e = "@firebase/functions-compat";

const name$d = "@firebase/installations";

const name$c = "@firebase/installations-compat";

const name$b = "@firebase/messaging";

const name$a = "@firebase/messaging-compat";

const name$9 = "@firebase/performance";

const name$8 = "@firebase/performance-compat";

const name$7 = "@firebase/remote-config";

const name$6 = "@firebase/remote-config-compat";

const name$5 = "@firebase/storage";

const name$4 = "@firebase/storage-compat";

const name$3 = "@firebase/firestore";

const name$2 = "@firebase/ai";

const name$1 = "@firebase/firestore-compat";

const index_esm_name = "firebase";
const version = "12.10.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const index_esm_DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$q]: 'fire-core',
    [name$p]: 'fire-core-compat',
    [name$n]: 'fire-analytics',
    [name$o]: 'fire-analytics-compat',
    [name$l]: 'fire-app-check',
    [name$m]: 'fire-app-check-compat',
    [name$k]: 'fire-auth',
    [name$j]: 'fire-auth-compat',
    [name$i]: 'fire-rtdb',
    [name$h]: 'fire-data-connect',
    [name$g]: 'fire-rtdb-compat',
    [name$f]: 'fire-fn',
    [name$e]: 'fire-fn-compat',
    [name$d]: 'fire-iid',
    [name$c]: 'fire-iid-compat',
    [name$b]: 'fire-fcm',
    [name$a]: 'fire-fcm-compat',
    [name$9]: 'fire-perf',
    [name$8]: 'fire-perf-compat',
    [name$7]: 'fire-rc',
    [name$6]: 'fire-rc-compat',
    [name$5]: 'fire-gcs',
    [name$4]: 'fire-gcs-compat',
    [name$3]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    [name$2]: 'fire-vertex',
    'fire-js': 'fire-js', // Platform identifier for JS SDK.
    [index_esm_name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * @internal
 */
const _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()) {
        _addComponent(serverApp, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    const heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = index_esm_DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp, FirebaseOptions or FirebaseAppSettings.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */
function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp, FirebaseOptions or FirebaseAppSettings.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */
function _isFirebaseServerAppSettings(obj) {
    if (_isFirebaseApp(obj)) {
        return false;
    }
    return ('authIdToken' in obj ||
        'appCheckToken' in obj ||
        'releaseOnDeref' in obj ||
        'automaticDataCollectionEnabled' in obj);
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */
function _isFirebaseServerApp(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}'",
    ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["server-app-deleted" /* AppError.SERVER_APP_DELETED */]: 'Firebase Server App has been deleted',
    ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]: 'FirebaseServerApp is not for use in browser environments.'
};
const ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = { ...options };
        this._config = { ...config };
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new Component('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Parse the token and check to see if the `exp` claim is in the future.
// Reports an error to the console if the token or claim could not be parsed, or if `exp` is in
// the past.
function validateTokenTTL(base64Token, tokenName) {
    const secondPart = base64Decode(base64Token.split('.')[1]);
    if (secondPart === null) {
        console.error(`FirebaseServerApp ${tokenName} is invalid: second part could not be parsed.`);
        return;
    }
    const expClaim = JSON.parse(secondPart).exp;
    if (expClaim === undefined) {
        console.error(`FirebaseServerApp ${tokenName} is invalid: expiration claim could not be parsed`);
        return;
    }
    const exp = JSON.parse(secondPart).exp * 1000;
    const now = new Date().getTime();
    const diff = exp - now;
    if (diff <= 0) {
        console.error(`FirebaseServerApp ${tokenName} is invalid: the token has expired.`);
    }
}
class FirebaseServerAppImpl extends FirebaseAppImpl {
    constructor(options, serverConfig, name, container) {
        // Build configuration parameters for the FirebaseAppImpl base class.
        const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined
            ? serverConfig.automaticDataCollectionEnabled
            : true;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        const config = {
            name,
            automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            super(options, config, container);
        }
        else {
            const appImpl = options;
            super(appImpl.options, config, container);
        }
        // Now construct the data for the FirebaseServerAppImpl.
        this._serverConfig = {
            automaticDataCollectionEnabled,
            ...serverConfig
        };
        // Ensure that the current time is within the `authIdtoken` window of validity.
        if (this._serverConfig.authIdToken) {
            validateTokenTTL(this._serverConfig.authIdToken, 'authIdToken');
        }
        // Ensure that the current time is within the `appCheckToken` window of validity.
        if (this._serverConfig.appCheckToken) {
            validateTokenTTL(this._serverConfig.appCheckToken, 'appCheckToken');
        }
        this._finalizationRegistry = null;
        if (typeof FinalizationRegistry !== 'undefined') {
            this._finalizationRegistry = new FinalizationRegistry(() => {
                this.automaticCleanup();
            });
        }
        this._refCount = 0;
        this.incRefCount(this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
        // will never trigger.
        this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$q, version$1, 'serverapp');
    }
    toJSON() {
        return undefined;
    }
    get refCount() {
        return this._refCount;
    }
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    incRefCount(obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
        }
    }
    // Decrement the reference count.
    decRefCount() {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    }
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    automaticCleanup() {
        void deleteApp(this);
    }
    get settings() {
        this.checkDestroyed();
        return this._serverConfig;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = {
        name: index_esm_DEFAULT_ENTRY_NAME,
        automaticDataCollectionEnabled: true,
        ...rawConfig
    };
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = index_esm_getDefaultAppConfig());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if (index_esm_deepEqual(options, existingApp.options) &&
            index_esm_deepEqual(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new index_esm_ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options, _serverAppConfig = {}) {
    if (index_esm_isBrowser() && !index_esm_isWebWorker()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
    }
    let firebaseOptions;
    let serverAppSettings = _serverAppConfig || {};
    if (_options) {
        if (_isFirebaseApp(_options)) {
            firebaseOptions = _options.options;
        }
        else if (_isFirebaseServerAppSettings(_options)) {
            serverAppSettings = _options;
        }
        else {
            firebaseOptions = _options;
        }
    }
    if (serverAppSettings.automaticDataCollectionEnabled === undefined) {
        serverAppSettings.automaticDataCollectionEnabled = true;
    }
    firebaseOptions || (firebaseOptions = index_esm_getDefaultAppConfig());
    if (!firebaseOptions) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    // Build an app name based on a hash of the configuration options.
    const nameObj = {
        ...serverAppSettings,
        ...firebaseOptions
    };
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    const hashCode = (s) => {
        return [...s].reduce((hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0, 0);
    };
    if (serverAppSettings.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
        }
    }
    const nameString = '' + hashCode(JSON.stringify(nameObj));
    const existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(serverAppSettings.releaseOnDeref);
        return existingApp;
    }
    const container = new index_esm_ComponentContainer(nameString);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseServerAppImpl(firebaseOptions, serverAppSettings, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = index_esm_DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app && name === index_esm_DEFAULT_ENTRY_NAME && index_esm_getDefaultAppConfig()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    let cleanupProviders = false;
    const name = app.name;
    if (_apps.has(name)) {
        cleanupProviders = true;
        _apps.delete(name);
    }
    else if (_serverApps.has(name)) {
        const firebaseServerApp = app;
        if (firebaseServerApp.decRefCount() <= 0) {
            _serverApps.delete(name);
            cleanupProviders = true;
        }
    }
    if (cleanupProviders) {
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = PLATFORM_LOG_STRING[libraryKeyOrName] ?? libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new Component(`${library}-version`, () => ({ library, version }), "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
    }
    index_esm_setUserLogHandler(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function index_esm_setLogLevel(logLevel) {
    setLogLevel$1(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = openDB(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        }
                        catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch(e => {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME);
        const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
        // We already have the value but tx.done can throw,
        // so we need to await it here to catch errors
        await tx.done;
        return result;
    }
    catch (e) {
        if (e instanceof FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                originalErrorMessage: e?.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        await tx.done;
    }
    catch (e) {
        if (e instanceof FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                originalErrorMessage: e?.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
const MAX_NUM_STORED_HEARTBEATS = 30;
class HeartbeatServiceImpl {
    constructor(container) {
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(result => {
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
        try {
            const platformLogger = this.container
                .getProvider('platform-logger')
                .getImmediate();
            // This is the "Firebase user agent" string from the platform logger
            // service, not the browser user agent.
            const agent = platformLogger.getPlatformInfoString();
            const date = getUTCDateString();
            if (this._heartbeatsCache?.heartbeats == null) {
                this._heartbeatsCache = await this._heartbeatsCachePromise;
                // If we failed to construct a heartbeats cache, then return immediately.
                if (this._heartbeatsCache?.heartbeats == null) {
                    return;
                }
            }
            // Do not store a heartbeat if one is already stored for this day
            // or if a header has already been sent today.
            if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
                this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
                return;
            }
            else {
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({ date, agent });
                // If the number of stored heartbeats exceeds the maximum number of stored heartbeats, remove the heartbeat with the earliest date.
                // Since this is executed each time a heartbeat is pushed, the limit can only be exceeded by one, so only one needs to be removed.
                if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
                    const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
                    this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
                }
            }
            return this._storage.overwrite(this._heartbeatsCache);
        }
        catch (e) {
            logger.warn(e);
        }
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
        try {
            if (this._heartbeatsCache === null) {
                await this._heartbeatsCachePromise;
            }
            // If it's still null or the array is empty, there is no data to send.
            if (this._heartbeatsCache?.heartbeats == null ||
                this._heartbeatsCache.heartbeats.length === 0) {
                return '';
            }
            const date = getUTCDateString();
            // Extract as many heartbeats from the cache as will fit under the size limit.
            const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
            const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
            // Store last sent date to prevent another being logged/sent for the same day.
            this._heartbeatsCache.lastSentHeartbeatDate = date;
            if (unsentEntries.length > 0) {
                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries;
                // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.
                await this._storage.overwrite(this._heartbeatsCache);
            }
            else {
                this._heartbeatsCache.heartbeats = [];
                // Do not wait for this, to reduce latency.
                void this._storage.overwrite(this._heartbeatsCache);
            }
            return headerString;
        }
        catch (e) {
            logger.warn(e);
            return '';
        }
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!isIndexedDBAvailable()) {
            return false;
        }
        else {
            return validateIndexedDBOpenable()
                .then(() => true)
                .catch(() => false);
        }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return { heartbeats: [] };
        }
        else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject?.heartbeats) {
                return idbHeartbeatObject;
            }
            else {
                return { heartbeats: [] };
            }
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: heartbeatsObject.lastSentHeartbeatDate ??
                    existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: heartbeatsObject.lastSentHeartbeatDate ??
                    existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}
/**
 * Returns the index of the heartbeat with the earliest date.
 * If the heartbeats array is empty, -1 is returned.
 */
function getEarliestHeartbeatIdx(heartbeats) {
    if (heartbeats.length === 0) {
        return -1;
    }
    let earliestHeartbeatIdx = 0;
    let earliestHeartbeatDate = heartbeats[0].date;
    for (let i = 1; i < heartbeats.length; i++) {
        if (heartbeats[i].date < earliestHeartbeatDate) {
            earliestHeartbeatDate = heartbeats[i].date;
            earliestHeartbeatIdx = i;
        }
    }
    return earliestHeartbeatIdx;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$q, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
    registerVersion(name$q, version$1, 'esm2020');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


//# sourceMappingURL=index.esm.js.map

;// ./node_modules/firebase/app/dist/esm/index.esm.js



var esm_index_esm_name = "firebase";
var index_esm_version = "12.10.0";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(esm_index_esm_name, index_esm_version, 'app');
//# sourceMappingURL=index.esm.js.map

;// ./js/firebase_app_initialize.mjs
/* unused harmony import specifier */ var firebase_app_initialize_global_function_async;
/* unused harmony import specifier */ var firebase_config_get;
/* unused harmony import specifier */ var firebase_app_initialize_initializeApp;



async function firebase_app_initialize() {
  async function lambda() {
    'const firebase = await import(\n      "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"\n    );';
    let firebase_config = firebase_config_get();
    let app = firebase_app_initialize_initializeApp(firebase_config);
    return app;
  }
  let awaited = await firebase_app_initialize_global_function_async(firebase_app_initialize, lambda);
  return awaited;
}

;// ./node_modules/@firebase/storage/dist/index.esm.js
/* unused harmony import specifier */ var index_esm_getApp;
/* unused harmony import specifier */ var index_esm_getProvider;
/* unused harmony import specifier */ var index_esm_isCloudWorkstation;
/* unused harmony import specifier */ var index_esm_pingServer;
/* unused harmony import specifier */ var index_esm_updateEmulatorBanner;
/* unused harmony import specifier */ var index_esm_createMockUserToken;
/* unused harmony import specifier */ var index_esm_getModularInstance;
/* unused harmony import specifier */ var index_esm_getDefaultEmulatorHostnameAndPort;




/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Constants used in the Firebase Storage library.
 */
/**
 * Domain name for firebase storage.
 */
const DEFAULT_HOST = 'firebasestorage.googleapis.com';
/**
 * The key in Firebase config json for the storage bucket.
 */
const CONFIG_STORAGE_BUCKET_KEY = 'storageBucket';
/**
 * 2 minutes
 *
 * The timeout for all operations except upload.
 */
const DEFAULT_MAX_OPERATION_RETRY_TIME = 2 * 60 * 1000;
/**
 * 10 minutes
 *
 * The timeout for upload.
 */
const DEFAULT_MAX_UPLOAD_RETRY_TIME = 10 * 60 * 1000;
/**
 * 1 second
 */
const DEFAULT_MIN_SLEEP_TIME_MILLIS = 1000;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An error returned by the Firebase Storage SDK.
 * @public
 */
class StorageError extends FirebaseError {
    /**
     * @param code - A `StorageErrorCode` string to be prefixed with 'storage/' and
     *  added to the end of the message.
     * @param message  - Error message.
     * @param status_ - Corresponding HTTP Status Code
     */
    constructor(code, message, status_ = 0) {
        super(prependCode(code), `Firebase Storage: ${message} (${prependCode(code)})`);
        this.status_ = status_;
        /**
         * Stores custom error data unique to the `StorageError`.
         */
        this.customData = { serverResponse: null };
        this._baseMessage = this.message;
        // Without this, `instanceof StorageError`, in tests for example,
        // returns false.
        Object.setPrototypeOf(this, StorageError.prototype);
    }
    get status() {
        return this.status_;
    }
    set status(status) {
        this.status_ = status;
    }
    /**
     * Compares a `StorageErrorCode` against this error's code, filtering out the prefix.
     */
    _codeEquals(code) {
        return prependCode(code) === this.code;
    }
    /**
     * Optional response message that was added by the server.
     */
    get serverResponse() {
        return this.customData.serverResponse;
    }
    set serverResponse(serverResponse) {
        this.customData.serverResponse = serverResponse;
        if (this.customData.serverResponse) {
            this.message = `${this._baseMessage}\n${this.customData.serverResponse}`;
        }
        else {
            this.message = this._baseMessage;
        }
    }
}
/**
 * @public
 * Error codes that can be attached to `StorageError` objects.
 */
var StorageErrorCode;
(function (StorageErrorCode) {
    // Shared between all platforms
    StorageErrorCode["UNKNOWN"] = "unknown";
    StorageErrorCode["OBJECT_NOT_FOUND"] = "object-not-found";
    StorageErrorCode["BUCKET_NOT_FOUND"] = "bucket-not-found";
    StorageErrorCode["PROJECT_NOT_FOUND"] = "project-not-found";
    StorageErrorCode["QUOTA_EXCEEDED"] = "quota-exceeded";
    StorageErrorCode["UNAUTHENTICATED"] = "unauthenticated";
    StorageErrorCode["UNAUTHORIZED"] = "unauthorized";
    StorageErrorCode["UNAUTHORIZED_APP"] = "unauthorized-app";
    StorageErrorCode["RETRY_LIMIT_EXCEEDED"] = "retry-limit-exceeded";
    StorageErrorCode["INVALID_CHECKSUM"] = "invalid-checksum";
    StorageErrorCode["CANCELED"] = "canceled";
    // JS specific
    StorageErrorCode["INVALID_EVENT_NAME"] = "invalid-event-name";
    StorageErrorCode["INVALID_URL"] = "invalid-url";
    StorageErrorCode["INVALID_DEFAULT_BUCKET"] = "invalid-default-bucket";
    StorageErrorCode["NO_DEFAULT_BUCKET"] = "no-default-bucket";
    StorageErrorCode["CANNOT_SLICE_BLOB"] = "cannot-slice-blob";
    StorageErrorCode["SERVER_FILE_WRONG_SIZE"] = "server-file-wrong-size";
    StorageErrorCode["NO_DOWNLOAD_URL"] = "no-download-url";
    StorageErrorCode["INVALID_ARGUMENT"] = "invalid-argument";
    StorageErrorCode["INVALID_ARGUMENT_COUNT"] = "invalid-argument-count";
    StorageErrorCode["APP_DELETED"] = "app-deleted";
    StorageErrorCode["INVALID_ROOT_OPERATION"] = "invalid-root-operation";
    StorageErrorCode["INVALID_FORMAT"] = "invalid-format";
    StorageErrorCode["INTERNAL_ERROR"] = "internal-error";
    StorageErrorCode["UNSUPPORTED_ENVIRONMENT"] = "unsupported-environment";
})(StorageErrorCode || (StorageErrorCode = {}));
function prependCode(code) {
    return 'storage/' + code;
}
function unknown() {
    const message = 'An unknown error occurred, please check the error payload for ' +
        'server response.';
    return new StorageError(StorageErrorCode.UNKNOWN, message);
}
function objectNotFound(path) {
    return new StorageError(StorageErrorCode.OBJECT_NOT_FOUND, "Object '" + path + "' does not exist.");
}
function quotaExceeded(bucket) {
    return new StorageError(StorageErrorCode.QUOTA_EXCEEDED, "Quota for bucket '" +
        bucket +
        "' exceeded, please view quota on " +
        'https://firebase.google.com/pricing/.');
}
function unauthenticated() {
    const message = 'User is not authenticated, please authenticate using Firebase ' +
        'Authentication and try again.';
    return new StorageError(StorageErrorCode.UNAUTHENTICATED, message);
}
function unauthorizedApp() {
    return new StorageError(StorageErrorCode.UNAUTHORIZED_APP, 'This app does not have permission to access Firebase Storage on this project.');
}
function unauthorized(path) {
    return new StorageError(StorageErrorCode.UNAUTHORIZED, "User does not have permission to access '" + path + "'.");
}
function retryLimitExceeded() {
    return new StorageError(StorageErrorCode.RETRY_LIMIT_EXCEEDED, 'Max retry time for operation exceeded, please try again.');
}
function canceled() {
    return new StorageError(StorageErrorCode.CANCELED, 'User canceled the upload/download.');
}
function invalidUrl(url) {
    return new StorageError(StorageErrorCode.INVALID_URL, "Invalid URL '" + url + "'.");
}
function invalidDefaultBucket(bucket) {
    return new StorageError(StorageErrorCode.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + bucket + "'.");
}
function noDefaultBucket() {
    return new StorageError(StorageErrorCode.NO_DEFAULT_BUCKET, 'No default bucket ' +
        "found. Did you set the '" +
        CONFIG_STORAGE_BUCKET_KEY +
        "' property when initializing the app?");
}
function cannotSliceBlob() {
    return new StorageError(StorageErrorCode.CANNOT_SLICE_BLOB, 'Cannot slice blob for upload. Please retry the upload.');
}
function serverFileWrongSize() {
    return new StorageError(StorageErrorCode.SERVER_FILE_WRONG_SIZE, 'Server recorded incorrect upload file size, please retry the upload.');
}
function noDownloadURL() {
    return new StorageError(StorageErrorCode.NO_DOWNLOAD_URL, 'The given file does not have any download URLs.');
}
function missingPolyFill(polyFill) {
    return new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, `${polyFill} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);
}
/**
 * @internal
 */
function invalidArgument(message) {
    return new StorageError(StorageErrorCode.INVALID_ARGUMENT, message);
}
function appDeleted() {
    return new StorageError(StorageErrorCode.APP_DELETED, 'The Firebase app was deleted.');
}
/**
 * @param name - The name of the operation that was invalid.
 *
 * @internal
 */
function invalidRootOperation(name) {
    return new StorageError(StorageErrorCode.INVALID_ROOT_OPERATION, "The operation '" +
        name +
        "' cannot be performed on a root reference, create a non-root " +
        "reference using child, such as .child('file.png').");
}
/**
 * @param format - The format that was not valid.
 * @param message - A message describing the format violation.
 */
function invalidFormat(format, message) {
    return new StorageError(StorageErrorCode.INVALID_FORMAT, "String does not match format '" + format + "': " + message);
}
/**
 * @param message - A message describing the internal error.
 */
function internalError(message) {
    throw new StorageError(StorageErrorCode.INTERNAL_ERROR, 'Internal error: ' + message);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Firebase Storage location data.
 *
 * @internal
 */
class Location {
    constructor(bucket, path) {
        this.bucket = bucket;
        this.path_ = path;
    }
    get path() {
        return this.path_;
    }
    get isRoot() {
        return this.path.length === 0;
    }
    fullServerUrl() {
        const encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o/' + encode(this.path);
    }
    bucketOnlyServerUrl() {
        const encode = encodeURIComponent;
        return '/b/' + encode(this.bucket) + '/o';
    }
    static makeFromBucketSpec(bucketString, host) {
        let bucketLocation;
        try {
            bucketLocation = Location.makeFromUrl(bucketString, host);
        }
        catch (e) {
            // Not valid URL, use as-is. This lets you put bare bucket names in
            // config.
            return new Location(bucketString, '');
        }
        if (bucketLocation.path === '') {
            return bucketLocation;
        }
        else {
            throw invalidDefaultBucket(bucketString);
        }
    }
    static makeFromUrl(url, host) {
        let location = null;
        const bucketDomain = '([A-Za-z0-9.\\-_]+)';
        function gsModify(loc) {
            if (loc.path.charAt(loc.path.length - 1) === '/') {
                loc.path_ = loc.path_.slice(0, -1);
            }
        }
        const gsPath = '(/(.*))?$';
        const gsRegex = new RegExp('^gs://' + bucketDomain + gsPath, 'i');
        const gsIndices = { bucket: 1, path: 3 };
        function httpModify(loc) {
            loc.path_ = decodeURIComponent(loc.path);
        }
        const version = 'v[A-Za-z0-9_]+';
        const firebaseStorageHost = host.replace(/[.]/g, '\\.');
        const firebaseStoragePath = '(/([^?#]*).*)?$';
        const firebaseStorageRegExp = new RegExp(`^https?://${firebaseStorageHost}/${version}/b/${bucketDomain}/o${firebaseStoragePath}`, 'i');
        const firebaseStorageIndices = { bucket: 1, path: 3 };
        const cloudStorageHost = host === DEFAULT_HOST
            ? '(?:storage.googleapis.com|storage.cloud.google.com)'
            : host;
        const cloudStoragePath = '([^?#]*)';
        const cloudStorageRegExp = new RegExp(`^https?://${cloudStorageHost}/${bucketDomain}/${cloudStoragePath}`, 'i');
        const cloudStorageIndices = { bucket: 1, path: 2 };
        const groups = [
            { regex: gsRegex, indices: gsIndices, postModify: gsModify },
            {
                regex: firebaseStorageRegExp,
                indices: firebaseStorageIndices,
                postModify: httpModify
            },
            {
                regex: cloudStorageRegExp,
                indices: cloudStorageIndices,
                postModify: httpModify
            }
        ];
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            const captures = group.regex.exec(url);
            if (captures) {
                const bucketValue = captures[group.indices.bucket];
                let pathValue = captures[group.indices.path];
                if (!pathValue) {
                    pathValue = '';
                }
                location = new Location(bucketValue, pathValue);
                group.postModify(location);
                break;
            }
        }
        if (location == null) {
            throw invalidUrl(url);
        }
        return location;
    }
}

/**
 * A request whose promise always fails.
 */
class FailRequest {
    constructor(error) {
        this.promise_ = Promise.reject(error);
    }
    /** @inheritDoc */
    getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */
    cancel(_appDelete = false) { }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Accepts a callback for an action to perform (`doRequest`),
 * and then a callback for when the backoff has completed (`backoffCompleteCb`).
 * The callback sent to start requires an argument to call (`onRequestComplete`).
 * When `start` calls `doRequest`, it passes a callback for when the request has
 * completed, `onRequestComplete`. Based on this, the backoff continues, with
 * another call to `doRequest` and the above loop continues until the timeout
 * is hit, or a successful response occurs.
 * @description
 * @param doRequest Callback to perform request
 * @param backoffCompleteCb Callback to call when backoff has been completed
 */
function start(doRequest, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
backoffCompleteCb, timeout) {
    // TODO(andysoto): make this code cleaner (probably refactor into an actual
    // type instead of a bunch of functions with state shared in the closure)
    let waitSeconds = 1;
    // Would type this as "number" but that doesn't work for Node so ¯\_(ツ)_/¯
    // TODO: find a way to exclude Node type definition for storage because storage only works in browser
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let retryTimeoutId = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let globalTimeoutId = null;
    let hitTimeout = false;
    let cancelState = 0;
    function canceled() {
        return cancelState === 2;
    }
    let triggeredCallback = false;
    function triggerCallback(...args) {
        if (!triggeredCallback) {
            triggeredCallback = true;
            backoffCompleteCb.apply(null, args);
        }
    }
    function callWithDelay(millis) {
        retryTimeoutId = setTimeout(() => {
            retryTimeoutId = null;
            doRequest(responseHandler, canceled());
        }, millis);
    }
    function clearGlobalTimeout() {
        if (globalTimeoutId) {
            clearTimeout(globalTimeoutId);
        }
    }
    function responseHandler(success, ...args) {
        if (triggeredCallback) {
            clearGlobalTimeout();
            return;
        }
        if (success) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        const mustStop = canceled() || hitTimeout;
        if (mustStop) {
            clearGlobalTimeout();
            triggerCallback.call(null, success, ...args);
            return;
        }
        if (waitSeconds < 64) {
            /* TODO(andysoto): don't back off so quickly if we know we're offline. */
            waitSeconds *= 2;
        }
        let waitMillis;
        if (cancelState === 1) {
            cancelState = 2;
            waitMillis = 0;
        }
        else {
            waitMillis = (waitSeconds + Math.random()) * 1000;
        }
        callWithDelay(waitMillis);
    }
    let stopped = false;
    function stop(wasTimeout) {
        if (stopped) {
            return;
        }
        stopped = true;
        clearGlobalTimeout();
        if (triggeredCallback) {
            return;
        }
        if (retryTimeoutId !== null) {
            if (!wasTimeout) {
                cancelState = 2;
            }
            clearTimeout(retryTimeoutId);
            callWithDelay(0);
        }
        else {
            if (!wasTimeout) {
                cancelState = 1;
            }
        }
    }
    callWithDelay(0);
    globalTimeoutId = setTimeout(() => {
        hitTimeout = true;
        stop(true);
    }, timeout);
    return stop;
}
/**
 * Stops the retry loop from repeating.
 * If the function is currently "in between" retries, it is invoked immediately
 * with the second parameter as "true". Otherwise, it will be invoked once more
 * after the current invocation finishes iff the current invocation would have
 * triggered another retry.
 */
function stop(id) {
    id(false);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isJustDef(p) {
    return p !== void 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(p) {
    return typeof p === 'function';
}
function isNonArrayObject(p) {
    return typeof p === 'object' && !Array.isArray(p);
}
function isString(p) {
    return typeof p === 'string' || p instanceof String;
}
function isNativeBlob(p) {
    return isNativeBlobDefined() && p instanceof Blob;
}
function isNativeBlobDefined() {
    return typeof Blob !== 'undefined';
}
function validateNumber(argument, minValue, maxValue, value) {
    if (value < minValue) {
        throw invalidArgument(`Invalid value for '${argument}'. Expected ${minValue} or greater.`);
    }
    if (value > maxValue) {
        throw invalidArgument(`Invalid value for '${argument}'. Expected ${maxValue} or less.`);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function makeUrl(urlPart, host, protocol) {
    let origin = host;
    if (protocol == null) {
        origin = `https://${host}`;
    }
    return `${protocol}://${origin}/v0${urlPart}`;
}
function makeQueryString(params) {
    const encode = encodeURIComponent;
    let queryPart = '?';
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const nextPart = encode(key) + '=' + encode(params[key]);
            queryPart = queryPart + nextPart + '&';
        }
    }
    // Chop off the extra '&' or '?' on the end
    queryPart = queryPart.slice(0, -1);
    return queryPart;
}

/**
 * Error codes for requests made by the XhrIo wrapper.
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["NO_ERROR"] = 0] = "NO_ERROR";
    ErrorCode[ErrorCode["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    ErrorCode[ErrorCode["ABORT"] = 2] = "ABORT";
})(ErrorCode || (ErrorCode = {}));

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks the status code to see if the action should be retried.
 *
 * @param status Current HTTP status code returned by server.
 * @param additionalRetryCodes additional retry codes to check against
 */
function isRetryStatusCode(status, additionalRetryCodes) {
    // The codes for which to retry came from this page:
    // https://cloud.google.com/storage/docs/exponential-backoff
    const isFiveHundredCode = status >= 500 && status < 600;
    const extraRetryCodes = [
        // Request Timeout: web server didn't receive full request in time.
        408,
        // Too Many Requests: you're getting rate-limited, basically.
        429
    ];
    const isExtraRetryCode = extraRetryCodes.indexOf(status) !== -1;
    const isAdditionalRetryCode = additionalRetryCodes.indexOf(status) !== -1;
    return isFiveHundredCode || isExtraRetryCode || isAdditionalRetryCode;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Handles network logic for all Storage Requests, including error reporting and
 * retries with backoff.
 *
 * @param I - the type of the backend's network response.
 * @param - O the output type used by the rest of the SDK. The conversion
 * happens in the specified `callback_`.
 */
class NetworkRequest {
    constructor(url_, method_, headers_, body_, successCodes_, additionalRetryCodes_, callback_, errorCallback_, timeout_, progressCallback_, connectionFactory_, retry = true, isUsingEmulator = false) {
        this.url_ = url_;
        this.method_ = method_;
        this.headers_ = headers_;
        this.body_ = body_;
        this.successCodes_ = successCodes_;
        this.additionalRetryCodes_ = additionalRetryCodes_;
        this.callback_ = callback_;
        this.errorCallback_ = errorCallback_;
        this.timeout_ = timeout_;
        this.progressCallback_ = progressCallback_;
        this.connectionFactory_ = connectionFactory_;
        this.retry = retry;
        this.isUsingEmulator = isUsingEmulator;
        this.pendingConnection_ = null;
        this.backoffId_ = null;
        this.canceled_ = false;
        this.appDelete_ = false;
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = resolve;
            this.reject_ = reject;
            this.start_();
        });
    }
    /**
     * Actually starts the retry loop.
     */
    start_() {
        const doTheRequest = (backoffCallback, canceled) => {
            if (canceled) {
                backoffCallback(false, new RequestEndStatus(false, null, true));
                return;
            }
            const connection = this.connectionFactory_();
            this.pendingConnection_ = connection;
            const progressListener = progressEvent => {
                const loaded = progressEvent.loaded;
                const total = progressEvent.lengthComputable ? progressEvent.total : -1;
                if (this.progressCallback_ !== null) {
                    this.progressCallback_(loaded, total);
                }
            };
            if (this.progressCallback_ !== null) {
                connection.addUploadProgressListener(progressListener);
            }
            // connection.send() never rejects, so we don't need to have a error handler or use catch on the returned promise.
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            connection
                .send(this.url_, this.method_, this.isUsingEmulator, this.body_, this.headers_)
                .then(() => {
                if (this.progressCallback_ !== null) {
                    connection.removeUploadProgressListener(progressListener);
                }
                this.pendingConnection_ = null;
                const hitServer = connection.getErrorCode() === ErrorCode.NO_ERROR;
                const status = connection.getStatus();
                if (!hitServer ||
                    (isRetryStatusCode(status, this.additionalRetryCodes_) &&
                        this.retry)) {
                    const wasCanceled = connection.getErrorCode() === ErrorCode.ABORT;
                    backoffCallback(false, new RequestEndStatus(false, null, wasCanceled));
                    return;
                }
                const successCode = this.successCodes_.indexOf(status) !== -1;
                backoffCallback(true, new RequestEndStatus(successCode, connection));
            });
        };
        /**
         * @param requestWentThrough - True if the request eventually went
         *     through, false if it hit the retry limit or was canceled.
         */
        const backoffDone = (requestWentThrough, status) => {
            const resolve = this.resolve_;
            const reject = this.reject_;
            const connection = status.connection;
            if (status.wasSuccessCode) {
                try {
                    const result = this.callback_(connection, connection.getResponse());
                    if (isJustDef(result)) {
                        resolve(result);
                    }
                    else {
                        resolve();
                    }
                }
                catch (e) {
                    reject(e);
                }
            }
            else {
                if (connection !== null) {
                    const err = unknown();
                    err.serverResponse = connection.getErrorText();
                    if (this.errorCallback_) {
                        reject(this.errorCallback_(connection, err));
                    }
                    else {
                        reject(err);
                    }
                }
                else {
                    if (status.canceled) {
                        const err = this.appDelete_ ? appDeleted() : canceled();
                        reject(err);
                    }
                    else {
                        const err = retryLimitExceeded();
                        reject(err);
                    }
                }
            }
        };
        if (this.canceled_) {
            backoffDone(false, new RequestEndStatus(false, null, true));
        }
        else {
            this.backoffId_ = start(doTheRequest, backoffDone, this.timeout_);
        }
    }
    /** @inheritDoc */
    getPromise() {
        return this.promise_;
    }
    /** @inheritDoc */
    cancel(appDelete) {
        this.canceled_ = true;
        this.appDelete_ = appDelete || false;
        if (this.backoffId_ !== null) {
            stop(this.backoffId_);
        }
        if (this.pendingConnection_ !== null) {
            this.pendingConnection_.abort();
        }
    }
}
/**
 * A collection of information about the result of a network request.
 * @param opt_canceled - Defaults to false.
 */
class RequestEndStatus {
    constructor(wasSuccessCode, connection, canceled) {
        this.wasSuccessCode = wasSuccessCode;
        this.connection = connection;
        this.canceled = !!canceled;
    }
}
function addAuthHeader_(headers, authToken) {
    if (authToken !== null && authToken.length > 0) {
        headers['Authorization'] = 'Firebase ' + authToken;
    }
}
function addVersionHeader_(headers, firebaseVersion) {
    headers['X-Firebase-Storage-Version'] =
        'webjs/' + (firebaseVersion ?? 'AppManager');
}
function addGmpidHeader_(headers, appId) {
    if (appId) {
        headers['X-Firebase-GMPID'] = appId;
    }
}
function addAppCheckHeader_(headers, appCheckToken) {
    if (appCheckToken !== null) {
        headers['X-Firebase-AppCheck'] = appCheckToken;
    }
}
function makeRequest(requestInfo, appId, authToken, appCheckToken, requestFactory, firebaseVersion, retry = true, isUsingEmulator = false) {
    const queryPart = makeQueryString(requestInfo.urlParams);
    const url = requestInfo.url + queryPart;
    const headers = Object.assign({}, requestInfo.headers);
    addGmpidHeader_(headers, appId);
    addAuthHeader_(headers, authToken);
    addVersionHeader_(headers, firebaseVersion);
    addAppCheckHeader_(headers, appCheckToken);
    return new NetworkRequest(url, requestInfo.method, headers, requestInfo.body, requestInfo.successCodes, requestInfo.additionalRetryCodes, requestInfo.handler, requestInfo.errorHandler, requestInfo.timeout, requestInfo.progressCallback, requestFactory, retry, isUsingEmulator);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getBlobBuilder() {
    if (typeof BlobBuilder !== 'undefined') {
        return BlobBuilder;
    }
    else if (typeof WebKitBlobBuilder !== 'undefined') {
        return WebKitBlobBuilder;
    }
    else {
        return undefined;
    }
}
/**
 * Concatenates one or more values together and converts them to a Blob.
 *
 * @param args The values that will make up the resulting blob.
 * @return The blob.
 */
function getBlob$1(...args) {
    const BlobBuilder = getBlobBuilder();
    if (BlobBuilder !== undefined) {
        const bb = new BlobBuilder();
        for (let i = 0; i < args.length; i++) {
            bb.append(args[i]);
        }
        return bb.getBlob();
    }
    else {
        if (isNativeBlobDefined()) {
            return new Blob(args);
        }
        else {
            throw new StorageError(StorageErrorCode.UNSUPPORTED_ENVIRONMENT, "This browser doesn't seem to support creating Blobs");
        }
    }
}
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices cannot be used.
 *
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
function sliceBlob(blob, start, end) {
    if (blob.webkitSlice) {
        return blob.webkitSlice(start, end);
    }
    else if (blob.mozSlice) {
        return blob.mozSlice(start, end);
    }
    else if (blob.slice) {
        return blob.slice(start, end);
    }
    return null;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
function decodeBase64(encoded) {
    if (typeof atob === 'undefined') {
        throw missingPolyFill('base-64');
    }
    return atob(encoded);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An enumeration of the possible string formats for upload.
 * @public
 */
const StringFormat = {
    /**
     * Indicates the string should be interpreted "raw", that is, as normal text.
     * The string will be interpreted as UTF-16, then uploaded as a UTF-8 byte
     * sequence.
     * Example: The string 'Hello! \\ud83d\\ude0a' becomes the byte sequence
     * 48 65 6c 6c 6f 21 20 f0 9f 98 8a
     */
    RAW: 'raw',
    /**
     * Indicates the string should be interpreted as base64-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO++E6t7/rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64: 'base64',
    /**
     * Indicates the string should be interpreted as base64url-encoded data.
     * Padding characters (trailing '='s) are optional.
     * Example: The string 'rWmO--E6t7_rlw==' becomes the byte sequence
     * ad 69 8e fb e1 3a b7 bf eb 97
     */
    BASE64URL: 'base64url',
    /**
     * Indicates the string is a data URL, such as one obtained from
     * canvas.toDataURL().
     * Example: the string 'data:application/octet-stream;base64,aaaa'
     * becomes the byte sequence
     * 69 a6 9a
     * (the content-type "application/octet-stream" is also applied, but can
     * be overridden in the metadata object).
     */
    DATA_URL: 'data_url'
};
class StringData {
    constructor(data, contentType) {
        this.data = data;
        this.contentType = contentType || null;
    }
}
/**
 * @internal
 */
function dataFromString(format, stringData) {
    switch (format) {
        case StringFormat.RAW:
            return new StringData(utf8Bytes_(stringData));
        case StringFormat.BASE64:
        case StringFormat.BASE64URL:
            return new StringData(base64Bytes_(format, stringData));
        case StringFormat.DATA_URL:
            return new StringData(dataURLBytes_(stringData), dataURLContentType_(stringData));
        // do nothing
    }
    // assert(false);
    throw unknown();
}
function utf8Bytes_(value) {
    const b = [];
    for (let i = 0; i < value.length; i++) {
        let c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    const valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        const hi = c;
                        const lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
function percentEncodedBytes_(value) {
    let decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw invalidFormat(StringFormat.DATA_URL, 'Malformed data URL.');
    }
    return utf8Bytes_(decoded);
}
function base64Bytes_(format, value) {
    switch (format) {
        case StringFormat.BASE64: {
            const hasMinus = value.indexOf('-') !== -1;
            const hasUnder = value.indexOf('_') !== -1;
            if (hasMinus || hasUnder) {
                const invalidChar = hasMinus ? '-' : '_';
                throw invalidFormat(format, "Invalid character '" +
                    invalidChar +
                    "' found: is it base64url encoded?");
            }
            break;
        }
        case StringFormat.BASE64URL: {
            const hasPlus = value.indexOf('+') !== -1;
            const hasSlash = value.indexOf('/') !== -1;
            if (hasPlus || hasSlash) {
                const invalidChar = hasPlus ? '+' : '/';
                throw invalidFormat(format, "Invalid character '" + invalidChar + "' found: is it base64 encoded?");
            }
            value = value.replace(/-/g, '+').replace(/_/g, '/');
            break;
        }
        // do nothing
    }
    let bytes;
    try {
        bytes = decodeBase64(value);
    }
    catch (e) {
        if (e.message.includes('polyfill')) {
            throw e;
        }
        throw invalidFormat(format, 'Invalid character found');
    }
    const array = new Uint8Array(bytes.length);
    for (let i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
class DataURLParts {
    constructor(dataURL) {
        this.base64 = false;
        this.contentType = null;
        const matches = dataURL.match(/^data:([^,]+)?,/);
        if (matches === null) {
            throw invalidFormat(StringFormat.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
        }
        const middle = matches[1] || null;
        if (middle != null) {
            this.base64 = endsWith(middle, ';base64');
            this.contentType = this.base64
                ? middle.substring(0, middle.length - ';base64'.length)
                : middle;
        }
        this.rest = dataURL.substring(dataURL.indexOf(',') + 1);
    }
}
function dataURLBytes_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    if (parts.base64) {
        return base64Bytes_(StringFormat.BASE64, parts.rest);
    }
    else {
        return percentEncodedBytes_(parts.rest);
    }
}
function dataURLContentType_(dataUrl) {
    const parts = new DataURLParts(dataUrl);
    return parts.contentType;
}
function endsWith(s, end) {
    const longEnough = s.length >= end.length;
    if (!longEnough) {
        return false;
    }
    return s.substring(s.length - end.length) === end;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param opt_elideCopy - If true, doesn't copy mutable input data
 *     (e.g. Uint8Arrays). Pass true only if you know the objects will not be
 *     modified after this blob's construction.
 *
 * @internal
 */
class FbsBlob {
    constructor(data, elideCopy) {
        let size = 0;
        let blobType = '';
        if (isNativeBlob(data)) {
            this.data_ = data;
            size = data.size;
            blobType = data.type;
        }
        else if (data instanceof ArrayBuffer) {
            if (elideCopy) {
                this.data_ = new Uint8Array(data);
            }
            else {
                this.data_ = new Uint8Array(data.byteLength);
                this.data_.set(new Uint8Array(data));
            }
            size = this.data_.length;
        }
        else if (data instanceof Uint8Array) {
            if (elideCopy) {
                this.data_ = data;
            }
            else {
                this.data_ = new Uint8Array(data.length);
                this.data_.set(data);
            }
            size = data.length;
        }
        this.size_ = size;
        this.type_ = blobType;
    }
    size() {
        return this.size_;
    }
    type() {
        return this.type_;
    }
    slice(startByte, endByte) {
        if (isNativeBlob(this.data_)) {
            const realBlob = this.data_;
            const sliced = sliceBlob(realBlob, startByte, endByte);
            if (sliced === null) {
                return null;
            }
            return new FbsBlob(sliced);
        }
        else {
            const slice = new Uint8Array(this.data_.buffer, startByte, endByte - startByte);
            return new FbsBlob(slice, true);
        }
    }
    static getBlob(...args) {
        if (isNativeBlobDefined()) {
            const blobby = args.map((val) => {
                if (val instanceof FbsBlob) {
                    return val.data_;
                }
                else {
                    return val;
                }
            });
            return new FbsBlob(getBlob$1.apply(null, blobby));
        }
        else {
            const uint8Arrays = args.map((val) => {
                if (isString(val)) {
                    return dataFromString(StringFormat.RAW, val).data;
                }
                else {
                    // Blobs don't exist, so this has to be a Uint8Array.
                    return val.data_;
                }
            });
            let finalLength = 0;
            uint8Arrays.forEach((array) => {
                finalLength += array.byteLength;
            });
            const merged = new Uint8Array(finalLength);
            let index = 0;
            uint8Arrays.forEach((array) => {
                for (let i = 0; i < array.length; i++) {
                    merged[index++] = array[i];
                }
            });
            return new FbsBlob(merged, true);
        }
    }
    uploadData() {
        return this.data_;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the Object resulting from parsing the given JSON, or null if the
 * given string does not represent a JSON object.
 */
function jsonObjectOrNull(s) {
    let obj;
    try {
        obj = JSON.parse(s);
    }
    catch (e) {
        return null;
    }
    if (isNonArrayObject(obj)) {
        return obj;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Contains helper methods for manipulating paths.
 */
/**
 * @return Null if the path is already at the root.
 */
function index_esm_parent(path) {
    if (path.length === 0) {
        return null;
    }
    const index = path.lastIndexOf('/');
    if (index === -1) {
        return '';
    }
    const newPath = path.slice(0, index);
    return newPath;
}
function child(path, childPath) {
    const canonicalChildPath = childPath
        .split('/')
        .filter(component => component.length > 0)
        .join('/');
    if (path.length === 0) {
        return canonicalChildPath;
    }
    else {
        return path + '/' + canonicalChildPath;
    }
}
/**
 * Returns the last component of a path.
 * '/foo/bar' -> 'bar'
 * '/foo/bar/baz/' -> 'baz/'
 * '/a' -> 'a'
 */
function lastComponent(path) {
    const index = path.lastIndexOf('/', path.length - 2);
    if (index === -1) {
        return path;
    }
    else {
        return path.slice(index + 1);
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function noXform_(metadata, value) {
    return value;
}
class Mapping {
    constructor(server, local, writable, xform) {
        this.server = server;
        this.local = local || server;
        this.writable = !!writable;
        this.xform = xform || noXform_;
    }
}
let mappings_ = null;
function xformPath(fullPath) {
    if (!isString(fullPath) || fullPath.length < 2) {
        return fullPath;
    }
    else {
        return lastComponent(fullPath);
    }
}
function getMappings() {
    if (mappings_) {
        return mappings_;
    }
    const mappings = [];
    mappings.push(new Mapping('bucket'));
    mappings.push(new Mapping('generation'));
    mappings.push(new Mapping('metageneration'));
    mappings.push(new Mapping('name', 'fullPath', true));
    function mappingsXformPath(_metadata, fullPath) {
        return xformPath(fullPath);
    }
    const nameMapping = new Mapping('name');
    nameMapping.xform = mappingsXformPath;
    mappings.push(nameMapping);
    /**
     * Coerces the second param to a number, if it is defined.
     */
    function xformSize(_metadata, size) {
        if (size !== undefined) {
            return Number(size);
        }
        else {
            return size;
        }
    }
    const sizeMapping = new Mapping('size');
    sizeMapping.xform = xformSize;
    mappings.push(sizeMapping);
    mappings.push(new Mapping('timeCreated'));
    mappings.push(new Mapping('updated'));
    mappings.push(new Mapping('md5Hash', null, true));
    mappings.push(new Mapping('cacheControl', null, true));
    mappings.push(new Mapping('contentDisposition', null, true));
    mappings.push(new Mapping('contentEncoding', null, true));
    mappings.push(new Mapping('contentLanguage', null, true));
    mappings.push(new Mapping('contentType', null, true));
    mappings.push(new Mapping('metadata', 'customMetadata', true));
    mappings_ = mappings;
    return mappings_;
}
function addRef(metadata, service) {
    function generateRef() {
        const bucket = metadata['bucket'];
        const path = metadata['fullPath'];
        const loc = new Location(bucket, path);
        return service._makeStorageReference(loc);
    }
    Object.defineProperty(metadata, 'ref', { get: generateRef });
}
function fromResource(service, resource, mappings) {
    const metadata = {};
    metadata['type'] = 'file';
    const len = mappings.length;
    for (let i = 0; i < len; i++) {
        const mapping = mappings[i];
        metadata[mapping.local] = mapping.xform(metadata, resource[mapping.server]);
    }
    addRef(metadata, service);
    return metadata;
}
function fromResourceString(service, resourceString, mappings) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    const resource = obj;
    return fromResource(service, resource, mappings);
}
function downloadUrlFromResourceString(metadata, resourceString, host, protocol) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    if (!isString(obj['downloadTokens'])) {
        // This can happen if objects are uploaded through GCS and retrieved
        // through list, so we don't want to throw an Error.
        return null;
    }
    const tokens = obj['downloadTokens'];
    if (tokens.length === 0) {
        return null;
    }
    const encode = encodeURIComponent;
    const tokensList = tokens.split(',');
    const urls = tokensList.map((token) => {
        const bucket = metadata['bucket'];
        const path = metadata['fullPath'];
        const urlPart = '/b/' + encode(bucket) + '/o/' + encode(path);
        const base = makeUrl(urlPart, host, protocol);
        const queryString = makeQueryString({
            alt: 'media',
            token
        });
        return base + queryString;
    });
    return urls[0];
}
function toResourceString(metadata, mappings) {
    const resource = {};
    const len = mappings.length;
    for (let i = 0; i < len; i++) {
        const mapping = mappings[i];
        if (mapping.writable) {
            resource[mapping.server] = metadata[mapping.local];
        }
    }
    return JSON.stringify(resource);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PREFIXES_KEY = 'prefixes';
const ITEMS_KEY = 'items';
function fromBackendResponse(service, bucket, resource) {
    const listResult = {
        prefixes: [],
        items: [],
        nextPageToken: resource['nextPageToken']
    };
    if (resource[PREFIXES_KEY]) {
        for (const path of resource[PREFIXES_KEY]) {
            const pathWithoutTrailingSlash = path.replace(/\/$/, '');
            const reference = service._makeStorageReference(new Location(bucket, pathWithoutTrailingSlash));
            listResult.prefixes.push(reference);
        }
    }
    if (resource[ITEMS_KEY]) {
        for (const item of resource[ITEMS_KEY]) {
            const reference = service._makeStorageReference(new Location(bucket, item['name']));
            listResult.items.push(reference);
        }
    }
    return listResult;
}
function fromResponseString(service, bucket, resourceString) {
    const obj = jsonObjectOrNull(resourceString);
    if (obj === null) {
        return null;
    }
    const resource = obj;
    return fromBackendResponse(service, bucket, resource);
}

/**
 * Contains a fully specified request.
 *
 * @param I - the type of the backend's network response.
 * @param O - the output response type used by the rest of the SDK.
 */
class RequestInfo {
    constructor(url, method, 
    /**
     * Returns the value with which to resolve the request's promise. Only called
     * if the request is successful. Throw from this function to reject the
     * returned Request's promise with the thrown error.
     * Note: The XhrIo passed to this function may be reused after this callback
     * returns. Do not keep a reference to it in any way.
     */
    handler, timeout) {
        this.url = url;
        this.method = method;
        this.handler = handler;
        this.timeout = timeout;
        this.urlParams = {};
        this.headers = {};
        this.body = null;
        this.errorHandler = null;
        /**
         * Called with the current number of bytes uploaded and total size (-1 if not
         * computable) of the request body (i.e. used to report upload progress).
         */
        this.progressCallback = null;
        this.successCodes = [200];
        this.additionalRetryCodes = [];
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws the UNKNOWN StorageError if cndn is false.
 */
function handlerCheck(cndn) {
    if (!cndn) {
        throw unknown();
    }
}
function metadataHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return metadata;
    }
    return handler;
}
function listHandler(service, bucket) {
    function handler(xhr, text) {
        const listResult = fromResponseString(service, bucket, text);
        handlerCheck(listResult !== null);
        return listResult;
    }
    return handler;
}
function downloadUrlHandler(service, mappings) {
    function handler(xhr, text) {
        const metadata = fromResourceString(service, text, mappings);
        handlerCheck(metadata !== null);
        return downloadUrlFromResourceString(metadata, text, service.host, service._protocol);
    }
    return handler;
}
function sharedErrorHandler(location) {
    function errorHandler(xhr, err) {
        let newErr;
        if (xhr.getStatus() === 401) {
            if (
            // This exact message string is the only consistent part of the
            // server's error response that identifies it as an App Check error.
            xhr.getErrorText().includes('Firebase App Check token is invalid')) {
                newErr = unauthorizedApp();
            }
            else {
                newErr = unauthenticated();
            }
        }
        else {
            if (xhr.getStatus() === 402) {
                newErr = quotaExceeded(location.bucket);
            }
            else {
                if (xhr.getStatus() === 403) {
                    newErr = unauthorized(location.path);
                }
                else {
                    newErr = err;
                }
            }
        }
        newErr.status = xhr.getStatus();
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function objectErrorHandler(location) {
    const shared = sharedErrorHandler(location);
    function errorHandler(xhr, err) {
        let newErr = shared(xhr, err);
        if (xhr.getStatus() === 404) {
            newErr = objectNotFound(location.path);
        }
        newErr.serverResponse = err.serverResponse;
        return newErr;
    }
    return errorHandler;
}
function getMetadata$2(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function list$2(service, location, delimiter, pageToken, maxResults) {
    const urlParams = {};
    if (location.isRoot) {
        urlParams['prefix'] = '';
    }
    else {
        urlParams['prefix'] = location.path + '/';
    }
    if (delimiter && delimiter.length > 0) {
        urlParams['delimiter'] = delimiter;
    }
    if (pageToken) {
        urlParams['pageToken'] = pageToken;
    }
    if (maxResults) {
        urlParams['maxResults'] = maxResults;
    }
    const urlPart = location.bucketOnlyServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, listHandler(service, location.bucket), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
function getBytes$1(service, location, maxDownloadSizeBytes) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol) + '?alt=media';
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, (_, data) => data, timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    if (maxDownloadSizeBytes !== undefined) {
        requestInfo.headers['Range'] = `bytes=0-${maxDownloadSizeBytes}`;
        requestInfo.successCodes = [200 /* OK */, 206 /* Partial Content */];
    }
    return requestInfo;
}
function getDownloadUrl(service, location, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'GET';
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, downloadUrlHandler(service, mappings), timeout);
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function updateMetadata$2(service, location, metadata, mappings) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'PATCH';
    const body = toResourceString(metadata, mappings);
    const headers = { 'Content-Type': 'application/json; charset=utf-8' };
    const timeout = service.maxOperationRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function deleteObject$2(service, location) {
    const urlPart = location.fullServerUrl();
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'DELETE';
    const timeout = service.maxOperationRetryTime;
    function handler(_xhr, _text) { }
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.successCodes = [200, 204];
    requestInfo.errorHandler = objectErrorHandler(location);
    return requestInfo;
}
function determineContentType_(metadata, blob) {
    return ((metadata && metadata['contentType']) ||
        (blob && blob.type()) ||
        'application/octet-stream');
}
function metadataForUpload_(location, blob, metadata) {
    const metadataClone = Object.assign({}, metadata);
    metadataClone['fullPath'] = location.path;
    metadataClone['size'] = blob.size();
    if (!metadataClone['contentType']) {
        metadataClone['contentType'] = determineContentType_(null, blob);
    }
    return metadataClone;
}
/**
 * Prepare RequestInfo for uploads as Content-Type: multipart.
 */
function multipartUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const headers = {
        'X-Goog-Upload-Protocol': 'multipart'
    };
    function genBoundary() {
        let str = '';
        for (let i = 0; i < 2; i++) {
            str = str + Math.random().toString().slice(2);
        }
        return str;
    }
    const boundary = genBoundary();
    headers['Content-Type'] = 'multipart/related; boundary=' + boundary;
    const metadata_ = metadataForUpload_(location, blob, metadata);
    const metadataString = toResourceString(metadata_, mappings);
    const preBlobPart = '--' +
        boundary +
        '\r\n' +
        'Content-Type: application/json; charset=utf-8\r\n\r\n' +
        metadataString +
        '\r\n--' +
        boundary +
        '\r\n' +
        'Content-Type: ' +
        metadata_['contentType'] +
        '\r\n\r\n';
    const postBlobPart = '\r\n--' + boundary + '--';
    const body = FbsBlob.getBlob(preBlobPart, blob, postBlobPart);
    if (body === null) {
        throw cannotSliceBlob();
    }
    const urlParams = { name: metadata_['fullPath'] };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, metadataHandler(service, mappings), timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param current The number of bytes that have been uploaded so far.
 * @param total The total number of bytes in the upload.
 * @param opt_finalized True if the server has finished the upload.
 * @param opt_metadata The upload metadata, should
 *     only be passed if opt_finalized is true.
 */
class ResumableUploadStatus {
    constructor(current, total, finalized, metadata) {
        this.current = current;
        this.total = total;
        this.finalized = !!finalized;
        this.metadata = metadata || null;
    }
}
function checkResumeHeader_(xhr, allowed) {
    let status = null;
    try {
        status = xhr.getResponseHeader('X-Goog-Upload-Status');
    }
    catch (e) {
        handlerCheck(false);
    }
    const allowedStatus = allowed || ['active'];
    handlerCheck(!!status && allowedStatus.indexOf(status) !== -1);
    return status;
}
function createResumableUpload(service, location, mappings, blob, metadata) {
    const urlPart = location.bucketOnlyServerUrl();
    const metadataForUpload = metadataForUpload_(location, blob, metadata);
    const urlParams = { name: metadataForUpload['fullPath'] };
    const url = makeUrl(urlPart, service.host, service._protocol);
    const method = 'POST';
    const headers = {
        'X-Goog-Upload-Protocol': 'resumable',
        'X-Goog-Upload-Command': 'start',
        'X-Goog-Upload-Header-Content-Length': `${blob.size()}`,
        'X-Goog-Upload-Header-Content-Type': metadataForUpload['contentType'],
        'Content-Type': 'application/json; charset=utf-8'
    };
    const body = toResourceString(metadataForUpload, mappings);
    const timeout = service.maxUploadRetryTime;
    function handler(xhr) {
        checkResumeHeader_(xhr);
        let url;
        try {
            url = xhr.getResponseHeader('X-Goog-Upload-URL');
        }
        catch (e) {
            handlerCheck(false);
        }
        handlerCheck(isString(url));
        return url;
    }
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.urlParams = urlParams;
    requestInfo.headers = headers;
    requestInfo.body = body;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 */
function getResumableUploadStatus(service, location, url, blob) {
    const headers = { 'X-Goog-Upload-Command': 'query' };
    function handler(xhr) {
        const status = checkResumeHeader_(xhr, ['active', 'final']);
        let sizeString = null;
        try {
            sizeString = xhr.getResponseHeader('X-Goog-Upload-Size-Received');
        }
        catch (e) {
            handlerCheck(false);
        }
        if (!sizeString) {
            // null or empty string
            handlerCheck(false);
        }
        const size = Number(sizeString);
        handlerCheck(!isNaN(size));
        return new ResumableUploadStatus(size, blob.size(), status === 'final');
    }
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}
/**
 * Any uploads via the resumable upload API must transfer a number of bytes
 * that is a multiple of this number.
 */
const RESUMABLE_UPLOAD_CHUNK_SIZE = (/* unused pure expression or super */ null && (256 * 1024));
/**
 * @param url From a call to fbs.requests.createResumableUpload.
 * @param chunkSize Number of bytes to upload.
 * @param status The previous status.
 *     If not passed or null, we start from the beginning.
 * @throws fbs.Error If the upload is already complete, the passed in status
 *     has a final size inconsistent with the blob, or the blob cannot be sliced
 *     for upload.
 */
function continueResumableUpload(location, service, url, blob, chunkSize, mappings, status, progressCallback) {
    // TODO(andysoto): standardize on internal asserts
    // assert(!(opt_status && opt_status.finalized));
    const status_ = new ResumableUploadStatus(0, 0);
    if (status) {
        status_.current = status.current;
        status_.total = status.total;
    }
    else {
        status_.current = 0;
        status_.total = blob.size();
    }
    if (blob.size() !== status_.total) {
        throw serverFileWrongSize();
    }
    const bytesLeft = status_.total - status_.current;
    let bytesToUpload = bytesLeft;
    if (chunkSize > 0) {
        bytesToUpload = Math.min(bytesToUpload, chunkSize);
    }
    const startByte = status_.current;
    const endByte = startByte + bytesToUpload;
    let uploadCommand = '';
    if (bytesToUpload === 0) {
        uploadCommand = 'finalize';
    }
    else if (bytesLeft === bytesToUpload) {
        uploadCommand = 'upload, finalize';
    }
    else {
        uploadCommand = 'upload';
    }
    const headers = {
        'X-Goog-Upload-Command': uploadCommand,
        'X-Goog-Upload-Offset': `${status_.current}`
    };
    const body = blob.slice(startByte, endByte);
    if (body === null) {
        throw cannotSliceBlob();
    }
    function handler(xhr, text) {
        // TODO(andysoto): Verify the MD5 of each uploaded range:
        // the 'x-range-md5' header comes back with status code 308 responses.
        // We'll only be able to bail out though, because you can't re-upload a
        // range that you previously uploaded.
        const uploadStatus = checkResumeHeader_(xhr, ['active', 'final']);
        const newCurrent = status_.current + bytesToUpload;
        const size = blob.size();
        let metadata;
        if (uploadStatus === 'final') {
            metadata = metadataHandler(service, mappings)(xhr, text);
        }
        else {
            metadata = null;
        }
        return new ResumableUploadStatus(newCurrent, size, uploadStatus === 'final', metadata);
    }
    const method = 'POST';
    const timeout = service.maxUploadRetryTime;
    const requestInfo = new RequestInfo(url, method, handler, timeout);
    requestInfo.headers = headers;
    requestInfo.body = body.uploadData();
    requestInfo.progressCallback = progressCallback || null;
    requestInfo.errorHandler = sharedErrorHandler(location);
    return requestInfo;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An event that is triggered on a task.
 * @internal
 */
const TaskEvent = {
    /**
     * For this event,
     * <ul>
     *   <li>The `next` function is triggered on progress updates and when the
     *       task is paused/resumed with an `UploadTaskSnapshot` as the first
     *       argument.</li>
     *   <li>The `error` function is triggered if the upload is canceled or fails
     *       for another reason.</li>
     *   <li>The `complete` function is triggered if the upload completes
     *       successfully.</li>
     * </ul>
     */
    STATE_CHANGED: 'state_changed'
};
// type keys = keyof TaskState
/**
 * Represents the current state of a running upload.
 * @internal
 */
const TaskState = {
    /** The task is currently transferring data. */
    RUNNING: 'running',
    /** The task was paused by the user. */
    PAUSED: 'paused',
    /** The task completed successfully. */
    SUCCESS: 'success',
    /** The task was canceled. */
    CANCELED: 'canceled',
    /** The task failed with an error. */
    ERROR: 'error'
};
function taskStateFromInternalTaskState(state) {
    switch (state) {
        case "running" /* InternalTaskState.RUNNING */:
        case "pausing" /* InternalTaskState.PAUSING */:
        case "canceling" /* InternalTaskState.CANCELING */:
            return TaskState.RUNNING;
        case "paused" /* InternalTaskState.PAUSED */:
            return TaskState.PAUSED;
        case "success" /* InternalTaskState.SUCCESS */:
            return TaskState.SUCCESS;
        case "canceled" /* InternalTaskState.CANCELED */:
            return TaskState.CANCELED;
        case "error" /* InternalTaskState.ERROR */:
            return TaskState.ERROR;
        default:
            // TODO(andysoto): assert(false);
            return TaskState.ERROR;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Observer {
    constructor(nextOrObserver, error, complete) {
        const asFunctions = isFunction(nextOrObserver) || error != null || complete != null;
        if (asFunctions) {
            this.next = nextOrObserver;
            this.error = error ?? undefined;
            this.complete = complete ?? undefined;
        }
        else {
            const observer = nextOrObserver;
            this.next = observer.next;
            this.error = observer.error;
            this.complete = observer.complete;
        }
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a function that invokes f with its arguments asynchronously as a
 * microtask, i.e. as soon as possible after the current script returns back
 * into browser code.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function dist_index_esm_async(f) {
    return (...argsToForward) => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => f(...argsToForward));
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** An override for the text-based Connection. Used in tests. */
let textFactoryOverride = null;
/**
 * Network layer for browsers. We use this instead of goog.net.XhrIo because
 * goog.net.XhrIo is hyuuuuge and doesn't work in React Native on Android.
 */
class XhrConnection {
    constructor() {
        this.sent_ = false;
        this.xhr_ = new XMLHttpRequest();
        this.initXhr();
        this.errorCode_ = ErrorCode.NO_ERROR;
        this.sendPromise_ = new Promise(resolve => {
            this.xhr_.addEventListener('abort', () => {
                this.errorCode_ = ErrorCode.ABORT;
                resolve();
            });
            this.xhr_.addEventListener('error', () => {
                this.errorCode_ = ErrorCode.NETWORK_ERROR;
                resolve();
            });
            this.xhr_.addEventListener('load', () => {
                resolve();
            });
        });
    }
    send(url, method, isUsingEmulator, body, headers) {
        if (this.sent_) {
            throw internalError('cannot .send() more than once');
        }
        if (index_esm_isCloudWorkstation(url) && isUsingEmulator) {
            this.xhr_.withCredentials = true;
        }
        this.sent_ = true;
        this.xhr_.open(method, url, true);
        if (headers !== undefined) {
            for (const key in headers) {
                if (headers.hasOwnProperty(key)) {
                    this.xhr_.setRequestHeader(key, headers[key].toString());
                }
            }
        }
        if (body !== undefined) {
            this.xhr_.send(body);
        }
        else {
            this.xhr_.send();
        }
        return this.sendPromise_;
    }
    getErrorCode() {
        if (!this.sent_) {
            throw internalError('cannot .getErrorCode() before sending');
        }
        return this.errorCode_;
    }
    getStatus() {
        if (!this.sent_) {
            throw internalError('cannot .getStatus() before sending');
        }
        try {
            return this.xhr_.status;
        }
        catch (e) {
            return -1;
        }
    }
    getResponse() {
        if (!this.sent_) {
            throw internalError('cannot .getResponse() before sending');
        }
        return this.xhr_.response;
    }
    getErrorText() {
        if (!this.sent_) {
            throw internalError('cannot .getErrorText() before sending');
        }
        return this.xhr_.statusText;
    }
    /** Aborts the request. */
    abort() {
        this.xhr_.abort();
    }
    getResponseHeader(header) {
        return this.xhr_.getResponseHeader(header);
    }
    addUploadProgressListener(listener) {
        if (this.xhr_.upload != null) {
            this.xhr_.upload.addEventListener('progress', listener);
        }
    }
    removeUploadProgressListener(listener) {
        if (this.xhr_.upload != null) {
            this.xhr_.upload.removeEventListener('progress', listener);
        }
    }
}
class XhrTextConnection extends (/* unused pure expression or super */ null && (XhrConnection)) {
    initXhr() {
        this.xhr_.responseType = 'text';
    }
}
function newTextConnection() {
    return textFactoryOverride ? textFactoryOverride() : new XhrTextConnection();
}
class XhrBytesConnection extends (/* unused pure expression or super */ null && (XhrConnection)) {
    initXhr() {
        this.xhr_.responseType = 'arraybuffer';
    }
}
function newBytesConnection() {
    return new XhrBytesConnection();
}
class XhrBlobConnection extends (/* unused pure expression or super */ null && (XhrConnection)) {
    initXhr() {
        this.xhr_.responseType = 'blob';
    }
}
function newBlobConnection() {
    return new XhrBlobConnection();
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a blob being uploaded. Can be used to pause/resume/cancel the
 * upload and manage callbacks for various events.
 * @internal
 */
class UploadTask {
    isExponentialBackoffExpired() {
        return this.sleepTime > this.maxSleepTime;
    }
    /**
     * @param ref - The firebaseStorage.Reference object this task came
     *     from, untyped to avoid cyclic dependencies.
     * @param blob - The blob to upload.
     */
    constructor(ref, blob, metadata = null) {
        /**
         * Number of bytes transferred so far.
         */
        this._transferred = 0;
        this._needToFetchStatus = false;
        this._needToFetchMetadata = false;
        this._observers = [];
        this._error = undefined;
        this._uploadUrl = undefined;
        this._request = undefined;
        this._chunkMultiplier = 1;
        this._resolve = undefined;
        this._reject = undefined;
        this._ref = ref;
        this._blob = blob;
        this._metadata = metadata;
        this._mappings = getMappings();
        this._resumable = this._shouldDoResumable(this._blob);
        this._state = "running" /* InternalTaskState.RUNNING */;
        this._errorHandler = error => {
            this._request = undefined;
            this._chunkMultiplier = 1;
            if (error._codeEquals(StorageErrorCode.CANCELED)) {
                this._needToFetchStatus = true;
                this.completeTransitions_();
            }
            else {
                const backoffExpired = this.isExponentialBackoffExpired();
                if (isRetryStatusCode(error.status, [])) {
                    if (backoffExpired) {
                        error = retryLimitExceeded();
                    }
                    else {
                        this.sleepTime = Math.max(this.sleepTime * 2, DEFAULT_MIN_SLEEP_TIME_MILLIS);
                        this._needToFetchStatus = true;
                        this.completeTransitions_();
                        return;
                    }
                }
                this._error = error;
                this._transition("error" /* InternalTaskState.ERROR */);
            }
        };
        this._metadataErrorHandler = error => {
            this._request = undefined;
            if (error._codeEquals(StorageErrorCode.CANCELED)) {
                this.completeTransitions_();
            }
            else {
                this._error = error;
                this._transition("error" /* InternalTaskState.ERROR */);
            }
        };
        this.sleepTime = 0;
        this.maxSleepTime = this._ref.storage.maxUploadRetryTime;
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
            this._start();
        });
        // Prevent uncaught rejections on the internal promise from bubbling out
        // to the top level with a dummy handler.
        this._promise.then(null, () => { });
    }
    _makeProgressCallback() {
        const sizeBefore = this._transferred;
        return loaded => this._updateProgress(sizeBefore + loaded);
    }
    _shouldDoResumable(blob) {
        return blob.size() > 256 * 1024;
    }
    _start() {
        if (this._state !== "running" /* InternalTaskState.RUNNING */) {
            // This can happen if someone pauses us in a resume callback, for example.
            return;
        }
        if (this._request !== undefined) {
            return;
        }
        if (this._resumable) {
            if (this._uploadUrl === undefined) {
                this._createResumable();
            }
            else {
                if (this._needToFetchStatus) {
                    this._fetchStatus();
                }
                else {
                    if (this._needToFetchMetadata) {
                        // Happens if we miss the metadata on upload completion.
                        this._fetchMetadata();
                    }
                    else {
                        this.pendingTimeout = setTimeout(() => {
                            this.pendingTimeout = undefined;
                            this._continueUpload();
                        }, this.sleepTime);
                    }
                }
            }
        }
        else {
            this._oneShotUpload();
        }
    }
    _resolveToken(callback) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.all([
            this._ref.storage._getAuthToken(),
            this._ref.storage._getAppCheckToken()
        ]).then(([authToken, appCheckToken]) => {
            switch (this._state) {
                case "running" /* InternalTaskState.RUNNING */:
                    callback(authToken, appCheckToken);
                    break;
                case "canceling" /* InternalTaskState.CANCELING */:
                    this._transition("canceled" /* InternalTaskState.CANCELED */);
                    break;
                case "pausing" /* InternalTaskState.PAUSING */:
                    this._transition("paused" /* InternalTaskState.PAUSED */);
                    break;
            }
        });
    }
    // TODO(andysoto): assert false
    _createResumable() {
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = createResumableUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const createRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = createRequest;
            createRequest.getPromise().then((url) => {
                this._request = undefined;
                this._uploadUrl = url;
                this._needToFetchStatus = false;
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _fetchStatus() {
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = getResumableUploadStatus(this._ref.storage, this._ref._location, url, this._blob);
            const statusRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = statusRequest;
            statusRequest.getPromise().then(status => {
                status = status;
                this._request = undefined;
                this._updateProgress(status.current);
                this._needToFetchStatus = false;
                if (status.finalized) {
                    this._needToFetchMetadata = true;
                }
                this.completeTransitions_();
            }, this._errorHandler);
        });
    }
    _continueUpload() {
        const chunkSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        const status = new ResumableUploadStatus(this._transferred, this._blob.size());
        // TODO(andysoto): assert(this.uploadUrl_ !== null);
        const url = this._uploadUrl;
        this._resolveToken((authToken, appCheckToken) => {
            let requestInfo;
            try {
                requestInfo = continueResumableUpload(this._ref._location, this._ref.storage, url, this._blob, chunkSize, this._mappings, status, this._makeProgressCallback());
            }
            catch (e) {
                this._error = e;
                this._transition("error" /* InternalTaskState.ERROR */);
                return;
            }
            const uploadRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken, 
            /*retry=*/ false // Upload requests should not be retried as each retry should be preceded by another query request. Which is handled in this file.
            );
            this._request = uploadRequest;
            uploadRequest.getPromise().then((newStatus) => {
                this._increaseMultiplier();
                this._request = undefined;
                this._updateProgress(newStatus.current);
                if (newStatus.finalized) {
                    this._metadata = newStatus.metadata;
                    this._transition("success" /* InternalTaskState.SUCCESS */);
                }
                else {
                    this.completeTransitions_();
                }
            }, this._errorHandler);
        });
    }
    _increaseMultiplier() {
        const currentSize = RESUMABLE_UPLOAD_CHUNK_SIZE * this._chunkMultiplier;
        // Max chunk size is 32M.
        if (currentSize * 2 < 32 * 1024 * 1024) {
            this._chunkMultiplier *= 2;
        }
    }
    _fetchMetadata() {
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = getMetadata$2(this._ref.storage, this._ref._location, this._mappings);
            const metadataRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = metadataRequest;
            metadataRequest.getPromise().then(metadata => {
                this._request = undefined;
                this._metadata = metadata;
                this._transition("success" /* InternalTaskState.SUCCESS */);
            }, this._metadataErrorHandler);
        });
    }
    _oneShotUpload() {
        this._resolveToken((authToken, appCheckToken) => {
            const requestInfo = multipartUpload(this._ref.storage, this._ref._location, this._mappings, this._blob, this._metadata);
            const multipartRequest = this._ref.storage._makeRequest(requestInfo, newTextConnection, authToken, appCheckToken);
            this._request = multipartRequest;
            multipartRequest.getPromise().then(metadata => {
                this._request = undefined;
                this._metadata = metadata;
                this._updateProgress(this._blob.size());
                this._transition("success" /* InternalTaskState.SUCCESS */);
            }, this._errorHandler);
        });
    }
    _updateProgress(transferred) {
        const old = this._transferred;
        this._transferred = transferred;
        // A progress update can make the "transferred" value smaller (e.g. a
        // partial upload not completed by server, after which the "transferred"
        // value may reset to the value at the beginning of the request).
        if (this._transferred !== old) {
            this._notifyObservers();
        }
    }
    _transition(state) {
        if (this._state === state) {
            return;
        }
        switch (state) {
            case "canceling" /* InternalTaskState.CANCELING */:
            case "pausing" /* InternalTaskState.PAUSING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                if (this._request !== undefined) {
                    this._request.cancel();
                }
                else if (this.pendingTimeout) {
                    clearTimeout(this.pendingTimeout);
                    this.pendingTimeout = undefined;
                    this.completeTransitions_();
                }
                break;
            case "running" /* InternalTaskState.RUNNING */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.PAUSING);
                const wasPaused = this._state === "paused" /* InternalTaskState.PAUSED */;
                this._state = state;
                if (wasPaused) {
                    this._notifyObservers();
                    this._start();
                }
                break;
            case "paused" /* InternalTaskState.PAUSED */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSING);
                this._state = state;
                this._notifyObservers();
                break;
            case "canceled" /* InternalTaskState.CANCELED */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.PAUSED ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._error = canceled();
                this._state = state;
                this._notifyObservers();
                break;
            case "error" /* InternalTaskState.ERROR */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
            case "success" /* InternalTaskState.SUCCESS */:
                // TODO(andysoto):
                // assert(this.state_ === InternalTaskState.RUNNING ||
                //        this.state_ === InternalTaskState.PAUSING ||
                //        this.state_ === InternalTaskState.CANCELING);
                this._state = state;
                this._notifyObservers();
                break;
        }
    }
    completeTransitions_() {
        switch (this._state) {
            case "pausing" /* InternalTaskState.PAUSING */:
                this._transition("paused" /* InternalTaskState.PAUSED */);
                break;
            case "canceling" /* InternalTaskState.CANCELING */:
                this._transition("canceled" /* InternalTaskState.CANCELED */);
                break;
            case "running" /* InternalTaskState.RUNNING */:
                this._start();
                break;
        }
    }
    /**
     * A snapshot of the current task state.
     */
    get snapshot() {
        const externalState = taskStateFromInternalTaskState(this._state);
        return {
            bytesTransferred: this._transferred,
            totalBytes: this._blob.size(),
            state: externalState,
            metadata: this._metadata,
            task: this,
            ref: this._ref
        };
    }
    /**
     * Adds a callback for an event.
     * @param type - The type of event to listen for.
     * @param nextOrObserver -
     *     The `next` function, which gets called for each item in
     *     the event stream, or an observer object with some or all of these three
     *     properties (`next`, `error`, `complete`).
     * @param error - A function that gets called with a `StorageError`
     *     if the event stream ends due to an error.
     * @param completed - A function that gets called if the
     *     event stream ends normally.
     * @returns
     *     If only the event argument is passed, returns a function you can use to
     *     add callbacks (see the examples above). If more than just the event
     *     argument is passed, returns a function you can call to unregister the
     *     callbacks.
     */
    on(type, nextOrObserver, error, completed) {
        // Note: `type` isn't being used. Its type is also incorrect. TaskEvent should not be a string.
        const observer = new Observer(nextOrObserver || undefined, error || undefined, completed || undefined);
        this._addObserver(observer);
        return () => {
            this._removeObserver(observer);
        };
    }
    /**
     * This object behaves like a Promise, and resolves with its snapshot data
     * when the upload completes.
     * @param onFulfilled - The fulfillment callback. Promise chaining works as normal.
     * @param onRejected - The rejection callback.
     */
    then(onFulfilled, onRejected) {
        // These casts are needed so that TypeScript can infer the types of the
        // resulting Promise.
        return this._promise.then(onFulfilled, onRejected);
    }
    /**
     * Equivalent to calling `then(null, onRejected)`.
     */
    catch(onRejected) {
        return this.then(null, onRejected);
    }
    /**
     * Adds the given observer.
     */
    _addObserver(observer) {
        this._observers.push(observer);
        this._notifyObserver(observer);
    }
    /**
     * Removes the given observer.
     */
    _removeObserver(observer) {
        const i = this._observers.indexOf(observer);
        if (i !== -1) {
            this._observers.splice(i, 1);
        }
    }
    _notifyObservers() {
        this._finishPromise();
        const observers = this._observers.slice();
        observers.forEach(observer => {
            this._notifyObserver(observer);
        });
    }
    _finishPromise() {
        if (this._resolve !== undefined) {
            let triggered = true;
            switch (taskStateFromInternalTaskState(this._state)) {
                case TaskState.SUCCESS:
                    dist_index_esm_async(this._resolve.bind(null, this.snapshot))();
                    break;
                case TaskState.CANCELED:
                case TaskState.ERROR:
                    const toCall = this._reject;
                    dist_index_esm_async(toCall.bind(null, this._error))();
                    break;
                default:
                    triggered = false;
                    break;
            }
            if (triggered) {
                this._resolve = undefined;
                this._reject = undefined;
            }
        }
    }
    _notifyObserver(observer) {
        const externalState = taskStateFromInternalTaskState(this._state);
        switch (externalState) {
            case TaskState.RUNNING:
            case TaskState.PAUSED:
                if (observer.next) {
                    dist_index_esm_async(observer.next.bind(observer, this.snapshot))();
                }
                break;
            case TaskState.SUCCESS:
                if (observer.complete) {
                    dist_index_esm_async(observer.complete.bind(observer))();
                }
                break;
            case TaskState.CANCELED:
            case TaskState.ERROR:
                if (observer.error) {
                    dist_index_esm_async(observer.error.bind(observer, this._error))();
                }
                break;
            default:
                // TODO(andysoto): assert(false);
                if (observer.error) {
                    dist_index_esm_async(observer.error.bind(observer, this._error))();
                }
        }
    }
    /**
     * Resumes a paused task. Has no effect on a currently running or failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    resume() {
        const valid = this._state === "paused" /* InternalTaskState.PAUSED */ ||
            this._state === "pausing" /* InternalTaskState.PAUSING */;
        if (valid) {
            this._transition("running" /* InternalTaskState.RUNNING */);
        }
        return valid;
    }
    /**
     * Pauses a currently running task. Has no effect on a paused or failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    pause() {
        const valid = this._state === "running" /* InternalTaskState.RUNNING */;
        if (valid) {
            this._transition("pausing" /* InternalTaskState.PAUSING */);
        }
        return valid;
    }
    /**
     * Cancels a currently running or paused task. Has no effect on a complete or
     * failed task.
     * @returns True if the operation took effect, false if ignored.
     */
    cancel() {
        const valid = this._state === "running" /* InternalTaskState.RUNNING */ ||
            this._state === "pausing" /* InternalTaskState.PAUSING */;
        if (valid) {
            this._transition("canceling" /* InternalTaskState.CANCELING */);
        }
        return valid;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides methods to interact with a bucket in the Firebase Storage service.
 * @internal
 * @param _location - An fbs.location, or the URL at
 *     which to base this object, in one of the following forms:
 *         gs://<bucket>/<object-path>
 *         http[s]://firebasestorage.googleapis.com/
 *                     <api-version>/b/<bucket>/o/<object-path>
 *     Any query or fragment strings will be ignored in the http[s]
 *     format. If no value is passed, the storage object will use a URL based on
 *     the project ID of the base firebase.App instance.
 */
class Reference {
    constructor(_service, location) {
        this._service = _service;
        if (location instanceof Location) {
            this._location = location;
        }
        else {
            this._location = Location.makeFromUrl(location, _service.host);
        }
    }
    /**
     * Returns the URL for the bucket and path this object references,
     *     in the form gs://<bucket>/<object-path>
     * @override
     */
    toString() {
        return 'gs://' + this._location.bucket + '/' + this._location.path;
    }
    _newRef(service, location) {
        return new Reference(service, location);
    }
    /**
     * A reference to the root of this object's bucket.
     */
    get root() {
        const location = new Location(this._location.bucket, '');
        return this._newRef(this._service, location);
    }
    /**
     * The name of the bucket containing this reference's object.
     */
    get bucket() {
        return this._location.bucket;
    }
    /**
     * The full path of this object.
     */
    get fullPath() {
        return this._location.path;
    }
    /**
     * The short name of this object, which is the last component of the full path.
     * For example, if fullPath is 'full/path/image.png', name is 'image.png'.
     */
    get name() {
        return lastComponent(this._location.path);
    }
    /**
     * The `StorageService` instance this `StorageReference` is associated with.
     */
    get storage() {
        return this._service;
    }
    /**
     * A `StorageReference` pointing to the parent location of this `StorageReference`, or null if
     * this reference is the root.
     */
    get parent() {
        const newPath = index_esm_parent(this._location.path);
        if (newPath === null) {
            return null;
        }
        const location = new Location(this._location.bucket, newPath);
        return new Reference(this._service, location);
    }
    /**
     * Utility function to throw an error in methods that do not accept a root reference.
     */
    _throwIfRoot(name) {
        if (this._location.path === '') {
            throw invalidRootOperation(name);
        }
    }
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded bytes.
 */
function getBytesInternal(ref, maxDownloadSizeBytes) {
    ref._throwIfRoot('getBytes');
    const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
    return ref.storage
        .makeRequestWithTokens(requestInfo, newBytesConnection)
        .then(bytes => maxDownloadSizeBytes !== undefined
        ? // GCS may not honor the Range header for small files
            bytes.slice(0, maxDownloadSizeBytes)
        : bytes);
}
/**
 * Download the bytes at the object's location.
 * @returns A Promise containing the downloaded blob.
 */
function getBlobInternal(ref, maxDownloadSizeBytes) {
    ref._throwIfRoot('getBlob');
    const requestInfo = getBytes$1(ref.storage, ref._location, maxDownloadSizeBytes);
    return ref.storage
        .makeRequestWithTokens(requestInfo, newBlobConnection)
        .then(blob => maxDownloadSizeBytes !== undefined
        ? // GCS may not honor the Range header for small files
            blob.slice(0, maxDownloadSizeBytes)
        : blob);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 *
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns A Promise containing an UploadResult
 */
function uploadBytes$1(ref, data, metadata) {
    ref._throwIfRoot('uploadBytes');
    const requestInfo = multipartUpload(ref.storage, ref._location, getMappings(), new FbsBlob(data, true), metadata);
    return ref.storage
        .makeRequestWithTokens(requestInfo, newTextConnection)
        .then(finalMetadata => {
        return {
            metadata: finalMetadata,
            ref
        };
    });
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - StorageReference where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the newly uploaded data.
 * @returns An UploadTask
 */
function uploadBytesResumable$1(ref, data, metadata) {
    ref._throwIfRoot('uploadBytesResumable');
    return new UploadTask(ref, new FbsBlob(data), metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - StorageReference where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the newly uploaded string.
 * @returns A Promise containing an UploadResult
 */
function uploadString$1(ref, value, format = StringFormat.RAW, metadata) {
    ref._throwIfRoot('uploadString');
    const data = dataFromString(format, value);
    const metadataClone = { ...metadata };
    if (metadataClone['contentType'] == null && data.contentType != null) {
        metadataClone['contentType'] = data.contentType;
    }
    return uploadBytes$1(ref, data.data, metadataClone);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: listAll may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - StorageReference to get list from.
 *
 * @returns A Promise that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */
function listAll$1(ref) {
    const accumulator = {
        prefixes: [],
        items: []
    };
    return listAllHelper(ref, accumulator).then(() => accumulator);
}
/**
 * Separated from listAll because async functions can't use "arguments".
 * @param ref
 * @param accumulator
 * @param pageToken
 */
async function listAllHelper(ref, accumulator, pageToken) {
    const opt = {
        // maxResults is 1000 by default.
        pageToken
    };
    const nextPage = await list$1(ref, opt);
    accumulator.prefixes.push(...nextPage.prefixes);
    accumulator.items.push(...nextPage.items);
    if (nextPage.nextPageToken != null) {
        await listAllHelper(ref, accumulator, nextPage.nextPageToken);
    }
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - StorageReference to get list from.
 * @param options - See ListOptions for details.
 * @returns A Promise that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */
function list$1(ref, options) {
    if (options != null) {
        if (typeof options.maxResults === 'number') {
            validateNumber('options.maxResults', 
            /* minValue= */ 1, 
            /* maxValue= */ 1000, options.maxResults);
        }
    }
    const op = options || {};
    const requestInfo = list$2(ref.storage, ref._location, 
    /*delimiter= */ '/', op.pageToken, op.maxResults);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retrieved, the promise is
 * rejected.
 * @public
 * @param ref - StorageReference to get metadata from.
 */
function getMetadata$1(ref) {
    ref._throwIfRoot('getMetadata');
    const requestInfo = getMetadata$2(ref.storage, ref._location, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - StorageReference to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves
 *     with the new metadata for this object.
 *     See `firebaseStorage.Reference.prototype.getMetadata`
 */
function updateMetadata$1(ref, metadata) {
    ref._throwIfRoot('updateMetadata');
    const requestInfo = updateMetadata$2(ref.storage, ref._location, metadata, getMappings());
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns the download URL for the given Reference.
 * @public
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */
function getDownloadURL$1(ref) {
    ref._throwIfRoot('getDownloadURL');
    const requestInfo = getDownloadUrl(ref.storage, ref._location, getMappings());
    return ref.storage
        .makeRequestWithTokens(requestInfo, newTextConnection)
        .then(url => {
        if (url === null) {
            throw noDownloadURL();
        }
        return url;
    });
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - StorageReference for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */
function deleteObject$1(ref) {
    ref._throwIfRoot('deleteObject');
    const requestInfo = deleteObject$2(ref.storage, ref._location);
    return ref.storage.makeRequestWithTokens(requestInfo, newTextConnection);
}
/**
 * Returns reference for object obtained by appending `childPath` to `ref`.
 *
 * @param ref - StorageReference to get child of.
 * @param childPath - Child path from provided ref.
 * @returns A reference to the object obtained by
 * appending childPath, removing any duplicate, beginning, or trailing
 * slashes.
 *
 */
function _getChild$1(ref, childPath) {
    const newPath = child(ref._location.path, childPath);
    const location = new Location(ref._location.bucket, newPath);
    return new Reference(ref.storage, location);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isUrl(path) {
    return /^[A-Za-z]+:\/\//.test(path);
}
/**
 * Returns a firebaseStorage.Reference for the given url.
 */
function refFromURL(service, url) {
    return new Reference(service, url);
}
/**
 * Returns a firebaseStorage.Reference for the given path in the default
 * bucket.
 */
function refFromPath(ref, path) {
    if (ref instanceof FirebaseStorageImpl) {
        const service = ref;
        if (service._bucket == null) {
            throw noDefaultBucket();
        }
        const reference = new Reference(service, service._bucket);
        if (path != null) {
            return refFromPath(reference, path);
        }
        else {
            return reference;
        }
    }
    else {
        // ref is a Reference
        if (path !== undefined) {
            return _getChild$1(ref, path);
        }
        else {
            return ref;
        }
    }
}
function ref$1(serviceOrRef, pathOrUrl) {
    if (pathOrUrl && isUrl(pathOrUrl)) {
        if (serviceOrRef instanceof FirebaseStorageImpl) {
            return refFromURL(serviceOrRef, pathOrUrl);
        }
        else {
            throw invalidArgument('To use ref(service, url), the first argument must be a Storage instance.');
        }
    }
    else {
        return refFromPath(serviceOrRef, pathOrUrl);
    }
}
function extractBucket(host, config) {
    const bucketString = config?.[CONFIG_STORAGE_BUCKET_KEY];
    if (bucketString == null) {
        return null;
    }
    return Location.makeFromBucketSpec(bucketString, host);
}
function connectStorageEmulator$1(storage, host, port, options = {}) {
    storage.host = `${host}:${port}`;
    const useSsl = index_esm_isCloudWorkstation(host);
    // Workaround to get cookies in Firebase Studio
    if (useSsl) {
        void index_esm_pingServer(`https://${storage.host}/b`);
        index_esm_updateEmulatorBanner('Storage', true);
    }
    storage._isUsingEmulator = true;
    storage._protocol = useSsl ? 'https' : 'http';
    const { mockUserToken } = options;
    if (mockUserToken) {
        storage._overrideAuthToken =
            typeof mockUserToken === 'string'
                ? mockUserToken
                : index_esm_createMockUserToken(mockUserToken, storage.app.options.projectId);
    }
}
/**
 * A service that provides Firebase Storage Reference instances.
 * @param opt_url - gs:// url to a custom Storage Bucket
 *
 * @internal
 */
class FirebaseStorageImpl {
    constructor(
    /**
     * FirebaseApp associated with this StorageService instance.
     */
    app, _authProvider, 
    /**
     * @internal
     */
    _appCheckProvider, 
    /**
     * @internal
     */
    _url, _firebaseVersion, _isUsingEmulator = false) {
        this.app = app;
        this._authProvider = _authProvider;
        this._appCheckProvider = _appCheckProvider;
        this._url = _url;
        this._firebaseVersion = _firebaseVersion;
        this._isUsingEmulator = _isUsingEmulator;
        this._bucket = null;
        /**
         * This string can be in the formats:
         * - host
         * - host:port
         */
        this._host = DEFAULT_HOST;
        this._protocol = 'https';
        this._appId = null;
        this._deleted = false;
        this._maxOperationRetryTime = DEFAULT_MAX_OPERATION_RETRY_TIME;
        this._maxUploadRetryTime = DEFAULT_MAX_UPLOAD_RETRY_TIME;
        this._requests = new Set();
        if (_url != null) {
            this._bucket = Location.makeFromBucketSpec(_url, this._host);
        }
        else {
            this._bucket = extractBucket(this._host, this.app.options);
        }
    }
    /**
     * The host string for this service, in the form of `host` or
     * `host:port`.
     */
    get host() {
        return this._host;
    }
    set host(host) {
        this._host = host;
        if (this._url != null) {
            this._bucket = Location.makeFromBucketSpec(this._url, host);
        }
        else {
            this._bucket = extractBucket(host, this.app.options);
        }
    }
    /**
     * The maximum time to retry uploads in milliseconds.
     */
    get maxUploadRetryTime() {
        return this._maxUploadRetryTime;
    }
    set maxUploadRetryTime(time) {
        validateNumber('time', 
        /* minValue=*/ 0, 
        /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxUploadRetryTime = time;
    }
    /**
     * The maximum time to retry operations other than uploads or downloads in
     * milliseconds.
     */
    get maxOperationRetryTime() {
        return this._maxOperationRetryTime;
    }
    set maxOperationRetryTime(time) {
        validateNumber('time', 
        /* minValue=*/ 0, 
        /* maxValue= */ Number.POSITIVE_INFINITY, time);
        this._maxOperationRetryTime = time;
    }
    async _getAuthToken() {
        if (this._overrideAuthToken) {
            return this._overrideAuthToken;
        }
        const auth = this._authProvider.getImmediate({ optional: true });
        if (auth) {
            const tokenData = await auth.getToken();
            if (tokenData !== null) {
                return tokenData.accessToken;
            }
        }
        return null;
    }
    async _getAppCheckToken() {
        if (_isFirebaseServerApp(this.app) && this.app.settings.appCheckToken) {
            return this.app.settings.appCheckToken;
        }
        const appCheck = this._appCheckProvider.getImmediate({ optional: true });
        if (appCheck) {
            const result = await appCheck.getToken();
            // TODO: What do we want to do if there is an error getting the token?
            // Context: appCheck.getToken() will never throw even if an error happened. In the error case, a dummy token will be
            // returned along with an error field describing the error. In general, we shouldn't care about the error condition and just use
            // the token (actual or dummy) to send requests.
            return result.token;
        }
        return null;
    }
    /**
     * Stop running requests and prevent more from being created.
     */
    _delete() {
        if (!this._deleted) {
            this._deleted = true;
            this._requests.forEach(request => request.cancel());
            this._requests.clear();
        }
        return Promise.resolve();
    }
    /**
     * Returns a new firebaseStorage.Reference object referencing this StorageService
     * at the given Location.
     */
    _makeStorageReference(loc) {
        return new Reference(this, loc);
    }
    /**
     * @param requestInfo - HTTP RequestInfo object
     * @param authToken - Firebase auth token
     */
    _makeRequest(requestInfo, requestFactory, authToken, appCheckToken, retry = true) {
        if (!this._deleted) {
            const request = makeRequest(requestInfo, this._appId, authToken, appCheckToken, requestFactory, this._firebaseVersion, retry, this._isUsingEmulator);
            this._requests.add(request);
            // Request removes itself from set when complete.
            request.getPromise().then(() => this._requests.delete(request), () => this._requests.delete(request));
            return request;
        }
        else {
            return new FailRequest(appDeleted());
        }
    }
    async makeRequestWithTokens(requestInfo, requestFactory) {
        const [authToken, appCheckToken] = await Promise.all([
            this._getAuthToken(),
            this._getAppCheckToken()
        ]);
        return this._makeRequest(requestInfo, requestFactory, authToken, appCheckToken).getPromise();
    }
}

const dist_index_esm_name = "@firebase/storage";
const dist_index_esm_version = "0.14.1";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Storage.
 */
const STORAGE_TYPE = 'storage';

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise containing the object's bytes
 */
function getBytes(ref, maxDownloadSizeBytes) {
    ref = index_esm_getModularInstance(ref);
    return getBytesInternal(ref, maxDownloadSizeBytes);
}
/**
 * Uploads data to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns A Promise containing an UploadResult
 */
function uploadBytes(ref, data, metadata) {
    ref = index_esm_getModularInstance(ref);
    return uploadBytes$1(ref, data, metadata);
}
/**
 * Uploads a string to this object's location.
 * The upload is not resumable.
 * @public
 * @param ref - {@link StorageReference} where string should be uploaded.
 * @param value - The string to upload.
 * @param format - The format of the string to upload.
 * @param metadata - Metadata for the string to upload.
 * @returns A Promise containing an UploadResult
 */
function uploadString(ref, value, format, metadata) {
    ref = index_esm_getModularInstance(ref);
    return uploadString$1(ref, value, format, metadata);
}
/**
 * Uploads data to this object's location.
 * The upload can be paused and resumed, and exposes progress updates.
 * @public
 * @param ref - {@link StorageReference} where data should be uploaded.
 * @param data - The data to upload.
 * @param metadata - Metadata for the data to upload.
 * @returns An UploadTask
 */
function uploadBytesResumable(ref, data, metadata) {
    ref = index_esm_getModularInstance(ref);
    return uploadBytesResumable$1(ref, data, metadata);
}
/**
 * A `Promise` that resolves with the metadata for this object. If this
 * object doesn't exist or metadata cannot be retrieved, the promise is
 * rejected.
 * @public
 * @param ref - {@link StorageReference} to get metadata from.
 */
function getMetadata(ref) {
    ref = index_esm_getModularInstance(ref);
    return getMetadata$1(ref);
}
/**
 * Updates the metadata for this object.
 * @public
 * @param ref - {@link StorageReference} to update metadata for.
 * @param metadata - The new metadata for the object.
 *     Only values that have been explicitly set will be changed. Explicitly
 *     setting a value to null will remove the metadata.
 * @returns A `Promise` that resolves with the new metadata for this object.
 */
function updateMetadata(ref, metadata) {
    ref = index_esm_getModularInstance(ref);
    return updateMetadata$1(ref, metadata);
}
/**
 * List items (files) and prefixes (folders) under this storage reference.
 *
 * List API is only available for Firebase Rules Version 2.
 *
 * GCS is a key-blob store. Firebase Storage imposes the semantic of '/'
 * delimited folder structure.
 * Refer to GCS's List API if you want to learn more.
 *
 * To adhere to Firebase Rules's Semantics, Firebase Storage does not
 * support objects whose paths end with "/" or contain two consecutive
 * "/"s. Firebase Storage List API will filter these unsupported objects.
 * list() may fail if there are too many unsupported objects in the bucket.
 * @public
 *
 * @param ref - {@link StorageReference} to get list from.
 * @param options - See {@link ListOptions} for details.
 * @returns A `Promise` that resolves with the items and prefixes.
 *      `prefixes` contains references to sub-folders and `items`
 *      contains references to objects in this folder. `nextPageToken`
 *      can be used to get the rest of the results.
 */
function list(ref, options) {
    ref = index_esm_getModularInstance(ref);
    return list$1(ref, options);
}
/**
 * List all items (files) and prefixes (folders) under this storage reference.
 *
 * This is a helper method for calling list() repeatedly until there are
 * no more results. The default pagination size is 1000.
 *
 * Note: The results may not be consistent if objects are changed while this
 * operation is running.
 *
 * Warning: `listAll` may potentially consume too many resources if there are
 * too many results.
 * @public
 * @param ref - {@link StorageReference} to get list from.
 *
 * @returns A `Promise` that resolves with all the items and prefixes under
 *      the current storage reference. `prefixes` contains references to
 *      sub-directories and `items` contains references to objects in this
 *      folder. `nextPageToken` is never returned.
 */
function listAll(ref) {
    ref = index_esm_getModularInstance(ref);
    return listAll$1(ref);
}
/**
 * Returns the download URL for the given {@link StorageReference}.
 * @public
 * @param ref - {@link StorageReference} to get the download URL for.
 * @returns A `Promise` that resolves with the download
 *     URL for this object.
 */
function getDownloadURL(ref) {
    ref = index_esm_getModularInstance(ref);
    return getDownloadURL$1(ref);
}
/**
 * Deletes the object at this location.
 * @public
 * @param ref - {@link StorageReference} for object to delete.
 * @returns A `Promise` that resolves if the deletion succeeds.
 */
function deleteObject(ref) {
    ref = index_esm_getModularInstance(ref);
    return deleteObject$1(ref);
}
function ref(serviceOrRef, pathOrUrl) {
    serviceOrRef = index_esm_getModularInstance(serviceOrRef);
    return ref$1(serviceOrRef, pathOrUrl);
}
/**
 * @internal
 */
function _getChild(ref, childPath) {
    return _getChild$1(ref, childPath);
}
/**
 * Gets a {@link FirebaseStorage} instance for the given Firebase app.
 * @public
 * @param app - Firebase app to get {@link FirebaseStorage} instance for.
 * @param bucketUrl - The gs:// url to your Firebase Storage Bucket.
 * If not passed, uses the app's default Storage Bucket.
 * @returns A {@link FirebaseStorage} instance.
 */
function getStorage(app = index_esm_getApp(), bucketUrl) {
    app = index_esm_getModularInstance(app);
    const storageProvider = index_esm_getProvider(app, STORAGE_TYPE);
    const storageInstance = storageProvider.getImmediate({
        identifier: bucketUrl
    });
    const emulator = index_esm_getDefaultEmulatorHostnameAndPort('storage');
    if (emulator) {
        connectStorageEmulator(storageInstance, ...emulator);
    }
    return storageInstance;
}
/**
 * Modify this {@link FirebaseStorage} instance to communicate with the Cloud Storage emulator.
 *
 * @param storage - The {@link FirebaseStorage} instance
 * @param host - The emulator host (ex: localhost)
 * @param port - The emulator port (ex: 5001)
 * @param options - Emulator options. `options.mockUserToken` is the mock auth
 * token to use for unit testing Security Rules.
 * @public
 */
function connectStorageEmulator(storage, host, port, options = {}) {
    connectStorageEmulator$1(storage, host, port, options);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Downloads the data at the object's location. Returns an error if the object
 * is not found.
 *
 * To use this functionality, you have to whitelist your app's origin in your
 * Cloud Storage bucket. See also
 * https://cloud.google.com/storage/docs/configuring-cors
 *
 * This API is not available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A Promise that resolves with a Blob containing the object's bytes
 */
function getBlob(ref, maxDownloadSizeBytes) {
    ref = index_esm_getModularInstance(ref);
    return getBlobInternal(ref, maxDownloadSizeBytes);
}
/**
 * Downloads the data at the object's location. Raises an error event if the
 * object is not found.
 *
 * This API is only available in Node.
 *
 * @public
 * @param ref - StorageReference where data should be downloaded.
 * @param maxDownloadSizeBytes - If set, the maximum allowed size in bytes to
 * retrieve.
 * @returns A stream with the object's data as bytes
 */
function getStream(ref, maxDownloadSizeBytes) {
    throw new Error('getStream() is only supported by NodeJS builds');
}

/**
 * Cloud Storage for Firebase
 *
 * @packageDocumentation
 */
function factory(container, { instanceIdentifier: url }) {
    const app = container.getProvider('app').getImmediate();
    const authProvider = container.getProvider('auth-internal');
    const appCheckProvider = container.getProvider('app-check-internal');
    return new FirebaseStorageImpl(app, authProvider, appCheckProvider, url, SDK_VERSION);
}
function registerStorage() {
    _registerComponent(new Component(STORAGE_TYPE, factory, "PUBLIC" /* ComponentType.PUBLIC */).setMultipleInstances(true));
    //RUNTIME_ENV will be replaced during the compilation to "node" for nodejs and an empty string for browser
    registerVersion(dist_index_esm_name, dist_index_esm_version, '');
    // BUILD_TARGET will be replaced by values like esm, cjs, etc during the compilation
    registerVersion(dist_index_esm_name, dist_index_esm_version, 'esm2020');
}
registerStorage();


//# sourceMappingURL=index.esm.js.map

;// ./node_modules/firebase/storage/dist/esm/index.esm.js

//# sourceMappingURL=index.esm.js.map

;// ./js/global_function_set.mjs
/* unused harmony import specifier */ var undefined_not_is_assert_json;
/* unused harmony import specifier */ var global_function_set_global_get;
/* unused harmony import specifier */ var global_function_set_property_set;



function global_function_set(fn, value) {
  undefined_not_is_assert_json(value, {
    hint: "the value to store on the global shouldn't be undefined — did it fail to compute?",
  });
  let global = global_function_set_global_get();
  global_function_set_property_set(global, fn.name, value);
}

;// ./js/global_function_initialize_null.mjs
/* unused harmony import specifier */ var global_function_initialize_null_global_function_initialize;

function global_function_initialize_null(fn) {
  let value = global_function_initialize_null_global_function_initialize(fn, null);
  return value;
}

;// ./js/log_inner.mjs
/* unused harmony import specifier */ var log_console;
/* unused harmony import specifier */ var log_inner_global_function_set;
/* unused harmony import specifier */ var list_add_first;
/* unused harmony import specifier */ var equal_not;
/* unused harmony import specifier */ var log_inner_global_function_initialize_null;
/* unused harmony import specifier */ var log_inner_each;






function log_inner(f_name, message) {
  let list = [message];
  let value = log_inner_global_function_initialize_null(log_inner);
  if (equal_not(value, f_name)) {
    log_inner_global_function_set(log_inner, f_name);
    list_add_first(list, f_name);
  }
  log_inner_each(list, log_console);
}

;// ./js/log_keep.mjs
/* unused harmony import specifier */ var log_keep_fn_name;
/* unused harmony import specifier */ var log_keep_log_inner;


function log_keep(f_name, message) {
  ("see: ", log_keep_fn_name("js_log_remove_workflow"));
  ("The pointer above is spelled as a name rather than imported. Naming it by value pulled the whole log-removing workflow - the js parser, the rewriter and the file writers behind it - into every command that could ever log a line, which is 90 of the 295 files a command loads, for a word meant only to tell a reader where to look. A name written this way is still followed by ",
    log_keep_fn_name("function_rename"),
    ", so the pointer keeps working and costs nothing.");
  log_keep_log_inner(f_name, message);
}

;// ./js/firebase_upload_text_generic_browser.mjs
/* unused harmony import specifier */ var firebase_upload_text_generic_browser_html_loading;
/* unused harmony import specifier */ var firebase_upload_text_generic_browser_firebase_app_initialize;
/* unused harmony import specifier */ var firebase_upload_text_generic_browser_getStorage;
/* unused harmony import specifier */ var firebase_upload_text_generic_browser_ref;
/* unused harmony import specifier */ var firebase_upload_text_generic_browser_uploadString;
/* unused harmony import specifier */ var firebase_upload_text_generic_browser_log_keep;




async function firebase_upload_text_generic_browser(
  destination,
  content,
) {
  async function lambda() {
    let app = await firebase_upload_text_generic_browser_firebase_app_initialize();
    ('const storageMod = await import(\n      "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js"\n    );');
    let storage = firebase_upload_text_generic_browser_getStorage(app);
    let jsonRef = firebase_upload_text_generic_browser_ref(storage, destination);
    await firebase_upload_text_generic_browser_uploadString(jsonRef, content, "raw", {
      contentType: "application/json",
    });
    firebase_upload_text_generic_browser_log_keep(
      firebase_upload_text_generic_browser.name,
      "✅ JSON uploaded successfully",
    );
  }
  let r = await firebase_upload_text_generic_browser_html_loading(lambda);
  return r;
}

;// ./js/firebase_upload_object_browser.mjs
/* unused harmony import specifier */ var firebase_upload_object_browser_firebase_upload_text_generic_browser;
/* unused harmony import specifier */ var firebase_upload_object_browser_property_get;
/* unused harmony import specifier */ var firebase_upload_object_arg;



async function firebase_upload_object_browser(destination, object) {
  var r = firebase_upload_object_arg(object);
  let content = firebase_upload_object_browser_property_get(r, "content");
  await firebase_upload_object_browser_firebase_upload_text_generic_browser(destination, content);
}

;// ./js/app_shared_contact_send.mjs
/* unused harmony import specifier */ var app_shared_contact_send_app_shared_contact_user_id;
/* unused harmony import specifier */ var messages_firebase_path;
/* unused harmony import specifier */ var file_name_json;
/* unused harmony import specifier */ var app_shared_contact_send_firebase_upload_object_browser;
/* unused harmony import specifier */ var date_now_iso;
/* unused harmony import specifier */ var app_shared_contact_send_uuid;
/* unused harmony import specifier */ var app_shared_contact_send_text_combine_multiple;







async function app_shared_contact_send(from, message) {
  "send one message to the developer's inbox: <messages path>/<device id>/<message id>.json = { from, message, when }. `from` names the app the person is writing about so a reply knows the context. The one send used by every app's Contact screen and by the message app.";
  let user_id = await app_shared_contact_send_app_shared_contact_user_id();
  let message_id = await app_shared_contact_send_uuid();
  let file_name = app_shared_contact_send_text_combine_multiple([
    messages_firebase_path(),
    user_id,
    "/",
    message_id,
  ]);
  let file_path = file_name_json(file_name);
  await app_shared_contact_send_firebase_upload_object_browser(file_path, {
    from,
    message,
    when: date_now_iso(),
  });
}

;// ./js/storage_local_set_context.mjs
/* unused harmony import specifier */ var storage_local_set_context_storage_local_set;

function storage_local_set_context(context, key, value) {
  let { app_fn } = context;
  storage_local_set_context_storage_local_set(app_fn, key, value);
}

;// ./js/app_shared_font_size_generic.mjs
/* unused harmony import specifier */ var app_shared_font_size_key;
/* unused harmony import specifier */ var app_shared_font_size_generic_storage_local_initialize_context;


function app_shared_font_size_generic(context, value_default) {
  "the size this reader chose for this app, or the size the app opens at when they have never chosen one. one place holds the stored word, so every app spells it the same and a reader's choice is never filed under two names";
  "the starting size is asked for rather than fixed here, because apps do not all read at the same scale: a reading app sets its text directly, while the game renders its words through a 1.2em token and so starts from a smaller root to land in the same place";
  let key = app_shared_font_size_key();
  let value = app_shared_font_size_generic_storage_local_initialize_context(context, key, value_default);
  return value;
}

;// ./js/app_shared_font_size.mjs
/* unused harmony import specifier */ var app_shared_font_size_default;
/* unused harmony import specifier */ var app_shared_font_size_app_shared_font_size_generic;


function app_shared_font_size(context) {
  let value_default = app_shared_font_size_default();
  let value = app_shared_font_size_app_shared_font_size_generic(context, value_default);
  return value;
}

;// ./js/app_shared_font_size_refresh.mjs
/* unused harmony import specifier */ var app_shared_font_size_refresh_generic;
/* unused harmony import specifier */ var app_shared_font_size_refresh_app_shared_font_size;


function app_shared_font_size_refresh(context) {
  let value = app_shared_font_size_refresh_app_shared_font_size(context);
  app_shared_font_size_refresh_generic(context, value);
}

;// ./js/app_message.mjs
/* unused harmony import specifier */ var app_message_app_message_refresh;
/* unused harmony import specifier */ var app_message_app_message_messages_get;
/* unused harmony import specifier */ var app_message_html_font_sans_serif_set_html;
/* unused harmony import specifier */ var html_textarea;
/* unused harmony import specifier */ var object_merge_set;
/* unused harmony import specifier */ var html_value_set;
/* unused harmony import specifier */ var app_message_list_empty_is;
/* unused harmony import specifier */ var app_message_reply_messages_matches;
/* unused harmony import specifier */ var app_message_property_get;
/* unused harmony import specifier */ var app_message_reply_choices;
/* unused harmony import specifier */ var app_message_app_shared_contact_send;
/* unused harmony import specifier */ var app_message_storage_local_set_context;
/* unused harmony import specifier */ var html_value_get;
/* unused harmony import specifier */ var app_message_list_add;
/* unused harmony import specifier */ var app_message_html_div;
/* unused harmony import specifier */ var html_check_empty_not;
/* unused harmony import specifier */ var app_karate_screen_input_validate;
/* unused harmony import specifier */ var emoji_email;
/* unused harmony import specifier */ var app_shared_button_green;
/* unused harmony import specifier */ var html_focus;
/* unused harmony import specifier */ var html_placeholder;
/* unused harmony import specifier */ var html_div_text;
/* unused harmony import specifier */ var app_shared_container;
/* unused harmony import specifier */ var app_message_app_shared_font_size_refresh;
/* unused harmony import specifier */ var app_shared_input_style;
/* unused harmony import specifier */ var app_message_text_combine;


























async function app_message(context) {
  let messages_property = "messages";
  let app_fn = app_message;
  let root = app_message_property_get(context, "root");
  object_merge_set(context, {
    app_fn,
  });
  app_message_app_shared_font_size_refresh(context);
  app_message_html_font_sans_serif_set_html();
  let div_messages = app_message_html_div(root);
  let start = app_message_reply_choices();
  await app_message_app_message_refresh(div_messages, context, messages_property, start);
  let div = app_shared_container(root);
  html_div_text(div, "Please enter your message for me:");
  let textarea = html_textarea(div);
  html_placeholder(textarea, "Please enter your message here");
  app_shared_input_style(textarea);
  html_focus(textarea);
  let div_checks = app_message_html_div(div);
  let left = emoji_email();
  let text = app_message_text_combine(left, " Send");
  let button_send = app_shared_button_green(div, text, on_send);
  let v = html_check_empty_not();
  app_karate_screen_input_validate(div, div_checks, [textarea], button_send, [
    v,
  ]);
  async function on_send() {
    let message = html_value_get(textarea);
    html_value_set(textarea, "");
    let results = await app_message_reply_messages_matches([message], start);
    let ei = app_message_list_empty_is(results);
    if (ei) {
      ("no canned reply matched, so this is something for the developer to read — send it to the inbox tagged as coming from the message app");
      await app_message_app_shared_contact_send("message", message);
    }
    let messages = app_message_app_message_messages_get(context, messages_property);
    app_message_list_add(messages, message);
    app_message_storage_local_set_context(context, messages_property, messages);
    await app_message_app_message_refresh(div_messages, context, messages_property, start);
  }
}

;// ./js/html_clear.mjs

function html_clear_html_clear(element) {
  html_text_set_html_text_set(element, "");
}

;// ./js/app_sandbox_spinner_preview.mjs

async function app_sandbox_spinner_preview() {
  "preview the loading overlay (breathing spinner + 'One moment, please' text over its dimmed backdrop); select it with the URL hash #spinner_preview";
  html_loading_overlay();
}

;// ./js/number_pad_2.mjs
function number_pad_2(n) {
  "a number as a two-digit zero-padded string: 3 becomes '03', 12 stays '12'";
  let s = String(n);
  let padded = s.padStart(2, "0");
  return padded;
}

;// ./js/date_local_iso.mjs


function date_local_iso(d) {
  "a Date rendered as 'YYYY-MM-DD' using its local year, month, and day (not UTC)";
  let year = d.getFullYear();
  let month = number_pad_2(d.getMonth() + 1);
  let n = d.getDate();
  let day = number_pad_2(n);
  let iso = text_combine_multiple([year, "-", month, "-", day]);
  return iso;
}

;// ./js/date_today_iso.mjs

function date_today_iso() {
  "today's calendar date in the browser's local time, as 'YYYY-MM-DD'";
  let now = new Date();
  let iso = date_local_iso(now);
  return iso;
}

;// ./js/text_split.mjs
function text_split(s, separator) {
  let split = s.split(separator);
  return split;
}

;// ./js/list_second.mjs

function list_second(list) {
  let index = 1;
  let second = list_get(list, index);
  return second;
}

;// ./js/list_size.mjs


function list_size(list) {
  list_is_assert_json(list, {
    hint: text_combine_multiple([list_size.name, " expects a list to measure"]),
  });
  let size = list.length;
  return size;
}

;// ./js/list_size_equal.mjs



function list_size_equal(list, size) {
  "$plain list";
  "$plain size";
  arguments_assert(arguments, 2);
  ("Whether a list holds exactly the number of things you name.");
  ("The general one. Three named answers to this question already stood - empty, one and two - each written out where the number was known while it was being written, and nothing at all where the number is worked out first.");
  let actual = list_size(list);
  let same = equal(actual, size);
  return same;
}

;// ./js/list_empty_is.mjs

function list_empty_is_list_empty_is(list) {
  let e = list_size_equal(list, 0);
  return e;
}

;// ./js/list_empty_not_is.mjs


function list_empty_not_is(list) {
  let a = list_empty_is_list_empty_is(list);
  let ne = not(a);
  return ne;
}

;// ./js/list_empty_not_is_assert_json.mjs


function list_empty_not_is_assert_json(list, json) {
  let ne = list_empty_not_is(list);
  assert_json(ne, {
    list,
    json,
  });
}

;// ./js/list_index_end.mjs


function list_index_end(list, index_from_end) {
  let v = subtract(subtract(list_size(list), 1), index_from_end);
  return v;
}

;// ./js/list_get_end.mjs


function list_get_end(list, index_from_end) {
  let difference = list_index_end(list, index_from_end);
  let item = list_get(list, difference);
  return item;
}

;// ./js/list_last.mjs


function list_last(list) {
  list_empty_not_is_assert_json(list, {
    hint: "the list should have at least one item to take its last — was it empty?",
  });
  let last = list_get_end(list, 0);
  return last;
}

;// ./js/date_from_iso.mjs





function date_from_iso(iso) {
  "a 'YYYY-MM-DD' string as a local-time Date at midnight, parsed by parts so it never shifts a day the way UTC parsing can";
  let parts = text_split(iso, "-");
  let first = list_first(parts);
  let year = Number(first);
  let second = list_second(parts);
  let month = Number(second);
  let last = list_last(parts);
  let day = Number(last);
  let difference = subtract(month, 1);
  let d = new Date(year, difference, day);
  return d;
}

;// ./js/date_add_days.mjs


function date_add_days(iso, n) {
  "the calendar date n days after iso, as 'YYYY-MM-DD'; n may be negative, and month and year roll over correctly";
  let d = date_from_iso(iso);
  let v = d.getFullYear();
  let v2 = d.getMonth();
  let shifted = new Date(v, v2, d.getDate() + n);
  let out = date_local_iso(shifted);
  return out;
}

;// ./js/date_week_sunday.mjs


function date_week_sunday(iso) {
  "the Sunday that begins the week containing iso, as 'YYYY-MM-DD'";
  let d = date_from_iso(iso);
  let weekday = d.getDay();
  let sunday = date_add_days(iso, -weekday);
  return sunday;
}

;// ./js/week_dates.mjs



function week_dates(sunday_iso) {
  "the seven 'YYYY-MM-DD' dates of the week that starts on the given Sunday, Sunday first";
  let offsets = numbers_up_to(7);
  function to_date(offset) {
    let iso = date_add_days(sunday_iso, offset);
    return iso;
  }
  let dates = list_map_list_map(offsets, to_date);
  return dates;
}

;// ./js/app_shared_spaced_tiny_gap.mjs
function app_shared_spaced_tiny_gap() {
  let v = "0.25em";
  return v;
}

;// ./js/html_style_margin_top.mjs

function html_style_margin_top(component, value) {
  html_style_set(component, "margin-top", value);
}

;// ./js/html_style_margin_bottom.mjs

function html_style_margin_bottom(component, value) {
  html_style_set(component, "margin-bottom", value);
}

;// ./js/html_style_margin_y.mjs


function html_style_margin_y(component, value) {
  html_style_margin_top(component, value);
  html_style_margin_bottom(component, value);
}

;// ./js/app_shared_text_body.mjs



function app_shared_text_body(parent, text) {
  let p = html_p_text(parent, text);
  let value = app_shared_spaced_tiny_gap();
  html_style_margin_y(p, value);
  return p;
}

;// ./js/app_shared_text_deemphasized_color.mjs
function app_shared_text_deemphasized_color() {
  let c = "#64748b";
  return c;
}

;// ./js/app_shared_text_deemphasized_color_variable.mjs
function app_shared_text_deemphasized_color_variable() {
  "the name a container uses to tell the quieted-down words inside it what colour to be, for the containers whose own colour the ordinary grey would nearly disappear into.";
  let v = "--text-deemphasized-color";
  return v;
}

;// ./js/html_font_color_set.mjs


function html_font_color_set(component, color) {
  arguments_assert(arguments, 2);
  html_style_set(component, "color", color);
}

;// ./js/html_style_variable_or.mjs


function html_style_variable_or(name, value_without) {
  "the way to write a style value that asks a variable first and falls back to a plain value where nothing set one. So a part can be styled once, and still answer differently inside a container that has something to say about it.";
  arguments_assert(arguments, 2);
  let written = text_combine_multiple(["var(", name, ", ", value_without, ")"]);
  return written;
}

;// ./js/app_shared_text_deemphasized.mjs





function app_shared_text_deemphasized(component) {
  "the grey a word steps back into, unless the container it sits in has named another one - a container painted a strong dark colour does, because this grey is nearly as dark as that.";
  arguments_assert(arguments, 1);
  let color_plain = app_shared_text_deemphasized_color();
  let name = app_shared_text_deemphasized_color_variable();
  let color = html_style_variable_or(name, color_plain);
  html_font_color_set(component, color);
}

;// ./js/week_calendar_summary_empty.mjs



function week_calendar_summary_empty(summary) {
  arguments_assert(arguments, 1);
  let none = app_shared_text_body(
    summary,
    "No times chosen yet — click a piece to start",
  );
  app_shared_text_deemphasized(none);
}

;// ./js/week_calendar_render_summary.mjs





function week_calendar_render_summary(summary, ranges, summary_line) {
  arguments_assert(arguments, 3);
  html_clear_html_clear(summary);
  let has = list_empty_not_is(ranges);
  if (has) {
    each(ranges, summary_line);
  } else {
    week_calendar_summary_empty(summary);
  }
}

;// ./js/week_calendar_paint.mjs



function week_calendar_paint(
  records,
  paint_record,
  summary,
  ranges,
  summary_line,
) {
  arguments_assert(arguments, 5);
  each(records, paint_record);
  week_calendar_render_summary(summary, ranges, summary_line);
}

;// ./js/app_shared_color_gray_light.mjs
function app_shared_color_gray_light() {
  "a light neutral gray — the default button fill, so black button text reads clearly against it";
  let c = "#e5e7eb";
  return c;
}

;// ./js/function_is.mjs

function function_is(f) {
  let fi = equal(typeof f, "function");
  return fi;
}

;// ./js/function_is_assert_json.mjs


function function_is_assert_json(lambda, json) {
  let fi = function_is(lambda);
  assert_json(fi, {
    lambda,
    json,
  });
}

;// ./js/html_on.mjs


function html_on(component, name_event, lambda) {
  function_is_assert_json(lambda, {
    hint: "the event handler should be a function to attach to the element",
    name_event,
  });
  let element = html_component_element_get(component);
  element.addEventListener(name_event, lambda);
  function remove() {
    element.removeEventListener(name_event, lambda);
  }
  return remove;
}

;// ./js/html_cursor_pointer.mjs

function html_cursor_pointer(component) {
  html_style_set(component, "cursor", "pointer");
}

;// ./js/html_on_click.mjs


function html_on_click(component, lambda) {
  let name_event = "click";
  html_on(component, name_event, lambda);
  html_cursor_pointer(component);
}

;// ./js/week_calendar_day_cell.mjs






function week_calendar_day_cell(day, slot, grid, cell_pressed, records) {
  arguments_assert(arguments, 5);
  let cell = html_div(grid);
  let c = app_shared_color_gray_light();
  html_style_assign(cell, {
    height: "1.9rem",
    border: `1px solid ${c}`,
    "box-sizing": "border-box",
  });
  function on_press() {
    cell_pressed(day, slot);
  }
  html_on_click(cell, on_press);
  list_add(records, {
    day: day,
    slot: slot,
    element: cell,
  });
}

;// ./js/week_calendar_anchor_is.mjs



function week_calendar_anchor_is(day, slot, anchor) {
  arguments_assert(arguments, 3);
  let live = not_equal(anchor, null);
  let same = live && equal(anchor.day, day) && equal(anchor.slot, slot);
  return same;
}

;// ./js/greater_than_equal.mjs
function greater_than_equal(a, b) {
  let ge = a >= b;
  return ge;
}

;// ./js/less_than_equal.mjs
function less_than_equal(a, b) {
  let le = a <= b;
  return le;
}

;// ./js/week_calendar_range_covers.mjs




function week_calendar_range_covers(span, day, slot) {
  arguments_assert(arguments, 3);
  let same_day = equal(span.day, day);
  let after_start = greater_than_equal(slot, span.start);
  let before_end = less_than_equal(slot, span.end);
  let covers = same_day && after_start && before_end;
  return covers;
}

;// ./js/list_filter.mjs

function list_filter(list, lambda$item) {
  list_is_assert_json(list, {
    hint: "list_filter expects a list to filter",
  });
  function list_filter_lambda(item) {
    let match = lambda$item(item);
    return match;
  }
  let filtered = list.filter(list_filter_lambda);
  return filtered;
}

;// ./js/list_any.mjs


function list_any(list, lambda$item) {
  let filtered = list_filter(list, lambda$item);
  let any = list_empty_not_is(filtered);
  return any;
}

;// ./js/week_calendar_selected_is.mjs



function week_calendar_selected_is(day, slot, ranges) {
  arguments_assert(arguments, 3);
  function in_range(span) {
    let r = week_calendar_range_covers(span, day, slot);
    return r;
  }
  let found = list_any(ranges, in_range);
  return found;
}

;// ./js/app_shared_color_blue_dark.mjs
function app_shared_color_blue_dark() {
  "the deepest step of the graduated blue scale — for text/labels on blue containers";
  let c = "rgb(30, 82, 145)";
  return c;
}

;// ./js/app_shared_color_blue_pale.mjs
function app_shared_color_blue_pale() {
  let c = "rgb(152, 203, 255)";
  return c;
}

;// ./js/floor.mjs
function floor(p) {
  let floored = Math.floor(p);
  return floored;
}

;// ./js/divide_floor.mjs



function divide_floor(number, divisor) {
  arguments_assert(arguments, 2);
  ("One number shared out among another, kept to whole ones - anything left over is");
  ("dropped.");
  ("How many whole rows a list fills, which page a position lands on, how many");
  ("whole minutes a count of seconds comes to. All of them share out and then");
  ("throw the fraction away, and the fraction in between has no meaning of its own");
  ("in any of them.");
  let shared = divide(number, divisor);
  let whole = floor(shared);
  return whole;
}

;// ./js/week_calendar_color_empty.mjs



function week_calendar_color_empty(slot) {
  "the background colour of an unselected 30-minute piece: alternating light bands per hour (plain white, then a faint grey) so it is easy to tell one hour from the next";
  let hour = divide_floor(slot, 2);
  let even_hour = integer_even_is(hour);
  let c = even_hour ? "#ffffff" : app_shared_color_gray_light();
  return c;
}

;// ./js/week_calendar_record_color.mjs






function week_calendar_record_color(record, anchor, ranges) {
  arguments_assert(arguments, 3);
  let is_anchor = week_calendar_anchor_is(record.day, record.slot, anchor);
  let is_selected = week_calendar_selected_is(record.day, record.slot, ranges);
  let anchor_color = app_shared_color_blue_dark();
  let selected_color = app_shared_color_blue_pale();
  let empty_color = week_calendar_color_empty(record.slot);
  let chosen = is_anchor
    ? anchor_color
    : is_selected
      ? selected_color
      : empty_color;
  return chosen;
}

;// ./js/math_max.mjs
function math_max(a, b) {
  let m = Math.max(a, b);
  return m;
}

;// ./js/week_calendar_ranges_merged.mjs







function week_calendar_ranges_merged(sorted) {
  arguments_assert(arguments, 1);
  ("join overlapping or touching windows on the same day into one: walk the day-then-start sorted list, growing the current window whenever the next one starts within a piece of its end");
  let out = [];
  let current = null;
  function flush() {
    if (not_equal(current, null)) {
      list_add(out, current);
    }
  }
  function fold(span) {
    let live = not_equal(current, null);
    let joins =
      live &&
      equal(current.day, span.day) &&
      less_than_equal(span.start, current.end + 1);
    if (joins) {
      let end = math_max(current.end, span.end);
      current = {
        day: current.day,
        start: current.start,
        end: end,
      };
    } else {
      flush();
      current = {
        day: span.day,
        start: span.start,
        end: span.end,
      };
    }
  }
  each(sorted, fold);
  flush();
  return out;
}

;// ./js/math_min.mjs
function math_min(a, b) {
  let m = Math.min(a, b);
  return m;
}

;// ./js/week_day_names.mjs
function week_day_names() {
  "the seven weekday names in order, starting on Sunday, as short labels for calendar column headers";
  let names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return names;
}

;// ./js/date_weekday_short.mjs



function date_weekday_short(iso) {
  "the short weekday name for a 'YYYY-MM-DD' date, e.g. 'Sun'";
  let d = date_from_iso(iso);
  let index = d.getDay();
  let names = week_day_names();
  let name = property_get(names, index);
  return name;
}

;// ./js/date_month_day.mjs

function date_month_day(iso) {
  "a 'YYYY-MM-DD' date as a short 'Mon D' label in the browser's locale, e.g. 'Aug 3'";
  let d = date_from_iso(iso);
  let options = {
    month: "short",
    day: "numeric",
  };
  let label = d.toLocaleDateString("en-US", options);
  return label;
}

;// ./js/app_shared_spaced_frame_gap.mjs
function app_shared_spaced_frame_gap() {
  "the space a card that only frames other cards keeps on every side - thinner than the tiny gap a card holding words of its own wears, because the book picker nests four of these one inside the next and every one of them is paid for twice, once off the height of the page and once off the width of the row inside";
  let v = "0.1em";
  return v;
}

;// ./js/html_border_radius.mjs

function html_border_radius(component, border_radius) {
  html_style_set(component, "border-radius", border_radius);
}

;// ./js/html_style_padding.mjs

function html_style_padding(component, value) {
  html_style_set(component, "padding", value);
}

;// ./js/html_style_padding_em.mjs


function html_style_padding_em(p, value_em) {
  html_style_padding(p, text_combine(value_em, "em"));
}

;// ./js/html_box_shadow_set.mjs

function html_box_shadow_set(component, style_value) {
  html_style_set(component, "box-shadow", style_value);
}

;// ./js/app_shared_border_radius_card.mjs
function app_shared_border_radius_card() {
  let v = "1.2em";
  return v;
}

;// ./js/html_card.mjs




function html_card(component) {
  html_border_radius(component, app_shared_border_radius_card());
  html_style_padding_em(component, "0.6");
  html_box_shadow_set(component, "0 2px 6px rgba(0, 0, 0, 0.12)");
}

;// ./js/app_shared_container_base.mjs



function app_shared_container_base(parent) {
  let div = html_div(parent);
  html_card(div);
  html_style_margin_y(div, "10px");
  return div;
}

;// ./js/html_style_background_color_set.mjs

function html_style_background_color_set_html_style_background_color_set(component, background) {
  html_style_set(component, "background-color", background);
}

;// ./js/html_border.mjs

function html_border(component, border_width, border_color) {
  html_style_assign(component, {
    "border-width": border_width,
    "border-color": border_color,
    "border-style": "solid",
  });
}

;// ./js/app_shared_container_blue_background_color.mjs
function app_shared_container_blue_background_color() {
  let c = "rgb(228, 241, 255)";
  return c;
}

;// ./js/app_shared_container_blue.mjs






function app_shared_container_blue(parent) {
  let div = app_shared_container_base(parent);
  html_style_background_color_set_html_style_background_color_set(
    div,
    app_shared_container_blue_background_color(),
  );
  html_border(div, app_shared_spaced_frame_gap(), app_shared_color_blue_pale());
  return div;
}

;// ./js/html_div_text.mjs


function html_div_text_html_div_text(parent, text) {
  let div = html_div(parent);
  html_text_set_html_text_set(div, text);
  return div;
}

;// ./js/hour_12_shown.mjs



function hour_12_shown(hour) {
  arguments_assert(arguments, 1);
  ("The number a twelve-hour clock face shows for an hour of the day counted from zero to twenty-three: 0 and 12 both show 12, 13 shows 1, 23 shows 11.");
  ("Midnight and midday are the whole reason this is not just the remainder. Counting round by twelve leaves nothing at all for those two, and a clock has no nought on it - the hour a clock never shows is the one every plain remainder hands back.");
  let twelve_hour = modulo(hour, 12);
  let none = equal(twelve_hour, 0);
  let shown = none ? 12 : twelve_hour;
  return shown;
}

;// ./js/hour_12_suffix.mjs


function hour_12_suffix(hour) {
  arguments_assert(arguments, 1);
  ("Which half of the day an hour counted from zero to twenty-three falls in, written the way a twelve-hour clock label ends: ' AM' before midday and ' PM' from midday on.");
  ("The space in front belongs to the word rather than to the caller, because every caller wants it and one that forgot it would read as a single run of letters and digits.");
  let afternoon = greater_than_equal(hour, 12);
  let suffix = afternoon ? " PM" : " AM";
  return suffix;
}

;// ./js/hour_label_12.mjs



function hour_label_12(hour) {
  "an hour of the day from 0 to 23 as a 12-hour clock label with AM or PM: 0 is '12 AM', 12 is '12 PM', 13 is '1 PM'";
  let shown = hour_12_shown(hour);
  let suffix = hour_12_suffix(hour);
  let label = text_combine_multiple([shown, suffix]);
  return label;
}

;// ./js/slot_hour_label.mjs




function slot_hour_label(slot) {
  "the clock label shown beside a 30-minute piece: the 12-hour hour name at the start of each hour (piece 0 is '12 AM', piece 18 is '9 AM'), and an empty string on the half-hour piece so each hour is labelled once";
  let on_the_hour = integer_even_is(slot);
  if (not(on_the_hour)) {
    let r = "";
    return r;
  }
  let hour = divide(slot, 2);
  let label = hour_label_12(hour);
  return label;
}

;// ./js/clock_label.mjs






function clock_label(boundary) {
  "a half-hour boundary index (0 is midnight, 2 is 1 AM, 34 is 5 PM) as a short 12-hour clock label, dropping the minutes on the hour: 6 is '3 AM', 7 is '3:30 AM', 34 is '5 PM'";
  let left = divide_floor(boundary, 2);
  let hour = modulo(left, 24);
  let on_hour = integer_even_is(boundary);
  let shown = hour_12_shown(hour);
  let suffix = hour_12_suffix(hour);
  let minutes = on_hour ? "" : ":30";
  let label = text_combine_multiple([shown, minutes, suffix]);
  return label;
}

;// ./js/week_range_label.mjs




function week_range_label(span) {
  "a chosen window as a readable line like 'Sun Aug 3 · 2:30 AM – 7 AM': the weekday and date, then the time span";
  let weekday = date_weekday_short(span.day);
  let month_day = date_month_day(span.day);
  let start = clock_label(span.start);
  let end = clock_label(span.end + 1);
  let label = text_combine_multiple([
    weekday,
    " ",
    month_day,
    " · ",
    start,
    " – ",
    end,
  ]);
  return label;
}

;// ./js/date_iso_days.mjs


function date_iso_days(iso) {
  "the whole number of days from the epoch to a 'YYYY-MM-DD' date, used to sort dates chronologically";
  let d = date_from_iso(iso);
  let ms = d.getTime();
  let days = divide_floor(ms, 86400000);
  return days;
}

;// ./js/week_range_sort_key.mjs


function week_range_sort_key(span) {
  "a number that orders windows chronologically by date then by start piece: the date's day-number times 48, plus the start piece";
  let days = date_iso_days(span.day);
  let key = multiply(days, 48) + span.start;
  return key;
}

;// ./js/less_than.mjs
function less_than(a, b) {
  let l = a < b;
  return l;
}

;// ./js/greater_than.mjs
function greater_than_greater_than(a, b) {
  let g = a > b;
  return g;
}

;// ./js/list_sort_number_mapper.mjs


function list_sort_number_mapper(list, lambda$item) {
  function lambda(a, b) {
    let va = lambda$item(a);
    let vb = lambda$item(b);
    if (less_than(va, vb)) {
      let r = -1;
      return r;
    }
    if (greater_than_greater_than(va, vb)) {
      let r2 = 1;
      return r2;
    }
    let r3 = 0;
    return r3;
  }
  list.sort(lambda);
  return list;
}

;// ./js/week_calendar.mjs






























function week_calendar(parent, dates, initial_ranges, on_ranges) {
  "weekly availability grid from midnight to midnight in 30-minute pieces across the 7 days; a chosen-windows list sits on top, then the grid; click a piece to start a range then click another piece in the same day to select every piece between them; click a selected piece to back up a step — the range collapses to a fresh anchor on its far end, ready to re-draw — then click that anchor again to clear it; reports the sorted windows to on_ranges after each change";
  let days = dates;
  let slots = numbers_up_to(48);
  let ranges = initial_ranges;
  let anchor = null;
  let records = [];
  let root = app_shared_container_blue(parent);
  let heading = html_div_text_html_div_text(root, "Selected times");
  html_style_assign(heading, {
    "font-weight": "bold",
    "margin-bottom": "0.25rem",
  });
  let summary = html_div(root);
  html_style_assign(summary, {
    "margin-bottom": "0.75rem",
  });
  let grid = html_div(root);
  html_style_assign(grid, {
    display: "grid",
    width: "100%",
    "grid-template-columns": "auto repeat(7, 1fr)",
    gap: "0",
  });
  html_div_text_html_div_text(grid, "");
  each(days, header_cell);
  each(slots, slot_row);
  week_calendar_paint(records, paint_record, summary, ranges, summary_line);
  function header_cell(day) {
    let weekday = date_weekday_short(day);
    let month_day = date_month_day(day);
    let text = text_combine_multiple([weekday, " ", month_day]);
    let head = html_div_text_html_div_text(grid, text);
    html_style_assign(head, {
      "font-weight": "bold",
      "text-align": "center",
      padding: "0.2rem 0.3rem",
      "font-size": "0.8rem",
    });
  }
  function slot_row(slot) {
    let text = slot_hour_label(slot);
    let label = html_div_text_html_div_text(grid, text);
    app_shared_text_deemphasized(label);
    html_style_assign(label, {
      "font-size": "0.75rem",
      "text-align": "right",
      padding: "0 0.4rem",
    });
    function day_of_slot(day) {
      week_calendar_day_cell(day, slot, grid, cell_pressed, records);
    }
    each(days, day_of_slot);
  }
  function paint_record(record) {
    let color = week_calendar_record_color(record, anchor, ranges);
    html_style_background_color_set_html_style_background_color_set(record.element, color);
  }
  function summary_line(span) {
    let text = week_range_label(span);
    app_shared_text_body(summary, text);
  }
  function range_add(day, a, b) {
    let start = math_min(a, b);
    let end = math_max(a, b);
    list_add(ranges, {
      day: day,
      start: start,
      end: end,
    });
    list_sort_number_mapper(ranges, week_range_sort_key);
    ranges = week_calendar_ranges_merged(ranges);
  }
  function endpoint_back_up(day, slot) {
    let next = [];
    function handle(span) {
      let covers = week_calendar_range_covers(span, day, slot);
      if (not(covers)) {
        list_add(next, span);
      } else {
        far_anchor_set(span, slot);
      }
    }
    each(ranges, handle);
    ranges = next;
  }
  function far_anchor_set(span, slot) {
    "backing up a step: drop the whole range and re-plant the anchor on its far end — the endpoint furthest from the clicked piece — so the next click re-draws the range from there; a lone one-piece range just clears";
    let single = equal(span.start, span.end);
    if (not(single)) {
      let distance_start = subtract(slot, span.start);
      let distance_end = subtract(span.end, slot);
      let far_first = greater_than_equal(distance_start, distance_end);
      let keep = far_first ? span.start : span.end;
      anchor = {
        day: span.day,
        slot: keep,
      };
    }
  }
  function cell_pressed(day, slot) {
    let has_anchor = not_equal(anchor, null);
    if (has_anchor) {
      anchor_click(day, slot);
    } else {
      free_click(day, slot);
    }
    week_calendar_paint(records, paint_record, summary, ranges, summary_line);
  }
  function anchor_click(day, slot) {
    let same_piece = equal(anchor.day, day) && equal(anchor.slot, slot);
    let same_day = equal(anchor.day, day);
    if (same_piece) {
      anchor = null;
    } else if (same_day) {
      range_add(day, anchor.slot, slot);
      anchor = null;
      on_ranges(ranges);
    } else {
      anchor = {
        day: day,
        slot: slot,
      };
    }
  }
  function free_click(day, slot) {
    let selected = week_calendar_selected_is(day, slot, ranges);
    if (selected) {
      endpoint_back_up(day, slot);
      on_ranges(ranges);
    } else {
      anchor = {
        day: day,
        slot: slot,
      };
    }
  }
}

;// ./js/week_calendar_current.mjs





function week_calendar_current(parent, initial, on_ranges) {
  arguments_assert(arguments, 3);
  ("Show the weekly grid for the week today falls in.");
  ("Every caller of the grid wants this week - the owner choosing when they can");
  ("preach, and the sandbox previewing the same grid - so all of them worked out");
  ("today, then which Sunday began it, then that week's dates, before handing the");
  ("grid the same three things it always gets.");
  ("Which week is shown is not what a caller of a weekly calendar is deciding, so");
  ("it is decided once here. A caller wanting some other week wants the grid");
  ("itself, which still takes the dates.");
  let iso = date_today_iso();
  let sunday = date_week_sunday(iso);
  let dates = week_dates(sunday);
  week_calendar(parent, dates, initial, on_ranges);
}

;// ./js/html_document_body.mjs

function html_document_body() {
  let body_element = document.body;
  let body = html_component_wrap(body_element);
  return body;
}

;// ./js/html_body_div.mjs



function html_body_div() {
  "Create a div as a direct child of the document body and return it — the recurring";
  "make-a-cover-on-the-body opening that six overlays hand-wrote.";
  arguments_assert(arguments, 0);
  let body = html_document_body();
  let cover = html_div(body);
  return cover;
}

;// ./js/json_from.mjs
function json_from(json) {
  let parsed = JSON.parse(json);
  return parsed;
}

;// ./js/storage_json_parse_or_throw.mjs


function storage_json_parse_or_throw(storage_local_key, json) {
  "a bare parse throws an opaque error naming no key — a corrupt stored value must fail LOUD at its source: name the key, keep the raw bytes, per error-early";
  try {
    let parsed = json_from(json);
    return parsed;
  } catch (parse_error) {
    let message = text_combine_multiple([
      "storage corrupt at ",
      storage_local_key,
      ": ",
      parse_error.message,
    ]);
    let corrupt = new Error(message);
    corrupt.storage_corrupt = true;
    corrupt.storage_local_key = storage_local_key;
    corrupt.raw = json;
    throw corrupt;
  }
}

;// ./js/storage_json_value_or_null.mjs




function storage_json_value_or_null(key, json) {
  arguments_assert(arguments, 2);
  ("Unwrap what a browser store handed back: nothing kept under that key answers");
  ("null, and anything else is read as the wrapper every writer here puts a value");
  ("in and handed back as the value alone.");
  ("Both readers - the one over local storage and the one over session storage -");
  ("ended in these same five lines. The stores differ only in which of them a key");
  ("belongs to, and that difference is spent before the read comes back, so from");
  ("the string onward there was never a second thing to do.");
  ("The key travels with the string only so a store holding something that is not");
  ("this wrapper can be complained about by name.");
  let held = null_not_is(json);
  let result = null;
  if (held) {
    let parsed = storage_json_parse_or_throw(key, json);
    result = property_get(parsed, "value");
  }
  return result;
}

;// ./js/storage_local_specify_get_json.mjs
function storage_local_specify_get_json(storage_local_key) {
  let r = localStorage.getItem(storage_local_key);
  return r;
}

;// ./js/storage_local_specify_get.mjs


function storage_local_specify_get_storage_local_specify_get(storage_local_key) {
  let json = storage_local_specify_get_json(storage_local_key);
  let result = storage_json_value_or_null(storage_local_key, json);
  return result;
}

;// ./js/week_calendar_preview.mjs






function week_calendar_preview() {
  ("preview the weekly grid on the sandbox app at #",
    fn_name("week_calendar"),
    " for the current week; selections are kept in local storage so a refresh restores them");
  let root = html_body_div();
  let key = "week_calendar_preview_ranges";
  let saved = storage_local_specify_get_storage_local_specify_get(key);
  let initial = equal(saved, null) ? [] : saved;
  function on_ranges(ranges) {
    storage_local_specify_set(key, ranges);
  }
  week_calendar_current(root, initial, on_ranges);
}

;// ./js/date_year.mjs

function date_year(iso) {
  "the four-digit year of a 'YYYY-MM-DD' date, as a number";
  let d = date_from_iso(iso);
  let year = d.getFullYear();
  return year;
}

;// ./js/date_month_day_year.mjs

function date_month_day_year(iso) {
  "a 'YYYY-MM-DD' date as a 'Mon D, YYYY' label in the browser's locale, e.g. 'Aug 3, 2026'";
  let d = date_from_iso(iso);
  let options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  let label = d.toLocaleDateString("en-US", options);
  return label;
}

;// ./js/availability_editor_update_week_label.mjs









function availability_editor_update_week_label(dates, week_label) {
  arguments_assert(arguments, 2);
  let first = list_first(dates);
  let last = list_last(dates);
  let left = date_year(first);
  let right = date_year(last);
  let same_year = equal(left, right);
  let start_label = same_year
    ? date_month_day(first)
    : date_month_day_year(first);
  let end_label = date_month_day_year(last);
  let text = text_combine_multiple([
    "Week of: ",
    start_label,
    " – ",
    end_label,
  ]);
  html_text_set_html_text_set(week_label, text);
}

;// ./js/availability_editor_render_grid.mjs





function availability_editor_render_grid(
  grid_holder,
  week_start,
  ranges,
  on_grid_ranges,
  week_label,
) {
  arguments_assert(arguments, 5);
  html_clear_html_clear(grid_holder);
  let dates = week_dates(week_start);
  week_calendar(grid_holder, dates, ranges, on_grid_ranges);
  availability_editor_update_week_label(dates, week_label);
}

;// ./js/app_shared_button_uncolored_background_color.mjs

function app_shared_button_uncolored_background_color_app_shared_button_uncolored_background_color() {
  "the neutral button fill — light gray, so black text reads clearly; it's the single source the default button, toggle-unchosen state, and message buttons all draw from";
  let v = app_shared_color_gray_light();
  return v;
}

;// ./js/app_shared_button_background_color.mjs

function app_shared_button_background_color() {
  "the default button IS the neutral fill — delegate to the one source so default, toggle-unchosen, and message buttons never drift apart";
  let c = app_shared_button_uncolored_background_color_app_shared_button_uncolored_background_color();
  return c;
}

;// ./js/html_style_line_height.mjs

function html_style_line_height(component, value) {
  html_style_set(component, "line-height", value);
}

;// ./js/html_style_padding_y.mjs

function html_style_padding_y(component, value) {
  html_style_assign(component, {
    "padding-top": value,
    "padding-bottom": value,
  });
}

;// ./js/html_style_padding_x.mjs

function html_style_padding_x(component, value) {
  html_style_assign(component, {
    "padding-left": value,
    "padding-right": value,
  });
}

;// ./js/html_border_none.mjs

function html_border_none(b) {
  html_style_set(b, "border", "none");
}

;// ./js/html_style_margin_x.mjs

function html_style_margin_x(component, value) {
  html_style_assign(component, {
    "margin-left": value,
    "margin-right": value,
  });
}

;// ./js/html_margin.mjs


function html_margin(b, value) {
  html_style_margin_x(b, value);
  html_style_margin_y(b, value);
}

;// ./js/html_margin_em.mjs


function html_margin_em(component, margin) {
  let margin_em = text_combine(margin, "em");
  html_margin(component, margin_em);
}

;// ./js/app_shared_border_radius.mjs
function app_shared_border_radius() {
  let v = "0.5em";
  return v;
}

;// ./js/app_shared_symbol_tile_style_inner.mjs







function app_shared_symbol_tile_style_inner(b) {
  html_border_radius(b, app_shared_border_radius());
  html_border_none(b);
  html_style_padding_x(b, "0.37em");
  html_style_padding_y(b, app_shared_spaced_frame_gap());
  html_margin_em(b, 0.09);
}

;// ./js/html_display_inline_block.mjs

function html_display_inline_block(item) {
  html_style_set(item, "display", "inline-block");
}

;// ./js/app_shared_symbol_tile_style.mjs



function app_shared_symbol_tile_style(b) {
  app_shared_symbol_tile_style_inner(b);
  html_display_inline_block(b);
  html_style_line_height(b, 1);
}

;// ./js/app_shared_color_gray_medium.mjs

function app_shared_color_gray_medium() {
  ("a soft neutral gray for the button border - lighter than ",
    fn_name("app_shared_color_gray"),
    " (#9ca3af) so the outline reads gentle, still dark enough to stay visible on the gray_light button fill (#e5e7eb)");
  let c = "#bfc4cc";
  return c;
}

;// ./js/app_shared_button_style.mjs





function app_shared_button_style(b) {
  app_shared_symbol_tile_style(b);
  let c = app_shared_button_background_color();
  html_style_background_color_set_html_style_background_color_set(b, c);
  ("the border is one step lighter than plain gray (gray_medium is #aeb4be, between gray-300 and gray-400) - visible on the gray_light fill without reading as heavy. The earlier wash-out was the OLD gray_medium (#d1d5db); this darker value stays clearly visible");
  let border_color = app_shared_color_gray_medium();
  html_border(b, "0.05em", border_color);
}

;// ./js/html_style_font_size.mjs

function html_style_font_size(parent, value) {
  html_style_set(parent, "font-size", value);
}

;// ./js/html_style_font_size_inherit.mjs

function html_style_font_size_inherit(component) {
  html_style_font_size(component, "inherit");
}

;// ./js/html_button_element.mjs


function html_button_element(parent) {
  let tag_name = "button";
  let b = html_element(parent, tag_name);
  html_style_font_size_inherit(b);
  return b;
}

;// ./js/html_button_notext.mjs


function html_button_notext(parent, lambda) {
  let component = html_button_element(parent);
  html_on_click(component, lambda);
  return component;
}

;// ./js/html_button.mjs



function html_button(parent, text, lambda) {
  arguments_assert(arguments, 3);
  let component = html_button_notext(parent, lambda);
  html_text_set_html_text_set(component, text);
  return component;
}

;// ./js/app_shared_button.mjs



function app_shared_button(parent, text, lambda) {
  let b = html_button(parent, text, lambda);
  app_shared_button_style(b);
  html_style_padding_em(b, "0.3");
  return b;
}

;// ./js/availability_editor_add_button.mjs



function availability_editor_add_button(
  kind,
  text,
  choose,
  panel,
  button_records,
) {
  arguments_assert(arguments, 5);
  function on_click() {
    choose(kind);
  }
  let element = app_shared_button(panel, text, on_click);
  list_add(button_records, {
    kind: kind,
    element: element,
  });
}

;// ./js/availability_editor_render_preview.mjs






function availability_editor_render_preview(
  preview,
  ranges,
  chosen,
  line,
) {
  arguments_assert(arguments, 4);
  html_clear_html_clear(preview);
  let has_ranges = list_empty_not_is(ranges);
  let none = equal(chosen, null);
  if (none) {
    app_shared_text_body(preview, "Pick how these times repeat");
  } else if (has_ranges) {
    each(ranges, line);
  } else {
    app_shared_text_body(preview, "Select times on the grid above");
  }
}

;// ./js/availability_editor_highlight.mjs






function availability_editor_highlight(chosen, button_records) {
  arguments_assert(arguments, 2);
  function paint_button(record) {
    let selected = equal(record.kind, chosen);
    let right = app_shared_color_blue_dark();
    let outline = selected ? text_combine("3px solid ", right) : "none";
    html_style_assign(record.element, {
      outline: outline,
    });
  }
  each(button_records, paint_button);
}

;// ./js/html_input.mjs


function html_input(parent) {
  let component = html_element(parent, "input");
  html_style_font_size_inherit(component);
  return component;
}

;// ./js/html_input_type.mjs


function html_input_type(div, input_type) {
  let input = html_input(div);
  html_attribute_set(input, "type", input_type);
  return input;
}

;// ./js/html_input_date.mjs

function html_input_date(parent) {
  let input = html_input_type(parent, "date");
  return input;
}

;// ./js/html_value_get.mjs


function html_value_get_html_value_get(input) {
  let element = html_component_element_get(input);
  let value = property_get(element, "value");
  return value;
}

;// ./js/app_shared_border_radius_large.mjs
function app_shared_border_radius_large() {
  let v = "0.75em";
  return v;
}

;// ./js/app_shared_style_control_font_size.mjs
function app_shared_style_control_font_size() {
  let v = "1.2em";
  return v;
}

;// ./js/app_shared_margin_y.mjs
function app_shared_margin_y() {
  let v = "5px";
  return v;
}

;// ./js/app_shared_margin_y_set.mjs


function app_shared_margin_y_set(component) {
  let margin_y = app_shared_margin_y();
  html_style_margin_y(component, margin_y);
}

;// ./js/app_shared_style_control.mjs




function app_shared_style_control(component) {
  let border_radius = app_shared_border_radius_large();
  html_style_assign(component, {
    "border-radius": border_radius,
    padding: "0.55em",
    width: "100%",
    "border-width": "0px",
    "font-size": app_shared_style_control_font_size(),
  });
  app_shared_margin_y_set(component);
}

;// ./js/app_shared_input_style.mjs





function app_shared_input_style_app_shared_input_style(component) {
  app_shared_style_control(component);
  html_style_background_color_set_html_style_background_color_set(component, "white");
  html_border(
    component,
    app_shared_spaced_frame_gap(),
    app_shared_color_blue_pale(),
  );
}

;// ./js/text_empty_is.mjs

function text_empty_is(s) {
  let e = equal(s, "");
  return e;
}

;// ./js/text_empty_not_is.mjs


function text_empty_not_is(name) {
  let a = text_empty_is(name);
  let ne = not(a);
  return ne;
}

;// ./js/busy_item_build.mjs


function busy_item_build(kind, span) {
  "make one busy calendar item from a chosen time range on a real date (span.day is a 'YYYY-MM-DD'): a daily item keeps only the time; a weekly item keeps that date's weekday; one-time and monthly items keep the date itself; every item keeps the start and end pieces";
  let daily = equal(kind, "daily");
  let weekly = equal(kind, "weekly");
  let item = daily
    ? {
        kind: kind,
        start: span.start,
        end: span.end,
      }
    : weekly
      ? {
          kind: kind,
          weekday: date_weekday_short(span.day),
          start: span.start,
          end: span.end,
        }
      : {
          kind: kind,
          date: span.day,
          start: span.start,
          end: span.end,
        };
  return item;
}

;// ./js/busy_item_repeat_word.mjs

function busy_item_repeat_word(kind) {
  "the human word for how a busy item repeats: 'One time', 'Daily', 'Weekly', or 'Monthly'";
  let once = equal(kind, "once");
  let daily = equal(kind, "daily");
  let weekly = equal(kind, "weekly");
  let word = once
    ? "One time"
    : daily
      ? "Daily"
      : weekly
        ? "Weekly"
        : "Monthly";
  return word;
}

;// ./js/busy_item_label.mjs






function busy_item_label(item) {
  "a readable one-line description of a busy item: how it repeats, when in the week or on the calendar (nothing extra for a daily item), and the time span";
  let start = clock_label(item.start);
  let end = clock_label(item.end + 1);
  let repeat = busy_item_repeat_word(item.kind);
  let time = text_combine_multiple([start, " – ", end]);
  let daily = equal(item.kind, "daily");
  let weekly = equal(item.kind, "weekly");
  if (daily) {
    let daily_label = text_combine_multiple([repeat, " · ", time]);
    return daily_label;
  }
  if (weekly) {
    let weekly_label = text_combine_multiple([
      repeat,
      " · ",
      item.weekday,
      " · ",
      time,
    ]);
    return weekly_label;
  }
  let name = date_weekday_short(item.date);
  let label = date_month_day(item.date);
  let when = text_combine_multiple([name, " ", label]);
  let dated_label = text_combine_multiple([repeat, " · ", when, " · ", time]);
  return dated_label;
}

;// ./js/availability_editor.mjs




















function availability_editor(parent) {
  "owner screen: pick a week with the arrows or the date field, select time ranges on that week's real dates, then choose how they repeat (daily, weekly, monthly, one time); the chosen button highlights and the preview refreshes to show the busy items that choice would create";
  let ranges = [];
  let chosen = null;
  let iso = date_today_iso();
  let week_start = date_week_sunday(iso);
  let button_records = [];
  html_div_text_html_div_text(
    parent,
    "Mark the times you are busy — everything else stays open for booking",
  );
  let nav = app_shared_container_blue(parent);
  function go_prev() {
    shift_week(-7);
  }
  function go_next() {
    shift_week(7);
  }
  let week_row = html_div(nav);
  html_style_assign(week_row, {
    display: "flex",
    "align-items": "center",
    gap: "0.5rem",
  });
  app_shared_button(week_row, "◀", go_prev);
  let week_label = html_div_text_html_div_text(week_row, "");
  app_shared_button(week_row, "▶", go_next);
  html_div_text_html_div_text(nav, "Jump to any week");
  let jump = html_input_date(nav);
  app_shared_input_style_app_shared_input_style(jump);
  html_on(jump, "change", on_jump);
  let grid_holder = html_div(parent);
  let panel = app_shared_container_blue(parent);
  html_div_text_html_div_text(panel, "Repeat these times");
  availability_editor_add_button(
    "daily",
    "Daily",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "weekly",
    "Weekly",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "monthly",
    "Monthly",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "once",
    "One time",
    choose,
    panel,
    button_records,
  );
  let preview_heading = html_div_text_html_div_text(parent, "Busy times you'll add");
  html_style_assign(preview_heading, {
    "font-weight": "bold",
    "margin-top": "0.75rem",
  });
  let preview = html_div(parent);
  availability_editor_render_grid(
    grid_holder,
    week_start,
    ranges,
    on_grid_ranges,
    week_label,
  );
  availability_editor_render_preview(preview, ranges, chosen, line);
  function on_grid_ranges(new_ranges) {
    ranges = new_ranges;
    availability_editor_render_preview(preview, ranges, chosen, line);
  }
  function shift_week(delta) {
    week_start = date_add_days(week_start, delta);
    availability_editor_render_grid(
      grid_holder,
      week_start,
      ranges,
      on_grid_ranges,
      week_label,
    );
    availability_editor_render_preview(preview, ranges, chosen, line);
  }
  function on_jump() {
    let picked = html_value_get_html_value_get(jump);
    let ok = text_empty_not_is(picked);
    if (ok) {
      week_start = date_week_sunday(picked);
      availability_editor_render_grid(
        grid_holder,
        week_start,
        ranges,
        on_grid_ranges,
        week_label,
      );
      availability_editor_render_preview(preview, ranges, chosen, line);
    }
  }
  function choose(kind) {
    chosen = kind;
    availability_editor_highlight(chosen, button_records);
    availability_editor_render_preview(preview, ranges, chosen, line);
  }
  function line(span) {
    let item = busy_item_build(chosen, span);
    let text = busy_item_label(item);
    app_shared_text_body(preview, text);
  }
}

;// ./js/availability_editor_preview.mjs


function availability_editor_preview() {
  ("preview the owner's availability editor on the sandbox app at #",
    availability_editor.name,
    ": select ranges, pick a date, and add them as one-time, weekly, or monthly items");
  let root = html_body_div();
  availability_editor(root);
}

;// ./js/app_sandbox_previews.mjs



function app_sandbox_previews() {
  "registry of sandbox previews keyed by URL-hash name: add your own file plus one entry here, then open the sandbox app with #<name> — several people can each preview a different thing on the one sandbox app at once";
  let previews = {
    spinner_preview: app_sandbox_spinner_preview,
    week_calendar: week_calendar_preview,
    availability_editor: availability_editor_preview,
  };
  return previews;
}

;// ./js/html_a.mjs

function html_a(root) {
  let a = html_element(root, "a");
  return a;
}

;// ./js/html_a_href_text.mjs



function html_a_href_text(root, href, text) {
  let a = html_a(root);
  html_attribute_set(a, "href", href);
  html_text_set_html_text_set(a, text);
  return a;
}

;// ./js/html_display_block.mjs

function html_display_block(element) {
  html_style_set(element, "display", "block");
}

;// ./js/html_hash_links_labeled.mjs





function html_hash_links_labeled(root, entries) {
  "render a clickable block link per entry {hash, label}: the link TEXT is `label` but it navigates to #<hash> — so a display label (e.g. 'conversation: believe') can differ from the route it points at (#believe). html_hash_links is the label===hash special case";
  function link(entry) {
    let hash = property_get(entry, "hash");
    let label = property_get(entry, "label");
    let href = text_combine("#", hash);
    let a = html_a_href_text(root, href, label);
    html_display_block(a);
  }
  each(entries, link);
}

;// ./js/html_hash_links.mjs


function html_hash_links(root, names) {
  "render a clickable block link per name, each pointing at #<name> with the name as its text — a plain hash-route index (shared by the sandbox preview list and app_g's #index); pairs with html_reload_on_hash_change so a click re-runs the app on the new hash. label===hash case of html_hash_links_labeled";
  function entry(name) {
    let e = { hash: name, label: name };
    return e;
  }
  let entries = list_map_list_map(names, entry);
  html_hash_links_labeled(root, entries);
}

;// ./js/app_sandbox_previews_list.mjs



function app_sandbox_previews_list(root, previews) {
  "no hash matched a preview: show a clickable link per available preview so the user can pick one without editing the URL";
  html_p_text(root, "Pick a preview:");
  let names = properties_get(previews);
  html_hash_links(root, names);
}

;// ./js/app_sandbox_choose.mjs




function app_sandbox_choose(root, name) {
  "run the sandbox preview named by the URL hash (e.g. #spinner_preview); if the name matches none, show the list of available previews so you can pick one";
  let previews = app_sandbox_previews();
  if (property_exists(previews, name)) {
    let preview = property_get(previews, name);
    preview();
    return;
  }
  app_sandbox_previews_list(root, previews);
}

;// ./js/html_reload_on_hash_change.mjs
function html_reload_on_hash_change() {
  "when the URL hash changes (e.g. the user clicks a preview link), reload so the app re-reads the hash and runs the newly chosen preview from a clean slate";
  function reload() {
    window.location.reload();
  }
  window.addEventListener("hashchange", reload);
}

;// ./js/html_mobile_default_font_size.mjs

function html_mobile_default_font_size(root) {
  html_style_font_size(root, "20px");
}

;// ./js/html_mobile_default_font_size_context.mjs


function html_mobile_default_font_size_context(context) {
  let root = property_get(context, "root");
  html_mobile_default_font_size(root);
  return root;
}

;// ./js/html_mobile_default.mjs


function html_mobile_default(context) {
  let root = html_mobile_default_font_size_context(context);
  html_font_sans_serif_set_html();
  return root;
}

;// ./js/app_sandbox.mjs











async function app_sandbox(context) {
  let root = property_get(context, "root");
  html_reload_on_hash_change();
  html_clear_html_clear(root);
  html_mobile_default(context);
  let name = html_hash_name_get();
  app_sandbox_choose(root, name);
  return;
  // removed by dead control flow

  // removed by dead control flow

  // removed by dead control flow

}

;// ./js/app_shared_context_initialize_root.mjs
async function app_shared_context_initialize_root(root, fn) {
  let context = {
    root,
  };
  await fn(context);
}

;// ./js/app_shared_boot_corrupt_or_null.mjs


async function app_shared_boot_corrupt_or_null(render_fn) {
  "run one boot attempt: null when it succeeded; the corrupt error object when a read hit CORRUPT storage; and for any other error re-throw so an unrelated bug stays loud instead of being mistaken for corruption";
  try {
    await render_fn();
    return null;
  } catch (thrown) {
    let corrupt = property_get_or(thrown, "storage_corrupt", false);
    if (not(corrupt)) {
      throw thrown;
    }
    return thrown;
  }
}

;// ./js/property_exists_assert_json.mjs


function property_exists_assert_json(object, property_name, json) {
  let result = property_exists(object, property_name);
  assert_json(result, {
    object,
    property_name,
    json,
  });
}

;// ./js/property_delete.mjs

function property_delete(object, property_name) {
  property_exists_assert_json(object, property_name, {
    hint: "the property should exist before it can be deleted",
  });
  delete object[property_name];
}

;// ./js/global_function_property_delete.mjs


function global_function_property_delete(fn, property_name) {
  let fn_object = global_function_initialize(fn, {});
  property_delete(fn_object, property_name);
}

;// ./js/storage_local_specify_remove.mjs



function storage_local_specify_remove(storage_local_key) {
  "remove one entry by its physical key — the composite-level twin of storage removal that takes app_fn plus key; the corruption net knows only the physical key the error carried";
  if (storage_local_enabled()) {
    localStorage.removeItem(storage_local_key);
    return;
  }
  global_function_property_delete(storage_local_set, storage_local_key);
}

;// ./js/storage_local_quarantine_composite.mjs



function storage_local_quarantine_composite(storage_local_key, raw) {
  "quarantine by physical key: copy the corrupt bytes to a sideband key a developer can still recover, then remove the live key so the next boot lands clean — surgical, only this one key is lost";
  let corrupt_key = text_combine_multiple(["__corrupt__ ", storage_local_key]);
  storage_local_specify_set(corrupt_key, raw);
  storage_local_specify_remove(storage_local_key);
}

;// ./js/app_shared_boot_safe.mjs






async function app_shared_boot_safe(render_fn) {
  "top-level net: run the app; when a read hits CORRUPT storage, log it for the developer, quarantine that one physical key, and retry — bounded so several corrupt keys all clear without ever spinning forever, and the user just sees a clean freshly-initialized app; a non-corruption error re-throws through the attempt so real bugs stay loud; if the bound is exhausted, run once more UNGUARDED so the real failure surfaces instead of us hiding it";
  let remaining = 8;
  while (greater_than_greater_than(remaining, 0)) {
    remaining = subtract(remaining, 1);
    let corrupt = await app_shared_boot_corrupt_or_null(render_fn);
    if (null_is(corrupt)) {
      return;
    }
    let value = property_get(corrupt, "message");
    console.error(value);
    let storage_local_key = property_get(corrupt, "storage_local_key");
    let raw = property_get(corrupt, "raw");
    storage_local_quarantine_composite(storage_local_key, raw);
  }
  await render_fn();
}

;// ./js/html_text_size_adjust_lock.mjs

function html_text_size_adjust_lock() {
  "inject a global rule pinning the browser's automatic text sizing to 100% on the document root, so mobile Firefox renders the same explicit px / em sizes as Chrome instead of INFLATING the text (its font-inflation for 'readability', which enlarges the type and throws the intended layout off). a real stylesheet rule rather than an inline style, so each engine spelling applies where supported and is ignored where not: standard text-size-adjust (current Firefox), the -webkit- form (Chrome / Safari), the -moz- form (older Firefox Android). 100% means keep the authored size — behavior-preserving for engines that never inflate.";
  let css =
    "html { -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; text-size-adjust: 100%; }";
  html_style_head(css);
}

;// ./js/app_shared_context_initialize.mjs







async function app_shared_context_initialize(fn) {
  ("boot every app through the corruption net: the happy path renders exactly once, unchanged; if a read hits CORRUPT storage the net quarantines that key and retries, clearing the root first so a partial first render never doubles the DOM. lock the browser's text-inflation to 100% here, at the one boot EVERY app shares, so mobile Firefox never enlarges the type past the authored size — universal, unlike ",
    fn_name("html_mobile_default"),
    " which several apps (message, autopray, next, examples, designs_universal, calendar_paste) never call");
  html_text_size_adjust_lock();
  let root = html_document_body();
  let attempted = false;
  let render = async function app_boot_render() {
    if (attempted) {
      html_clear_html_clear(root);
    }
    attempted = true;
    let r = await app_shared_context_initialize_root(root, fn);
    return r;
  };
  await app_shared_boot_safe(render);
  html_loading_splash_take();
}

;// ./scripts/temp/app_sandbox_run.mjs


app_shared_context_initialize(app_sandbox);
/******/ })()
;