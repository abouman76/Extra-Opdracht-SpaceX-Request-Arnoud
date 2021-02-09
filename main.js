// [x] HTML en JS files maken.
// [x] JavaScript file linken.
// [x] NPM init.
// [x] git init (zorg wel voor een git repository)
// [x] .gitignore maken.
// [x] AXIOS installeren. -> npm install axios _(library)_
// [x] AXIOS script linken.
// [x] Een async function maken en **aanroepen**!
// [x] Request maken met AXIOS.
// [x] Afwachten tot de data er is.
// [ ] Data weergeven in de DOM.
//     - [x] Lijst maken met een id.
//     - [x] Lijst selecteren.
//     - [ ] Voor elke element in de array.
//          - [] Een li aanmaken.
//          - [ ] textContent toevoegen.
//          - [ ] li appenden.

async function dataSpaceX() {
    console.log("Wat log ik?")
    const responseFromApi = await axios.get(
        "https://api.spacexdata.com/v4/launches"
    );
   // console.log("What is the response from the API?", responseFromApi);
   // console.log("Response API", responseFromApi.data);
   // console.log("Info SpaceX Sat:", responseFromApi.data[3].name, responseFromApi.data[3].details);

    const listOfSatellites = document.getElementById("satellite-list");
    console.log(listOfSatellites);

    console.log(responseFromApi.data);

    for (const launch of responseFromApi.data) {
        // console.log("1 tegelijk?", launch);
        const launchSatellite = `${launch.name} - ${launch.details}`;
        console.log(launchSatellite);

    }

}

dataSpaceX();

