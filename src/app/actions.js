'use server'
 
import { redirect } from 'next/navigation'
 
export async function createUser(prevState, formData) {
  const res = await fetch('https://...')
  const json = await res.json()
 
  if (!res.ok) {
    return { message: 'Please enter a valid email' }
  }
 
  redirect('/dashboard')
}