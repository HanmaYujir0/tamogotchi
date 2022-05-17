const tamogotchi = {
    name: 'Djabrail',
    meal: 1,
    energy: 2,
    mood: 4,
    getStasus() {
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            return `${this.name} умер :( Пусть земля ему будет пухом`
        }
        const eatMood = this.meal < 3 ? 'Еда: Я голоден' : 'Еда: Я не голоден';
        const energyMeal = this.energy < 3 ? 'Энергия: Я хочу спать' : 'Еда: Я не хочу спать';
        const moodEnergy = this.mood < 3 ? 'Настроение: Мне скучно ' : 'Настроение: Мне весело';
            return `Имя: ${this.name}, ${eatMood} (${this.meal}), ${energyMeal} (${this.energy}), ${moodEnergy} (${this.mood}).`
    },
    setName (names) {
        this.name === names
    },
    eat() {
        if(this.meal < 5) {
        this.meal += 1;
        this.mood -= 1;
    } else if (this.meal === 5 && this.mood !== 0) {
        this.mood -= 1;
    }
    },
    sleep() {
        if (this.energy < 5) {
        this.energy += 1;
        this.meal -= 1;
        } else if (this.energy === 5 && this.meal !== 0) {
            this.meal -= 1;
        }
    },
    Play() {
        if (this.mood < 5) {
        this.mood += 1;
        this.energy -= 1;
        } else if (this.mood === 5 && this.energy !== 0) {
            this.energy -= 1;
        }
    }
  }
  tamogotchi.eat()
  tamogotchi.eat()
  tamogotchi.eat()
  tamogotchi.eat()

console.log(tamogotchi.getStasus())