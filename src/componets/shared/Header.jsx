import {
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineChatAlt,
} from "react-icons/hi";
export default function Header() {
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
      </div>
      <div className="flex items-center gap-7 mr-8">
        <HiOutlineChatAlt fontSize={24} />

        <HiOutlineBell fontSize={24} />

        <div
          className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: 'url("/public/img.jpg")',
          }}
        >
          <span className="sr-only">Huraira Baloch</span>
        </div>
      </div>
    </div>
  );
}
