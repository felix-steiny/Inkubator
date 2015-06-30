class AddSemanticToClassSemantic < ActiveRecord::Migration
  def change
    add_reference :class_semantics, :semantic, index: true, foreign_key: true
  end
end
