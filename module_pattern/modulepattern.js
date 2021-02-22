const UserDetail = function () {
  let name = "Bibash";
  let age = 26;
  let designation = "Senior developer";
  let salary = 200000;

  let calculateSalaryWithBonus = function (bonusPercentage) {
    return salary + (bonusPercentage / 100) * salary;
  };

  let getName = function () {
    return name;
  };

  let getAge = function () {
    return age;
  };

  let getDesignation = function () {
    return designation;
  };

  return {
    userName: getName,
    userAge: getAge,
    userDesignation: getDesignation,
    totalSalary: calculateSalaryWithBonus,
  };
};

let user = UserDetail();
//variables inside UserDetails cannot be accessed directly
console.log(
  user.userName() +
    " " +
    user.userAge() +
    " " +
    user.userDesignation() +
    " " +
    user.totalSalary(30)
);