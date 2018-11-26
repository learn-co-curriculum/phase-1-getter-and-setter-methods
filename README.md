# Building Cells: Getter and Setter Methods

## Learning Goals

- Builds a setter method to calculate computed properties

## Introduction

Often in programming, you want to work with dynamic data. Just like
in Ruby, you can _get_ and _set_ the values of variables. You can
define a setter method execute when a specified property is being
changed and have a getter method that returns a
dynamically computed value, or reflects the status of an internal
variable. There are a couple of ways to do this, so we will be
building on the concept of _instance variables_ to illustrate this
concept.


## Builds a Setter Method to Calculate Computed Properties

Let's look at an example that may be familiar:

```js
class Dog {
  constructor(name, sex) {
    this.name = name;
  }

  speak() {
    return `${this.name} says woof!`
  }
}
```
Our class of `Dog` accepts 2 parameters, which are set each time a new
instance of `Dog` is created.

```js
var buddy = Dog.new("Buddy", "male")

buddy.speak() // returns 'Buddy says woof!'
```

Building on this concept, we're going to build our own shape calculator!
- Create a class of `Circle`
- `Circle` will accept 1 parameter with a setter method of `radius`
- Define methods for `diameter`, `circumference`, and `area`.
- Define a constant for `pi`
- Given the `radius`, calculate the following in each corresponding method:
  - `diameter`: `radius` x 2
  - `circumference`: `pi` x 2 x `radius`
  - `area`: `pi` x `radius`². Don't forget about [PEMDAS](https://en.wikipedia.org/wiki/Order_of_operations)!

  All instances of `Circle` should be able to calculate the `diameter`,
  `circumference`, and `area` based on the given `radius`.

## Conclusion

Getter and setter methods are very useful for doing things behind-the-scenes
in JavaScript. Using a setter, you can call a function each time the value
of a property is changed, and using a getter, you can return the computed
value of a property--That’s it! Just as you can set and retrieve basic
information such as `firstName` and `lastName`, you can also perform a
number of functions that will "automagically" spit out output.

## Resources

* [Property getters and setters](https://javascript.info/property-accessors)
