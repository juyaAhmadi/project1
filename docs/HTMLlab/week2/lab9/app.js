/*
Create and array of movie objects. Each movie should have a title, 
rating, and hasWatched properties. Iterate through the array and 
print out something that looks like:
You have watched "Moonlight" - 5 stars
You have not seen "La La Land" - 4.5 stars
You have seen "Rogue One" - 5 stars
You have not seen "Frozen" - 3.5 stars
*/


var movie1 = {
    seen:"watched", title:"Moonlight", stars:"5 stars"
}

var movie2 = {
    seen:"not seen", title:"La La Land", stars:"4.5 stars"
}
var movie3 = {
    seen:"seen", title:"Rogue One", stars:"5 stars"
}
var movie4 = {
    seen:"not seen", title:"Frozen", stars:"3.5 stars"
}
/*var number = movie.length;

for (var index =0; index < number; index++)
{
    for (var item in movie)
        console.log("<p>You have " movieList[].seen + movieList[].title + movieList[].stars "</p>");
}*/

var movieList = new Array(movie1, movie2, movie3, movie4);

for (var index = 0; index < 4; index++)
{
   // console.log(movieList[index]);
    console.log("You have " + movieList[index].seen + " " + movieList[index].title + " " + movieList[index].stars);
}