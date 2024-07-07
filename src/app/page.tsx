"use client";
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';

export default function Home() {
  const [profileId, setProfileId] = useState<number>('');

  const handleChangeIdInput = (val) => {
    setProfileId(val)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input handleChange={handleChangeIdInput} />
      <Button text="Search" disabled={!profileId} target={`/profile/${profileId}`} />
    </main>
  );
}
