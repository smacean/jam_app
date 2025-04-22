import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase'; // 必要に応じて適宜変更

export default function CustomAuth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 指定したパスワードを設定
  const validPassword = 'imokenpi'; // カスタムパスワード

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // パスワードが一致するか確認
    if (password !== validPassword) {
      setError('パスワードが正しくありません');
      return;
    }

    // サインイン
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push('/'); // ログイン後のリダイレクト先
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">ログイン</h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          ログイン
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}
