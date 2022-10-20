import './App.css';

function App() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className='h-60 md:h-full md:w-[700px] bg-blue-800 static'>
        <div className='absolute left-[380px]'>
          <img 
            alt='illustration-abstract'
            src='https://myarchery.id/static/media/auth-illustration-abstract-top.79b59cc9.png'
            className='opacity-0 md:opacity-100'
          />  
        </div>
        <div className='px-10 md:px-20'>
          <div className='flex justify-center items-center md:flex-none md:justify-start'>
            <img 
              alt='logo'
              src='data:image/png;base64,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' 
              className='mb-1 md:mb-24 mt-5 md:mt-10 w-24 md:w-44'
            />
          </div>
          <h1 className='text-center md:text-left text-3xl md:text-7xl font-bold text-yellow-500 italic tracking-widest'>MYARCHERY</h1>
          <h1 className='text-center md:text-left md:text-[22px] text-white mt-4'>Buat akun Anda sekarang. Temukan dan ikuti berbagai macam event panahan di MyArchery.</h1>
          <hr className='md:mt-10 w-[300px] md:w-[500px] md:border-2 opacity-0 md:opacity-100'></hr>
          <hr className='mt-2 md:mt-5 w-[200px] md:border-2 opacity-0 md:opacity-100'></hr>
        </div>
        <div className='relative md:mt-[430px]'>
          <img 
            alt='illustration-abstract'
            src='https://myarchery.id/static/media/auth-illustration-abstract-bottom.d57b8fa3.png'
            className='absolute bottom-0 left-0 opacity-20 md:opacity-100'
          />
        </div>
        <div className='relative md:mt-[430px]'>
          <img
            alt='auth-illustration-people'
            src='https://myarchery.id/static/media/auth-illustration-people.904e0e99.svg'
            className='absolute bottom-0 md:left-[125px] h-[300px] opacity-10 md:opacity-100'
            />
        </div>
      </div>
      
      <div className='px-2 md:px-40 pt-14 pb-10 max-w-2xl'>
        <h1 className='text-blue-800 font-bold text-3xl'>Buat Akun MyArchery</h1>
        <h1 className='text-xl mt-5'>Satu akun untuk daftar berbagai event</h1>

        <h1 className='text-sm mt-10 mb-2'>Nama Peserta</h1>
        <input type="text" className='input' placeholder='Masukan Nama Lengkap, contoh: Mahfuzon Akhiar'></input>
        <h1 className='text-[12px] mt-2 text-gray-600'>Masukkan nama peserta jika Anda mewakili peserta, atau masukkan nama Anda jika tidak mewakili siapa pun</h1>
        
        <h1 className='text'>Tanggal Lahir</h1>
        <input type="date" className='input'></input>
        <h1 className='text-[12px] mt-2 text-gray-600'>Masukkan tanggal lahir dari nama yang didaftarkan pada kolom Nama Peserta</h1>

        <h1 className='text'>Jenis Kelamin</h1>
        <div className='w-[380px] flex flex-row'>
          <input type="radio" className='mr-3 w-6'></input>
          <h1>Pria</h1>
          <input type="radio" className='mr-3 w-6 ml-6'></input>
          <h1>Wanita</h1>
        </div>

        <h1 className='text'>Email</h1>
        <input type="text" className='input' placeholder='Masukan Email'></input>

        <h1 className='text'>Kata Sandi</h1>
        <input type="text" className='input' placeholder='Masukan Kata Sandi'></input>

        <h1 className='text'>Konfirmasi Kata Sandi</h1>
        <input type="text" className='input' placeholder='Masukan Konfirmasi Kata Sandi'></input>
        <br></br>
        
        <button className='w-[370px] text-base bg-blue-800 py-2 text-white rounded-md mt-5'>Daftar</button>
        <div className='w-[380px]'>
          <h1 className='mt-10 text-center text-sm'>Sudah Punya Akun? <span className='text-blue-800'> Masuk Disini </span></h1>
        </div>
      </div>
    </section>
  );
}

export default App;
