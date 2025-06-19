import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios'

const HomePage = () => {

    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await api.get("/notes")
                const data = response.data
                console.log("Fetched notes:", data)
                setNotes(data);
            }
            catch (error) {
                console.log("Error fetching notes:", error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchNotes();
    }, [])

    return (
        <div className='min-h-screen'>
            <Navbar />

            {loading && <div className='text-primary text-center py-10'>Loading Notes...</div>}
            <div className='p-4 '>
                {notes.length === 0 && (
                    <div className='text-3xl font-bold text-secondary text-center'>No Notes Found</div>
                )}
                {notes.length > 0 && (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-yellow-600'>
                        {notes.map((note) => (
                            <NoteCard note={note} setNotes = {setNotes} />
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default HomePage
