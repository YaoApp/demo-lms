function NextDay(day) {
  today = new Date(day);
  today.setDate(today.getDate() + 1);
  return today.toISOString().slice(0, 19).split("T")[0];
}

function test() {
  throw new Exception("页面未找到", 404);
  log.Error("%v", "foo");
  log.Info("foo");
}

function category() {
  var data = Process("models.category.get", {
    wheres: [{ column: "parent_id", value: null }],
  });
  return data;
}
function getData() {
  return Process("scripts.day.category");
}
