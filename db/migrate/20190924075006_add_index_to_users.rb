class AddIndexToUsers < ActiveRecord::Migration[5.0]
  def chang
    def change
      add_index :users,  :title
    end
  end
end
