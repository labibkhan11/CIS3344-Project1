const travelData = `{
    "destinations": [
        {
            "title": "Cox's Bazar, Bangladesh",
            "image": "images/cox's_bazar.jpg",
            "description": "Home to the world's longest unbroken sea beach, famous for its golden sands and stunning sunsets. And ofc my favourite beach",
            "coordinates": [21.4272, 92.0058],
            "itinerary": ["Relax at Cox's Bazar Beach", "Visit Himchari National Park", "Explore Saint Martin’s Island"]
        },
        {
            "title": "Pyongyang, DPRK",
            "image": "images/pyongyang.jpg",
            "description": "The capital of North Korea, known for its grand monuments, propaganda art, restricted tourism and arresting tourists for anything.",
            "coordinates": [39.0194, 125.7381],
            "itinerary": ["See the Juche Tower", "Visit the Kumsusan Palace of the Sun", "Explore Kim Il-sung Square", "DON'T GET ARRESTED"]
        },
        {
            "title": "Chernobyl, Ukraine",
            "image": "images/chernobyl.jpeg",
            "description": "The site of the 1986 nuclear disaster, now a haunting yet fascinating tourist destination. Great place to get radiation posioning.",
            "coordinates": [51.3890, 30.0990],
            "itinerary": ["Tour the Chernobyl Exclusion Zone", "See the abandoned city of Pripyat", "Visit Reactor 4 Memorial", "Get hospitalized for radiatiom"]
        },
        {
            "title": "Paris, France",
            "image": "images/paris.jpg",
            "description": "The city of lights, known for its art, fashion, and culture.",
            "coordinates": [48.8566, 2.3522],
            "itinerary": ["Visit the Eiffel Tower", "Explore the Louvre", "Walk along the Seine"]
        },
        {
            "title": "Tokyo, Japan",
            "image": "images/tokyo.jpg",
            "description": "A bustling metropolis blending modernity with tradition.",
            "coordinates": [35.6895, 139.6917],
            "itinerary": ["Visit Shibuya Crossing", "See the cherry blossoms", "Experience Akihabara"]
        },
        {
            "title": "New York, USA",
            "image": "images/nyc.jpg",
            "description": "The city that never sleeps, famous for Times Square and Broadway.",
            "coordinates": [40.7128, -74.0060],
            "itinerary": ["Walk in Central Park", "Visit the Statue of Liberty", "Explore Times Square"]
        }
    ]
}`;

document.addEventListener("DOMContentLoaded", function () {
    const data = JSON.parse(travelData);
    const container = document.getElementById("destinations-container");

    if (container) {
        data.destinations.forEach(destination => {
            const { title, image, description } = destination;

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${image}" alt="${title}">
                <h3>${title}</h3>
                <p>${description}</p>
            `;

            card.addEventListener("click", () => {
                localStorage.setItem("selectedDestination", JSON.stringify(destination));
                window.location.href = "destination.html";
            });

            container.appendChild(card);
        });
    }
    const form = document.getElementById("booking-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const travelers = document.getElementById("travelers").value;
            const date = document.getElementById("date").value;

            if (!name || !email || travelers < 1 || !date) {
                alert("Please fill all fields correctly.");
                return;
            }

            alert("Tour Booked!");
            form.reset();
        });
    }