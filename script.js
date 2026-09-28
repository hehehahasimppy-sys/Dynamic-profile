// ==========================
// DOM Elements
// ==========================

const body = document.body;

const themeBtn =
    document.getElementById("themeBtn");

const colorBtn =
    document.getElementById("colorBtn");

const editBtn =
    document.getElementById("editBtn");

const editModal =
    document.getElementById("editModal");

const closeModal =
    document.getElementById("closeModal");

const saveProfile =
    document.getElementById("saveProfile");

const nameText =
    document.getElementById("nameText");

const bioText =
    document.getElementById("bioText");

const locationText =
    document.getElementById("locationText");

const editName =
    document.getElementById("editName");

const editBio =
    document.getElementById("editBio");

const editLocation =
    document.getElementById("editLocation");

const toggleBtn =
    document.getElementById("toggleBtn");

const extraInfo =
    document.getElementById("extraInfo");

const addSkillBtn =
    document.getElementById("addSkillBtn");

const skills =
    document.getElementById("skills");

const contactForm =
    document.getElementById("contactForm");

const contactResult =
    document.getElementById("contactResult");


// ==========================
// Load localStorage
// ==========================

const savedProfile =
    JSON.parse(
        localStorage.getItem(
            "kunlanatProfile"
        )
    );

if (savedProfile) {

    nameText.textContent =
        savedProfile.name;

    bioText.textContent =
        savedProfile.bio;

    locationText.textContent =
        savedProfile.location;
}


// ==========================
// Dark / Light Mode
// ==========================

if (
    localStorage.getItem("darkMode")
    === "true"
) {

    body.classList.add("dark");

    themeBtn.textContent =
        "☀️ Light Mode";
}


themeBtn.addEventListener(
    "click",
    function () {

        body.classList.toggle("dark");

        const dark =
            body.classList.contains("dark");

        localStorage.setItem(
            "darkMode",
            dark
        );

        if (dark) {

            themeBtn.textContent =
                "☀️ Light Mode";

        } else {

            themeBtn.textContent =
                "🌙 Dark Mode";
        }

    }
);


// ==========================
// Change Color
// ==========================

const colors = [
    "#246bce",
    "#7c3aed",
    "#0f766e",
    "#db2777",
    "#ea580c"
];

let colorIndex = 0;

colorBtn.addEventListener(
    "click",
    function () {

        colorIndex++;

        if (
            colorIndex >= colors.length
        ) {
            colorIndex = 0;
        }

        document.documentElement.style
            .setProperty(
                "--primary",
                colors[colorIndex]
            );

    }
);


// ==========================
// Edit Profile
// ==========================

editBtn.addEventListener(
    "click",
    function () {

        editName.value =
            nameText.textContent;

        editBio.value =
            bioText.textContent;

        editLocation.value =
            locationText.textContent;

        editModal.classList.remove(
            "hidden"
        );

    }
);


// Close Modal

closeModal.addEventListener(
    "click",
    function () {

        editModal.classList.add(
            "hidden"
        );

    }
);


// ==========================
// Save Profile
// ==========================

saveProfile.addEventListener(
    "click",
    function () {

        const newName =
            editName.value.trim();

        const newBio =
            editBio.value.trim();

        const newLocation =
            editLocation.value.trim();


        if (
            !newName ||
            !newBio ||
            !newLocation
        ) {

            alert(
                "กรุณากรอกข้อมูลให้ครบ"
            );

            return;
        }


        nameText.textContent =
            newName;

        bioText.textContent =
            newBio;

        locationText.textContent =
            newLocation;


        const profile = {

            name: newName,

            bio: newBio,

            location: newLocation

        };


        localStorage.setItem(
            "kunlanatProfile",
            JSON.stringify(profile)
        );


        editModal.classList.add(
            "hidden"
        );


        alert(
            "บันทึกข้อมูลเรียบร้อยแล้ว"
        );

    }
);


// ==========================
// Show / Hide Information
// ==========================

toggleBtn.addEventListener(
    "click",
    function () {

        extraInfo.classList.toggle(
            "hidden-info"
        );


        if (
            extraInfo.classList.contains(
                "hidden-info"
            )
        ) {

            toggleBtn.textContent =
                "👁️ แสดงข้อมูล";

        } else {

            toggleBtn.textContent =
                "🙈 ซ่อนข้อมูล";
        }

    }
);


// ==========================
// Add Skill
// ==========================

addSkillBtn.addEventListener(
    "click",
    function () {

        const newSkill =
            prompt(
                "กรอกชื่อ Skill ที่ต้องการเพิ่ม"
            );


        if (
            newSkill &&
            newSkill.trim() !== ""
        ) {

            const span =
                document.createElement(
                    "span"
                );

            span.className =
                "skill";

            span.textContent =
                newSkill.trim();

            skills.appendChild(span);

        }

    }
);


// ==========================
// Contact Form
// ==========================

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document
                .getElementById(
                    "contactName"
                )
                .value
                .trim();


        const email =
            document
                .getElementById(
                    "contactEmail"
                )
                .value
                .trim();


        const message =
            document
                .getElementById(
                    "message"
                )
                .value
                .trim();


        if (
            !name ||
            !email ||
            !message
        ) {

            contactResult.textContent =
                "กรุณากรอกข้อมูลให้ครบทุกช่อง";

            contactResult.style.color =
                "#d83b3b";

            return;
        }


        contactResult.textContent =
            "ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อ";

        contactResult.style.color =
            "#159447";


        contactForm.reset();

    }
);
