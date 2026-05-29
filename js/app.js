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

const saveSunday =
document.getElementById("saveSunday");

const sundayDate =
document.getElementById("sundayDate");

btnNewSunday.addEventListener(
"click",
() => {

    modal.classList.remove(
    "hidden"
    );

    sundayDate.value =
    getNextSunday();

}
);

saveSunday.addEventListener(
"click",
saveNewSunday
);

function getNextSunday(){

    const today = new Date();

    const next =
    new Date(today);

    const daysUntilSunday =
    (7 - today.getDay()) % 7;

    next.setDate(
        today.getDate() +
        (daysUntilSunday || 7)
    );

    return next
    .toISOString()
    .split("T")[0];

}

function saveNewSunday(){

    const date =
    sundayDate.value;

    const chofer1 =
    driver1.value;

    const chofer2 =
    driver2.value;

    if(
        !date ||
        !chofer1 ||
        !chofer2
    ){
        alert(
        "Completá todos los campos"
        );
        return;
    }

    if(
        chofer1 === chofer2
    ){
        alert(
        "No podés repetir chofer"
        );
        return;
    }

    const selected =
    new Date(
      date + "T12:00:00"
    );

    if(
      selected.getDay() !== 0
    ){
      alert(
      "Solo se pueden registrar domingos"
      );
      return;
    }

    const exists =
    sundays.find(
      s => s.date === date
    );

    if(exists){

      alert(
      "Ese domingo ya existe"
      );

      return;
    }

    sundays.push({

      date,

      drivers:[
        Number(chofer1),
        Number(chofer2)
      ]

    });

    localStorage.setItem(
      "sundays",
      JSON.stringify(sundays)
    );

    document.getElementById(
      "totalSundays"
    ).textContent =
    sundays.length;

    document.getElementById(
      "totalHours"
    ).textContent =
    sundays.length * 16;

    modal.classList.add(
      "hidden"
    );

    alert(
      "Domingo guardado correctamente"
    );

}
