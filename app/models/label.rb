class Label < ActiveRecord::Base
  belongs_to :label_class
  belongs_to :idea
end
