const str=["yakoov", "john", "jen", "jason", "paul", "frank", "larry", "paula", "laura", "jim"];
var name;
for(var a=0; a<10; a++)
{
    name=str[a];
    if(str[a].charAt(0)=='J' || str[a].charAt(0)=='j')
    console.log("Good Bye "+ str[a]);
    else
    console.log("Hello "+ str[a]);
}
