import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import api from '../lib/axios';
import toast from 'react-hot-toast';

const NoteCard = ({ note, setNotes}) => {
    function formatDateToIST(isoDateString) {
        const date = new Date(isoDateString);

        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'Asia/Kolkata'
        });
    }

    const handleDelete = async (e,id) => {
        e.preventDefault();
        try{
            await api.delete(`/notes/${id}`)
            setNotes((prev) => prev.filter((note) => note._id != id))
            toast.success("Note Deleted successfully!")
            
            
        }
        catch(error){
            toast.error("Error in deleting the note")
            console.error("Failed to delete note")
        }
        
    }

    return <Link to={`/note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-primary'>
        <div className='card-body'>
            <h3 className='card-title text-base-content'>{note.title}</h3>
            <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-4'>
                <span className='text-sm text-base-content/60'>{formatDateToIST(note.createdAt)}
                </span>

                <div className='flex items-center gap-2'>
                    <PenSquareIcon className='w-4 h-4 text-yellow-600' />
                    <button onClick={(e) => handleDelete(e,note._id)} className='btn btn-ghost btn-sm text-red-600 hover:bg-red-100'>
                        <Trash2Icon className='w-4 h-4 text-red-600' />
                    </button>
                </div>
            </div>
        </div>
    </Link>
}

export default NoteCard
