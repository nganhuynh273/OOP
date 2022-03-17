class Apple {
    constructor(weight, quantity) {
      this.weight = weight;
      this.quantity = quantity;
    }
    getWeight() {
      return this.weight;
    } 
    getQuantity(){
      return this.quantity;
    }
    decrease(){
      this.quantity = this.quantity - 1;   
    }
    increase(){
        this.quantity = this.quantity + 1;
    }
  }
  class Human {
    constructor(name, gender, weight) {
      this.name = name;
      this.gender = gender;
      this.weight = weight;
    }
    getWeight() {
        return this.weight;
    }
    eatApple(weightApple){
      this.weight = this.weight + weightApple;
    }
    getSay(name, content) {
		document.getElementById("say" + name).innerHTML = name + " say: " + content;
	}

  }
  let apple = new Apple(10,20);
  let person1 = new Human("Eva", "Female", 50);
  let person2 = new Human("Adam", "Male", 60);

//   console.log(apple.getWeight());
//   console.log(apple.getQuantity());
//   apple.decrease();
//   console.log(apple.getQuantity());
     console.log(person1.eatApple(10));
     console.log(person1.getWeight());
     