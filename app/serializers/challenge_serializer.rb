class ChallengeSerializer < ActiveModel::Serializer
  attributes :image, :location, :latitude, :longitude, :hint, :difficulty
end
