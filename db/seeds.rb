# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do 
  username= Faker::Internet.username
  age= Faker::Number.between(from: 18, to: 60)
  gender= Faker::Gender.binary_type
  avatar=Faker::Avatar.image(slug: username, size: '100x300', format: 'png', set: 'set')
  description=Faker::Lorem.sentences

  Profile.create(username: username, age: age, gender: gender, avatar: avatar, description: description,)
end 

puts "50 profiles seeded"