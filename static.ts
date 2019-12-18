/* type Hero = {
	name: string,
	age: number
} 


let hero1: Hero = {
	name : 'Superman',
	age : 25
}

let hero2: Hero = {
	name : 'Spiderman',
	age : 22
}
*/

class CalcConstans{

	static PI: number = 3.14;

	static calcCircle(dim:number) {
		return  dim * this.PI;
	}

	calcCircle1(num:number) {
		return CalcConstans.calcCircle(num);
	}
}

let calc1 = new CalcConstans;
// console.log(calc1.PI1);
console.log(CalcConstans.calcCircle(20));
console.log(calc1.calcCircle1(30))
