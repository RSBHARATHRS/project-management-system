import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal'

export default function NewProject({ handleAddProject, handleAddCancel }) {
    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        const project = {
            title: title.current.value,
            description: desc.current.value,
            dueDate: dueDate.current.value,
            id: Math.random()
        }
        if (project.title.trim() === '' || project.description.trim() === '' || project.dueDate.trim() === '') {

            modal.current.open();
            return;
        }
        handleAddProject(project);
    }

    function handleCancel() {
        handleAddCancel();
    }

    return (
        <>
            <Modal ref={modal} buttonLabel={'Close'}>
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
                <p className='text-stone-600 mb-4'>Oops...looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>please make sure you provide a valid value for every input fields.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-stone-600 hover:text-stone-950"
                        onClick={handleCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={desc} label="Description" isTextArea={true} />
                    <Input type="date" ref={dueDate} label="Due date" />
                </div>
            </div>
        </>
    )
}