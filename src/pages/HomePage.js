import React, { useState, useEffect } from 'react';
import {
  Container,
  VStack,
} from '@chakra-ui/react';
import PostCard from '../components/PostCard';
import CreatePostBox from '../components/CreatePostBox';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');

      setPosts(res.data);
    } catch (err) {
      console.error('Failed to load posts', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleNewPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <CreatePostBox onPostSubmit={handleNewPost} />
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </VStack>
    </Container>
  );
};

export default HomePage;
