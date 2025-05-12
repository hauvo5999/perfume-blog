from pydantic_settings import BaseSettings
from pathlib import Path
import os

# Get the base directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent.parent

class Settings(BaseSettings):
    # Database settings
    DB_HOST: str = "localhost"
    DB_PORT: int = 5433
    DB_USER: str = "hauvo"
    DB_PASSWORD: str = "hauvo"
    DB_NAME: str = "perfume"
    
    # Application settings
    APP_NAME: str = "Perfume Blog API"
    DEBUG: bool = True
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "Perfume Blog"
    
    # Security settings
    SECRET_KEY: str = "your-secret-key-here"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    
    class Config:
        env_file = os.path.join(BASE_DIR, ".env")
        case_sensitive = True

settings = Settings()
