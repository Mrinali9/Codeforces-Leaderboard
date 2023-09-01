// Function to fetch Codeforces data
async function fetchCodeforcesData() {
    const instituteName = "IIT Kharagpur";
    const url = `https://codeforces.com/api/user.ratedList?activeOnly=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK") {
            const leaderboard = document.getElementById("leaderboard");

            data.result.forEach((user, index) => {
                if (user.organization === instituteName) {
                    const row = leaderboard.insertRow();
                    row.insertCell(0).textContent = index + 1;
                    row.insertCell(1).textContent = user.firstName + " " + user.lastName;
                    row.insertCell(2).textContent = user.handle;
                    row.insertCell(3).textContent = user.rating || "N/A";
                }
            });
        } else {
            console.error("Error fetching data from Codeforces API");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchCodeforcesData();
