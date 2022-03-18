class ElectricLamp {
    constructor() {
        this.status = false;
    }
    showStatus() {
        if (this.status) {
            console.log('The lamp is on.')
        }else {
            console.log('The lamp is off.')
        }
    }
}
class SwitchButton {
    turnSwitch(lamp) {
        if (lamp.status) {
            lamp.status = false;
        } else {
            lamp.status = true
      }
    }
  }

let lamp = new ElectricLamp();
let switchButton = new SwitchButton();

lamp.showStatus();
switchButton.turnSwitch(lamp);
lamp.showStatus();
switchButton.turnSwitch(lamp);
lamp.showStatus();
