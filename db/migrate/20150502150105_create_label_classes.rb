class CreateLabelClasses < ActiveRecord::Migration
  def change
    create_table :label_classes do |t|
      t.string :name
      t.string :color

      t.timestamps null: false
    end
  end
end
