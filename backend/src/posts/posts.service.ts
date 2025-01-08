import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [];

  getAllPosts() {
    return this.posts;
  }

  createPost(postData: any, user: any) {
    const post = { ...postData, author: user.email };
    this.posts.push(post);
    return post;
  }
}
