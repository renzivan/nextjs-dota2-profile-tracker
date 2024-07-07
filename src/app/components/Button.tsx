"use client";
import { useRouter } from 'next/navigation';

type Props = { text: string, target: string, disabled: boolean };

export default function Button(props: Props) {
  const router = useRouter();
  const { text = 'default', target, disabled } = props;

  return (
    <button
      className={`rounded p-3 ${disabled ? 'bg-red-100' : 'bg-red-700'}`}
      onClick={() => router.push(target)}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
