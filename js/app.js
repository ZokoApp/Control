const sundays =
JSON.parse(
localStorage.getItem("sundays")
) || [];

const modal =
document.getElementById("modalSunday");

const btnNewSunday =
document.getElementById("btnNewSunday");

const closeModal =
document.getElementById("closeModal");

const driver1 =
document.getElementById("driver1");

const driver2 =
document.getElementById("driver2");

document.getElementById(
"totalDrivers"
).textContent = drivers.length;

document.getElementById(
"totalSundays"
).textContent = sundays.length;

document.getElementById(
"totalHours"
).textContent =
sundays.length * 16;

document.getElementById(
"totalAlerts"
).textContent = 0;

btnNewSunday.addEventListener(
"click",
() => {

    modal.classList.remove(
    "hidden"
    );

}
);

closeModal.addEventListener(
"click",
() => {

    modal.classList.add(
    "hidden"
    );

}
);

populateDrivers();

function populateDrivers(){

    driver1.innerHTML =
    `<option value="">
        Seleccionar
    </option>`;

    driver2.innerHTML =
    `<option value="">
        Seleccionar
    </option>`;

    drivers.forEach(driver => {

        driver1.innerHTML += `
            <option value="${driver.id}">
                ${driver.id} - ${driver.name}
            </option>
        `;

        driver2.innerHTML += `
            <option value="${driver.id}">
                ${driver.id} - ${driver.name}
            </option>
        `;

    });

}
