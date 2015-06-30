class CreateSemantics < ActiveRecord::Migration
  def change
    create_table :semantics do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
