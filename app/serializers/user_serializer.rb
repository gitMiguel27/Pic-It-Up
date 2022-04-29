class UserSerializer < ActiveModel::Serializer
  attributes :full_name, :username, :email, :password_digest, :profile_pic, :followers
end
