// function Car (model,age) {
//     this.model = model
//     this.age = age
//     this.run = function () {
//         console.log(this.model,'поехала!')
//     }
// }
//
// Car.prototype.run = function () {
//     console.log(this.model,'поехала!')
// }
//
// function Sedan (){
//
//     Car.call(this,arguments)
//     this.doors = doors
// }
// Sedan.prototype = Object.create(Car.prototype)
// Sedan.prototype.constructor = Sedan
//
// const car1 = new Car(model:'Audi', age:2022)
//
//
// const focus = new Sedan(doors:'4','Focus',1990)


//
// class Product {
//
//
//
//     constructor (color,fruits) {
//         this.color = color
//         this.fruits = fruits
//     }
//
//     eat(){
//         console.log(this.color,this.fruits,'был съеден!!!')
//     }
// }
//
// class Vegetable extends Product{
//     constructor(value,color,fruits) {
//         super(color,fruits)
//         this.vegetable = value
//     }
//     eat() {
//         super.eat()
//         console.log('Этот метод из Vegetable')
//     }
// }
// const mandarin = new Product('orange', 'mandarin')
//
// const tomat = new Vegetable(true, 'red', false)
//
// console.log(mandarin)
// console.log(tomat)

const options = [{value:1, label:'Продукты питания'},
    {value:2, label:'Пищевые добавки'},
    {value:3 ,label:'Красота'},
    {value:4, label:'Здоровье'},
    {value:5,label:'Спортивное питание'},
    {value:6,label:'Дом'}]

class DropDown {
    constructor(selector, options) {
        this.$select = document.querySelector(selector);
        this.options = options;
        this.defaultLabel = document.querySelector('.select__label').innerHTML
        this.$label = document.querySelector('.select__label')
        this.$dropDown = document.querySelector('.select__drop-down')
        this.$select.addEventListener('click',(e)=>{
            if (e.target.classList.contains('select__label')) {
                if (this.$select.classList.contains('active')) {
                    this.close()
                } else {
                    this.open()
                }
            } else {
                    if (e.target.tagName.toLowerCase() === 'li'){
                        this.selectedItem(e.target.dataset.id)
                    }
                }
   })
        this.itemsHTML = this.options.map(({value,label}) =>{
           return `<li data-id =${value}>${label}</li>`
        }).join('')
        console.log(this.itemsHTML)

        this.$dropDown.insertAdjacentHTML('afterbegin', this.itemsHTML)
    }

    selectedItem(id) {
        console.log(id)
        this.close()
    }

    open(){
        this.$select.classList.add('active')
    }

    close(){

        this.$select.classList.remove('active')


}


}

const customSelect = new DropDown('.select', options)

console.log(customSelect)
