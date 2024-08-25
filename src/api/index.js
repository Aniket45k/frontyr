import axios from 'axios';

const api = axios.create({
  baseURL: '"http://127.0.0.1:8000"',
})

const protectedApi = axios.create({
  baseURL: '"http://127.0.0.1:8000"',
  timeout: 3 * 60 * 1000,
  headers: {
    common: {
      'Authorization': `JWT ${localStorage.getItem('access')}`,
    }
  }
})

const loginUser = async (data) => await api.post('/auth/jwt/create/', data)
const signUpUser = (step_no) => async (data) => await api.post(step_no === 1 ? '/auth/users/' : '/student/', data)

const getProfile = async () => await protectedApi.get(`/auth/users/me/`)
const editProfile = async (data) => await protectedApi.patch(`/student/${data.username}`, data)
const getPosts = async () => await protectedApi.get('/post/')
const createPost = async (data) => await protectedApi.post('/post/', data)
const likePost = async (body) => await protectedApi.post('/post/like/', body)
const getAllComments = async () => await protectedApi.get('/comment/')
const getPostComments = (pid) => async () => await protectedApi.get(`/post/${pid}/comment/`)
const createPostComment = async (body) => await protectedApi.post('/comment/', body) //{post, content}
const getRecommendations = async () => await protectedApi.get('/student/self/recommendations/')

export {
  createPost, createPostComment, editProfile, getAllComments,
  getPostComments, getPosts, getProfile, getRecommendations, likePost, loginUser,
  signUpUser
};
