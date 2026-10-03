function latin() {
    console.log("Мой скрипт запущен")
        if (document.getElementById("f").innerText==='Иринин'){
            document.getElementById("f").innerText='Irinin'
            document.getElementById("i").innerText='Maksim'
            document.getElementById("o").innerText='Sergeevich'
            document.getElementById("vydan").innerText='Main Police in Belgorod Region'
            document.getElementById("pol").innerText='Male'
            document.getElementById("place").innerText='Belgorod, Bel. region, Russia'
        }
        else {
            document.getElementById("f").innerText='Иринин'
            document.getElementById("i").innerText='Максим'
            document.getElementById("o").innerText='Сергеевич'
            document.getElementById("vydan").innerText='УМВД России по Белгородской области'
            document.getElementById("pol").innerText='МУЖ'
            document.getElementById("place").innerText='Белгород, Белгородская область, Россия'
        }


}

console.log("Мой скрипт")

const change = document.getElementById('button')
change.addEventListener('click', latin)
