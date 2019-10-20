fetch('http://localhost:3001/post')
  .then(result => {
  return result.json();
})
.then(data => {
  console.log(data);
})