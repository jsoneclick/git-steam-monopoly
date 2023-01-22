    let playersNumber = 3;
    let currentPlayer = 1;
    let bankMoney = 20580;
    let tile3dView = false;
    let dice_1 = 0;
    let dice_2 = 0;
    let currentUserDiceNumber = 0;
    let playerCircle;
    const playerColorsList = ["#e84646", "#e8a746", "#a2e846", "#46e85e", "#46e8b7", "#469fe8", "#6c46e8", "#e846e3"];
    const rarityArrayIndex = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    const rarityArrayTile = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 38, 39, 12, 28, 5, 15, 25, 35, 2, 4, 7, 17, 22, 33, 36, 0, 10, 20, 30];
    const playerBackgroundGames = [1, 3, 5, 6, 8, 9, 11, 13, 14, 15, 21, 23, 24, 25, 26, 27, 29, 31, 32, 34, 35, 37, 38, 39];
    let clickedTile = 0;
    let boardRotationAngle = 0;
    const table = document.querySelector(".Table");
    const tileInformationImage = document.getElementById("TileInformationImage");
    const playerConfigurationWindow = document.querySelector(".PlayerConfiguration")
    const gameWindow = document.querySelector(".GameWindow");
    const tileInfo  = document.querySelector(".TileHoverInformation");
    const userMoveWindow = document.getElementById("UserMoveOptions");
    const gameLog = document.getElementById("GameLog");

    const deck = {
        name: "Steam Monopoly",
        tilesNumber: 40,

        tiles: [
            {tileName: "Start",                                id: 00, price: 000, buyable: false, decription: "From here you start your monopoly"},
            {tileName: "Counter-Strike: Global Offensive",     id: 01, price: 060, buyable: true,  decription: "Counter-Strike: Global Offensive (CS:GO) is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment."},
            {tileName: "Community Chest",                      id: 02, price: 000, buyable: false, decription: "Get one \"Community Chest\" card from the deck and follow instructions on top"},
            {tileName: "Half-Life 2",                          id: 03, price: 060, buyable: true,  decription: "Half-Life 2 is a 2004 first-person shooter game developed by Valve. It was published by Valve through its distribution service Steam."},
            {tileName: "Income Tax",                           id: 04, price: 000, buyable: false, decription: "New accounts are limited from using all of Steam's features. you'll have access to all features once you've spent $200 in the Steam store. Pay $200!"},
            {tileName: "Dark Souls 3",                         id: 05, price: 200, buyable: true,  decription: "Dark Souls III is an action role-playing game played in a third-person perspective by Hidetaka Miyazaki"},
            {tileName: "Elder Scrolls V: Skyrim",              id: 06, price: 100, buyable: true,  decription: "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks."},
            {tileName: "Chance",                               id: 07, price: 000, buyable: false, decription: "Get one \"Chance\" card from the deck and follow instructions on top"},
            {tileName: "DOOM Eternal",                         id: 08, price: 100, buyable: true,  decription: "Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks."},
            {tileName: "Fallout 4",                            id: 09, price: 120, buyable: true,  decription: "Fallout 4 is a 2015 action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks."},
            {tileName: "VAC BAN",                              id: 10, price: 000, buyable: false, decription: "Valve anti-cheat system has detected you playing with cheats. Now you got VAC banned for 5 moves!"},
            {tileName: "Sea of Thieves",                       id: 11, price: 140, buyable: true,  decription: "Sea of Thieves is a 2018 action-adventure game developed by Rare and published by Microsoft Studios."},
            {tileName: "Virtual Reality",                      id: 12, price: 150, buyable: true,  decription: "Yo, virtual reality is peek novadays, invest in some cool developers and create your own helmet with a pair of controllers"},
            {tileName: "Minecraft Dungeons",                   id: 13, price: 140, buyable: true,  decription: "Minecraft Dungeons is a dungeon crawler video game developed by Mojang Studios and Double Eleven and published by Xbox Game Studios."},
            {tileName: "Forza Horizon 5",                      id: 14, price: 160, buyable: true,  decription: "Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios."},
            {tileName: "BloodBorne",                           id: 15, price: 200, buyable: true,  decription: "Bloodborne is a 2015 action role-playing game developed by FromSoftware and published by Sony Computer Entertainment for the PlayStation 4."},
            {tileName: "Need for Speed™ Unbound",              id: 16, price: 180, buyable: true,  decription: "Need for Speed Unbound (stylised as NFS Unbound) is a 2022 racing video game developed by Criterion Games and published by Electronic Arts."},
            {tileName: "Community Chest",                      id: 17, price: 000, buyable: false, decription: "Get one \"Community Chest\" card from the deck and follow instructions on top"},
            {tileName: "Battlefield™ 1",                       id: 18, price: 180, buyable: true,  decription: "Battlefield 1 is a first-person shooter game developed by DICE and published by Electronic Arts."},
            {tileName: "FIFA 22",                              id: 19, price: 200, buyable: true,  decription: "FIFA 22 is a football simulation video game published by Electronic Arts. It is the 29th installment in the FIFA series."},
            {tileName: "Gambling",                             id: 20, price: 000, buyable: false, decription: "Throw dice and try your luck!"},
            {tileName: "Cossacks 3",                           id: 21, price: 220, buyable: true,  decription: "Cossacks 3 is a real-time strategy video game for Microsoft Windows by the Ukrainian developer GSC Game World."},
            {tileName: "Chance",                               id: 22, price: 000, buyable: false, decription: "Get one \"Chance\" card from the deck and follow instructions on top"},
            {tileName: "S.T.A.L.K.E.R.: Shadow of Chernobyl",  id: 23, price: 220, buyable: true,  decription: "S.T.A.L.K.E.R.: Shadow of Chernobyl is a first-person shooter survival horror video game developed by GSC Game World."},
            {tileName: "S.T.A.L.K.E.R. 2: Heart of Chornobyl", id: 24, price: 240, buyable: true,  decription: "S.T.A.L.K.E.R. 2: Heart of Chornobyl is a first-person shooter survival horror video game developed by GSC Game World."},
            {tileName: "Sekiro™: Shadows Die Twice",           id: 25, price: 200, buyable: true,  decription: "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision."},
            {tileName: "GWENT: The Witcher Card Game",         id: 26, price: 260, buyable: true,  decription: "Gwent: The Witcher Card Game is a free-to-play digital collectible card game developed and published by CD Projekt Red."},
            {tileName: "Cyberpunk 2077",                       id: 27, price: 260, buyable: true,  decription: "Cyberpunk 2077 is a 2020 action role-playing video game developed by CD Projekt Red and published by CD Projekt."},
            {tileName: "Portable Console",                     id: 28, price: 150, buyable: true,  decription: "Portable consoles are gaining a lot of popularity, you are a guy's not making it easy, so create your own."},
            {tileName: "The Witcher® 3: Wild Hunt",            id: 29, price: 280, buyable: true,  decription: "The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher."},
            {tileName: "Steam Patrol",                         id: 30, price: 000, buyable: false, decription: "Valve anti-cheat system has detected you playing with cheats. Now you got VAC banned for 5 moves!"},
            {tileName: "God of War",                           id: 31, price: 300, buyable: true,  decription: "God of War is an action-adventure game franchise created by David Jaffe at Sony's Santa Monica Studio."},
            {tileName: "Horizon Zero Dawn™",                   id: 32, price: 300, buyable: true,  decription: "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment."},
            {tileName: "Community Chest",                      id: 33, price: 000, buyable: false, decription: "Get one \"Community Chest\" card from the deck and follow instructions on top"},
            {tileName: "The Last of Us™ Part I",               id: 34, price: 320, buyable: true,  decription: "The Last of Us Part I is a 2022 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment."},
            {tileName: "ELDEN RING",                           id: 35, price: 200, buyable: true,  decription: "Elden Ring is a 2022 action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment."},
            {tileName: "Chance",                               id: 36, price: 000, buyable: false, decription: "Get one \"Chance\" card from the deck and follow instructions on top"},
            {tileName: "Grand Theft Auto V",                   id: 37, price: 350, buyable: true,  decription: "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective."},
            {tileName: "Max Payne 3",                          id: 38, price: 375, buyable: true,  decription: "Max Payne 3 is a 2012 third-person shooter video game developed and published by Rockstar Games."},
            {tileName: "Red Dead Redemption 2",                id: 39, price: 400, buyable: true,  decription: "Red Dead Redemption 2 is a Western-themed action-adventure game. Played from a first- or third-person perspective."}
        ],
        tilesRarity: [
            {tileRarity: "Common", rarityColor:"#889fba"},
            {tileRarity: "Uncommon", rarityColor:"#5e98d9"},
            {tileRarity: "Rare", rarityColor:"#4b69ff"},
            {tileRarity: "Mythical", rarityColor:"#8841ff"},
            {tileRarity: "Legendary", rarityColor:"#d32ce6"},
            {tileRarity: "Immortal", rarityColor:"#b28a33"},
            {tileRarity: "Arcana", rarityColor:"#ade55c"},
            {tileRarity: "Ancient", rarityColor:"#eb4b4b"},
            {tileRarity: "Noble", rarityColor:"#361228"},
            {tileRarity: "Fabled", rarityColor:"#e8fa91"},
            {tileRarity: "Monopoly card", rarityColor: "#29292900"}
        ],
    };

    for(i in deck.tiles){
        deck.tiles[i].lvl = 1;
        deck.tiles[i].owner = 0;
        deck.tiles[i].rentPrice = [6];
        deck.tiles[rarityArrayTile[i]].rarity = deck.tilesRarity[rarityArrayIndex[i]];
    }

    deck.tiles[1].rentPrice = [2, 4, 10, 30, 90, 160, 250];
    deck.tiles[3].rentPrice = [4, 8, 20, 60, 180, 320, 450];
    deck.tiles[5].rentPrice = [25, 50, 100, 200];
    deck.tiles[6].rentPrice = [6, 12, 30, 90, 270, 400, 550];
    deck.tiles[8].rentPrice = [6, 12, 30, 90, 270, 400, 550];
    deck.tiles[9].rentPrice = [8, 16, 40, 100, 300, 450, 600];
    deck.tiles[11].rentPrice = [10, 20, 50, 150, 450, 625, 750];
    //deck.tiles[12].rentPrice = diceThrow(); return currentUserDiceNumber*6;
    deck.tiles[13].rentPrice = [10, 20, 50, 150, 450, 625, 750];
    deck.tiles[14].rentPrice = [12, 24, 60, 180, 500, 700, 900];
    deck.tiles[15].rentPrice = [25, 50, 100, 200];
    deck.tiles[16].rentPrice = [14, 28, 70, 200, 550, 750, 950];
    deck.tiles[18].rentPrice = [14, 28, 70, 200, 550, 750, 950];
    deck.tiles[19].rentPrice = [16, 32, 80, 220, 600, 800, 1000];
    deck.tiles[21].rentPrice = [18, 36, 90, 250, 700, 875, 1050];
    deck.tiles[23].rentPrice = [18, 36, 90, 250, 700, 875, 1050];
    deck.tiles[24].rentPrice = [20, 40, 100, 300, 750, 925, 1100];
    deck.tiles[25].rentPrice = [25, 50, 100, 200];
    deck.tiles[26].rentPrice = [22, 44, 110, 330, 800, 975, 1150];
    deck.tiles[27].rentPrice = [22, 44, 110, 330, 800, 975, 1150];
    //deck.tiles[28].rentPrice = diceThrow(); return currentUserDiceNumber*6;
    deck.tiles[29].rentPrice = [24, 48, 120, 360, 850, 1025, 1200];
    deck.tiles[31].rentPrice = [26, 52, 130, 390, 900, 1100, 1275];
    deck.tiles[32].rentPrice = [26, 52, 130, 390, 900, 1100, 1275];
    deck.tiles[34].rentPrice = [28, 56, 150, 450, 1000, 1200, 1400];
    deck.tiles[35].rentPrice = [25, 50, 100, 200];
    deck.tiles[37].rentPrice = [35, 70, 175, 500, 1100, 1300, 1500];
    deck.tiles[38].rentPrice = [40, 85, 185, 550, 1250, 1550, 1850];
    deck.tiles[39].rentPrice = [50, 100, 200, 600, 1400, 1700, 2000];

        

    const players = [
        {playerId: 0, money: 1500, name: "Josh", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 1, money: 1500, name: "Greg", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 2, money: 1500, name: "Rohn", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 3, money: 1500, name: "Anna", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 4, money: 1500, name: "Koko", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 5, money: 1500, name: "Gwin", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 6, money: 1500, name: "Lana", banned: false, ownedTiles: [], owningSaveCard: false, position: 0},
        {playerId: 7, money: 1500, name: "Bart", banned: false, ownedTiles: [], owningSaveCard: false, position: 0}
    ];

    const chanceCards = [
        {
            chanceCardId: 0, 
            chanceCardText: "Advance to Boardwalk", 
            chanceCardPurpose: function(){players[currentPlayer].money -= 20},

        },
    ];


    table.addEventListener('click', (e) => {
        clickedTile = e.target.id.match(/\d+/g);
        (clickedTile >= 1) ? displayTileInformation() : false;
    });
            
    BoardViewButton.addEventListener('click', function(){
        (!tile3dView) ? tile3dView = true : tile3dView = false;
    });

    BoardRotateRight.addEventListener('click', function(){
        boardRotationAngle += 90; 
        document.querySelector(".Table").style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(${boardRotationAngle}deg)`;
        document.getElementById("GameLog").style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(${-boardRotationAngle}deg)`;
    });

    function displayTileInformation(){
        document.getElementById("TileInformation").style.display = "block";
        document.getElementById("TileInfImageBg").style.backgroundImage = `url(\"img/tile_card_images/img_${clickedTile}.jpg\")`;
        document.getElementById("TileNameH").innerHTML = deck.tiles[clickedTile].tileName;

        if(deck.tiles[clickedTile].price !== 0){
            document.getElementById("CardRarity").innerHTML = deck.tiles[clickedTile].rarity.tileRarity +" $" + deck.tiles[clickedTile].price;
            document.getElementById("SellCard").style.display = "";
            document.getElementById("OnBailCard").style.display = "";
            document.getElementById("UpgradeCard").style.display = "";
        }else{
            document.getElementById("CardRarity").innerHTML = "Monopoly service card";
            document.getElementById("SellCard").style.display = "none";
            document.getElementById("OnBailCard").style.display = "none";
            document.getElementById("UpgradeCard").style.display = "none";
        }

        document.getElementById("CardRarity").style.color = `${deck.tiles[clickedTile].rarity.rarityColor}`;
        document.getElementById("CardDescription").innerHTML = deck.tiles[clickedTile].decription;

        tileInformationImage.setAttribute("src", `img/tile_card_images/img_${clickedTile}.jpg`);
        tileInformationImage.style.border = "none";
        tileInformationImage.style.borderBottom = `5px solid ${deck.tiles[clickedTile].rarity.rarityColor}`;
    }

    for (let i = playerColorsList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [playerColorsList[i], playerColorsList[j]] = [playerColorsList[j], playerColorsList[i]];
    }
    //-------------------------------------------------------------------add/remove player
            function addPlayer() {
                if(playersNumber < 8){
                    ++playersNumber;
                    document.getElementById("playerSlot_"+playersNumber).style.display = "block";
                    generatePlayerColors();
                }
            }
            addPlayerButton.addEventListener("click", addPlayer);
    //---------------------------------------------------------------------
            function removePlayer() {
                if(playersNumber > 2){
                    document.getElementById("playerSlot_" + playersNumber).style.display = "none";
                    --playersNumber;
                    generatePlayerColors();
                }
            }
            removePlayerButton.addEventListener("click", removePlayer);
    //------------------------------------------------------------------generate player colors
            function generatePlayerColors() {
                for(let i = 1; i <= playersNumber; i++){
                    document.getElementById(`playerIconConfiguration_${i}`).style.color = playerColorsList[i-1];
                    players[i-1].playerColor = playerColorsList[i-1];
                }
            }
            generatePlayerColors();
    ////////////////////////////////////////////////////////////////////////////// play button (decoration)          
        function playButton() {
            document.querySelector(".WelcomeWindow").style.opacity = 0;
            setTimeout(function(){document.querySelector(".WelcomeWindow").style.display = "none";}, 400);
            setTimeout(function(){playerConfigurationWindow.style.display = "block";}, 500);
            setTimeout(function(){playerConfigurationWindow.style.opacity = 1;}, 700);
        }
        startButton.addEventListener("click", playButton);
    //////////////////////////////////////////////////////////////////////////////            
        function prepareGame(){
            prepareButton.disabled = true;
            for(let i = 1; i <= playersNumber; i++){
                let playerNames = [];
                playerNames[i-1] = document.getElementById(`playerTextName_${i}`).value;
                if(playerNames[i-1]){
                    players[i-1].name = document.getElementById(`playerTextName_${i}`).value;
                }else{
                    players[i-1].name = document.getElementById(`playerTextName_${i}`).placeholder;
                }
            }
            setTimeout(function(){
                playerConfigurationWindow.style.transform = "scale(1.4)";
                playerConfigurationWindow.style.opacity = "0";
            }, 300);
            setTimeout(function(){
                playerConfigurationWindow.style.display = "none";
            }, 600);
            setTimeout(function(){
                playerConfigurationWindow.style.opacity = "0";
            }, 700);
            setTimeout(function(){
                playerConfigurationWindow.style.opacity = "0";
                gameWindow.style.display = "block";
                gameWindow.style.display = "block";
            }, 800);
            setTimeout(function(){
                playerConfigurationWindow.style.display = "0";
                gameWindow.style.opacity = "1";
            }, 1300);
            setTimeout(generateTable, 1000);
        }
        prepareButton.addEventListener("click", prepareGame);


        function generateTable() {
            const tbl = document.createElement("table");
            tbl.setAttribute('id', 'gameTable');
            const tblBody = document.createElement("tbody");

            for (let i = 0; i < 11; i++) {
                const row = document.createElement("tr");
                for (let j = 0; j < 11; j++) {
                    const cell = document.createElement("td");
                    if(i== 0 && j == 0){
                        cell.setAttribute("id", "boardTile_" + 0);
                    }
                    if(i == 0 && j != 0){
                        cell.setAttribute("id", "boardTile_" + j);
                    }
                    if(j == 10){
                        cell.setAttribute("id", "boardTile_" + (i + 10));
                    }
                    if(i == 10){
                        cell.setAttribute("id", "boardTile_" + (30-j));
                    }
                    if(j == 0 && i != 0){
                        cell.setAttribute("id", "boardTile_" + (40-i));   
                    }
                    if(i == 0 || i == 10 || j == 0 || j == 10){
                        cell.setAttribute("class", "BoardTile");
                    }
                    row.appendChild(cell);
                }
                tblBody.appendChild(row);
            }

            tbl.appendChild(tblBody);
            table.appendChild(tbl);

            for(let k = 0; k < 40; k++){
                let indexedBoardTile = document.getElementById(`boardTile_${k}`);

                if(k <= 10){
        
                    indexedBoardTile.style.height = "110px";
                    indexedBoardTile.style.width = "70px";

                }
                if(k >= 10 || k <= 20 && k > 30){
                    
                    indexedBoardTile.style.height = "70px";
                    indexedBoardTile.style.width = "110px";
            
                }

                if(k == 0 || k == 10 || k == 20 || k == 30){
                    indexedBoardTile.style.background = "green";
                }
                if(k >= 20 && k <= 30){
                    
                    indexedBoardTile.style.height = "110px";
                    indexedBoardTile.style.width = "70px";
                
                }

                let tileImage = document.createElement('img');
                tileImage.setAttribute('src', `img/tile_card_images/img_${k}.jpg`);
                tileImage.setAttribute('id', `tileImage_${k}`);
                tileImage.setAttribute('alt', deck.tiles[k].tileName);
                indexedBoardTile.appendChild(tileImage);

                indexedBoardTile.style.borderTop = `5px solid ${deck.tiles[k].rarity.rarityColor}`;
                if(k > 20 && k < 30){
                    indexedBoardTile.style.border = 0;
                    indexedBoardTile.style.borderBottom = `5px solid ${deck.tiles[k].rarity.rarityColor}`;
                }
                
                let indexedTileImage = document.getElementById(`tileImage_${k}`);

                if(k > 10 && k < 20){
                    indexedTileImage.style.transform = "rotate(90deg)";
                    indexedTileImage.style.height = "110px";
                    indexedTileImage.style.width = "auto";
                    indexedTileImage.style.top = "-29%";
                    indexedTileImage.style.left = "18%";

                    indexedBoardTile.style.border = 0;
                    indexedBoardTile.style.borderRight = `5px solid ${deck.tiles[k].rarity.rarityColor}`;
                }
                if(k > 30 && k < 40){
                    indexedTileImage.style.transform = "rotate(-90deg)";
                    indexedTileImage.style.height = "110px";
                    indexedTileImage.style.width = "auto";
                    indexedTileImage.style.top = "-29%";
                    indexedTileImage.style.left = "18%";

                    indexedBoardTile.style.border = 0;
                    indexedBoardTile.style.borderLeft = `5px solid ${deck.tiles[k].rarity.rarityColor}`;
                    
                }
                if(k === 12){
                    indexedTileImage.style.transform = "rotate(0deg)";
                    indexedTileImage.style.height = "100%";
                    indexedTileImage.style.width = "100%";
                    indexedTileImage.style.top = "0%";
                    indexedTileImage.style.left = "0%";
                }

                // indexedBoardTile.style.backgroundImage = `url(img/tile_card_images/img_${k}.jpg)`;
            }

            let nonBorderTiles = [0, 2, 4, 7, 10, 17, 20, 22, 30, 33, 36];

            for(i in nonBorderTiles){
                document.getElementById(`boardTile_${nonBorderTiles[i]}`).style.border = 0;
            }

            
            document.addEventListener('mousemove', function(e){
                let x = e.clientX;
                let y = e.clientY;
                if(tile3dView){
                    table.style.transform = `translate(-50%, -50%) rotateX(${-y/20 + 30}deg) rotateY(${x/20 - 50}deg) rotateZ(${boardRotationAngle}deg)`;
                }else{
                    table.style.transform = `translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotateZ(${boardRotationAngle}deg)`;
                }
                tileInfo.style.top = `${y}px`;
                tileInfo.style.left = `${x}px`;

                if(x <= window.innerWidth - 300 && y <= window.innerHeight - 300){
                    tileInfo.style.top = `${y + 200}px`;
                    tileInfo.style.left = `${x + 200}px`;
                }
                else if(x >= window.innerHeight  - 300 && y >= window.innerHeight  - 300){
                    tileInfo.style.top = `${y - 200}px`;
                    tileInfo.style.left = `${x - 200}px`;
                }
                else if(x <= window.innerHeight  - 300 && y >= window.innerHeight  - 300){
                    tileInfo.style.top = `${y - 200}px`;
                    tileInfo.style.left = `${x + 200}px`;
                }
                else if(x >= window.innerHeight  - 300 && y <= window.innerHeight  - 300){
                    tileInfo.style.top = `${y + 200}px`;
                    tileInfo.style.left = `${x - 200}px`;
                }
            });
            createPlayers();
        }    

          
        function createPlayers(){
            for(let i = 0; i < playersNumber; i++){
                document.querySelector(".PlayersWrapper").innerHTML += `
                <div class="PlayerBlock"  id="playerBlock_${i}">
                    <i class="fa-solid fa-user" id="playerIcon_${i}"></i>
                    <div class="PlayerInformationUpper">
                        <h1 class="PlayerName" id="playerName_${i}">${players[i].name}</h1>
                    </div>
                    <div class="PlayerInformationBottom">
                        <h2 id="PlayerMoney_${i}">$ ${players[i].money}</h2>
                    </div>
                </div>`;
                document.getElementById(`playerIcon_${i}`).style.color = playerColorsList[i];
                document.getElementById(`playerBlock_${i}`).style.background = `url(img/tile_card_images/img_${playerBackgroundGames[Math.floor(Math.random()*playerBackgroundGames.length)]}.jpg)`;
                document.getElementById(`playerBlock_${i}`).style.backgroundSize = `100% auto`;
                document.getElementById(`playerBlock_${i}`).style.backgroundPosition = `center`;
                document.getElementById(`playerBlock_${i}`).style.borderRight = `5px solid ${playerColorsList[i]}`;
            }
            spawnPlayers();
            
        }

        

        let diceThrow = () => {
            dice_1 = Math.floor(Math.random()*6)+1;
            dice_2 = Math.floor(Math.random()*6)+1;
            currentUserDiceNumber = dice_1 + dice_2;
            return currentUserDiceNumber;
            
        }

        

        function spawnPlayers() {
            for(let i = 0; i < playersNumber; i++){
                playerCircle = document.createElement('div');
                playerCircle.setAttribute('class', 'Player');
                playerCircle.setAttribute('id', `playerCircle_${i}`);
                table.appendChild(playerCircle);
                setTimeout(function(){
                    document.getElementById(`playerCircle_${i}`).style.background = playerColorsList[i];
                    document.getElementById(`playerCircle_${i}`).style.margin = `6% 6%`;
                    document.getElementById(`playerCircle_${i}`).style.transform = `translate(${(70/playersNumber) * i}%)`;
                }, 1000); 
            }
            setTimeout(rollDiceWindow, 2000);
        }

        function userChangePosition() {
            if(players[currentPlayer-1].position >= 40){
                players[currentPlayer-1].position = players[currentPlayer-1].position + currentUserDiceNumber - 40;
            }else{
                players[currentPlayer-1].position += currentUserDiceNumber;
            }
        
        }
        function newCirclePass(){
            players[currentPlayer-1].position = players[currentPlayer-1].position - 40; 
            players[currentPlayer-1].money += 200;
            gameLog.innerHTML += `${players[currentPlayer-1].name} passed start one more time and gets $200</br></br>`;
            playerMovePosition();
        }
        function playerMovePosition(){
            
            switch(players[currentPlayer-1].position){
                //----------------------------------------------------------------------------------------
                case 0: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 6%`;
                break;
                //-----------------------------------------------------------------------------------------
                case 1: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 17%`;
                break;
                case 2: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 25%`;
                break;
                case 3: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 33%`;
                break;
                case 4: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 42%`;
                break;
                case 5: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 51%`;
                break;
                case 6: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 58%`;
                break;
                case 7: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 65%`;
                break;
                case 8: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 74%`;
                break;
                case 9: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 82%`;
                break;
                //------------------------------------------------------------------------------------------
                case 10: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `6% 94%`;
                break;
                // -----------------------------------------------------------------------------------------
                case 11: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `17% 94%`;
                break;
                case 12: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `25% 94%`;
                break;
                case 13: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `33% 94% `;
                break;
                case 14: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `42% 94% `;
                break;
                case 15: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `51% 94% `;
                break;
                case 16: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `58% 94% `;
                break;
                case 17: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `65% 94% `;
                break;
                case 18: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `74% 94% `;
                break;
                case 19: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `82% 94% `;
                break;
                //--------------------------------------------------------------------------------------------
                case 20: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 94% `;
                break;
                //--------------------------------------------------------------------------------------------
                case 21: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 82% `;
                break;
                case 22: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 74% `;
                break;
                case 23: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 65% `;
                break;
                case 24: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 58% `;
                break;
                case 25: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 51% `;
                break;
                case 26: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 42% `;
                break;
                case 27: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 33% `;
                break;
                case 28: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 25% `;
                break;
                case 29: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 17% `;
                break;
                //-------------------------------------------------------------------------------------------
                case 30: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `94% 6% `;
                break;
                //-------------------------------------------------------------------------------------------
                case 31: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `82% 6% `;
                break;
                case 32: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `74% 6% `;
                break;
                case 33: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `65% 6%`;
                break;
                case 34: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `58% 6%`;
                break;
                case 35: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `51% 6%`;
                break;
                case 36: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `42% 6%`;
                break;
                case 37: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `33% 6%`;
                break;
                case 38: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `25% 6%`;
                break;
                case 39: document.getElementById(`playerCircle_${currentPlayer-1}`).style.margin = `17% 6%`;
                break;
                default: newCirclePass();
                break;
                

            }
            
        }
        function gameLogRefresh() {

            gameLog.innerHTML += `Player <span style="color:${playerColorsList[currentPlayer-1]}">${players[currentPlayer-1].name}</span>
            threw dice -> dice1: ${dice_1}, 
            dice2: ${dice_2}, 
            dice sum: ${currentUserDiceNumber}</br>`;

            gameLog.innerHTML += (`<span style="color:${playerColorsList[currentPlayer-1]}">${players[currentPlayer-1].name}</span> is going to tile: ${deck.tiles[players[currentPlayer-1].position].tileName} on ${players[currentPlayer-1].position} position</br></br>`);
            gameLog.scrollTo(0, gameLog.scrollHeight);

        }
        function nextPlayer() {
            if(currentPlayer >= playersNumber){
                currentPlayer = 1;
            }else{
                currentPlayer++;
            }
            rollDiceWindow();
        }

        function playerMove() {
            diceThrow();
            userChangePosition();
            playerMovePosition();
            checkTile();
            gameLogRefresh();
            refrershFullUI();
        }
        
        


        function buyTileFunction(){
            if(players[currentPlayer-1].money >= deck.tiles[players[currentPlayer-1].position].price){
                players[currentPlayer-1].money -= deck.tiles[players[currentPlayer-1].position].price;
                deck.tiles[players[currentPlayer-1].position].owner = players[currentPlayer-1].playerId + 1;
                players[currentPlayer-1].ownedTiles.push(deck.tiles[players[currentPlayer-1].position].id);
                gameLog.innerHTML += `${players[currentPlayer-1].name} owns tile ${deck.tiles[players[currentPlayer-1].position].tileName} owner id ${deck.tiles[players[currentPlayer-1].position].owner}`;
                document.getElementById(`boardTile_${players[currentPlayer-1].position}`).style.border = `5px dashed ${playerColorsList[currentPlayer-1]}`;
                nextPlayer();
            }else{
                gameLog.innerHTML += "not enough money";
                nextPlayer();
            }
        }

        function payRentFunction(){
            if(players[currentPlayer-1].position != 12 || players[currentPlayer-1].position != 28){
                if(players[currentPlayer-1].money >= deck.tiles[players[currentPlayer-1].position].rentPrice[deck.tiles[players[currentPlayer-1].position].lvl - 1]){
                    players[currentPlayer-1].money -= deck.tiles[players[currentPlayer-1].position].rentPrice[deck.tiles[players[currentPlayer-1].position].lvl - 1];
                    players[deck.tiles[players[currentPlayer-1].position].owner-1].money += deck.tiles[players[currentPlayer-1].position].rentPrice[deck.tiles[players[currentPlayer-1].position].lvl - 1];
                    
                    gameLog.innerHTML += `${players[currentPlayer-1].name} obligated 
                    to pay rent ($ ${deck.tiles[players[currentPlayer-1].position].rentPrice[deck.tiles[players[currentPlayer-1].position].lvl - 1]}) 
                    for tile ${deck.tiles[players[currentPlayer-1].position].tileName}
                    to player ${players[deck.tiles[players[currentPlayer-1].position].owner-1].name}</br></br>`;

                    nextPlayer();
                }else{
                    gameLog.innerHTML += "not enough money</br></br>";
                    nextPlayer();
                }
            }else{
                let specialRentPrice = (Math.floor(Math.random()*6)+1)*6;
                if(players[currentPlayer-1].money >= specialRentPrice){
                    players[currentPlayer-1].money -= specialRentPrice;
                    players[deck.tiles[players[currentPlayer-1].position].owner-1].money += specialRentPrice;
                
                    gameLog.innerHTML += `${players[currentPlayer-1].name} obligated 
                    to pay rent ($ ${specialRentPrice}) 
                    for tile ${deck.tiles[players[currentPlayer-1].position].tileName}
                    to player ${players[deck.tiles[players[currentPlayer-1].position].owner-1].name}</br></br>`;

                    nextPlayer();
                }else{
                    gameLog.innerHTML += "not enough money</br></br>";
                    nextPlayer();
                }
            }
        }

        function incomeTaxWindow() {
            userMoveWindow.innerHTML = `
            <p>Player <span style="color:${playerColorsList[currentPlayer-1]}">${players[currentPlayer-1].name}</span> stand on Income Tax Tile</p>
            <p>Pay $200!</p>
            <div class="UserMoveOptions-buttons-wrapper">
            <button onclick="incomeTaxFunction()">Pay $200</button>
            </div>
            `;
        }

        function incomeTaxFunction(){
            if(players[currentPlayer-1].money >= 200){
                players[currentPlayer-1].money -= 200;
                gameLog.innerHTML += `Player ${players[currentPlayer-1].name} have payed income tax ($200)</br></br>`;
                nextPlayer();
            }else if(players[currentPlayer-1].ownedTiles.length != 0){
                gameLog.innerHTML += "you have tile to sell, so you can pay income tax</br></br>";
                nextPlayer();
            }else{
                gameLog.innerHTML += "player lose function</br></br>";
                nextPlayer();
            }
        }


        function checkTile() {
            if(deck.tiles[players[currentPlayer-1].position].buyable == true && deck.tiles[players[currentPlayer-1].position].owner == 0){
                buyTileWindow();//------------------------------- If player stands on a new tile (can buy or place it on an auction)
            }else if(deck.tiles[players[currentPlayer-1].position].buyable == true 
                && deck.tiles[players[currentPlayer-1].position].owner > 0 
                && deck.tiles[players[currentPlayer-1].position].buyable == true 
                && deck.tiles[players[currentPlayer-1].position].owner !== players[currentPlayer-1].playerId + 1){
                    payRentWindow();//------------------------------- If player stands on a already bought tile (should pay rent or if not enough money sell his tiles)
            }else if(!deck.tiles[players[currentPlayer-1].position].buyable){
                switch(players[currentPlayer-1].position){
                    case 0:;
                    break;
                    case 10: alert("just visiting");nextPlayer();
                    break;
                    case 20: alert("casino");nextPlayer();
                    break;
                    case 30: alert("go to jail");nextPlayer();
                    break;
                    case 2: case 17: case 33: alert("community chest");nextPlayer();
                    break;
                    case 7: case 22: case 36: alert("chance");nextPlayer();
                    break;
                    case 4: incomeTaxWindow();
                    break;
                }
            }else if(deck.tiles[players[currentPlayer-1].position].buyable == true && 
                deck.tiles[players[currentPlayer-1].position].owner == players[currentPlayer-1].playerId + 1){
                    gameLog.innerHTML += "this is your tile you can upgrade it or sell</br></br>";//--------If player stands on his own tile (Can sell, upgrade, trade it)
                nextPlayer();
            }else {
                gameLog.innerHTML += "something wrong</br></br>";
                nextPlayer();
            }
        }

        function rollDiceWindow() {
            userMoveWindow.innerHTML = `
            <p>Player <span style="color:${playerColorsList[currentPlayer-1]}">${players[currentPlayer-1].name}</span> time to roll dice!</p>
            <div class="UserMoveOptions-buttons-wrapper">
            <button onclick="playerMove()">Roll dice!</button>
            </div>
            `;
        }

        function buyTileWindow() {
            userMoveWindow.innerHTML = `
                <p>Player <span style="color:${playerColorsList[currentPlayer-1]}">${players[currentPlayer-1].name}</span> stands on tile ${deck.tiles[players[currentPlayer-1].position].tileName}</p>
                <div class="UserMoveOptions-buttons-wrapper">
                <button onclick="buyTileFunction()">Buy</button>
                <button onclick="onAuctionWindow()">Auction</button>
                </div>
                `;
        }

        function payRentWindow() {
            userMoveWindow.innerHTML = `
            <p>Player <span style="color:${playerColorsList[currentPlayer-1]}">${players[currentPlayer-1].name}</span> stands on 
            <span style="color:${playerColorsList[deck.tiles[players[currentPlayer-1].position].owner-1]}">${players[deck.tiles[players[currentPlayer-1].position].owner-1].name}'s</span>
            tile. This player is obligated to pay rent (${deck.tiles[players[currentPlayer-1].position].rentPrice[deck.tiles[players[currentPlayer-1].position].lvl - 1]}) for this tile.
            </p>
            <div class="UserMoveOptions-buttons-wrapper"><button onclick="payRentFunction()">Pay rent</button></div>
            `;
        }

        function casinoWindow() {
            userMoveWindow.innerHTML = `
            <p>Youy are on casino
            </p>
            <div class="UserMoveOptions-buttons-wrapper"><button onclick="test()">Buy</button><button>Auction</button></div>
            `;
        }

        function chanceCardWindow() {
            userMoveWindow.innerHTML = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.  
            </p>
            <div class="UserMoveOptions-buttons-wrapper"><button onclick="test()">Buy</button><button>Auction</button></div>
            `;
        }

        function communityChestCardWindow() {
            userMoveWindow.innerHTML = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.  
            </p>
            <div class="UserMoveOptions-buttons-wrapper"><button onclick="test()">Buy</button><button>Auction</button></div>
            `;
        }

        function onBailTileWindow() {
            userMoveWindow.innerHTML = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.  
            </p>
            <div class="UserMoveOptions-buttons-wrapper"><button onclick="test()">Buy</button><button>Auction</button></div>
            `;
        }

        function onAuctionWindow() {
            userMoveWindow.innerHTML = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.  
            </p>
            <div class="UserMoveOptions-buttons-wrapper"><button onclick="test()">Buy</button><button>Auction</button></div>
            `;
        }

        function refrershFullUI() {
            for(let i = 0; i < playersNumber; i++){
                document.getElementById(`PlayerMoney_${i}`).innerHTML = `$ ${players[i].money}`;
            }
        }
