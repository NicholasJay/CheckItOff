class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.string :tasks
      t.boolean :is_checked
      t.timestamps
    end
  end
end
