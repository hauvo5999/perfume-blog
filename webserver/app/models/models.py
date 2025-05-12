 # models.py
from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator
from datetime import datetime

class User(models.Model):
    id = fields.IntField(pk=True)
    username = fields.CharField(max_length=50, unique=True)
    email = fields.CharField(max_length=100, unique=True)
    password_hash = fields.CharField(max_length=128)
    is_admin = fields.BooleanField(default=False)
    created_at = fields.DatetimeField(auto_now_add=True)
    avatar = fields.CharField(max_length=255, null=True)
    
    posts = fields.ReverseRelation["Post"]
    comments = fields.ReverseRelation["Comment"]
    likes = fields.ReverseRelation["Like"]

class Category(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=50, unique=True)
    slug = fields.CharField(max_length=100, unique=True)
    description = fields.TextField(null=True)
    
    perfumes = fields.ReverseRelation["Perfume"]

class Brand(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100, unique=True)
    slug = fields.CharField(max_length=150, unique=True)
    country = fields.CharField(max_length=50, null=True)
    founding_year = fields.IntField(null=True)
    logo = fields.CharField(max_length=255, null=True)
    description = fields.TextField(null=True)
    
    perfumes = fields.ReverseRelation["Perfume"]

class Perfume(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    slug = fields.CharField(max_length=150, unique=True)
    brand = fields.ForeignKeyField("models.Brand", related_name="perfumes")
    release_year = fields.IntField(null=True)
    category = fields.ForeignKeyField("models.Category", related_name="perfumes")
    description = fields.TextField()
    main_image = fields.CharField(max_length=255)
    price = fields.DecimalField(max_digits=10, decimal_places=2, null=True)
    concentration = fields.CharField(max_length=50, null=True)  # EDT, EDP, etc.
    
    notes_top = fields.TextField(null=True)
    notes_middle = fields.TextField(null=True)
    notes_base = fields.TextField(null=True)
    
    posts = fields.ReverseRelation["Post"]

class Post(models.Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=200)
    slug = fields.CharField(max_length=250, unique=True)
    content = fields.TextField()
    author = fields.ForeignKeyField("models.User", related_name="posts")
    perfume = fields.ForeignKeyField("models.Perfume", related_name="posts", null=True)
    featured_image = fields.CharField(max_length=255, null=True)
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    published = fields.BooleanField(default=False)
    rating = fields.FloatField(null=True)  # Đánh giá từ 1-10 hoặc 1-5
    
    comments = fields.ReverseRelation["Comment"]
    likes = fields.ReverseRelation["Like"]
    tags = fields.ManyToManyField("models.Tag", related_name="posts", through="post_tag")

class Tag(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=50, unique=True)
    slug = fields.CharField(max_length=100, unique=True)

class Comment(models.Model):
    id = fields.IntField(pk=True)
    content = fields.TextField()
    author = fields.ForeignKeyField("models.User", related_name="comments")
    post = fields.ForeignKeyField("models.Post", related_name="comments")
    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)
    parent = fields.ForeignKeyField("models.Comment", related_name="replies", null=True)

class Like(models.Model):
    id = fields.IntField(pk=True)
    user = fields.ForeignKeyField("models.User", related_name="likes")
    post = fields.ForeignKeyField("models.Post", related_name="likes")
    created_at = fields.DatetimeField(auto_now_add=True)
    
    class Meta:
        unique_together = (("user", "post"),)