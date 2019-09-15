# Chat-Space DB設計
## users table
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
|post_id|integer|null: false, foreign_key: true|
|user_group_id|integer|null: false, foreign_key: true|
### Association
- has_many :post
- has_many :group
- has_many :user_group

## posts table
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|img|integer|foreign_key: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups table
|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|user_group_id|integer|null: false, foreign_key: true|
### Association
- has_many :user
- belongs_to :post
- has_many :user_group

## user_groups table
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group