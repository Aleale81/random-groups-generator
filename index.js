// modify your options: numerOfTeamMembers and studentArr

const numerOfTeamMembers = 3
const studentArr = [
  "alice",
  "bob",
  "charly",
  "david",
  "eliot",
  "fabian",
  "george",
  "hanry",
  "katy",
  "julia",
  "manu",
  "nataly",
  "otto",
  "paul",
  "quasimodo",
  "ron",
  "sally",
];

console.log('Your options👇 ')
console.log('Students: ', studentArr)
console.log('Members in a team: ', numerOfTeamMembers)

const getRandomStudent = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const printTeams = (teamsArray) => {
    let niceFormatTeams = ''
    teamsArray.forEach((teamArr, index) => {
        niceFormatTeams += `${index + 1}. ${teamArr.join(' - ')} \n`
    })
    console.log("TEAMS!!!!!!!!!!!! ")
    console.log(niceFormatTeams)
}

// array = array of students - groupOption = number of students in a team
const getTeams = (array, groupOption) => {
  const teams = [];
  const picked = [];
  let team = [];

  const filterRemaining = () => {
    return array.filter((student) => !picked.includes(student));
  };

  while (picked.length < array.length) {
    const students = filterRemaining();
    const student = getRandomStudent(students);

    if (students.length <= groupOption / 2 && !team.length) {
      console.log(
        "Only less or half last team can be made... so students will be added to other teams"
      );
      students.forEach((el, index) => {
        picked.push(el);
        teams[index].push(el);
      });
      return teams;
    }

    if (
      students.length > groupOption / 2 &&
      students.length < groupOption &&
      !team.length
    ) {
      console.log("The last team will have less members but more then half");
      students.forEach((el) => {
        picked.push(el);
      });
      teams.push(students);
      return teams;
    }

    picked.push(student);
    team.push(student);
    if (team.length === groupOption) {
      teams.push(team);
      team = [];
    }
  }
  return teams;
};

const teams = getTeams(studentArr, numerOfTeamMembers)
printTeams(teams)
