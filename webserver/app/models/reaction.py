 # models.py
from tortoise import fields, models

# class Post(models.Model):
#     id = fields.IntField(pk=True)
#     title = fields.CharField(max_length=200)
#     content = fields.TextField()
#     author = fields.ForeignKeyField("models.User", related_name="posts")
#     perfume = fields.ForeignKeyField("models.Perfume", related_name="posts", null=True)
#     featured_image = fields.CharField(max_length=255, null=True)
#     created_at = fields.DatetimeField(auto_now_add=True)
#     updated_at = fields.DatetimeField(auto_now=True)
#     published = fields.BooleanField(default=False)
    
#     # SEO purpose
#     slug = fields.CharField(max_length=250, unique=True)
    
#     # Reaction fields
#     rating = fields.FloatField(null=True)  # Đánh giá từ 1-10 hoặc 1-5
#     comments = fields.ReverseRelation["Comment"]
#     likes = fields.ReverseRelation["Like"]
#     tags = fields.ManyToManyField("models.Tag", related_name="posts", through="post_tag")

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