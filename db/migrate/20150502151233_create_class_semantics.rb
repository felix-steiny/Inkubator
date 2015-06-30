class CreateClassSemantics < ActiveRecord::Migration
  def change
    create_table :class_semantics do |t|
      t.text :options

      t.timestamps null: false
    end
  end
end
