import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';
import { useState } from 'react';

const Header = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error.message);
    } else {
      router.refresh();
    }
  };

  return (
<header className="p-4 bg-gray-100 flex justify-end">
  <button
    onClick={handleLogout}
    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
  >
    Logout
  </button>
</header>

  );
};

export default Header;
