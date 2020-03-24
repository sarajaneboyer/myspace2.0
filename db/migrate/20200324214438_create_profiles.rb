class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :username
      t.integer :age
      t.string :gender
      t.string :avatar

      t.timestamps
    end
  end
end
