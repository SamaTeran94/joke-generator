//Solution 1

// const jokes = document.getElementById('jokes');
// const button = document.querySelector('button');
// let jokeData;

// const fetchJoke = () => {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       jokeData = data;
//       jokes.innerText = data.value;
//     })
//     .catch((error) => {
//       console.error('Fetch error:', error);
//     });
// };

// fetchJoke();

// const getJoke = () => {
//   fetchJoke();
//   jokes.innerText = jokeData.value;
// };

// button.addEventListener('click', getJoke);

//Solution 2

const jokes = document.getElementById('jokes');
const button = document.querySelector('button');
const img = document.querySelector('img');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(JSON.parse(this.responseText));
        jokes.innerHTML = JSON.parse(this.responseText).value;
        img.setAttribute(
          'src',
          'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
        );
      } else {
        jokes.innerHTML = 'Something Went Wrong';
      }
    }
  };
  xhr.send();
};

button.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
