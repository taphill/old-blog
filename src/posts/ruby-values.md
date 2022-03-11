---
title: Humble Ruby Values
layout: layouts/post.njk
displayOrder: 1
permalink: "blog/{{ title | slugify }}/index.html"
post: true
---

# Humble Ruby Values

Each value belongs to a class. Some values like numbers,
booleans, and nil are immutable, but all other values like
strings, arrays, and hashes _are_ mutable. Just like in
JavaScript, we point to these values using wires known as
variables.

## Meeting the Values

### Nil

`nil` is a special value in Ruby that is reserved to indicate
the absence of value.

In JavaScript you both `undefined` and `null` to represent the
absence of a value. Usually, `null` is used for _intentionally_
missing values while `undefined` usually represents a coding
mistake that resulted in `undefined`. In ruby, `nil` is the
special value that is reserved to indicate the absence of value.
`nil` servers the purpose of both `undefined` and `null` in
JavaScript. That to say, it represents both valid missing data
and unintentional missing data. As with everything in Ruby, `nil`
is an object and is an instance of the `NilClass`

```ruby
nil.class  #=> NilClass
```

### True and False

`true` and `false` are our standard boolean values. They allow
us to perform logical operations and are each instances of their
own respective classes.

```ruby
true.class   #=> TrueClass
false.class  #=> FalseClass
```

### Numbers

Numbers are always a little more complex than they appear on the
surface. A quick comparison to JavaScript:

JavaScript has special numbers like `NaN`, `Infinity`, `-Infinity`
and `-0`. They exist becuase sometimes you do things you probably
shouldn't. It's not common you will write code that uses these
special numbers.

```javascript
let scale = 0
let a = 1 / scale // Infinity
let b = 0 / scale // NaN
let c = -a // -Infinity
let d = 1 / c // -0
```

Ruby does not have special numbers. Anytime you divide by
zero and error is thrown

```ruby
1 / 0  #=> divided by 0 (ZeroDivisionError)
0 / 0  #=> divided by 0 (ZeroDivisionError)
```

And anything that would result in `-0` just becomes regular old
`0`

```ruby
-0       #=> 0
-0 == 0  #=> true
0.zero?  #=> true
-0.zero? #=> true
```

All number objects in Ruby are instances of the `Numeric` class.
Integers are intances of `Integer`, and floats are instances of
`Float`. All numeric objects are immutable. There are no methods
that allow you to mutate the value of `1` for example.

But what about this?

```ruby
number = 1
number = 4 * number

number  #=> 4
```

Is that not a mutation?

No, it is not! As we learned earlier a variable is just a wire
that points to a value. What we've done here is simply point our
number wire to a new value.

### Strings

Strings in Ruby behave very differently from strings in
JavaScript. In JavaScript, our mental model says that all
conceivable string values already exists from the beginning of
time. There is one value for every distinct string. Strings get
"summoned" not "created".

In Ruby, the exact opposite is true. The Ruby interpreter cannot
use the same object to represnet two identical string literals.
This is likely very surprising if you're are coming from the
JavaScript universe. Each time ruby encounters a string literal
it creates a new object. We can demonstrate this in an `irb`
session:

```ruby
3.times { puts "hello".object_id }

117080
117100
117120

# These numbers will probably be different for you
# but that is not important
```

All strings are objects of the `String` class which is the
largest class in Ruby with over 75 methods that allow you to
modify strings pretty much any way you could imagine.

### Symbols

Symbols exist in JavaScript, but they are relatively rare.

In Ruby symbols are somthing you will encounter very frequently
so it's important to get aquainted with them. Symbols are similar
to strings, but with one large difference: symbols are immutable.
Unlike the string, a symbol is unique and can be referenced many
times.

### Ranges

### Arrays

### Hashes
