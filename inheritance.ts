
class Base {
	hero : string = 'Batman';
	// private 는 자손도 안되고 내부에서만 사용
	protected action() {
		console.log('Driving Bat car!');
	}
}

let base1 = new Base;
// console.log(base1.action());  protected 밖에서 호출 못함

class Derived extends Base {
	hero : string = 'Robin';
	action() {
		// super points to public or protected method.
		super.action();
		console.log('Running');
	}
}

let dev1 = new Derived;
console.log(dev1.hero);
console.log(dev1.action());

// https://www.youtube.com/watch?v=0NyTg9iNzGA&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=28