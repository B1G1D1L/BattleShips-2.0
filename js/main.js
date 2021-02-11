let display = {
  displayMessage: function(str) {
    let div = document.getElementById('info__message');
    div.innerHTML = str;
  },

  displayRemainingShips: function(num, deck) {
    let numOneDeck = document.querySelectorAll('.info__ship--calc em');
    
    if(deck === 1) {
      numOneDeck[0].innerHTML = num;
    } else if(deck === 2) {
      numOneDeck[1].innerHTML = num;
    } else {
      numOneDeck[2].innerHTML = num
    }
  }
};

let model = {
  boardSize: 10,
  numShips: 9,
  shipSunk: 0,

  numOneDeck: 4,
  numTwoDeck: 3,
  numThreeDeck: 2,

  positionShop: 0,

  selectedLengthShip: 3, 

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

  positionCreation: function() {  
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
        if(this.selectedLengthShip == 3 && this.numThreeDeck > 0) {
          arrIdCell.push(firstСell, secondCell, thirdCell);
        } else if (this.selectedLengthShip == 2 && this.numTwoDeck > 0) {
          arrIdCell.push(firstСell, secondCell);
        } else if (this.selectedLengthShip == 1 && this.numOneDeck > 0) {
          arrIdCell.push(firstСell);
        } else return false;

        // Добавление класса 
        arrIdCell.forEach(item => item.classList.add('hover'));


        // Слушатель курсор уходит с елемента
        item.addEventListener('mouseout', () => {
          arrIdCell.forEach(item => item.classList.remove('hover'))
        });

        // При установки коробля
        item.addEventListener('click', () => {
          let locationShip = arrIdCell.map(item => item.id);
          this.addPosition(locationShip);
          this.collision(locationShip);
        })
      });
    });
  },

  addPosition: function(location) {
    
    if(location.length === 3) {
      let modelShip = this.myShips.threeDeck;
      modelShip.push({
        location: [ location[0], location[1], location[2] ],
        hits: ['', '', '']
      });
      // отображение оставшиеся кораблей
      this.numThreeDeck--;
      display.displayRemainingShips(this.numThreeDeck, 3);
      // this.collision(modelShip);
      
    } else if(location.length === 2) {
      let modelShip = this.myShips.twoDeck;
      modelShip.push({
        location: [location[0], location[1]],
        hits: ['', '']
      })
      // отображение оставшиеся кораблей
      this.numTwoDeck--;
      display.displayRemainingShips(this.numTwoDeck, 2);
      // console.log(this.myShips);

    } else {
      let modelShip = this.myShips.oneDeck;
      modelShip.push({
        location: [location[0]],
        hits: ['']
      })
      // отображение оставшиеся кораблей
      // console.log(this.myShips); 
      this.numOneDeck--;
      display.displayRemainingShips(this.numOneDeck, 1);
    }

  },

  choiceOfShipLength: function() {
    let shipSetting = document.querySelectorAll('.info__ship');
    let inputLengthShip = 0;

    for(let item of shipSetting) {
      item.addEventListener('click', event => {
        // Очистить класс
        shipSetting.forEach(item => item.classList.remove('info__ship--selected'));
        // Добавить выбранному класс
        event.currentTarget.classList.add('info__ship--selected');
        inputLengthShip = event.currentTarget.id;
        this.selectedLengthShip = event.currentTarget.id;
      })
    }
  },

  collision: function(location) {
    let key = Object.values(this.myShips);

    console.log(key);

    return false;
  },

};



model.choiceOfShipLength();
model.positionCreation();








