class AddColourToIdeas < ActiveRecord::Migration[5.1]
  def change
    add_column :ideas, :colour, :string
  end
end
