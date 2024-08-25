import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { loginUser, signUpUser, getProfile } from '../api';
import { toast } from '../components';
import errorParser from '../utils/errorParser';
import { useNavigate } from 'react-router-dom';

function useLoginUser(setErrors) {
  const navigate = useNavigate()
  const { mutate, isLoading, isSuccess } = useMutation(loginUser, {
    onError: (err) => {
      const parsedError = errorParser(err)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
      }
    },
    onSuccess: (data) => {
      toast.success('Logged in successfully!', { autoClose: 5000 })
      localStorage.setItem('refresh', data?.data?.refresh)
      localStorage.setItem('access', data?.data?.access)
      navigate(-1)
    }
  })

  return { mutate, isLoading, isSuccess }
}

function useSignUpUser(step_no, setErrors) {
  const { mutate, isLoading, isSuccess } = useMutation(signUpUser(step_no), {
    onError: (err) => {
      const parsedError = errorParser(err)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
      }
    }
  })

  return { mutate, isLoading, isSuccess }
}

function useGetProfile() {
  const navigate = useNavigate()
  const { isLoading, isError, data, error } = useQuery({ queryKey: ['profile'], queryFn: getProfile })
  if (isError) {
    const parsedError = errorParser(error)
    if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
    else {
      if (error.response.status === 401) {
        toast.error('You are not authorized to access this page.', { autoClose: 5000 })
        navigate('/auth')
      }
      parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
      toast.error('Errors while fetching profile data. Please check and try again.', { autoClose: 5000 })
    }
  }

  return { isLoading, data }
}

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      return storedValue
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export {
  useLoginUser,
  useSignUpUser,
  useGetProfile,
  useLocalStorageState,
}