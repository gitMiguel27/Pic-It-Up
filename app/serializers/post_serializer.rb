class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :date
  has_one :user
  has_one :challenge
end
