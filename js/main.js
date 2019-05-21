let createForm = document.querySelector('#create-form');

//create-form specifics
const name = document.querySelector('#name');
const category = document.querySelector('#category');
const recipe = document.querySelector('#recipe');
const cookDate = document.querySelector('#cookdate');
const image = document.querySelector('#image');
const apiKey = 'keyyxfDwNZrcMcpyD';
let items = [];

//global defaults for axios
axios.defaults.baseURL = 'https://api.airtable.com/v0/appB325T0iEK0I1Is/';
axios.defaults.headers.common['Authorization'] = `Bearer ${apiKey}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';


//form submit event to post new recipe
createForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newEntry = {
      name: name.value,
      category: `${category.options[category.selectedIndex].value}`,
      image_link: image.value,
      recipe_link: recipe.value,
      cook_date: cookDate.value
    };
    axios.post('/planner', {
      fields: newEntry,
      "typecast": true
    }).then((response) => {
      items.unshift(newEntry);
      console.log(items)
      alert(`${response.status}:${response.statusText} success!`);
      name.value = '';
      category.value = '';
      image.value = '';
      recipe.value = '';
      cookDate.value = '';
    }).catch((err=>{
        console.log(err)
    }));

    axios.get('/planner')
      .then((response)=>{
        console.log(response.data)
      })
  });


// let searchForm = document.querySelector('#search-form');

//search-form
const searchQuery = document.querySelector('#search').value;
const clear = document.querySelector('#clear');

searchQuery.addEventListener('click', (e)=>{
  console.log('clicked')
})








  
