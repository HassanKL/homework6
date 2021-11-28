var GAMES = [ 
    {
        gameTitle: "Boat",
    gameThumbImg: "thumb1_150x150.jpg",
    gameFullImg: "thumb1_150x150.jpg",
    gameBriefDescription: "Purchase this boatt to enjoy the waters entirely.",
    gameDescription: "Purchase this beat to enjoy the waters entirely.",
    gameRating: "$99.99",
    },
    {
        gameTitle: "Camping-Kit",
    gameThumbImg: "thumb2_150x150.jpg",
    gameFullImg: "thumb2_150x150.jpg",
    gameBriefDescription: "An assortment of camping items to help ensure you have the necessities needed to have a fun trip",
    gameDescription: "lorem35",
    gameRating: "29.99",
    },
    {
        gameTitle: "Tent",
    gameThumbImg: "thumb3_150x150.jpg",
    gameFullImg: "thumb3_150x150.jpg",
    gameBriefDescription: "Need somewhere to sleep as you camp? Purchase the perfect home.",
    gameDescription: "lorem35",
    gameRating: "49.99",
    },
    {
        gameTitle: "Large Tent",
    gameThumbImg: "thumb4_150x150.jpg",
    gameFullImg: "thumb4_150x150.jpg",
    gameBriefDescription: "A larger tent suited for more than 3 people. Good for convienience",
    gameDescription: "lorem35",
    gameRating: "74.99",
    },
    {
        gameTitle: "Paddle",
    gameThumbImg: "thumb5_150x150.jpg",
    gameFullImg: "thumb5_150x150.jpg",
    gameBriefDescription: "Need an extra paddle with your purchase of a canoe? Purchase here.",
    gameDescription: "lorem35",
    gameRating: "$10.99",
    },
    {
        gameTitle: "Map",
    gameThumbImg: "thumb6_150x150.jpg",
    gameFullImg: "thumb6_150x150.jpg",
    gameBriefDescription: "A map for the resort.",
    gameDescription: "lorem35",
    gameRating: "$2.99",
    },
    {
        gameTitle: "Flare Gun",
    gameThumbImg: "thumb7_150x150.jpg",
    gameFullImg: "thumb7_150x150.jpg",
    gameBriefDescription: "Need something for emergencies? Try our flare Gun. Use Caution",
    gameDescription: "lorem35",
    gameRating: "$19.99",
    },
    {
        gameTitle: "Matches",
    gameThumbImg: "thumb8_150x150.jpg",
    gameFullImg: "thumb8_150x150.jpg",
    gameBriefDescription: "Good for starting fires quickly",
    gameDescription: "lorem35",
    gameRating: "$1.50",
    },
    {
        gameTitle: "Pocket Knife",
    gameThumbImg: "thumb9_150x150.jpg",
    gameFullImg: "thumb9_150x150.jpg",
    gameBriefDescription: "Useful tool for just about any task and a good choice for the price.",
    gameDescription: "Useful tool for just about any task and a good choice for the price.",
    gameRating: "$4.99",
    },
    {
        gameTitle: "Canoe",
    gameThumbImg: "thumb10_150x150.jpg",
    gameFullImg: "thumb10_150x150.jpg",
    gameBriefDescription: "Best for travel over waters. Fits less than the boat however.",
    gameDescription: "lorem35",
    gameRating: "$79.99",
    },
    ]
       
    
    function loadData () {
        $.each(GAMES, function (idx, game ){
            $("#app").append(`<div id="${idx}" class="game-holder">
            <h4>${game.gameTitle}</h4>
            <div class="game-image">
              <img src="images/games_thumb/${game.gameThumbImg}" alt="${game.gameTitle}" />
            </div>
            <div class="brief-rating">
              <div class="brief-des">
               ${game.gameBriefDescription}
              </div>
              <div class="rating">${game.gameRating}</div>
            </div>
          </div>`);
        });
initListeners();
}
    

    function initListeners() {
        $(".game-holder").click(function(e) { let gameIndex = e.currentTarget.id;
          
            $("#app").html(`<div class="game">
            <h2>${GAMES[gameIndex].gameTitle}</h2>
            <div class="gameImg">
              <img src="images/games_thumb/${GAMES[gameIndex].gameFullImg}" alt="canoe" />
            </div>
            <div class="gameDes">
            ${GAMES[gameIndex].gameBriefDescription}
            </div>
            <div class="rating">Rating: ${GAMES[gameIndex].gameRating}</div>
            <div class="close">CLOSE</div></div>`);

            addCloseListener();
        });
    }

        function addCloseListener(){
            $(".close").click(function(){
                $("#app").html("");
                loadData();
            })
        }
    
        $(document).ready(function () {
           
            loadData();
        });