import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from '../lib/axios'

const CreatePage = () => {

    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const  handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            toast.error("Title and content are required");
            return;
        }
        setLoading(true);
        try{
            await api.post("/notes", {
                title: title,
                content: content
            });

            toast.success("Note created successfully");
            navigate("/");

        }
        catch(error){
            toast.error("Error creating note: " + error.message);
            console.error("Error creating note:", error);
        }
        finally{
            setLoading(false);
        }

    }
    return (
        <div className='min-h-screen bg-base-100'>
            <div className='container mx-auto p-4'>
                <div className='max-w-2xl mx-auto bg-base-200 p-6 rounded-lg shadow-lg'>
                    <h1 className='text-2xl font-bold mb-4'>Create a New Note</h1>
                    <form onSubmit={handleSubmit} >  
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2' htmlFor='title'>Title</label>
                            <input type='text' id='title' value = {title} onChange={(e) => setTitle(e.target.value)} className='input input-bordered w-full' placeholder='Enter note title' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-sm font-medium mb-2' htmlFor='content'>Content</label>
                            <textarea id='content' value={content} onChange={(e) => setContent(e.target.value)} className='textarea textarea-bordered w-full h-40' placeholder='Enter note content'></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary w-full'>Create Note</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default CreatePage
