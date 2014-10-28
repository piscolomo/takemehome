class AddDescriptionToDogs < ActiveRecord::Migration
  def change
    add_column :dogs, :description, :string
  end
end
