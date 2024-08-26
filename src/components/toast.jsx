import { ToastContainer, toast } from 'react-toastify';

function ToastUtils() {
    return (
        <ToastContainer
            position='bottom-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            draggable
            pauseOnHover
            theme='light'
            className=''
            toastClassName='shadow-md shadow-light_blue/80 rounded-xl border border-light_blue p-4'
            bodyClassName=''
            progressClassName=''
            toastStyle={{ backgroundColor: '#fff' }}
        />
    )
}

export { ToastUtils, toast };