class AddLabelClassToClassSemantic < ActiveRecord::Migration
  def change
    add_reference :class_semantics, :label_class, index: true, foreign_key: true
  end
end
