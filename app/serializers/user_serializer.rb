class UserSerializer < ActiveModel::Serializer
  attributes :full_name, :username, :email, :password, :profile_pic, :followers
end
