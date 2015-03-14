class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.text :html
      t.text :plaintext

      t.timestamps null: false
    end
  end
end
