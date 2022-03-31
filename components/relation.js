import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function Relation({ data }) {

    // console.log(data);
    return (
        <div className='px-4 mb-4 flex justify-between bg-white py-4 rounded-full'>
            <div className='flex w-full'>
                <img src="/img/background-login.jpg" className='w-16 h-16 rounded-full hover:opacity-75 cursor-pointer' />
                <div className='px-4 tracking-widest font-semibold'>
                    <div>Dorian CANVILLE</div>
                    <div className='text-md font-normal'>Ami</div>
                </div>
                <PersonRemoveIcon className='my-auto h-fit w-14 text-sm ml-auto bg-gray-100 rounded-full p-4 hover:bg-gray-200 cursor-pointer transition'></PersonRemoveIcon>
            </div>
        </div>
    )
}
