let shipSetting = document.querySelectorAll('.info__ship');



for(let element of shipSetting) {
  element.addEventListener('click', function(event) {
    shipSetting.forEach( item => item.classList.remove('info__ship--selected') );

    event.currentTarget.classList.add('info__ship--selected');
    console.log(event.currentTarget);
  })
}


let model = {
  boardSize: 10,
  numShips: 9,
  shipSunk: 0,

  numOneDeck: 4,
  numTwoDeck: 3,
  numThreeDeck: 2,

  myShips: {
    oneDeck: [
      {location: [''], hits: ['']},
      {location: [''], hits: ['']},
      {location: [''], hits: ['']},
      {location: [''], hits: ['']}
    ],

    twoDeck: [
      {location: ['', ''], hits: ['', '']},
      {location: ['', ''], hits: ['', '']},
      {location: ['', ''], hits: ['', '']}
    ],

    threeDeck: [
      {location: ['', '', ''], hits: ['', '', '']},
      {location: ['', '', ''], hits: ['', '', '']}
    ]
  },

  rivalShips: {
    oneDeck: [
      {location: [''], hits: ['']},
      {location: [''], hits: ['']},
      {location: [''], hits: ['']},
      {location: [''], hits: ['']}
    ],

    twoDeck: [
      {location: ['', ''], hits: ['', '']},
      {location: ['', ''], hits: ['', '']},
      {location: ['', ''], hits: ['', '']}
    ],

    threeDeck: [
      {location: ['', '', ''], hits: ['', '', '']},
      {location: ['', '', ''], hits: ['', '', '']}
    ]
  },

};

function inputLocationShip(length) {
  let inputBoardUser = document.querySelectorAll('.board__body--1 td');

  inputBoardUser.forEach(item => {
    item.addEventListener('click', event => {
      event.currentTarget.style.backgroundColor = 'mediumblue'
      console.log(event.currentTarget.id);
    })
  })
}

inputLocationShip();





