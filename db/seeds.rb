puts '🌱 Seeding Users...'

miguel = User.create(full_name: "Miguel Nazario", username: "duhitz_miguel", email: "mnazario@gmail.com", password: "miggy123", profile_pic: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/46507516_1863997593721734_1455489740018024448_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L9iUhJdltfkAX_moQri&_nc_ht=scontent-lga3-1.xx&oh=00_AT_4LZivYZpu0ok0sgZ8i1DnQL1hOzeYI-uc1E-mlmx0yA&oe=6293B12B", followers: 0)
#  = User.create(full_name: "", username: "", email: "", password_digest: "", profile_pic: "", followers: )
#  = User.create(full_name: "", username: "", email: "", password_digest: "", profile_pic: "", followers: )

puts '🌱 Seeding Done...'
