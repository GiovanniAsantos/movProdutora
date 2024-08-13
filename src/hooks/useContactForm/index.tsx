import axios from 'axios'

type FormData = {
  name: string
  email: string
  whatsapp: string
  subject: string
  message: string
}

export const useContactForm = () => {
  const submitContactForm = async (formData: FormData): Promise<void> => {
    try {
      const response = await axios.post('https://api.example.com/contact', formData)
      if (response.status !== 200) {
        throw new Error('Falha ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      throw error
    }
  }

  return {
    submitContactForm
  }
}
