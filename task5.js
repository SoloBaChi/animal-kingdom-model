class Animalia{
	constructor(){
    if(this.constructor === "Animalia"){
    throw new Error("Animalia can be instantited or called");
    }
	}
	sayClassification(){
	throw Error("This kingdom cannot be implemented")
	}
	}
	class WithBackBone extends Animalia{
    constructor(classification){
    super()
    this.classification =  classification;
    }
    sayClassification(){
    return "Your classification is " + this.classification;
    }
	}
	class WithOutBackBone extends Animalia{
    constructor(classification){
    super()
    this.classification =  classification;
    }
    sayClassification(){
    return "Your classification is " + this.classification;
    }
	}

	const animal = new Animalia()