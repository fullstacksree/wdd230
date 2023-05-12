let lastmodified = new Date(document.lastmodified);
let fullDate = lastmodified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastmodified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;