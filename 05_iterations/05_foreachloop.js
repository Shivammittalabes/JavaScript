const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (items) {
    //console.log(items);
})

coding.forEach( (val) => {
    //console.log(val);
} )


function printMe(items){
    //console.log(items);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
})

const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languagename);
})


