from fastapi import APIRouter, HTTPException, status
from app.models.models import Post
from typing import List

post_router = APIRouter(
    prefix="/posts",
    tags=["posts"],
    responses={
        404: {"description": "Post not found"},
        400: {"description": "Bad request"},
    },
)

# @router.post("/", 
#     response_model=Post_Pydantic,
#     status_code=status.HTTP_201_CREATED,
#     summary="Create a new post",
#     description="Create a new blog post with the following information:",
#     response_description="The created post"
# )
# async def create_post(post: PostIn_Pydantic):
#     """
#     Create a new blog post with the following information:

#     - **title**: post title
#     - **content**: post content
#     - **author**: ID of the author (user)
#     """
#     post_obj = await Post.create(**post.dict(exclude_unset=True))
#     return await Post_Pydantic.from_tortoise_orm(post_obj)

# @router.get("/", 
#     response_model=List[Post_Pydantic],
#     summary="Get all posts",
#     description="Retrieve a list of all blog posts in the system"
# )
# async def get_posts():
#     """
#     Retrieve all blog posts.
    
#     Returns a list of all posts in the system.
#     """
#     return await Post_Pydantic.from_queryset(Post.all())

# @router.get("/{post_id}", 
#     response_model=Post_Pydantic,
#     summary="Get a specific post",
#     description="Retrieve a specific blog post by its ID",
#     responses={
#         404: {"description": "Post not found"},
#     }
# )
# async def get_post(post_id: int):
#     """
#     Retrieve a specific blog post by its ID.

#     - **post_id**: The ID of the post to retrieve
#     """
#     post = await Post.get_or_none(id=post_id)
#     if not post:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail=f"Post {post_id} not found"
#         )
#     return await Post_Pydantic.from_tortoise_orm(post) 