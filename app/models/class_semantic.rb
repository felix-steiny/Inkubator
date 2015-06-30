class ClassSemantic < ActiveRecord::Base
  belongs_to :semantic
  belongs_to :label_class
end
