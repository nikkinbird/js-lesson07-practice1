var hobbies = [
  "knitting",
  "spinning yarn",
  "hammocking",
  "hiking",
  "camping",
  "reading"
];

var goals = ["learn JavaScript", "knit a sweater", "walk the dog"];

//console.log(hobbies.length);

hobbies.push("writing");
//console.log(hobbies);

//console.log(hobbies[3]);

hobbies.pop();
//console.log(hobbies);

hobbies.splice(3, 0, "writing", "coding");
//console.log(hobbies);

hobbies.shift();
//console.log(hobbies);

var allTheThings = hobbies.concat(goals);
//console.log(allTheThings);

//console.log(allTheThings.indexOf("camping"));

allTheThings.splice(5, 1);
//console.log(allTheThings);

var deleteArrayItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    return;
  } else {
    array.splice(index, 1);
    return array;
  }
};

deleteArrayItem(allTheThings, "walk the dog");
//console.log(allTheThings);

allTheThings.forEach(function (item, index) {
  console.log(`${index}. ${item.toUpperCase()}!`);
});
