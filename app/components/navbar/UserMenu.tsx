'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            "
           >
            Tech your way to the top
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cusor-pointer
            hover:shadow-md
            transition
          "
          >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="
          absolute 
          rounded-xl 
          shadow-md
          w-[40vw] 
          md:w-3/4 
          bg-white
          overflow-hidden
          right-0
          top-12 
          text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem 
                onClick={() => {}}
                label="Login"
              />
              <MenuItem 
                onClick={registerModal.onOpen}
                label="Sign Up"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;