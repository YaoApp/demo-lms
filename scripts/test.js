function task() {
  for (i = 1; i < 100; i++) {
    Process("tasks.test.Add", "进入任务" + i);
  }
}

function Save() {
  return Process("models.category.save", {
    parent_id: 1,
    name: "英语",
  });
}
function Create() {
  return Process("models.category.create", {
    parent_id: 1,
    name: "英语",
  });
}

function Insert() {
  return Process(
    "models.category.insert",
    ["parent_id", "name"],
    [
      [1, "语文"],
      [1, "地理"],
    ]
  );
}
function Update() {
  return Process("models.category.update", 9, {
    parent_id: 1,
    name: "英语",
  });
}
function UpdateWhere() {
  return Process(
    "models.category.updatewhere",
    {
      wheres: [{ column: "parent_id", value: 1 }],
    },
    {
      name: "数学",
    }
  );
}

function deletes() {
  return Process("models.category.delete", 10, {});
}
function Destroy() {
  return Process("models.category.destroy", 9, {});
}
function Deletewhere() {
  return Process("models.category.deletewhere", {
    wheres: [{ column: "parent_id", value: 4 }],
  });
}

function Destroywhere() {
  return Process("models.category.destroywhere", {
    wheres: [{ column: "parent_id", value: 4 }],
  });
}

function Crypt() {
  var value = "123456";
  var key = "key";
  // var res = Process("yao.crypto.hmac", "SHA1", value, key, "base64");
  // console.log(res);

  // var res = Process("encoding.base64.Encode", value);
  // console.log(res);
  var res = Process("yao.crypto.hash", "MD5", value);
  console.log(res);
  // var res = Process("encoding.base64.Decode", res);
  // console.log(res);
}
