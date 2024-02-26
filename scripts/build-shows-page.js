//array with show dates
const showDates = [
    {
        Date: 'Mon Sept 09 2024',
        Venue: 'Ronald Lane',
        Location: 'San Francisco, CA'
    },
    {
        Date: 'Tue Sept 17 2024',
        Venue: 'Pier 3 East',
        Location: 'San Francisco, CA'
    },
    {
        Date: 'Sat Oct 12 2024',
        Venue: 'View Lounge',
        Location: 'San Francisco, CA'
    },
    {
        Date: 'Sat Nov 16 2024',
        Venue: 'Hyatt Agency',
        Location: 'San Francisco, CA'
    },
    {
        Date: 'Fri Nov 29 2024',
        Venue: 'Moscow Center',
        Location: 'San Francisco, CA'
    },
    {
        Date: 'Wed Dec 18 2024',
        Venue: 'Press Club',
        Location: 'San Francisco, CA'
    },
]

//creating Shows section header titles

//creating a div to house header titles and show data for desktop styling

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

//creating Shows section header

const showSectionHeadEl = document.createElement("h2");
showSectionHeadEl.innerText = "Shows";
showSectionHeadEl.classList.add("shows__title");
document.getElementById("showSection").prepend(showSectionHeadEl);

//creating elements to display show date, venue and location data 
const showList = document.getElementById("showSchedule");

function displayShows(concerts) {
    concerts.forEach((concert) => {

        const showDetailsEl = document.createElement("div");
        showDetailsEl.classList.add("shows__details");
        showDetailsEl.id = "showDetails";
        showTableEl.appendChild(showDetailsEl);

        const showDateEl = document.createElement("div");
        showDateEl.classList.add("shows__date");
        showDetailsEl.appendChild(showDateEl);

        const showDateHeaderEl = document.createElement("p");
        showDateHeaderEl.innerText = 'Date';
        showDateHeaderEl.classList.add("shows__header");
        showDateEl.appendChild(showDateHeaderEl);

        const showScheduledDateEl = document.createElement("p");
        showScheduledDateEl.innerText = concert.Date;
        showScheduledDateEl.classList.add("shows__scheduled-date");
        showDateEl.appendChild(showScheduledDateEl);

        const showVenueEl = document.createElement("div");
        showVenueEl.classList.add("shows__venue");
        showDetailsEl.appendChild(showVenueEl);

        const showVenueHeaderEl = document.createElement("p");
        showVenueHeaderEl.innerText = 'Venue';
        showVenueHeaderEl.classList.add("shows__header");
        showVenueEl.appendChild(showVenueHeaderEl);

        const showVenueNameEl = document.createElement("p");
        showVenueNameEl.innerText = concert.Venue;
        showVenueNameEl.classList.add("shows__venue-name");
        showVenueEl.appendChild(showVenueNameEl);

        const showLocationEl = document.createElement("div");
        showLocationEl.classList.add("shows__location");
        showDetailsEl.appendChild(showLocationEl);

        const showLocationHeaderEl = document.createElement("p");
        showLocationHeaderEl.innerText = 'Location';
        showLocationHeaderEl.classList.add("shows__header");
        showLocationEl.appendChild(showLocationHeaderEl);

        const showLocationNameEl = document.createElement("p");
        showLocationNameEl.innerText = concert.Location;
        showLocationNameEl.classList.add("shows__location-name");
        showLocationEl.appendChild(showLocationNameEl);

        const ticketButtonEl = document.createElement("button");
        ticketButtonEl.innerText = 'Buy Tickets';
        ticketButtonEl.classList.add("shows__buy-tickets");
        showDetailsEl.appendChild(ticketButtonEl);

        showDetailsEl.addEventListener("click", () => {
            console.log("Clicked");
            showDetailsEl.classList.replace('shows__details', 'shows__details--active');
    });

});

};

displayShows(showDates);

