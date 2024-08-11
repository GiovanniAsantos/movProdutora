import { api } from '@/services/serverApi'
import { IResponseComments } from '@/services/serverApi/home/home.type'

export async function getClientFeedbacks(): Promise<IResponseComments> {
  const response = await api.get('/comments', {
    params: { limit: 10 }
  })

  return { data: { ...response?.data } }
}
