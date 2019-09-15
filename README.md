# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

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
- has_many :posts
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
|post_id|integer|null: false, foreign_key: true|
|user_group_id|integer|null: false, foreign_key: true|
### Association
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
=======