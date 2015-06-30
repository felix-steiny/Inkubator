class AddLabelClassToLabel < ActiveRecord::Migration
  def change
    add_reference :labels, :label_class, index: true, foreign_key: true
  end
end
