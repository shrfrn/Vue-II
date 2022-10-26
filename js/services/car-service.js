import { utilService } from './util-service.js'

const CARS_KEY = 'cars'
_createCars()

export const carService = {
    query,
    remove,
    save,
    getEmptyCar,
}

function query() {
    return utilService.loadFromStorage(CARS_KEY)
}

function remove(carId) {
    const cars = query()
    const idx = cars.findIndex(car => car.id === carId)
    cars.splice(idx, 1)
    utilService.saveToStorage(CARS_KEY, cars)
}

function save(car) {
    car.id = utilService.makeId()
    const cars = query()
    cars.push(car)
    utilService.saveToStorage(CARS_KEY, cars)
    return car
}

function getEmptyCar() {
    return { id: '', vendor: '', maxSpeed: 0 }
}

function _createCars() {
    let cars = utilService.loadFromStorage(CARS_KEY)
    if (!cars || !cars.length) {
        cars = []
        cars.push(_createCar('Audu Mea', 300))
        cars.push(_createCar('Fiak Ibasa', 120))
        cars.push(_createCar('Subali Pesha', 100))
        cars.push(_createCar('Mitsu Bashi', 150))
        utilService.saveToStorage(CARS_KEY, cars)
    }
    return cars
}

function _createCar(vendor, maxSpeed = 250) {
    const car = {
        id: utilService.makeId(),
        vendor,
        maxSpeed,
    }
    return car
}
