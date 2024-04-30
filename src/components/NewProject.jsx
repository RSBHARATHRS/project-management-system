import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ handleAddProject }) {
    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();

    function handleSave() {
        const project = {
            title: title.current.value,
            description: desc.current.value,
            dueDate: dueDate.current.value,
            id: Math.random()
        }
        console.log(project);
        handleAddProject(project);
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-600 hover:text-stone-950">Cancel</button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>Save</button>
                </li>
            </menu>
            <div>
                <Input ref={title} label="Title" />
                <Input ref={desc} label="Description" isTextArea={true} />
                <Input ref={dueDate} label="Due date" />
            </div>
        </div>
    )
}