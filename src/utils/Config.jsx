const production = false

const Config = {
    production       : production,
    google_map_key   : 'AIzaSyDPCOFr9JhZqHUvB86cLQnFDrikonQFGys',
    google_client_id : "602902878611-sq00ecori3rhtdketof3e2qbi710brsu.apps.googleusercontent.com",
    API              : {
        URL : production ? 'https://api.easi.boxpower.cloud/api/v1': 'https://dev.api.v2.easi.boxpower.cloud/api/v2'
    },
    months : [
        { name: "January", short: "Jan", serial: 1, days: 31 },
        { name: "February", short: "Feb", serial: 2, days: 28 },
        { name: "March", short: "Mar", serial: 3, days: 31 },
        { name: "April", short: "Apr", serial: 4, days: 30 },
        { name: "May", short: "May", serial: 5, days: 31 },
        { name: "June", short: "Jun", serial: 6, days: 30 },
        { name: "July", short: "Jul", serial: 7, days: 31 },
        { name: "August", short: "Aug", serial: 8, days: 31 },
        { name: "September", short: "Sep", serial: 9, days: 30 },
        { name: "October", short: "Oct", serial: 10, days: 31 },
        { name: "November", short: "Nov", serial: 11, days: 30 },
        { name: "December", short: "Dec", serial: 12, days: 31 }
    ]
}

export default Config;
