import ErrorPageImg from '../../assets/ErrorPage.jpeg'

const ErrorPage = () => {
    return (
        <div className='flex flex-col p-6 border item-center justify-center h-screen'>
            <img src={ErrorPageImg} className='mx-auto border rounded-2xl' alt="404 Error" />
            <h2 className='mx-auto mt-5 text-5xl'>What are You looking for?</h2>
            <p className='mx-auto mt-5 text-xl'>Return to home</p>
            <button className="mx-auto btn mt-5 btn-primary">Home</button>
        </div>
    );
};

export default ErrorPage;