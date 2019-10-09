# Chat-Space DB設計
## users table
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password||null: false|
|name|string|null: false, index: true|
### Association
- has_many :posts
- has_many :user_groups
- has_many :groups, through: :groups_users


## posts table
|Column|Type|Options|
|------|----|-------|
|text|text||
|img|string| |
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belong_to :user
- belong_to :group

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :posts
- has_many :user_groups
- has_many :users, through: :groups_users

## user_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belong_to :user
- belong_to :group