class LabelClass < ActiveRecord::Base
  has_many :class_semantics
  has_many :labels
end
