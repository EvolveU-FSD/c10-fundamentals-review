import fs from "fs";

// fs.readFile("./data.json", "utf8", (err, data) => {
//   console.log("data is", data);
//   const dataArray = JSON.parse(data);
//   console.log(dataArray[0].name);
// });

const readFilePromise = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (data) resolve(data);
      if (err) reject(err);
    });
  });

const data = await readFilePromise("data.json");

// console.log(data);

// const main = async () => {
//   const data = await readFilePromise("data.json");
//   const users = JSON.parse(data);
//   console.log(users);
// };

// main();

const groups = [
  ["Dani", "Deng", "Han", "Jenny"],
  ["Jerald", "JJ", "Jonah"],
  ["Kanchan", "Kenneth", "Kevin", "Larry"],
];

groups.forEach((group, groupIndex) => {
  console.log("this is group#", groupIndex);
  group.forEach((member, memberIndex) => {
    console.log("Group member #", memberIndex, "is", member);
  });
});

for (let group of groups) {
  console.log("this is group", group);
  for (let member of group) {
    // console.log("member", member);
    console.log("Group member name:", "is", member);
  }
}

for (let i = 0; i < groups.length; i++) {
  console.log("this is group#", i);
  for (let j = 0; j < groups[i].length; j++) {
    console.log("Group member #", j, "is", groups[i][j]);
  }
}
