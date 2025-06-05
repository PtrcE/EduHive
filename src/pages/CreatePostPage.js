import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
} from '@chakra-ui/react';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      author: 'Anonymous',
      createdAt: new Date().toISOString(),
      upvotes: 0,
      comments: 0,
    };

    console.log('Submitting post:', newPost);
    // Add fetch or axios post call here
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
      <Heading size="md" mb={4}>Create a New Post</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input 
              placeholder="Enter post title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Body</FormLabel>
            <Textarea
              placeholder="Enter post content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </FormControl>

          <Button colorScheme="teal" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreatePostPage;
