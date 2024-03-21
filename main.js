//  Function in Typescript
function giveAnswinprize(car1, car2, car3) {
    if (car1 === car2)
        return ("you won mehran car");
    else if (car1 === "Corolla")
        return ("you won Landcrusor car");
    else if (car3 === "Corolla")
        return ("you won Corolla car");
}
;
var result = giveAnswinprize("Corolla", "Landcrusor", "Mehran");
console.log(result);
function t20Worldcupteams(team1, team2, team3) {
    if ("".concat(team1, " === \"AUS"))
        return ("Australia is world champion");
    if ("".concat(team2, " === \"PAK"))
        return ("Pakistan is world champion");
    if ("".concat(team3, " === IND"))
        return ("India is world champion");
}
var result1 = t20Worldcupteams("AUS", "INd", "PAK");
console.log(result1);
function itclassTeachers(teacher1, teacher2, teacher3) {
    if (teacher1 === "Sir Quasim" && teacher2 === "Sir Zia khan") {
        return ("Sir Quasim and Sir Zia khan conduct Ramadan coding night");
    }
    else if (teacher2 === "Sir Zia khan" && teacher3 === "Sir Quasim") {
        return ("Sir Zia khan and Sir Quasim conduct Ramadan coding night");
    }
    else if (teacher3 === "Sir Ameen Alam" && teacher1 === "Sir Zia khan") {
        return ("Sir Ameen Alam and Sir Zia khan conduct Ramadan coding night");
    }
}
;
var result2 = itclassTeachers("Sir Zia khan", "Sir Quasim", "Sir Ameen Alam");
console.log(result2);
