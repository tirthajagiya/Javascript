// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    console.log("Hey");
})();

(
    (name)=>{
    console.log(`Hey ${name}`);
}
)("abc");