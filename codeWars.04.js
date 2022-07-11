function friend(friends){
    return friends.filter(el => el.split("").length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))