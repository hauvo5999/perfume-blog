from tortoise.contrib.fastapi import register_tortoise
from app.core.config import settings

TORTOISE_ORM = {
    "connections": {
        "default": f"postgres://{settings.DB_USER}:{settings.DB_PASSWORD}@{settings.DB_HOST}:{settings.DB_PORT}/{settings.DB_NAME}"
    },
    "apps": {
        "models": {
            "models": ["app.models.models"],
            "default_connection": "default",
        },
    },
}

def init_db(app):
    """
    Initialize database connection and create tables
    """
    register_tortoise(
        app,
        config=TORTOISE_ORM,
        generate_schemas=True,
        add_exception_handlers=True,
    ) 