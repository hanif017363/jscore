// route methodes
/*
 *1.GET => get use for fetching data which are already established by publisher
 *2.POST => create and distribute through link
 *3.patch => updates or add
 *4.put => unkown yet
 *5.DELETE => you can already guess
 */

// GET method
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log(data));
//post method
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    name: "hanif",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8 ",
  },
})
  .then((x) => x.json())
  .then((y) => console.log(y));
