function Device(name) {
    this.name = name;

}

Device.prototype.DeviceWorks = function () {
    let itWorks = false
    if (this.electric && this.isOn) {
        itWorks = true;
    } else {
        itWorks = false;
    }
    return (itWorks);
}

function ElDevice(name, power, electric, isOn) {
    this.name = name;
    this.power = power;
    this.electric = electric;
    this.isOn = isOn;
    this. showPower = function(){
        console.log(power)
    }
}

ElDevice.prototype = new Device();



let powerSum = function(){
    let sum = 0;
    for(let value of ElDiv){
        if (value.DeviceWorks()){
            sum += value.power;
        }else{
            sum;
        }



    }
    return sum;


}


const lamp = new ElDevice(name = "lamp", power = 30, electric = true, isOn = true);
const pc = new ElDevice(name = "computer", power = 20, electric = true, isOn = true);
let ElDiv = [lamp, pc];


console.log(lamp.DeviceWorks());
console.log(pc.DeviceWorks());

lamp.showPower();
pc.showPower();

console.log(powerSum(ElDiv));