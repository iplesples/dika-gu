import {HomeButton, MenuButton, DashboardButton} from '../UI'

const Navbar = () => {

  const style = "backdrop-blur-sm text-neutral-100 w-auto h-full text-3xl rounded-full p-3 shadow-md shadow-black";
  return (
    <nav className="fixed bottom-8 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-around">          
          <HomeButton className={style} />
          <MenuButton className="backdrop-blur-sm text-neutral-100 w-auto h-full text-5xl rounded-full p-3 shadow-black shadow-md animate-bounce" />       
          <DashboardButton className={style}/>
      </div>
    </nav>
  );
};

export default Navbar;
