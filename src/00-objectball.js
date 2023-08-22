
// Use built-in functions attached to the `Object` class to access keys, values,
// or entries:
// - `Object.keys(oo)` returns an array of all keys
// - `Object.values(oo)` returns an array of all values
// - `Object.entries(oo)` returns an array of arrays containing `[key, value]` together
function gameObject() {
    // home team
    const homeTeam = {
        teamName: "Brooklyn Nets",
        colors: ["Black", "white"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1
            }
        }
    };

    // away team
    const awayTeam = {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            }
        }
    };

    const gameData = {
        home: homeTeam,
        away: awayTeam
    };

    return gameData;
}
// console.log(gameObject());

// Returns the name of the home team, "Brooklyn Nets".
// function homeTeamName() {
//     let object = gameObject()
//     return object['home']['teamName']
// }

// console.log(homeTeamName())

// numPointsScored is a function that takes in an argument of a player's name and returns the number of points scored for that player.
// function numPointsScored(playerName){
//     const gameData = gameObject(); // Assuming you have the gameObject function defined
//     // Check if the player exists in the home team
//     if (gameData.home.players[playerName]) {
//         return gameData.home.players[playerName].points;
//     }
//     // Check if the player exists in the away team
//     if (gameData.away.players[playerName]) {
//         return gameData.away.players[playerName].points;
//     }
//     // If the player doesn't exist in either team
//     return "Player not found";
// }

// // Debugging
// console.log(numPointsScored("Alan Anderson"));
// console.log(numPointsScored("Jeff Adrien")); 
// console.log(numPointsScored("LeBron James"));  

// shoeSize is a function that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerName){
    const gameData = gameObject();
    if(gameData.home.players[playerName]){
        return gameData.home.players[playerName].shoe
    }
    if(gameData.away.players[playerName]){
        return gameData.away.players[playerName].shoe
    }
    return "Player not found";
}
// Debugging
// console.log(shoeSize("Alan Anderson"));
// console.log(shoeSize("Jeff Adrien")); 
// console.log(shoeSize("LeBron James")); 

// teamColor is a function, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamName){
    let gameData = gameObject();
    
    if (gameData.home.teamName === teamName){
        let colors = gameData.home.colors.map(colors => colors);
        return colors
    }
    if (gameData.away.teamName === teamName){
        let colors = gameData.away.colors.map(colors => colors);
        return colors
    }
}
// console.log(teamColors("Brooklyn Nets"));
// console.log(teamColors("Charlotte Hornets"));

//teamNames() operates on the game object to return an array of the team name
function teamNames(gameData){
    gameData = gameObject(); 
    const teamNamesArray = Object.keys(gameData).map(team => gameData[team].teamName);

    return teamNamesArray;
}

// playerNumbers() that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName){
    const gameData = gameObject();
    let teamPlayers = null;

    if (gameData.home.teamName === teamName) {
        teamPlayers = gameData.home.players;
    } else if (gameData.away.teamName === teamName) {
        teamPlayers = gameData.away.players;
    } else {
        return "Team not found";
    }

    const jerseyNumbers = Object.values(teamPlayers).map(player => player.number);

    return jerseyNumbers;
}

// console.log(playerNumbers("Brooklyn Nets"));

// playerStats() takes in an argument of a player's name  and returns an object of that player's stats.
function playerStats(playerName){
    const gameData = gameObject();
    let playerStat ={}
    if (playerName in gameData.away.players){
        playerStat = gameData.away.players[playerName];
        return playerStat
    }
    else if (playerName in gameData.home.players){
        playerStat = gameData.home.players[playerName];
        return playerStat
    }
    else{
        return "Player doesn't exist!"
    }
}
// console.log(playerStats("Alan Anderson"));
// console.log(playerStats("Jeff Adrien"));
// console.log(playerStats("Quby"));

//bigShoeRebounds() will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
//   - First, find the player with the largest shoe size
//   - Then, return that player's number of rebounds
//   - Remember to think about return values here. Use `debugger` to drop into your function and understand what it is returning and why.
function bigShoeRebounds() {
    const gameData = gameObject(); // Assuming you have the gameObject function defined

    function playerLargestShoe() {
        const allPlayers = [...Object.values(gameData.home.players), ...Object.values(gameData.away.players)];
        
        const playerWithLargestShoe = allPlayers.reduce((prevPlayer, currentPlayer) => {
            return (currentPlayer.shoe > prevPlayer.shoe) ? currentPlayer : prevPlayer;
        });

        return playerWithLargestShoe || null;
    }

    const player = playerLargestShoe();
    // console.log(player);
    
    // Assuming you want to return rebounds of the player with the largest shoe size
    if (player) {
        return player.rebounds;
    } else {
        return "Rebounds not found";
    }
}
const rebounds = bigShoeRebounds();
console.log(rebounds);
