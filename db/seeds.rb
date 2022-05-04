puts '🌱 Seeding Users...'

miguel = User.create(full_name: "Miguel Nazario", username: "duhitz_miguel", email: "mnazario@gmail.com", password: "miggy123", profile_pic: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/46507516_1863997593721734_1455489740018024448_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L9iUhJdltfkAX_moQri&_nc_ht=scontent-lga3-1.xx&oh=00_AT_4LZivYZpu0ok0sgZ8i1DnQL1hOzeYI-uc1E-mlmx0yA&oe=6293B12B", followers: 299)
#  = User.create(full_name: "", username: "", email: "", password_digest: "", profile_pic: "", followers: )
#  = User.create(full_name: "", username: "", email: "", password_digest: "", profile_pic: "", followers: )

puts '🌱 Seeding Challenges...'

astoria_park = Challenge.create(image: "/challenges/AstoriaParkBridge.jpeg", location: "Astoria Park", latitude: 3987, longitude: 2853, hint: "Manhattan looks great from this view.", difficulty: 2)
main_street = Challenge.create(image: "/challenges/MainStreet.jpeg", location: "Main St., Flushing", latitude: 2929, longitude: 4581, hint: "Food, Culture, and Books!", difficulty: 4)
lic_library = Challenge.create(image: "/challenges/LICLibrary.jpeg", location: "Gantry Plaza State Park", latitude: 4425, longitude: 2968, hint: "Might need a restroom break first...", difficulty: 1)
pepsi_cola = Challenge.create(image: "/challenges/PepsiCola.jpeg", location: "Gantry Plaza State Park", latitude: 5055, longitude: 2954, hint: "A refreshing drink for a beautiful day.", difficulty: 5)

puts '🌱 Seeding Done...'
