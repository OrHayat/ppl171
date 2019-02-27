class A {
	public show() {
		alert(this.getItems().FOO);
	}

	protected getItems() {
		return {
			FOO: 'A'
		}
	};
}

class B extends A {
	protected getItems() {
		return {
			FOO: 'B'
		}
	}
}

var a = new A();
var b = new B();

a.show(); // alert "A"
b.show(); // alert "B"
