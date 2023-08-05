            //5
// ==========================================================================================
class Appliances {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }
    stuckIn() {
        if(this.power > 0) {
            this.isPlugged = true;
            console.log('Прибор ' + this.name + ' влючен.');
        } else {
            console.log('Прибор ' + this.name + ' не влючен.')
        }
    }
}
const pc = new Appliances('Компьютер', 100);
const lampa = new Appliances('Лампа', 0);
pc.stuckIn();
lampa.stuckIn();
console.log('Общая мощность двух приборов равна ' + (pc.power + lampa.power) + ' Вт');
console.log(lampa);
console.log(pc);

// ==========================================================================================