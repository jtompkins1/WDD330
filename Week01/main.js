import U, {printAge, printName as printUserName} from "./user.js"

const user = new U ("Bob", 11);
console.log(user)

printUserName(user)
printAge(user)