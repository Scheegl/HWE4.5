class Device {
    constructor(name) {
        this.name = name;
    }

    DeviceWorks () {
        let itWorks = false
        if (this.electric && this.isOn) {
            itWorks = true;
        } else {
            itWorks = false;
        }
        return (itWorks);
    }
}



class ElDevice extends Device {
    constructor (name, power, electric, isOn){
        super(name);
        this.power = power;
        this.electric = electric;
        this.isOn = isOn;
        this. showPower = function(){
            console.log(`${name}\'s power usage is ${power} W`)
        }
    }
}


let powerSum = function(){
    let sum = 0;
    for(let value of ElDiv){
        if (value.DeviceWorks()){
            sum += value.power;
        } else {
            sum;
        }
    }
    return 'Total consumption ' + sum + ' W';
}


const lamp = new ElDevice(name = "lamp", power = 25, electric = true, isOn = true);
const pc = new ElDevice(name = "computer", power = 500, electric = true, isOn = true);
let ElDiv = [lamp, pc];


console.log(lamp.DeviceWorks());
console.log(pc.DeviceWorks());

lamp.showPower();
pc.showPower();

console.log(powerSum(ElDiv));