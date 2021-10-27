document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'bahamas',
            img: 'images/bahamas.png'
        },
        {
            name: 'bahamas',
            img: 'images/bahamas.png'
        },
        {
            name: 'antigua-and-barbuda',
            img: 'images/antigua-and-barbuda.png'
        },
        {
            name: 'antigua-and-barbuda',
            img: 'images/antigua-and-barbuda.png'
        },
        {
            name: 'barbados',
            img: 'images/barbados.png'
        },
        {
            name: 'barbados',
            img: 'images/barbados.png'
        },
        {
            name: 'dominica',
            img: 'images/dominica.png'
        },
        {
            name: 'dominica',
            img: 'images/dominica.png'
        },
        {
            name: 'grenada',
            img: 'images/grenada.png'
        },
        {
            name: 'grenada',
            img: 'images/grenada.png'
        },
        {
            name: 'saint-kitts-and-nevis',
            img: 'images/saint-kitts-and-nevis.png'
        },
        {
            name: 'saint-kitts-and-nevis',
            img: 'images/saint-kitts-and-nevis.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create our board
    function createBoard() {
        for (var i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/mario-square.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!!!')
            cards[optionOneId].setAttribute('src','images/checked.png')
            cards[optionTwoId].setAttribute('src','images/checked.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src','images/mario-square.png')
            cards[optionTwoId].setAttribute('src','images/mario-square.png')
            alert('Sorry, try again.')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch,500)
        }
    }

    createBoard();

})