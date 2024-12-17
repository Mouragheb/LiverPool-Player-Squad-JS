const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "LiverPool",
  sport: "Soccer",
  year: "2024-2025",
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Arne Slot",
    matches: 7,
  },
  players: [
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0415.jpg",
      name: "Mohamed Salah",
      position: "forward",
      number: 11,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0425.jpg",
      name: "Luiz Días",
      position: "forward",
      number: 7,
      isCaptain: false,
      starting: true,
      
    },
     {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0426.jpg",
      name: "Darwin Núñez",
      position: "forward",
      number: 9,
      isCaptain: false,
      starting: false,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0435.jpg",
      name: "Cody Gakapo",
      position: "forward",
      number: 18,
      isCaptain: false,
      starting: false,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0414.jpg",
      name: "Van Dijk",
      position: "defender",
      number: 4,
      isCaptain: true,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0427.jpg",
      name: "Konaté",
      position: "defender",
      number: 6,
      isCaptain: false,
      starting: true,
    },
    { 
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0431.jpg",
      name: "Jones",
      position: "midfielder",
      number: 7,
      isCaptain: false,
      starting: false,
    },
    { 
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0423.jpg",
      name: "Szoboszlai",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0424.jpg",
      name: "Mac Allister",
      position: "midfielder",
      number: 10,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0421.jpg",
      name: "Robertson",
      position: "defender",
      number: 26,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0422.jpg",
      name: "Jota",
      position: "forward",
      number: 20,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0432.jpg",
      name: "Eliot",
      position: "midfielder",
      number: 19,
      isCaptain: false,
      starting: false,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0430.jpg",
      name: "Gomez",
      position: "defender",
      number: 2,
      isCaptain: false,
      starting: false,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0429.jpg",
      name: "Gravenberch",
      position: "midfielder",
      number: 38,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0419.jpg",
      name: "Alisson Becker",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0433.jpg",
      name: "Kelleher",
      position: "goalkeeper",
      number: 62,
      isCaptain: false,
      starting: false,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0420.jpg",
      name: "T.T.Arnold",
      position: "defender",
      number: 66,
      isCaptain: false,
      starting: true,
    },
    {
      image: "https://moustafaragheb.com/wp-content/uploads/2024/12/IMG_0428.jpg",
      name: "Endo",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      starting: false,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

playerCards.innerHTML="";

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({image, name, position, number, isCaptain, starting }) => {
        return `
        <div class="player-card">
          <img class="cards-img" src="${image}" alt="${name}">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Starting Eleven: ${starting === true ? "Yes" : "No"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "starting":
      setPlayerCards(players.filter((player) => player.starting === true));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;

default:
setPlayerCards();

  }
});

const searchBox = document.getElementById("search");

// Event listener for the search box
searchBox.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
  const filteredPlayers = players.filter(
    (player) =>
      player.name.toLowerCase().includes(searchText) || // Match by name
      player.position.toLowerCase().includes(searchText) // Match by position
  );
  
  // Update the displayed player cards
  playerCards.innerHTML = ""; // Clear current cards
  setPlayerCards(filteredPlayers);
});