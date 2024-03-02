import { BandSiteApi } from "./band-site-api.js";

//creating labels for mobile view & turned off for tablet/desktop
const showTableEl = document.createElement("div");
showTableEl.classList.add("shows__table");
document.getElementById("showSection").prepend(showTableEl);

const showHeadersEl = document.createElement("div");
showHeadersEl.classList.add("shows__headers");
showTableEl.prepend(showHeadersEl);

const showDateHeadEl = document.createElement("p");
showDateHeadEl.innerText = "Date";
showDateHeadEl.classList.add("shows__headers-copy");
showHeadersEl.appendChild(showDateHeadEl);

const showVenueHeadEl = document.createElement("p");
showVenueHeadEl.innerText = "Venue";
showVenueHeadEl.classList.add("shows__headers-copy");
showHeadersEl.appendChild(showVenueHeadEl);

const showLocationHeadEl = document.createElement("p");
showLocationHeadEl.innerText = "Location";
showLocationHeadEl.classList.add("shows__headers-copy");
showHeadersEl.appendChild(showLocationHeadEl);

const showButtonHeadEl = document.createElement("p");
showButtonHeadEl.classList.add("shows__headers-copy");
showHeadersEl.appendChild(showButtonHeadEl);

//creating Shows section headers
const showSectionHeadEl = document.createElement("h2");
showSectionHeadEl.innerText = "Shows";
showSectionHeadEl.classList.add("shows__title");
document.getElementById("showSection").prepend(showSectionHeadEl);

//creating elements to display show date, venue and location data
const renderShows = async (shows) => {    
    const showList = document.getElementById("showSchedule");
    shows.forEach((show) => { //function displayShows(concerts) {
        const showDetailsEl = document.createElement("div");
        showDetailsEl.classList.add("shows__details");
        showDetailsEl.id = "showDetails";
        showTableEl.appendChild(showDetailsEl);

        const showDateEl = document.createElement("div");
        showDateEl.classList.add("shows__date");
        showDetailsEl.appendChild(showDateEl);

        const showDateHeaderEl = document.createElement("p");
        showDateHeaderEl.innerText = "Date";
        showDateHeaderEl.classList.add("shows__header");
        showDateEl.appendChild(showDateHeaderEl);

        const timeStampEl = document.createElement("p");
        const formattedDate = new Date(show.date).toDateString();
        timeStampEl.textContent = formattedDate;
        timeStampEl.classList.add("shows__scheduled-date");
        showDateEl.appendChild(timeStampEl);

        const showVenueEl = document.createElement("div");
        showVenueEl.classList.add("shows__venue");
        showDetailsEl.appendChild(showVenueEl);

        const showVenueHeaderEl = document.createElement("p");
        showVenueHeaderEl.innerText = "Venue";
        showVenueHeaderEl.classList.add("shows__header");
        showVenueEl.appendChild(showVenueHeaderEl);

        const showVenueNameEl = document.createElement("p");
        showVenueNameEl.innerText = show.place;
        showVenueNameEl.classList.add("shows__venue-name");
        showVenueEl.appendChild(showVenueNameEl);

        const showLocationEl = document.createElement("div");
        showLocationEl.classList.add("shows__location");
        showDetailsEl.appendChild(showLocationEl);

        const showLocationHeaderEl = document.createElement("p");
        showLocationHeaderEl.innerText = "Location";
        showLocationHeaderEl.classList.add("shows__header");
        showLocationEl.appendChild(showLocationHeaderEl);

        const showLocationNameEl = document.createElement("p");
        showLocationNameEl.innerText = show.location;
        showLocationNameEl.classList.add("shows__location-name");
        showLocationEl.appendChild(showLocationNameEl);

        const ticketButtonEl = document.createElement("button");
        ticketButtonEl.innerText = "Buy Tickets";
        ticketButtonEl.classList.add("shows__buy-tickets");
        showDetailsEl.appendChild(ticketButtonEl);

        showDetailsEl.addEventListener("click", () => {
            showDetailsEl.classList.toggle("shows__details--active");
        });
    });
}

const getShowsApi = async function getShowsFromApi() {
    const bandSite2 = new BandSiteApi("4ff1acf6-d299-4817-98e4-9289a44d89b5");
    const data = await bandSite2.getShows();
    renderShows(data);
}

getShowsApi()