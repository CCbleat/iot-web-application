import { defineStore } from 'pinia'
import { createDevice } from '../Tools/StoreOperations/createNewDeviceObj';
import { createScenario } from '../Tools/StoreOperations/createNewScenarioObj';

const useInfosStore = defineStore("store", {
    // data store
    state: () => {
        return {
            darkCoverFlag: false,
            devices: [
            ],
            scenarios: [
                {
                    id: "Home",
                    title: "Home",
                },
                {
                    id: "Living Room",
                    title: "Living Room",
                },
            ],
            categories: [
                {
                    id: "Lamp",
                    title: "Lamp",
                    url: "/lamp",
                },
                {
                    id: "Fan",
                    title: "Fan",
                    url: "/fan",
                },
                {
                    id: "BrightnessSensor",
                    title: "BrightnessSensor",
                    url: "/BrightnessSensor",
                },
                {
                    id: "HumidSensor",
                    title: "HumidSensor",
                    url: "/HumidSensor",
                },
                {
                    id: "TemperatureSensor",
                    title: "TemperatureSensor",
                    url: "/TemperatureSensor",
                },
            ],
        }
    },
    getters: {
        // getDarkCoverFlag() {

        // }
    },
    actions: {
        // Dark Cover Realted
        changeDarkCoverFlag(newVal) {
            this.darkCoverFlag = newVal;
        },
        closeDarkCover() {
            console.log("See", 2);
            this.changeDarkCoverFlag(false);
        },
        openDarkCover() {
            this.changeDarkCoverFlag(true);
        },
        // Add New Device
        addNewDevice(deviceScenario, deviceType, deviceName, macAddress) {
            const newDevice = JSON.parse(JSON.stringify(createDevice(deviceScenario, deviceType, deviceName, macAddress)));
            this.devices.push(newDevice)
        },
        // Delete Existed Device
        deleteOldDevice(deviceName) {
            let index, found = false;
            for(index = 0; index < this.devices.length; index++) {
                if(this.devices[index].name === deviceName) {
                    found = true;
                    break;
                }
            }
            if(found) {
                this.devices.splice(index, 1);
            }
        },
        // Add New Scenario
        addNewScenario(title) {
            const newScenario = JSON.parse(JSON.stringify(createScenario(title)));
            this.scenarios.push(newScenario);
        },
    },
    // data persist
    persist: true,
})

export default useInfosStore