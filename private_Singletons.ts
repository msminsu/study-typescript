// Singletons    메서드를 한개만 만든



class Single {
	static instance: Single;
	age: number=0;
	public readonly name: string='super woman';
	private constructor(name: string) {

	}

	static getInstance() {
		if(!Single.instance){
			Single.instance = new Single('Woman');
		}
		
		return Single.instance;
	}
}

// let single1 = new Single('catgirl');

// console.log(single1.name);


let singleTwo = Single.getInstance();
let singleOne = Single.getInstance();

console.log(singleOne == singleTwo);