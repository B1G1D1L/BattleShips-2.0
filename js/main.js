let display = {
  displayMessage: function(str) {
    let div = document.getElementById('info__message');
    div.innerHTML = str;
  },
};

let model = {
  boardSize: 10,
  numShips: 9,
  shipSunk: 0,

  numOneDeck: 4,
  numTwoDeck: 3,
  numThreeDeck: 2,

  positionShop: 0,

  selectedLengthShip: 2, 

  myShips: {
    oneDeck: [
      // {location: [], hits: ['']},
      // {location: [], hits: ['']},
      // {location: [], hits: ['']},
      // {location: [], hits: ['']}
    ],

    twoDeck: [
      // {location: [], hits: ['', '']},
      // {location: [], hits: ['', '']},
      // {location: [], hits: ['', '']}
    ],

    threeDeck: [
      // {location: [], hits: ['', '', '']},
      // {location: [], hits: ['', '', '']}
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

  hoverEffect: function() {
    let inputBoard = document.querySelectorAll('.board__body--1 td');
    
    inputBoard.forEach(item => {
      // Слушатель курсор над елементом
      item.addEventListener('mouseover', event => {
        let arrIdCell = [];
        let firstСell = event.target,
            secondCell,
            thirdCell;

        if(firstСell.id.charAt(1) <= this.boardSize - this.selectedLengthShip) {
          secondCell = firstСell.nextSibling;
          thirdCell = secondCell.nextSibling;
        } else if(firstСell.id.charAt(1) == 8) {
          secondCell = firstСell.previousSibling;
          thirdCell = firstСell.nextSibling;
        } else if(firstСell.id.charAt(1) == 9 ) {
          secondCell = firstСell.previousSibling;
          thirdCell = secondCell.previousSibling;
        }

        // Добавление переменных в массив
        if(this.selectedLengthShip === 3) {
          arrIdCell.push(firstСell, secondCell, thirdCell);
        } else if (this.selectedLengthShip === 2) {
          arrIdCell.push(firstСell, secondCell);
        } else if (this.selectedLengthShip === 1) {
          arrIdCell.push(firstСell);
        } else {this.display.displayMessage('Расставте свои корабли')}

        // Добавление класса 
        arrIdCell.forEach(item => item.classList.add('hover'));


        // Слушатель курсор уходит с елемента
        item.addEventListener('mouseout', event => {
          arrIdCell.forEach(item => item.classList.remove('hover'))
        });

        // При установки коробля
        item.addEventListener('click', event => {
          this.addPosition(arrIdCell);
        })
      });
    });
  },

  addPosition: function(arr) {
    let locationShip = arr.map(item => item.id);

    if(locationShip.length === 3) {
      let modelShip = this.myShips.threeDeck;
      modelShip.push({
        location: [ locationShip[0], locationShip[1], locationShip[2] ],
        hits: ['', '', '']
      })
      console.log(this.myShips);
    } else if(locationShip.length === 2) {
      let modelShip = this.myShips.twoDeck;
      modelShip.push({
        location: [locationShip[0], locationShip[1]],
        hits: ['', '']
      })
      console.log(this.myShips);
    } else {
      let modelShip = this.myShipsю.oneDeck;
      modelShip.push({
        location: [locationShip[0]],
        hits: ['']
      })
      console.log(this.myShips);
    }
  },

  choiceOfShipLength: function() {
    let shipSetting = document.querySelectorAll('.info__ship');
    let inputLengthShip = 0;

    for(let item of shipSetting) {
      item.addEventListener('click', event => {
        shipSetting.forEach(item => item.classList.remove('info__ship--selected'));
        event.currentTarget.classList.add('info__ship--selected');
        inputLengthShip = event.currentTarget.id;
        this.selectedLengthShip = event.currentTarget.id;
      })
    }
  },



};


// model.choiceOfShipLength();
model.hoverEffect();








