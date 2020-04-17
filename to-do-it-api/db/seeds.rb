# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.create(title: "Buy food: milk, bread, fruits", done: false)
Todo.create(title: "Imagine Dragons tickets", done: false)

Note.create(title: "Today sucked", content: "I spilled milk all over the floor and the dog slipped in it.")
Note.create(title: "Today rocked", content: "I won $1000 and then bought a gallon of milk.")

Grocery.create(title: "Milk", done: false)
Grocery.create(title: "Eggs", done: false)