class AddLabelToIdea < ActiveRecord::Migration
  def change
    add_reference :labels, :idea, index: true, foreign_key: true
  end
end
