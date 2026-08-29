const bookButton = document.getElementById("bookButton");
const heroBookButton = document.getElementById("heroBookButton");
const contactButton = document.getElementById("contactButton");
const bookingForm = document.getElementById("bookingForm");


/* BOOK BUTTON */
bookButton.addEventListener("click", function () {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
});


/* HERO BOOK BUTTON */
heroBookButton.addEventListener("click", function () {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
});


/* CONTACT BUTTON */
contactButton.addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});


/* RENTAL ITEMS */
function showItems(category) {

    const rentalItems = document.getElementById("rentalItems");
    const rentalCatalog = document.getElementById("rentalCatalog");

    let items = [];


    /* CHAIRS & TABLES */
    if (category === "chairs") {

        items = [
            {
                name: "Plastic Chair",
                price: "Price coming soon",
                icon: "🪑"
            },
            {
                name: "Banquet Chair",
                price: "Price coming soon",
                icon: "🪑"
            },
            {
                name: "Round Table",
                price: "Price coming soon",
                icon: "🔘"
            }
        ];

    }


    /* CANOPIES & TENTS */
    else if (category === "tents") {

        items = [
            {
                name: "Small Canopy",
                price: "Price coming soon",
                icon: "⛺"
            },
            {
                name: "Large Canopy",
                price: "Price coming soon",
                icon: "⛺"
            }
        ];

    }


    /* SOUND SYSTEMS */
    else if (category === "sound") {

        items = [
            {
                name: "Speakers",
                price: "Price coming soon",
                icon: "🔊"
            },
            {
                name: "Microphones",
                price: "Price coming soon",
                icon: "🎤"
            }
        ];

    }


    /* LIGHTING */
    else if (category === "lighting") {

        items = [
            {
                name: "LED Lights",
                price: "Price coming soon",
                icon: "💡"
            },
            {
                name: "Stage Lights",
                price: "Price coming soon",
                icon: "💡"
            }
        ];

    }


    /* CATERING */
    else if (category === "catering") {

        items = [
            {
                name: "Food Warmers",
                price: "Price coming soon",
                icon: "🍽️"
            },
            {
                name: "Serving Trays",
                price: "Price coming soon",
                icon: "🍽️"
            }
        ];

    }


    /* DECORATIONS */
    else if (category === "decorations") {

        items = [
            {
                name: "Event Backdrop",
                price: "Price coming soon",
                icon: "🎨"
            },
            {
                name: "Flower Decorations",
                price: "Price coming soon",
                icon: "🌸"
            }
        ];

    }


    /* STAGES */
    else if (category === "stages") {

        items = [
            {
                name: "Event Stage",
                price: "Price coming soon",
                icon: "🎤"
            },
            {
                name: "Podium",
                price: "Price coming soon",
                icon: "🎤"
            }
        ];

    }


    /* PARTY ACCESSORIES */
    else if (category === "party") {

        items = [
            {
                name: "Balloons",
                price: "Price coming soon",
                icon: "🎈"
            },
            {
                name: "Party Props",
                price: "Price coming soon",
                icon: "🎉"
            }
        ];

    }


    /* CLEAR OLD ITEMS */
    rentalItems.innerHTML = "";


    /* DISPLAY ITEMS */
    items.forEach(function (item) {

        const itemCard = document.createElement("div");

        itemCard.className = "rental-item-card";

        itemCard.innerHTML = `
            <div class="rental-item-icon">
                ${item.icon}
            </div>

            <h3>${item.name}</h3>

            <p>${item.price}</p>

            <button onclick="addToBooking('${item.name}')">
                Add to Booking
            </button>
        `;

        rentalItems.appendChild(itemCard);

    });


    /* SCROLL TO CATALOG */
    rentalCatalog.scrollIntoView({
        behavior: "smooth"
    });

}


/* ADD ITEM TO BOOKING */
function addToBooking(itemName) {

    const messageBox = document.getElementById("message");

    if (messageBox.value === "") {
        messageBox.value = "Items requested: " + itemName;
    } else {
        messageBox.value += ", " + itemName;
    }

    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

}


/* BOOKING FORM */
bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const eventType = document.getElementById("event").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const message = document.getElementById("message").value;


    const whatsappMessage =
        "Hello SH Event Management!%0A%0A" +
        "I want to book an event.%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Event Type: " + eventType + "%0A" +
        "Event Date: " + date + "%0A" +
        "Location: " + location + "%0A" +
        "Items / Additional Information: " + message;


    const whatsappNumber = "233244154664";


    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappMessage,
        "_blank"
    );


    bookingForm.reset();

});