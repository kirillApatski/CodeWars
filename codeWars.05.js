function findNeedle(haystack) {
    let result;
    haystack.map((el, index) => {
        if(el === "needle"){
            return result = `found the needle at position ${index}`
        } else {
            return el
        }
    })
    return result
}

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))