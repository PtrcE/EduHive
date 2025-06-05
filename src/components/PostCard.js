import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  IconButton,
  Icon,
  VStack,
  Divider,
  Tooltip,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const PostCard = ({ title, body, author, createdAt, upvotes, comments }) => {
  const [votes, setVotes] = useState(upvotes || 0);
  const [userVote, setUserVote] = useState(0);

  const handleUpvote = () => {
    if (userVote === 1) {
      setVotes(votes - 1);
      setUserVote(0);
    } else if (userVote === -1) {
      setVotes(votes + 2);
      setUserVote(1);
    } else {
      setVotes(votes + 1);
      setUserVote(1);
    }
  };

  const handleDownvote = () => {
    if (userVote === -1) {
      setVotes(votes + 1);
      setUserVote(0);
    } else if (userVote === 1) {
      setVotes(votes - 2);
      setUserVote(-1);
    } else {
      setVotes(votes - 1);
      setUserVote(-1);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={5}
      bg="white"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
    >
      <VStack align="start" spacing={2}>
        <Heading size="md" color="#0B4B88">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          Posted by {author} • {new Date(createdAt).toLocaleString()}
        </Text>
        <Divider />
        <Text>{body}</Text>
      </VStack>

      <HStack spacing={4} mt={4} align="center">
        <HStack spacing={1}>
          <Tooltip label="Upvote" hasArrow>
            <IconButton
              icon={<Icon as={FaThumbsUp} />}
              aria-label="Thumbs Up"
              onClick={handleUpvote}
              variant={userVote === 1 ? 'solid' : 'ghost'}
              colorScheme="green"
              size="sm"
            />
          </Tooltip>
          <Text>{votes}</Text>
        </HStack>

        <HStack spacing={1}>
          <Tooltip label="Downvote" hasArrow>
            <IconButton
              icon={<Icon as={FaThumbsDown} />}
              aria-label="Thumbs Down"
              onClick={handleDownvote}
              variant={userVote === -1 ? 'solid' : 'ghost'}
              colorScheme="red"
              size="sm"
            />
          </Tooltip>
        </HStack>

        <HStack spacing={1}>
          <Tooltip label="Comments" hasArrow>
            <IconButton
              icon={<ChatIcon />}
              aria-label="Comments"
              variant="ghost"
              size="sm"
            />
          </Tooltip>
          <Text>{comments || 0}</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default PostCard;
