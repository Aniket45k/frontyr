import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getPosts, createPost, getPostComments } from '../api';
import { toast } from '../components';
import errorParser from '../utils/errorParser';

function useCreatePost(setErrors) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { mutate, isLoading, isSuccess } = useMutation(createPost, {
    onError: (error) => {
      const parsedError = errorParser(error)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        if (error.response.status === 401) {
          toast.error('You are not authorized to perform this action. PLease login.', { autoClose: 5000 })
          navigate('/auth')
        }
        parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        toast.error('Errors while saving data. Please check and try again.', { autoClose: 5000 })
      }
    },
    onSuccess: () => {
      toast.success('Created a Post!', { autoClose: 5000 })
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    }
  })

  return { mutate, isLoading, isSuccess }
}

function useGetPosts() {
  const navigate = useNavigate()
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['posts'], queryFn: getPosts })
  if (isError) {
    const parsedError = errorParser(error)
    if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
    else {
      if (error.response.status === 401) {
        toast.error('You are not authorized to access this page.', { autoClose: 5000 })
        navigate('/auth')
      }
      parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
      toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
    }
  }

  return { isLoading, data }
}

function useGetPostsComments(pid) {
  const navigate = useNavigate()
  const { isLoading, isError, data, error, refetch } = useQuery({ queryKey: ['post', pid, 'comment'], queryFn: getPostComments(pid), enabled: !!pid })
  if (isError) {
    const parsedError = errorParser(error)
    if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
    else {
      if (error.response.status === 401) {
        toast.error('You are not authorized to access this page.', { autoClose: 5000 })
        navigate('/auth')
      }
      parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
      toast.error('Errors while fetching comments. Please check and try again.', { autoClose: 5000 })
    }
  }
  return { isLoading, data, refetch }
}

export {
  useCreatePost,
  useGetPosts,
  useGetPostsComments,
}