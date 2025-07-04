from fastapi import APIRouter
from .users import router as users_router
# from .posts import post_router

# Create a router for v1
router = APIRouter()

# Include all routers from v1
router.include_router(users_router)
# router.include_router(posts_router) 