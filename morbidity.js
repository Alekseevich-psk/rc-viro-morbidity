(function () {
    const parent = document.querySelector(".morbidity");
    if (!parent) return;

    new Swiper(".morbidity__slider", {
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".sl-arrow__btn--next",
            prevEl: ".sl-arrow__btn--prev",
        },
    });

    const morbidityBtnShowDesc = parent.querySelectorAll(".morbidity__btn-show-desc");
    if (!morbidityBtnShowDesc.length >= 1) return;

    morbidityBtnShowDesc.forEach((el) => {
        el.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("active");

            if (el.innerHTML == "Показать описание") {
                el.innerHTML = "Скрыть описание";
            } else {
                el.innerHTML = "Показать описание";
            }
        });
    });

    var dataFirst = {
        label: "Заболеваемость 2022/23",
        data: [0, 59, 75, 20, 20, 55, 40],
        fill: false,
    };

    var dataSecond = {
        label: "Базовая линия 2022/23",
        data: [-10, 15, 60, 60, 110, 100, null],
        fill: false,
    };

    var sickData = {
        labels: [0, 10, 20, 30, 40, 50, 60],
        datasets: [dataFirst, dataSecond],
    };

    var chartOptions = {
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    boxWidth: 100,
                },
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Ось X",
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Ось Y",
                },
            },
        },
    };

    var sickCanvas = document.querySelector("#sickChart");
    var sickCanvas2 = document.querySelector("#sickChart2");

    new Chart(sickCanvas, {
        type: "line",
        data: sickData,
        options: chartOptions,
    });

    new Chart(sickCanvas2, {
        type: "line",
        data: sickData,
        options: chartOptions,
    });
})();
