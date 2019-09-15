# Chat-Space DB設計
## users table
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :posts
- has_many :user_groups
- has_many :groups, through: :groups_users


## posts table
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|img|string| |
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups table
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|user_group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :post
- has_many :user_group
- has_many :user, through: :groups_user

## user_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group