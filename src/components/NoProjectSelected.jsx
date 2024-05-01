import noProjectImg from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddingProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImg} alt="An no project selecte" className="w-20 h-20 object-contain mx-auto" />
            <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
            <p className='text-stone-400 mb-4'>Select a project from the sidebar</p>
            <p className='mt-8'>
                <Button onClick={onStartAddingProject}>Create new project</Button>
            </p>
        </div>
    )
}