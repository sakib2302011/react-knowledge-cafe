import myDp from '../../assets/images/myDp.png'
const Header = () => {
  return (
    <div className='flex justify-between items-center py-8 border-b-2 mb-8'>
      <h1 className="text-4xl font-bold" >Knowledge Cafe</h1>
      <img className='w-[60px] h-[60px]' src={myDp} alt="" />
    </div>
  );
};

export default Header;