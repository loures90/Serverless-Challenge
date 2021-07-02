export class Employee {
    constructor(
        private id: string,
        private name: string,
        private age: number,
        private position: string,

    ) { }
    getId() {
        return this.id;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age;
    }
    getPosition() {
        return this.position;
    }
    setId(id: string) {
        this.id = id;
    }
    setName(name: string) {
        this.name = name
    }
    setAge(age: number) {
        this.age = age;
    }
    setPosition(position: string) {
        this.position = position;
    }
}