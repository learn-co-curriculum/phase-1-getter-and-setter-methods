# Building Cells: Getter and Setter Methods

## Learning Goals

- Builds getter and setter method to calculate computed properties

## Introduction

We've seen so far that we can write methods inside our `class`es
that allow us to access and change instance variables:

```js
speak() {
return `${this.name} says 'woof!'`
}

haveBirthday() {
this.age += 1
}
```

These types of methods work just fine in most cases. There is,
however, additional JS syntax that we can use: `get` and `set`. `get` is
used to identify methods that return calculated or dynamic data based an
object's attributes. `set` is used for methods where we want to change an
attribute in a controlled way. In this lab, we will be building on the
concept of _instance variables_ to illustrate these methods.


## Builds Getter and Setter Method to Calculate Computed Properties

Let's look at an example that may be familiar:

```js
class Bird {
  constructor(name) {
    this.name = name;
  }

  set phrase() {
    this.phrase = phrase;
  }

  get speak() {
    return `${this.name} says ${this.phrase || 'squawk'}`
  }
}
```
Our `class` of `Bird` accepts the parameter of `name`, which is set each time a new
instance of `Bird` is created. When `phrase` is set, our new `Bird` instance
can speak a phrase. If it is not set, it will squawk.

```js
var buddy = Bird.new("Buddy")

buddy.phrase = "What'cha doin'?";
buddy.speak() // returns 'Buddy says What'cha doin'?'
```

Building on this concept, we're going to build our own shape calculator!
- First, let's create a `class` of `Circle`
- `Circle` will accept 1 parameter of `radius` as instance data stored to `this.radius`
- Define a `constant` for `pi` as `3.14`
- Define `get` methods for `diameter`, `circumference`, and `area` which
will calculate each value from `this.radius`
- Define `set` methods for `diameter`, `circumference`, and `area` which
will do the math in reverse and _set_ `this.radius` for the instance.
- Given the `radius`, calculate the following in each corresponding method:
  - `diameter`: `this.radius` x 2
  - `circumference`: `pi` x 2 x `this.radius`
  - `area`: `pi` x `this.radius`². Don't forget about [PEMDAS](https://en.wikipedia.org/wiki/Order_of_operations)!

  All instances of `Circle` should be able to calculate the `diameter`,
  `circumference`, and `area` based on the given `radius`, or can have `this.radius`
  set by passing in `diameter`, `circumference`, or `area`.

## Conclusion

Getter and setter methods are very useful for doing things behind-the-scenes
in JavaScript. Using a setter, you can call a function each time the value
of a property is changed, and using a getter, you can return the computed
value of a property--That’s it! Just as you can set and retrieve basic
information such as `firstName` and `lastName`, you can also perform a
number of functions that will "automagically" spit out output.

## Resources

* [Property getters and setters](https://javascript.info/property-accessors)
