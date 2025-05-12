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
    
    # posts = fields.ReverseRelation["Post"]
    # comments = fields.ReverseRelation["Comment"]
    # likes = fields.ReverseRelation["Like"]
