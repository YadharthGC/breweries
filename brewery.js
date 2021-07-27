 fetch("https://api.openbrewerydb.org/breweries", {
         method: "GET"
     })
     .then((data) => data.json())
     .then((users) => load(users));

 function load(users) {
     var list = document.createElement("div");
     list.className = "list"
     users.forEach((user) => {
         var a = document.createElement("div");
         a.className = "a";
         a.innerHTML = `
   <div class="text">
   <div>Name:${user.name}</div>
   <div>Type:${user.brewery_type}</div>
   <div>City:${user.city}</div>
   <div>State:${user.state}</div>
   <div>Postal Code:${user.postal_code}</div>
   <div>Country${user.country}</div>
   <div>URL:<a href="${user.website_url}">${user.website_url}</a></div></div>
   `
         console.log(a);
         list.append(a);
     })
     document.body.append(list);
 }