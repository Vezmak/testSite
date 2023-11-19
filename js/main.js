var alco = [];

var select = document.getElementById("alco");

//добавление эл-тов из массива в список

function add_elem() {
    //добавляю элементы в массив через всплывающие окна
    var num = prompt("Сколько напитков добавим?");

    for(var i = 0; i < num; i++) {
        alco.push(prompt("Введите название напитка"));
    }


    // тут добавляю их в список, который слева
    for(var i =0; i < alco.length; i++) {
        var optn = alco[i];
        var el = document.createElement("option");
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
    }
    console.log(alco);
}


// Тут подтягиваю список alco_1
const lalco_1 = document.querySelector('#alco_1');
const lalco_2 = document.querySelector('#alco_2');
const lalco_3 = document.querySelector('#alco_3');
const lalco_4 = document.querySelector('#alco_4');
const drink = document.querySelector('#drink');

var res = [];

alco_1.addEventListener('change', (e)=>{

    var selectedValue = e.target.value;
    console.log(selectedValue);

    switch (selectedValue) {
        case 'виски': res.push("Виски"); break;
        case 'джин': res.push("Джин"); break;
    
        default:
            break;
    }
    });

alco_2.addEventListener('change', (e)=>{

    var selectedValue = e.target.value;
    console.log(selectedValue);

    switch (selectedValue) {
        case 'кола': res.push("Кола"); break;
        case 'тоник': res.push("Тоник"); break;
    
        default:
            break;
    }
    });    

alco_3.addEventListener('change', (e)=>{

    var selectedValue = e.target.value;
    console.log(selectedValue);

    switch (selectedValue) {
        case 'лимон': res.push("Лимон"); break;
        case 'лайм': res.push("Лайм"); break;
        case 'мята': res.push("Мята"); break;
        case 'лёд': res.push("Лёд"); break;
    
        default:
            break;
    }
    });

alco_4.addEventListener('change', (e)=>{

    var selectedValue = e.target.value;
    console.log(selectedValue);

    switch (selectedValue) {
        case 'лимон': res.push("Лимон"); break;
        case 'лайм': res.push("Лайм"); break;
        case 'мята': res.push("Мята"); break;
        case 'лёд': res.push("Лёд"); break;
    
        default:
            break;
    }
    });

drink.addEventListener('change', (e)=>{

    var selectedValue = e.target.value;
    console.log(selectedValue);

    res = [];

    switch (selectedValue) {
        case 'виски-кола': res.push("Коктейль Виски-кола"); break;
        case 'джин-тоник': res.push("Коктейль Джин-тоник"); break;
        // case 'лайм': res.push("Мята"); break;
        // case 'лёд': res.push("Лёд"); break;
    
        default:
            break;
    }
    });



    //создание заказа
function buy_drink() {
    console.log("Заказ оформлен! Ожидайте...");

    var result = '';

    for(i = 0; i < res.length; i++){
        result += res[i];

    if(i !== res.length - 1){
        result += ", ";
    }
}

    console.log("Ваш заказ: " + result);
    // var zak = "Ваш заказ: " + result;
    var resul = document.getElementById("res")
    resul.innerHTML = result;
    res = [];

}



function show_array() {

    console.log(res);
    
}

