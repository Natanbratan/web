const res = fetch('https://randomuser.me/api/?results=5')
const ul = document.getElementById('users');
res
.then((res) => {
  return res.json()
})
.then((res) => {
  let authors = res.results;
  console.log(authors)
  return authors.map(function(user) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = user.picture.large;
    span.innerHTML = `Cell:${user.cell}, Country: ${user.location.country}, City: ${user.location.city}, Postcode: ${user.location.postcode}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}