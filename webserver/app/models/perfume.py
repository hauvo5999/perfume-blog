from tortoise import fields, models


class Category(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=50, unique=True)
    # slug = fields.CharField(max_length=100, unique=True)
    description = fields.TextField(null=True)

    # perfumes = fields.ReverseRelation["Perfume"]

    class Meta:
        table = "category"
    

class Brand(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100, unique=True)
    # slug = fields.CharField(max_length=150, unique=True)
    country = fields.CharField(max_length=50, null=True)
    founding_year = fields.IntField(null=True)
    logo = fields.CharField(max_length=255, null=True)
    description = fields.TextField(null=True)
    
    # perfumes = fields.ReverseRelation["Perfume"]

class Perfume(models.Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=100)
    # slug = fields.CharField(max_length=150, unique=True)
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

    class Meta:
        table = "perfume"
