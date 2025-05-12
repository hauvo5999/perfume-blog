from fastapi import FastAPI
from app.api.v1 import router as api_v1_router
from app.core.config import settings
from app.core.database import init_db

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="""
    Perfume Blog API - A RESTful API for managing perfume blog content.
    
    ## Features
    * User management
    * Blog post management
    * Authentication (coming soon)
    
    ## Authentication
    Authentication will be implemented in future versions.
    """,
    version="1.0.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
    redoc_url=f"{settings.API_V1_STR}/redoc",
    openapi_tags=[
        {
            "name": "users",
            "description": "Operations with users. The **users** tag allows you to manage users in the system.",
        },
        # {
        #     "name": "posts",
        #     "description": "Operations with blog posts. The **posts** tag allows you to manage blog posts in the system.",
        # },
    ],
)

# Initialize database
init_db(app)

# Include v1 API router
app.include_router(api_v1_router, prefix=settings.API_V1_STR)

@app.get("/", tags=["root"])
async def root():
    """
    Root endpoint that returns a welcome message.
    """
    return {"message": f"Welcome to {settings.PROJECT_NAME}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 