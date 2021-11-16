// actual def: a closure is a function along with outer state(lexical scope)
//A closure is a function that having access to the parent scope even after parent function is closed
//lexical scope is the place in which the item got created.

const foo = () => {
    const a = 10;
    const bar = () => {
        console.log(a);
    }

    return bar;
}

const baz = foo();

baz();